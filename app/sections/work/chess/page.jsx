// app/sections/sections/work/car/page.jsx
'use client';

import { Navbar } from '@/layout';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { MagneticButton, ParallaxReveal, Section } from '@/components';
import { ExternalLink, FileText, Github } from 'lucide-react';

import { MainTitle } from '../../../_layout/contact/components/user-details/index.styled.js';

import { useFollowPointer } from '@/hooks';
import { useRef } from 'react';
import { projectData } from '../../../_data/project-data.js';
import {
    Paragraph2,
    SubTitle,
    Title,
    Wrapper,
} from '../../../_layout/description/index.styled.js';

export default function Chess() {
  const modal = useRef(null);
  const cursor = useRef(null);
  const label = useRef(null);

  const {
    item: { active },
    handlePointerEnter,
    handlePointerLeave,
  } = useFollowPointer({ modal, cursor, label });

  const chessProject = projectData.find((p) => p.id === 'chessGame');
  if (!chessProject) {
    return (
      <>
        <Navbar />
        <Section>
          <Wrapper className="px-4 lg:px-0 py-12">
            <Title>
              <ParallaxReveal paragraph="Project not found" />
            </Title>
          </Wrapper>
        </Section>
      </>
    );
  }

  // Fade‐in‐up variant
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Navbar />

      {/* ── HERO IMAGE ─────────────────────────────────────────────────────────── */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 1 }}
        className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden"
      >
        {chessProject.media[0].type === 'image' ? (
          <Image
            src={chessProject.media[0].src}
            alt={chessProject.media[0].alt || ''}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <video
            src={chessProject.media[0].src}
            loop
            muted
            autoPlay
            playsInline
            className="object-cover w-full h-full"
          />
        )}
      </motion.div>

      {/* ── HEADER ROW (Back / Title‐block / Actions) ───────────────────────────────── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
        variants={fadeInUp}
        className="w-full py-6"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left (15%) */}
          <div className="w-full lg:w-[15%] flex justify-start">
            <Link href="/sections/work" passHref>
              <MagneticButton
                size="xl"
              >
                ← Back to Work
              </MagneticButton>
            </Link>
          </div>

          {/* Center (70%) */}
              <div className="flex-1">
                <MainTitle>
                  {chessProject.title}
                </MainTitle>
                <div className="mt-0 lg:mt-2">
                  <SubTitle className="text-primary">
                    <ParallaxReveal paragraph={chessProject.subtitle} />
                  </SubTitle>
                  <Paragraph2>
                    <ParallaxReveal paragraph={chessProject.dateRange} />
                  </Paragraph2>
                </div>
              </div>


          {/* Right (15%) */}
          <div className="w-full lg:w-[15%] flex justify-end space-x-2">
            <Link href={chessProject.githubUrl} target="_blank" rel="noopener noreferrer">
              <MagneticButton
                size="lg"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </MagneticButton>
            </Link>

            <Link href="https://your-demo-url.example.com" target="_blank" rel="noopener noreferrer">
              <MagneticButton
                size="lg"
              >
                <ExternalLink className="h-5 w-5" />
                <span>Live Demo</span>
              </MagneticButton>
            </Link>

            <Link href="/assets/RaspberryPiCar_Writeup.pdf" target="_blank" rel="noopener noreferrer">
              <MagneticButton
                size="lg"
              >
                <FileText className="h-5 w-5 " />
                <span>Project PDF</span>
              </MagneticButton>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* ── DESCRIPTION ROW (empty / description / empty) ──────────────────────────────── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
        variants={fadeInUp}
        className="w-full"
      >
        <div className="mx-auto flex flex-col lg:flex-row px-4 lg:px-0">
          {/* Left (15%) */}
          <div className="w-full lg:w-[15%]" />

          {/* Center (70%) */}
          <div className="w-full lg:w-[50%] space-y-4">
                <div className="prose prose-lg max-w-none space-y-6">
                  {chessProject.description
                    .trim()
                    .split('\n')
                    .map((line, idx) => (
                      <Paragraph2 key={idx}>
                        <ParallaxReveal paragraph={line.trim()} />
                      </Paragraph2>
                    ))}
                </div>
          </div>

          {/* Right (15%) */}
          <div className="w-full lg:w-[15%]" />
        </div>
      </motion.div>

      {/* ── TECH USED ROW (empty / tech list / tech icons) ───────────────────────────────── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
        variants={fadeInUp}
        className="w-full py-8"
      >
        <div className="mx-auto flex flex-col lg:flex-row px-4 pt-8 lg:px-0">
          {/* Left (15%) */}
          <div className="w-full lg:w-[15%]" />

          {/* Center (70%) */}
          <div className="w-full lg:w-[60%] space-y-5">
                <SubTitle>Tech Used</SubTitle>
                <ul className="text-lg list-disc list-inside ml-4 space-y-4">
                  {chessProject.techUsed.map((tech, idx) => (
                    <li key={idx}>
                        <ParallaxReveal paragraph={tech} />
                    </li>
                  ))}
                </ul>
          </div>

          {/* Right (15%) */}
        <div className="w-full lg:w-[15%] flex flex-col items-end">
            <MagneticButton size="md">
              C++
            </MagneticButton>
            <MagneticButton size="md">
              Python
            </MagneticButton>
            <MagneticButton size="md">
              Raspberry Pi
            </MagneticButton>
            <MagneticButton size="md">
              GPIO
            </MagneticButton>
          </div>
        </div>
      </motion.div>

      {/* ── GALLERY (stacked full-width aspect videos/images) ─────────────────────────── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
        variants={fadeInUp}
        className="w-full py-8"
      >
        <div className="mx-auto w-[90%] lg:w-[70%] space-y-8">
                            <SubTitle>Gallery</SubTitle>
          {chessProject.media.slice(1).map((item, idx) => (
            <div
              key={idx}
              className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-black"
            >
              {item.type === 'image' ? (
                <Image
                  src={item.src}
                  alt={item.alt || ''}
                  fill
                  className="object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  loop
                  muted
                  autoPlay
                  playsInline
                  className="object-cover w-full h-full"
                />
              )}
            </div>
          ))}
        </div>
      </motion.div>

    </>
  );
}