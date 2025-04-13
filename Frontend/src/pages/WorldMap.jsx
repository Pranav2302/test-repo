import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";

// Lazy load the heavy WorldMap component
const WorldMap = lazy(() => import("../components/ui/worldmap"));

export default function WorldMapDemo() {
  return (
    <div className="bg-white w-full py-20">
      <div className="max-w-7xl mx-auto text-center px-6">
        <p className="font-display text-xl md:text-4xl font-bold text-spice-dark">
          Global{" "}
          <span className="text-spice-primary">Distribution</span>
        </p>
        <p className="font-body text-sm md:text-lg text-spice-text max-w-2xl mx-auto py-4">
          We export premium Indian commodities to over 30 countries worldwide. Our robust supply chain ensures timely delivery to all corners of the globe.
        </p>
      </div>
      <Suspense fallback={
        <div className="aspect-[2/1] w-full max-w-7xl mx-auto bg-gray-100 animate-pulse rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Loading world map...</p>
        </div>
      }>
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
      </Suspense>
    </div>
  );
}