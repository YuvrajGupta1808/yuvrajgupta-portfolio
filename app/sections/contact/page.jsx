// app/sections/contact/page.jsx
'use client';


import { motion } from 'framer-motion';
import Link from 'next/link';

import { MagneticButton, Section } from '@/components';
import { Github, Instagram, Linkedin, MailIcon } from 'lucide-react';

import { MainTitle } from '../../_layout/contact/components/user-details/index.styled.js';
import { Wrapper } from '../../_layout/description/index.styled.js';

export default function ContactPage() {
  // Replace this with your actual Google Form ID
  const GOOGLE_FORM_EMBED_URL =
    'https://docs.google.com/forms/d/e/YOUR_FORM_ID_HERE/viewform?embedded=true';

  return (
    <Section>
      <Wrapper className="px-4 lg:px-0 py-12">
        {/* ── HEADER ────────────────────────────────────────────────────────── */}
          <motion.div
            whileInView={{ y: '-15%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="inline-block justify-start lg:mb-0 w-full">
              <Link href="/sections/about" passHref>
                  <MainTitle>Contact me</MainTitle><br /><br></br><br /><br></br>
              </Link>
          {/* ── LEFT COLUMN: GOOGLE FORM ────────────────────────────────────── */}
            <div className="space-y-8 pl-0 lg:px-20">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScvGK4-6mX2urV-RMbADjcDk24qxsQ_aCx-KvOB0sUFqEUfvA/viewform?usp=sharing&ouid=109248099877361416865"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Contact Form"
              className="block"
            >
              Loading…
            </iframe>
          </div>            </div>


          {/* ── RIGHT COLUMN: SOCIAL ICONS & ALTERNATIVE LINKS ─────────────── */}
            <div className="flex justify-center space-x-8 mt-12 mb-0">
              <Link
                href="https://linkedin.com/in/your-linkedin-username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MagneticButton variant="default" size="md">
                  <Linkedin className="h-10 w-10 text-current" />
                </MagneticButton>
              </Link>

              <Link
                href="https://github.com/your-github-username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MagneticButton variant="default" size="md">
                  <Github className="h-10 w-10 text-current" />
                </MagneticButton>
              </Link>

              <Link
                href="https://instagram.com/your-instagram-handle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MagneticButton variant="default" size="md">
                  <Instagram className="h-10 w-10 text-current" />
                </MagneticButton>
              </Link>

                            <Link
                href="https://instagram.com/your-instagram-handle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MagneticButton variant="default" size="md">
                  <MailIcon className="h-10 w-10 text-current" />
                </MagneticButton>
              </Link>
            </div>
        </motion.div>
      </Wrapper>
    </Section>
  );
}