'use client';

import { motion } from 'framer-motion';

import { MagneticButton, ParallaxSlider } from '@/components';

import { slideUp } from './variants';

import Image from 'next/image';

import { ImageWrapper2 } from '../contact/components/user-details/index.styled';

import { Typewriter } from 'react-simple-typewriter';


export function Header() {
  return (
    <motion.header
      className='relative h-screen overflow-hidden bg-primary-foreground text-background'
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      <video
        src="https://sfsu.box.com/shared/static/t6s9di68b2zqm0o86fh59xkmbpjcy9s5.mp4?raw=1"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-center"
      >Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <div className="absolute top-40 left-48 z-20">
        <MagneticButton variant="default" size="xxl" className="flex ">
          <ImageWrapper2>
            <Image
              src="/yuvraj_headshots.png"
              alt="Yuvraj Gupta Headshot"
              fill
              className="object-cover"
            />
          </ImageWrapper2>
        </MagneticButton>
      </div>

      <div className='relative flex h-full flex-col justify-end gap-2 md:flex-col-reverse md:justify-normal'>
        <div className='select-none'>
          <h1 className='text-[max(8em,12vw)]'>
            <ParallaxSlider repeat={4} baseVelocity={2}>
              <span className='pe-20 md:pe-20'>
                YUVRAJ&nbsp; GUPTA &nbsp;&nbsp;
              </span>
            </ParallaxSlider>
          </h1>
        </div>

        <div className='md:ml-auto'>
          <div className='mx-40 my-20'>
            <h4 className='text-[clamp(1.55em,2.5vw,2.75em)]'>
              <Typewriter
                words={[
                  'Full-Stack Developer',
                  'Software Engineer',
                  'Backend Developer',
                  'UI/UX Designer',
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
              <span className='block'> San Francisco, CA</span>
            </h4>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
