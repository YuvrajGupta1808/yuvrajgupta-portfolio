// app/_data/project-data.js

import car from '../assets/car.jpg';
import car2 from '../assets/car2.jpg';
import chess1 from '../assets/chess1.png';
import chess2 from '../assets/chess2.png';
import GatorMart1 from '../assets/GatorMart1.png';
import GatorMart2 from '../assets/GatorMart2.png';
import GatorMart3 from '../assets/GatorMart3.png';
import Pizza from '../assets/Pizza1.png';
import Pizza2 from '../assets/Pizza2.png';
import Pizza1 from '../assets/Pizza3.png';

export const projectData = [
  {
    id: 'raspberryPiCar',
    title: 'Raspberry Pi Powered Car',
    subtitle: 'Self‐Driving Robotics Project',
    dateRange: 'Fall 2024 (Aug 2024 – Oct 2024)',
    description: `
      Built a line-following, obstacle‐avoiding robot car using a Raspberry Pi 4 as the main controller.
      I coded custom C/Python drivers for GPIO, integrated multiple ultrasonic sensors (HC-SR04), line‐tracking sensors (TCRT5000), and a TCS34725 color sensor to detect red-stop lines.
      On top of that, I used a WaveShare Motor HAT (PCA9685 PWM controller) to drive two DC motors, implementing a PID controller for smooth line tracking. All power was supplied by a 4‐cell 18650 battery pack (for motors) plus a USB power bank (for the Pi).
    `,
    techUsed: [
      'Raspberry Pi 4 (main controller)',
      'WaveShare Motor HAT (PCA9685 PWM driver)',
      'HC-SR04 Ultrasonic Sensors (front + sides)',
      'TCRT5000 Line Sensors (front array)',
      'TCS34725 RGB Color Sensor (stop on red line)',
      'bcm2835 & pigpio libraries (GPIO in C/Python)',
      'PID algorithm (C/Python) for line‐following',
      '4×18650 battery pack + USB power bank',
    ],
    media: [
      {
        type: 'image',
        src: car,        // adjust path for your actual image
        alt: 'Car front view'
      },
      {
        type: 'video',
        src: '/videos/Car1.mp4',         // adjust path for your actual video
        alt: 'Car demo video'
      },
      {
        type: 'image',
        src: car2,         // adjust path for your actual image
        alt: 'Car side view'
      }
    ],
    githubUrl: 'https://github.com/CSC615-2024-Fall/csc615-term-project-nhannguyensf',
  },

  {
    id: 'gatorMarketplace',
    title: 'Gator Marketplace Application',
    subtitle: 'Campus-Specific E-Commerce Platform',
    dateRange: 'Spring 2025 (Feb 2025 – May 2025)',
    description: `
      Built a campus-specific e-commerce platform using Python Flask with secure authentication, listing management, and in-app messaging. 
      Designed a responsive front-end (HTML/CSS/JavaScript) to ensure usability on both desktop and mobile. 
      Deployed the application on an AWS EC2 instance using Gunicorn and NGINX as a reverse proxy.
      Implemented MySQL for persistent data storage and incorporated GitHub branching strategies for collaborative development.
    `,
    techUsed: [
      'Python Flask (REST API)',
      'MySQL (persistent storage)',
      'AWS EC2 (deployment)',
      'Gunicorn + NGINX (application server)',
      'HTML5 / CSS3 / JavaScript (responsive UI)',
      'GitHub (version control & branching)',
    ],
    media: [
      {
        type: 'image',
        src: GatorMart1,
        alt: 'GatorMart Home Page Screenshot'
      },
      {
        type: 'image',
        src: GatorMart2,
        alt: 'GatorMart Listing Management Screenshot'
      },
      {
        type: 'image',
        src: GatorMart3,
        alt: 'GatorMart Listing Management Screenshot'
      }
    ],
    githubUrl: 'https://github.com/YuvrajGupta1808/gatormart',
  },

  {
    id: 'chessGame',
    title: 'Chess Game Project',
    subtitle: 'Custom Variants & Stockfish Integration',
    dateRange: 'Summer 2024 (Jun 2024 – Aug 2024)',
    description: `
      Designed and implemented a fully functional chess game in JavaScript, featuring custom piece variants (e.g., “Drook”) and support for Chess960. 
      Integrated a Stockfish-powered AI bot for single-player mode and built a multiplayer lobby with customizable settings. 
      Handled game state synchronization, move validation, and check/checkmate detection entirely on the client side using modular ES6 classes.
      Ensured cross-browser compatibility and alpha-tested with user feedback to refine UI/UX interactions.
    `,
    techUsed: [
      'JavaScript (ES6 modules)',
      'HTML5 / CSS3 (gameboard UI)',
      'Stockfish (AI engine integration)',
      'WebSockets (multiplayer lobby)',
      'Node.js (development tooling & packaging)',
      'Webpack (bundling & optimization)',
    ],
    media: [
      {
        type: 'image',
        src: chess1,
        alt: 'Chess Game Board Screenshot'
      },,
      {
        type: 'video',
        src: '/videos/chess1.mp4',         // adjust path for your actual video
        alt: 'Car demo video'
      },
      {
        type: 'image',
        src: chess2,
        alt: 'Custom Piece Variant Demo'
      }
    ],
    githubUrl: 'https://github.com/YuvrajGupta1808/chess-game',
  },

  {
    id: 'pizzaPoint',
    title: 'Pizza Point Website Project',
    subtitle: 'Dynamic Pizza Ordering Platform',
    dateRange: 'Spring 2024 (Feb 2024 – Mar 2024)',
    description: `
      Developed a dynamic pizza ordering web application using React.js for the front end and Node.js with Mongoose for the back end. 
      Created a flexible menu component where users can customize toppings, sizes, and quantities. 
      Implemented secure checkout workflows, cart state management (Redux), and RESTful APIs to handle orders in real time.
      Deployed the backend on Heroku and configured a free tier MongoDB Atlas cluster for persistent data storage.
    `,
    techUsed: [
      'React.js (functional components & hooks)',
      'Node.js + Express (RESTful API)',
      'MongoDB (Mongoose ODM)',
      'Redux (state management)',
      'HTML5 / CSS3 / Tailwind CSS (responsive design)',
      'Heroku & MongoDB Atlas (hosting & database)',
    ],
    media: [
      {
        type: 'image',
        src: Pizza,
        alt: 'PizzaPoint Home Page Screenshot'
      },
      {
        type: 'image',
        src: Pizza1,
        alt: 'PizzaPoint Menu & Cart Screenshot'
      },
      {
        type: 'image',
        src: Pizza2,
        alt: 'PizzaPoint Menu & Cart Screenshot'
      }
    ],
    githubUrl: 'https://github.com/YuvrajGupta1808/pizzapoint',
  },

];