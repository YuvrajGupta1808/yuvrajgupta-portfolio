'use client';

import Link from 'next/link';

import { thumbnailOptions } from '@/data';

/**
 * @param {Object} props
 * @param {(index: number) => void} props.handlePointerEnter
 * @param {(index: number) => void} props.handlePointerLeave
 * @param {(x: number, y: number) => void} props.moveItems
 */
export function ThumbnailList({
  handlePointerEnter,
  handlePointerLeave,
  moveItems,
}) {
  const items = thumbnailOptions.map(({ href, title, topics, time }, index) => {
    const id = index;
    return (
      <li
        key={`thumbnail-list-${id}`}
        className='border-t border-solid transition-all last-of-type:border-b group-hover:opacity-90'
        style={{
          paddingInline: 'calc(clamp(1em,3vw,4em) * 1)',
          paddingBlock: 'clamp(1em,3vw,3em)',
        }}
        onPointerEnter={({ clientX, clientY }) => {
          handlePointerEnter(id);
          moveItems(clientX, clientY);
        }}
        onPointerLeave={({ clientX, clientY }) => {
          handlePointerLeave(id);
          moveItems(clientX, clientY);
        }}
      >
        <Link
          href={href}
          className='flex items-center justify-between max-lg:flex-wrap'
          passHref
        >
          <h4
            style={{
              fontSize: 'calc(clamp(3.25em, 7vw, 8em) * 0.3)',
            }}
          >
            {title}
          </h4>
          <p className='text-lg font-medium'>
            <span className='block'>{topics}</span>
            <span className='block'>{time}</span>
          </p>
        </Link>
      </li>
    );
  });

  return <ul className='group'>{items}</ul>;
}
