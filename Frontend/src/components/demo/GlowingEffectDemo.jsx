import React from 'react';
import { GlowingEffect } from './ui/glowing-effect'; // Adjust the import path as necessary

const items = [
  {
    id: 1,
    title: 'Item 1',
    description: 'Description for item 1',
    imageUrl: 'https://via.placeholder.com/150', // Placeholder image
  },
  {
    id: 2,
    title: 'Item 2',
    description: 'Description for item 2',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Item 3',
    description: 'Description for item 3',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    title: 'Item 4',
    description: 'Description for item 4',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

const GlowingGrid = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-center font-display text-3xl font-bold text-spice-primary mb-8">
        Glowing Items
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item) => (
          <div key={item.id} className="relative group">
            <GlowingEffect
              variant="default"
              blur={10}
              inactiveZone={0.5}
              proximity={50}
              spread={15}
              glow={true}
              movementDuration={1}
              borderWidth={1}
            />
            <div className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-glossy-hover transition-all relative z-10">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-spice-primary mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-spice-text mb-4">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlowingGrid;