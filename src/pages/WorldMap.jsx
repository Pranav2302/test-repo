import React from "react"
import WorldMap from "../components/ui/worldmap"
import { motion } from "framer-motion"

export default function WorldMapDemo() {
  return (
    <div className="bg-white w-full py-20">
      <div className="max-w-7xl mx-auto text-center px-6">
        <p className="font-display text-xl md:text-4xl font-bold text-spice-dark">
          Global{" "}
          <span className="text-spice-primary">
            {"Distribution".split("").map((letter, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="font-body text-sm md:text-lg text-spice-text max-w-2xl mx-auto py-4">
          We export premium Indian commodities to over 30 countries worldwide. Our robust supply chain ensures timely delivery to all corners of the globe.
        </p>
      </div>
      <WorldMap 
        forceDarkMode={false}
        lineColor="#0066cc" 
        dots={[
          {
            start: { lat: 20.5937, lng: 78.9629 }, // India
            end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
          },
          {
            start: { lat: 20.5937, lng: 78.9629 }, // India
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil
          },
          {
            start: { lat: 20.5937, lng: 78.9629 }, // India
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 20.5937, lng: 78.9629 }, // India
            end: { lat: 51.5074, lng: -0.1278 }, // London
          },
          {
            start: { lat: 20.5937, lng: 78.9629 }, // India
            end: { lat: 35.6762, lng: 139.6503 }, // Tokyo
          },
          {
            start: { lat: 20.5937, lng: 78.9629 }, // India
            end: { lat: -33.8688, lng: 151.2093 }, // Sydney
          },
          {
            start: { lat: 20.5937, lng: 78.9629 }, // India
            end: { lat: 25.2048, lng: 55.2708 }, // Dubai
          },
          {
            start: { lat: 20.5937, lng: 78.9629 }, // India
            end: { lat: 1.3521, lng: 103.8198 }, // Singapore
          },
        ]}
      />
    </div>
  )
}