// app/_data/project-data.js


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
        src: "/images/car.jpg",
        alt: 'Car front view'
      },
      {
        type: 'video',
        src: "https://sfsu.box.com/shared/static/chdcffwmz6f8aj95qdo7bpccep0rdmrj.mp4?raw=1",
        alt: 'Car demo video'
      },
      {
        type: 'image',
        src: "/images/car2.jpg",
        alt: 'Car side view'
      }
    ],
    githubUrl: '',
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
        src: "/images/GatorMart1.png",
        alt: 'GatorMart Home Page Screenshot'
      },
      {
        type: 'image',
        src: "/images/GatorMart2.png",
        alt: 'GatorMart Listing Management Screenshot'
      },
      {
        type: 'image',
        src: "/images/GatorMart3.png",
        alt: 'GatorMart Listing Management Screenshot'
      }
    ],
    githubUrl: '',
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
        src: "/images/Chess1.png",
        alt: 'Chess Game Board Screenshot'
      },,
      {
        type: 'video',
        src: "https://sfsu.box.com/shared/static/0g4bd7fy0ml6z6rogumt38v0hpexvy5f.mov?raw=1",
        alt: 'Car demo video'
      },
      {
        type: 'image',
        src: "/images/Chess3.png",
        alt: 'Custom Piece Variant Demo'
      }
    ],
    githubUrl: 'https://github.com/YuvrajGupta1808/chess',
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
        src: "/images/Pizza1.png",
        alt: 'PizzaPoint Home Page Screenshot'
      },
      {
        type: 'image',
        src: "/images/Pizza2.png",
        alt: 'PizzaPoint Menu & Cart Screenshot'
      },
      {
        type: 'image',
        src: "/images/Pizza3.png",
        alt: 'PizzaPoint Menu & Cart Screenshot'
      }
    ],
    githubUrl: 'https://github.com/YuvrajGupta1808/PizzaShop',
  },

];