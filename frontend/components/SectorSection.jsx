'use client';

import { sections } from '../src/lib/sections';   
import HoverPanel from './HoverPanel';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SectorsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  return (
    <section className="group flex h-[60vh] overflow-hidden">
      {sections.map((s, index) => (
        <motion.div 
          key={s.title} 
          className="panel h-full relative"
          animate={{
            width: hoveredIndex === index ? '50%' : hoveredIndex !== null ? '16.67%' : '25%',
          }}
        //   transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        //   style={{ transformOrigin: 'center' }}
        >
          <HoverPanel {...s} />
        </motion.div>
      ))}
    </section>
  );
}