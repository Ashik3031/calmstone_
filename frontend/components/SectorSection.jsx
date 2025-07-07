'use client';

import { sections } from '../src/lib/sections';   
import HoverPanel from './HoverPanel';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function SectorsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Mobile Layout
  if (isMobile) {
    return (
      <section className="w-full">
        <div className="space-y-0">
          {sections.map((section, index) => (
            <div 
              key={section.title} 
              className="relative h-32 border-b border-gray-700 last:border-b-0 overflow-hidden"
              style={{
                height: expandedIndex === index ? 'auto' : '8rem',
                minHeight: '8rem',
              }}
            >
              <HoverPanel
                {...section}
                isExpanded={expandedIndex === index}
                onToggle={() => handleToggle(index)}
              />
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Desktop Layout (your existing design)
  return (
    <section className="group flex h-[80vh] overflow-hidden">
      {sections.map((section, index) => (
        <motion.div 
          key={section.title} 
          className="panel h-full relative"
          animate={{
            width: hoveredIndex === index ? '50%' : hoveredIndex !== null ? '16.67%' : '25%',
          }}
          transition={{ type: 'spring', stiffness: 120, damping: 30 }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <HoverPanel {...section} />
        </motion.div>
      ))}
    </section>
  );
}