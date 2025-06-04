// app/sections/sections/work/page.jsx
'use client';

import {
  Navbar
} from '@/layout';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Section } from '@/components';

import { MainTitle } from '../../_layout/contact/components/user-details/index.styled.js';
import {
  Wrapper
} from '../../_layout/description/index.styled.js';

import { useFollowPointer } from '@/hooks';
import { useRef } from 'react';

import {
  ThumbnailAction,
  ThumbnailCursorCircle,
  ThumbnailCursorLabel,
  ThumbnailList,
  ThumbnailModal
} from '../../_layout/thumbnail/components';
import { scaleUp } from '../../_layout/thumbnail/variants';


export default function Work() {
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
    <>
    <Navbar />
    <Section>
      <article className="relative lg:px-0">
        <Wrapper>
          <motion.div
            whileInView={{ y: '-15%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            {/*  "My works” button on the left */}
            <div className="flex mb-8 lg:mb-0">
              <Link href="/sections/about" passHref>
                  <MainTitle>My Works</MainTitle><br /><br></br><br /><br></br>
              </Link>
            </div>
                  <div className='flex flex-col gap-10'>
                              
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

          </motion.div>
        </Wrapper>
        
      </article>
    </Section></>
  );
}
