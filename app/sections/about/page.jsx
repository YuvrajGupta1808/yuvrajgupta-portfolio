// app/sections/sections/about/page.jsx
'use client';

import {
  Navbar
} from '@/layout';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { MagneticButton, ParallaxReveal, Section } from '@/components';
import { Github, Instagram, Linkedin } from 'lucide-react';

import { MainTitle } from '../../_layout/contact/components/user-details/index.styled.js';
import { Paragraph, Paragraph2, SubTitle, Title, Wrapper } from '../../_layout/description/index.styled.js';


export default function AboutPage() {
  const phrase1 =
    'I’m a senior at San Francisco State University pursuing a Bachelor of Science in Computer Science, driven by my passion for crafting engaging, user-focused web experiences. I thrive at the intersection of design and development, leveraging React, Next.js, Tailwind CSS, and Node.js to build performant, responsive applications that look as good as they function.';

  const phrase2 =
    'My strengths include transforming complex requirements into clean, maintainable code—whether that’s optimizing page load times, ensuring accessibility, or integrating RESTful APIs. As I continue to sharpen my skills in modern JavaScript frameworks and cloud deployment (AWS/Docker), I’m seeking opportunities to collaborate with a dynamic engineering team and contribute to projects that make a tangible impact.';

  const phrase3 =
    'Scroll on to explore my projects, professional journey, and ways we can work together!';

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
            {/* “About me” button on the left */}
            <div className="flex justify-start mb-8 lg:mb-0">
              <Link href="/sections/about" passHref>
                  <MainTitle>About Me</MainTitle><br /><br></br><br /><br></br>
              </Link>
            </div>

            {/* Three paragraphs, each with its own ParallaxReveal */}
            <div className="space-y-8 pl-0 lg:px-20">
              <Paragraph>
                <ParallaxReveal paragraph={phrase1} />
              </Paragraph>
              <Paragraph>
                <ParallaxReveal paragraph={phrase2} />
              </Paragraph>
              <Paragraph>
                <ParallaxReveal paragraph={phrase3} />
              </Paragraph>
            </div>
              <br /><br></br>
            {/* Social icons centered */}
            <div className="flex justify-center space-x-8 mt-12">
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
            </div>
          </motion.div>
        </Wrapper>
        
      {/* Experience Section */}
<section className="max-w-7xl mx-auto flex flex-col justify-center lg:flex-row gap-15">
  {/* Left Column: Heading */}
  <div className="lg:w-1/4">
    <Title>
      <ParallaxReveal paragraph={"Experience"} />
    </Title>
    <div className="text-md text-primary-foreground">
      <Link
        href="https://www.linkedin.com/in/yuvraj2004"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-primary"
      >
        <ParallaxReveal paragraph={"View all experience on LinkedIn"} />
      </Link>
    </div>
  </div>

  {/* Right Column: Details */}
  <div className="lg:w-3/4 lg:mt-0 lg:pl-12 space-y-8">
    {/* 1) Student Assistant */}
    <div>
      <SubTitle className="text-primary mt-2">Student Assistant</SubTitle>
      <Paragraph2 className="text-gray-800 mt-2">
        <ParallaxReveal paragraph={"San Francisco State University, Graduate Division"} />
      </Paragraph2>
      <Paragraph2 className="text-gray-600">
        <ParallaxReveal paragraph={"August 2023 – Present"} />
      </Paragraph2>
      <Paragraph2 className="mt-4">
        <ParallaxReveal paragraph={"• Digitized and organized over 500 graduate transcripts, ensuring accurate database records and improving administrative efficiency."} />
      </Paragraph2>
      <Paragraph2 className="mt-1">
        <ParallaxReveal paragraph={"• Assisted around 50 students with program inquiries and documentation, providing clear and prompt guidance."} />
      </Paragraph2>
      <Paragraph2 className="mt-1">
        <ParallaxReveal paragraph={"• Managed high-volume phone operations, directing more than 60 calls per week and resolving inquiries with a first-contact resolution rate of 90%+."} />
      </Paragraph2>
    </div>

    {/* 2) Intern */}
    <div>
      <SubTitle className="text-primary">Intern</SubTitle>
      <Paragraph2 className="text-gray-800 mt-2">
        <ParallaxReveal paragraph={"Tutree, Sunnyvale, CA"} />
      </Paragraph2>
      <Paragraph2 className="text-gray-600">
        <ParallaxReveal paragraph={"May 2023 – August 2023"} />
      </Paragraph2>
      <Paragraph2 className="mt-4">
        <ParallaxReveal paragraph={"• Developed and improved a library management system using Golang, focusing on features such as book tracking, user management, and check-in/out processes."} />
      </Paragraph2>
      <Paragraph2 className="mt-1">
        <ParallaxReveal paragraph={"• Solved backend issues in existing code, improving system performance for the Synkdup and agent-dashboard projects and reducing bug occurrence by 25%."} />
      </Paragraph2>
      <Paragraph2 className="mt-1">
        <ParallaxReveal paragraph={"• Designed and launched a personal website, handling front-end and back-end tasks, and coordinated team feedback for improvements."} />
      </Paragraph2>
      <Paragraph2 className="mt-1">
        <ParallaxReveal paragraph={"• Actively contributed to sprint planning and code reviews, providing insights that improved project quality and team collaboration."} />
      </Paragraph2>
        </div>
      </div>
    </section>

          {/* Education Section */}
    <section className="max-w-7xl mx-auto flex flex-col justify-center lg:flex-row gap-15 mt-24">
            {/* Left Column: Heading */}
            <div className="lg:w-1/4">
              <Title>
                <ParallaxReveal paragraph="Education" />
              </Title>
            </div>

            {/* Right Column: Details */}
              <div className="lg:w-3/4 lg:mt-0 lg:pl-12 space-y-8">
              <div>
                  <SubTitle className="text-primary mt-2">San Francisco State University</SubTitle>
                  <Paragraph2 className="text-gray-800 mt-2">
                    <ParallaxReveal paragraph={"Bachelor's of Science in Computer Science"} />
                  </Paragraph2>
                  <Paragraph2 className="text-gray-600">
                    <ParallaxReveal paragraph={"Fall 2022 – Spring 2026"} />
                  </Paragraph2>
              <Paragraph2 className="mt-4">
                <ParallaxReveal paragraph="I am currently pursuing a Bachelor of Science in Computer Science at San Francisco State University (expected May 2026). My coursework has covered a range of essential topics—each providing both theoretical foundations and in-depth practical experience." />
              </Paragraph2>

              <Paragraph2 className="mt-4">
                <ParallaxReveal paragraph="• Embedded Systems: Completed Embedded Systems (CSC C380), where I designed and programmed microcontrollers (e.g., Arduino, Raspberry Pi) using C/C++. Built real‐time control loops, interfaced sensors/actuators, and debugged hardware–software integration using serial communication and GPIO." />
              </Paragraph2>

              <Paragraph2 className="mt-4">
                <ParallaxReveal paragraph="• Algorithms & Data Structures: Completed Data Structures and Algorithms, learning to analyze time/space complexity (O-notation) and implement balanced trees, heaps, hash tables, and graph traversals." />
              </Paragraph2>

              <Paragraph2 className="mt-4">
                <ParallaxReveal paragraph="• Software Engineering Principles: Taken Software Engineering courses, practicing requirements gathering, agile story mapping, UML modeling, test-driven development, CI/CD pipelines, and end-to-end system design." />
              </Paragraph2>

              <Paragraph2 className="mt-4">
                <ParallaxReveal paragraph="• Web & Cloud Technologies: In Web Programming, built full-stack apps with Flask/Django (Python) and React/Next.js (JavaScript). Deployed containerized services using Docker on AWS EC2 in Cloud Computing." />
              </Paragraph2>

              <Paragraph2 className="mt-4">
                <ParallaxReveal paragraph="• Machine Learning Fundamentals: Introduced to neural networks, supervised learning algorithms, and PyTorch/TensorFlow in Machine Learning (CSC C515). Built and evaluated simple classification models on real-world datasets." />
              </Paragraph2>

              <Paragraph2 className="mt-4">
                <ParallaxReveal paragraph="Across these courses, I’ve become proficient in Java, Python, Golang, and modern JavaScript frameworks (React / Next.js) with Tailwind CSS. My hands-on AWS deployment experience (EC2 + Docker) has prepared me to architect scalable, maintainable solutions in production." />
              </Paragraph2>
            </div></div>
          </section>
      
          {/* Hobbies Section */}
    <section className="max-w-7xl mx-auto flex flex-col justify-center lg:flex-row gap-15 mt-24">
            {/* Left Column: Heading */}
            <div className="lg:w-1/4">
              <Title>
                <ParallaxReveal paragraph="Hobbies" />
              </Title>
            </div>

            {/* Right Column: Details */}
              <div className="lg:w-3/4 lg:mt-0 lg:pl-12 space-y-8">
              <div>
              <Paragraph2 className="mt-4">
                <ParallaxReveal paragraph="Chess: I play chess regularly to sharpen my strategic thinking, practice problem-solving under pressure, and enjoy friendly competition." />
              </Paragraph2>

              <Paragraph2 className="mt-4">
                <ParallaxReveal paragraph="Anime: Watching anime inspires me with creative storytelling and character design, and I often discuss favorite series with fellow fans." />
              </Paragraph2>

              <Paragraph2 className="mt-4">
                <ParallaxReveal paragraph="Cooking: Experimenting with simple recipes—baking bread, trying new spices, or cooking family favorites—allows me to unwind and share meals with friends." />
              </Paragraph2>

              <Paragraph2 className="mt-4">
                <ParallaxReveal paragraph="Photography: Capturing landscapes and candid moments helps me develop an eye for composition and detail, whether on weekend hikes or around the city." />
              </Paragraph2>
              
              <Paragraph2 className="mt-4">
                <ParallaxReveal paragraph="Hiking: Exploring Bay Area trails keeps me active and curious, and I love documenting the journey through both photos and short video clips." />
              </Paragraph2>
        </div></div>
      </section>
        
      </article>
    </Section></>
  );
}