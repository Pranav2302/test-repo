import React, { useRef, useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";

export default function WorldMap({ 
  dots = [], 
  lineColor = "#0066cc", 
  forceDarkMode = false 
}) {
  const svgRef = useRef(null);
  // Calculate map data only once
  const mapData = useMemo(() => {
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    const theme = forceDarkMode ? "dark" : "light";
    
    return {
      svgMap: map.getSVG({
        radius: 0.22,
        color: theme === "dark" ? "#FFFFFF40" : "#00000040",
        shape: "circle",
        backgroundColor: theme === "dark" ? "black" : "white",
      }),
      theme
    };
  }, [forceDarkMode]);
  
  // Limit number of active animations to prevent performance issues
  const [activeAnimations, setActiveAnimations] = useState([]);
  
  useEffect(() => {
    // Stagger animations to avoid having too many running at once
    const maxSimultaneousAnimations = 3;
    let animationQueue = [...dots.map((_, i) => i)];
    
    // Start with a few animations
    setActiveAnimations(animationQueue.slice(0, maxSimultaneousAnimations));
    
    // Rotate animations
    const interval = setInterval(() => {
      setActiveAnimations(prev => {
        const newActive = [...prev];
        // Remove oldest animation
        if (newActive.length >= maxSimultaneousAnimations) {
          newActive.shift();
        }
        // Add next animation if available
        if (animationQueue.length) {
          const nextAnimation = animationQueue.shift();
          animationQueue.push(nextAnimation); // Cycle back to queue
          newActive.push(nextAnimation);
        }
        return newActive.slice(0, maxSimultaneousAnimations);
      });
    }, 1500); // Rotate animations every 1.5 seconds
    
    return () => clearInterval(interval);
  }, [dots.length]);

  // Project lat/lng to x/y coordinates - memoized for performance
  const projectPoint = useMemo(() => (lat, lng) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  }, []);

  // Create curved path between two points - memoized for performance
  const createCurvedPath = useMemo(() => (start, end) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  }, []);

  // Memoize points to avoid recalculations
  const points = useMemo(() => 
    dots.map(dot => ({
      start: projectPoint(dot.start.lat, dot.start.lng),
      end: projectPoint(dot.end.lat, dot.end.lng)
    })),
  [dots, projectPoint]);

  return (
    <div className={`w-full aspect-[2/1] ${mapData.theme === "dark" ? "bg-black" : "bg-white"} rounded-lg relative font-sans overflow-hidden`}>
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(mapData.svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        draggable={false}
      />
      
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={mapData.theme === "dark" ? "white" : "black"} stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor={mapData.theme === "dark" ? "white" : "black"} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Only render paths for active animations to improve performance */}
        {dots.map((_, i) => {
          const isActive = activeAnimations.includes(i);
          if (!isActive) return null;
          
          const path = createCurvedPath(points[i].start, points[i].end);
          
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={path}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                  repeat: 1,
                  repeatType: "reverse",
                }}
              />
              
              <motion.path
                d={path}
                fill="none"
                stroke={lineColor}
                strokeWidth="2"
                strokeOpacity="0.3"
                initial={{ pathLength: 0, pathOffset: 0.05 }}
                animate={{ pathLength: 0.2, pathOffset: 1 }}
                transition={{
                  duration: 1.5,
                  ease: "linear",
                  repeat: 1,
                  repeatType: "reverse",
                }}
              />
            </g>
          );
        })}
        
        {/* Always render static points */}
        {dots.map((_, i) => (
          <g key={`points-group-${i}`}>
            <circle
              cx={points[i].start.x}
              cy={points[i].start.y}
              r="2"
              fill={lineColor}
            />
            <circle
              cx={points[i].end.x}
              cy={points[i].end.y}
              r="2"
              fill={lineColor}
            />
            {/* Use CSS animations instead of SVG animations for better performance */}
            <circle
              className="pulse-animation"
              cx={points[i].start.x}
              cy={points[i].start.y}
              r="4"
              fill={lineColor}
              opacity="0.5"
            />
            <circle
              className="pulse-animation"
              cx={points[i].end.x}
              cy={points[i].end.y}
              r="4"
              fill={lineColor}
              opacity="0.5"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}