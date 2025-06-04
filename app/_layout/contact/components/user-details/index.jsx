'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { MagneticButton } from '@/components';
import headshot from '../../../../assets/yuvraj_headshots.png';

import { AvatarWrapper, ButtonRow, Container, MainTitle, Row } from './index.styled';

/**
 * @param {Object} props
 * @param {import('framer-motion').MotionValue<number>} props.transformX
 */
export function UserDetails({ transformX }) {
  return (
    <Container>
      {/* === TOP ROW: AVATAR | TITLE | “GET IN TOUCH” === */}
      <Row>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-20 lg:gap-12">
          {/* 1) Avatar (wrapped in a MagneticButton) */}
          <MagneticButton variant="default" size="xxl">
            <AvatarWrapper>
              <Image
                src={headshot}
                alt="Yuvraj Gupta Profile Picture"
                fill
                className="rounded-full object-cover"
              />
            </AvatarWrapper>
          </MagneticButton>

          {/* 2) Main Title */}
          <MainTitle>Let’s connect.</MainTitle>

          {/* 3) “Get in touch” (follows pointer on hover) */}
          <motion.div style={{ x: transformX }}>
            <Link href="/sections/contact" passHref>
              <MagneticButton variant="primary" size="lg">
                Get in touch
              </MagneticButton>
            </Link>
          </motion.div>
        </div>
      </Row>

      {/* === BOTTOM ROW: EMAIL & PHONE BUTTONS (CENTERED) === */}
      <ButtonRow>
        <a href="mailto:yuvrajgupta1808@gmail.com">
          <MagneticButton
            variant="outline"
            size="md"
            className="whitespace-nowrap pl-6 pr-20 py-3 border-muted-foreground/60 hover:bg-muted-foreground/10"
          >
            yuvrajgupta1808@gmail.com
          </MagneticButton>
        </a>

        <a href="tel:+14157408804">
          <MagneticButton
            variant="outline"
            size="md"
            className="whitespace-nowrap px-6 py-3 border-muted-foreground/60 hover:bg-muted-foreground/10"
          >
            +1 (415) 740-8804
          </MagneticButton>
        </a>
      </ButtonRow>
    </Container>
  );
}