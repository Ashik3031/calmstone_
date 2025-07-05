'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

export default function HoverPanel({ title, body, img, href }) {
  return (
    <MotionLink
      href={href}
      className="relative flex h-full w-full overflow-hidden group"
      whileHover="show"
      initial="hide"
    >
      <Image
        src={img}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#042783]/80 to-[#042783]/30" />

      <motion.div
        variants={{
          hide: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0 },
        }}
        className="relative z-10 p-8 w-full h-full flex flex-col justify-start pointer-events-none mt-10"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">{title}</h2>
        <p className=" mt-6 max-w-sm leading-relaxed text-white">{body}</p>
        <span className="mt-6 inline-block w-fit border border-white px-4 py-2 text-white hover:bg-white hover:text-[#042783] transition-colors pointer-events-auto">
          Learn More
        </span>
      </motion.div>
    </MotionLink>
  );
}