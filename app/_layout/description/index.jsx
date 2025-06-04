'use client';

import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

import { MagneticButton, ParallaxReveal } from '@/components';

import { Paragraph, Title, Wrapper } from './index.styled';

const phrase1 = `I’m a senior at San Francisco State University pursuing a Bachelor of Science in Computer Science, driven by my passion for crafting engaging, user-focused web experiences. I thrive at the intersection of design and development, leveraging React, Next.js, Tailwind CSS, and Node.js to build performant, responsive applications that look as good as they function.`;
const phrase2 = `My strengths include transforming complex requirements into clean, maintainable code—whether that’s optimizing page load times, ensuring accessibility, or integrating RESTful APIs. As I continue to sharpen my skills in modern JavaScript frameworks and cloud deployment (AWS/Docker), I’m seeking opportunities to collaborate with a dynamic engineering team and contribute to projects that make a tangible impact.`;
const phrase3 = `Scroll on to explore my projects, professional journey, and ways we can work together!`;

export function Description() {
  return (
    <article className='container relative'>
      <Wrapper>
        <motion.div
          whileInView={{ y: "-15%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
        <div className="flex justify-start">
              <Link href="/sections/about" passHref>
              <MagneticButton variant="default" size="md">
                <Title>
                About
                </Title>
              </MagneticButton>
            </Link>
          </div>

        <div className="basis-full pl-9">
          <Paragraph>
            <ParallaxReveal paragraph={phrase1} /><br></br><br></br>
            <ParallaxReveal paragraph={phrase2} /><br></br><br></br>
            <ParallaxReveal paragraph={phrase3} /><br></br><br></br>
          </Paragraph>
        </div>
                  
    <div className="flex justify-center space-x-8">
      <Link
        href="https://linkedin.com/in/your‐linkedin‐username"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MagneticButton variant="default" size="md">
          <Linkedin className="h-10 w-10 text-current" />
        </MagneticButton>
      </Link>

      <Link
        href="https://github.com/your‐github‐username"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MagneticButton variant="default" size="md">
          <Github className="h-10 w-10 text-current" />
        </MagneticButton>
      </Link>

      <Link
        href="https://instagram.com/your‐instagram‐handle"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MagneticButton variant="default" size="md">
          <Instagram className="h-10 w-10 text-current" />
        </MagneticButton>
      </Link>
    </div>

        </motion.div>


      </Wrapper>
    </article>
  );
}
