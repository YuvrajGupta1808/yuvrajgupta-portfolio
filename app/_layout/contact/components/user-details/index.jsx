'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { MagneticButton } from '@/components';

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
                src="https://public.boxcloud.com/d/1/b1!7zv_GPsLUO6ctoWsRZDk04NChGTQFntg29vPfx1eSYijcowgSaxdamWq5-NOiUF4cRhU38wcZbOOAYP0RWK3CUugsGOPolq-UeeTYITc_nGdmXrHudsi3CxgfSNpRYbfbTrTK1BE7IG3b9gs4nV7guXEG9Je6uqag699qxtnLiZZs_1biOfiAGccLG3zRGdr0eBdIFd-ceXOFdfW7sVRhccbia4USCWDSD_I7VEgU0f_BF0z73eMmfY2n57x6gCtdn_uwUgSY8CvT21Qhn8pz_UXCeR4mPA0szxrqpf4H16wBzPHqYAx2yq1ZMVtKrxSwsGlgonkXL_HUQvLF_G17mo7x9uNLsgAV9YQprDZik2OXdum0J43TGUek9Ec5jlxN3t2myAqRK4dfsvGSpdrH_Ot7S5p5j886fOgjLxeTMW3dOWFnPBXLeNHtop2R4ERWOsgXVP4BCWsM8hNOatZKQvKTi2FlzNA0H9_rhQGiyHo4nvI-T3xnIUSDrOAJR-rl0Cr72w7l6ygUvDPJdVGFDWx2wMzpvDKPSZp22u3P7Zn58xIl2EyVekIv77paWFDotqDjbapkbEbHffG5WyLZTmyAaCOtsPg_Jvf-TlUqZF90nGxkQo4v_qjSySL2TofmBkcSF9Y8E8h08LIlFTpqAr1rZ7pbzE1bBQfL8VVyzCO9yZlWFcOAmx9JRQNS5YREhEnRFeBAWtPG-37gJQnQPsbycPuIyzV8u4sWYErw0uBrOhocaEDhij3RU913giDSfsqXtWzq-PiPOiGMcCq654OoDEdzQitNt3YnZigIbzAAGfA4aO-rlcipCkxsag7ug2fkF_I1-k15dtjP2jf1zOwQiOQVld4D1_Puthrz6m7iCwvv1ExmkEFWoyEDsrAM7JiBJaofM5B2t8mgfUZYL4wWxAvV8COAnFMuX8hyPfEgs5ooawPMupAUZFfYAHDLcmtLIfL1Do0ibm4Iw9Sx7TZnuPksUX6GxSt9MzZvH8U1MPe1TLKHJM7Bv07YXjxOn4fNXKkDUz746BkNybdvEJeW-Mpu3ihF4RfW1CF1a_IlxFNJfpItBJpFn_jtfNeqlCityZB7kiw9v6_A-Qy7mvVrgNLQiK6f9C0gg0BOQEHdGzxNlxcBGIwl2xPx7GBsgfLPPyCApMCpcF4lsXRqd01Zbp9tcM6WRfX2ejCZVS6BtmKyWGW1KuKGBhWS2mQMYu7EnEUxfumKic-8rDW7F8Onm_Y7eNNres7GtgixDVhvJHaaOL-qZuuvJpnemJvEaJSbn76Sz2voXN3Utf1seJB7wSP6halwrm6Rf6jLaVh4lfxJGp0PpsZOmWJZ5l8r1A5yfsFvicG-Hxb4nH1fI0bvtn7v2MK1XmRIY-FKL3lvxCbs5mQYUFh9XV5OAN7U5fYpzklK-3NR7-uhavoBuMdfJBA38I75P8vX_p5J0ElVuqZktWB-kHSP8nF3fLfGyuu0qgofZLlwBFC5vC2y3dc_8yQa-XvqNNPNV9rzwM4FPZJU7oBIGefLkJU8N42B4Q3KyXEJw../download?raw=1"
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