'use client';

import { MagneticButton } from '@/components';
import { useFollowPointer } from '@/hooks';
import { useRef } from 'react';

import {
  ThumbnailAction,
  ThumbnailCursorCircle,
  ThumbnailCursorLabel,
  ThumbnailList,
  ThumbnailModal
} from './components';
import { scaleUp } from './variants';

export function Thumbnail() {
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const modal = useRef(null);
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const cursor = useRef(null);
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const label = useRef(null);

  const {
    item: { active, index },
    handlePointerEnter,
    handlePointerLeave,
    moveItems,
  } = useFollowPointer({
    modal,
    cursor,
    label,
  });

  return (
    <section
      className='container relative'
      onPointerMove={({ clientX, clientY }) => moveItems(clientX, clientY)}
    >
      <div className='flex flex-col gap-10'>
        <div className="flex justify-start">
              <MagneticButton variant="ghost" size="lg">
                Recent work
              </MagneticButton>
          </div>
                  
          <ThumbnailList
          handlePointerEnter={handlePointerEnter}
          handlePointerLeave={handlePointerLeave}
          moveItems={moveItems}
        />
        <ThumbnailModal
          ref={modal}
          variants={scaleUp}
          active={active}
          index={index}
        />
        <ThumbnailCursorCircle
          ref={cursor}
          variants={scaleUp}
          active={active}
        />
        <ThumbnailCursorLabel ref={label} variants={scaleUp} active={active}>
          View
        </ThumbnailCursorLabel>
        <ThumbnailAction>
          More work<sup className='text-muted-foreground'>4</sup>
        </ThumbnailAction>
      </div>
    </section>
  );
}
