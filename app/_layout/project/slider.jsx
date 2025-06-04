'use client';

import { Center } from '@/components';
import Image from 'next/image'; // ← for images

/**
 * @param {Object} props
 * @param {'image' | 'video'} props.type
 * @param {string | StaticImageData} props.source
 */
export function ProjectSlider({ type, source }) {
  // If it’s an image, render Next.js <Image> using the “source” prop.
  const image = 
    type === 'image' ? (
      <Image
        src={source}
        alt="project item"
        className="absolute inset-0 h-full w-full object-cover"
        fill={true}
      />
    ) : null;

  // Render a <video> when type === 'video'
  const video = 
    type === 'video' ? (
      <video
        src={source}
        loop
        muted
        autoPlay
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
    ) : null;

  return (
    <Center
      className="relative w-1/4 rounded"
      style={{
        minWidth: '150px',
        height: '20vw', // adjusts “slider card” height relative to viewport width
      }}
    >
      {image}
      {video}
    </Center>
  );
}