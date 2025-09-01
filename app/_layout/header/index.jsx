'use client';

import { motion } from 'framer-motion';

import { MagneticButton, ParallaxSlider } from '@/components';

import { slideUp } from './variants';

import Image from 'next/image';

import { ImageWrapper2 } from '../contact/components/user-details/index.styled';


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
              src="https://public.boxcloud.com/d/1/b1!_mWS9s-MG7c64jqVajJCrSlk9-kIiZyzPkXe60MASW0IAb612U7Czj-9cqkKMk874CFGfH6I-YVs7pbE58GawwcFbP4ygk0nYGndAJzNDREEm6nWy5ZCTCYJoWz7x5PlRpoUnMiWH938zXmH4vNCaE--emW9DAGLfsrUhOsstIjg7ohADoUT-c7TWJfmXqG_gJKLwwNyJoyG79iVdF8S_qYoPrRHlly1bVlznCz0FaITdsu6wU1A7W-__lm11C-7lQ3T-qjZMTmzifwB5mevBcNVkRZh0GoTJLlBuQEaWLIQmI1G5E3YafVKbXg78aGjL3yJinWu3Y4m92eLPf03zGGpk59heByaKIA2BnWYDSTJ-mJDe0WcltHlb0JmS8BCCsn8Lu6jfytEw4-aFTINGTJm3raLcIxqoSV_RokGLb6uOeYwwxqtbz5RF8JKDUxItEyeXw2uFSd5bLorotLs5If1yl4xsn8_tJX0_kPPpZm59CJ0a8Y0-jozqtZcrUlmr-zz6bgTcPS9II9iHSZtDkH4yGU_7ylnjKkia6HzZeBBGEEZzcLo3UyreJZjBf6SgCeZyT9ZFgQXD-lIDm6Rs7duy2uoFguanj2pinNb65XjFQU0JrKjnFZjc6Q-qVkVcBy99xBw0oGviuATNOUuAi7wUAWjSqEkVCeswibJTZSehODPd5kW_f8ZaCCy3TGNcmJfaOiXz3R69RmMEIv2cS_Gmt1nBrZEnK5oEEXSiJ4-6a7-RauK0x-lC2fTtuzcImLqmOY7o2HeaWrPhu0aMUPqVfzFB9WDhgoB5OSMsagGVcxiRm0WkVuaMee_R1X71CAzY7uyuhCI0Q6de_y8O6Sbwgb_98aywO617l3mlvx6R5dZs5CRZWM_Bcc42pdwnFtx-7H5uO_AD7IStbqKX58c9vpTCwkmCLBue2HNy72e6MajPqbDvoz_HHtEhfKQODyTcxWzmn2f-GYUjSFZHZmjbIzhfUiTnEi_i15dlLn9VTrYTz5QnYzeQ2-0WzleTbnK6_eYfvX0CQNnsUoxNvHM3s5DPmndjWTPpaYGuV4pi24MENUfiPvLDBAL24Np4Q2t_OlUPSlSGGJaw22a4j5QpMiwtKUU0un420Pevjg_b-TouqcZbLa4oXPD6yjSMKGFcnWVWrT-X7D4VDE7tTKr_k0svJmFZUMHOJtAAZpw6Kua0UYU6NmDnBehKSi18HvoIwmWGJWVclYECPLNrlhYFIQ1I7gCiqDahRRWGIGoFJMsE9cKYQpjrK5wYr7k6UScsDhofSOeO2bqXVL_JuGx2LvpWNm1ojB13ZUNL4saT1sTx365_qsus_eCIZYl7P_qEj85DEXg6gFe_2-oW_tnbrIeXqu2uIJfEOyiMCVrOnx7A43n3SlSNKWR1O0kwCQkimr5RLBoGP92Cu-1aEHE3TdLzk6fsZ-Qv0aTTFhJ6_k8APFLldEIcjr9LvrShvlMHqqVGmbZE_N2SKw6cMq5ml7_zS3wmCAXIJJFcNzS10qtNXexyfdoRcfSC93OMWsY/download?raw=1"
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
              <span className='block'>Full-Stack</span>
              <span className='block'> Software Developer</span>
              <span className='block'> San Francisco, CA</span>
            </h4>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
