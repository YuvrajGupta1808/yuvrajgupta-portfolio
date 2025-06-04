/** @type {import('next').Metadata} */
export const rootMetadata = {
  basePath: '/yuvrajgupta-portfolio',
  metadataBase: new URL('https://YuvrajGupta1808.github.io/yuvrajgupta-portfolio/'),
  title: {
    template: '%s | Yuvraj Gupta',
    default: 'Yuvraj Gupta • Freelance Designer & Developer',
  },
  description:
    'Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Dennis',
  generator: 'Yuvraj Gupta',
  applicationName: 'Yuvraj Gupta',
  referrer: 'origin-when-cross-origin',
  keywords: ['Design', 'Develope', 'Freelance'],
  twitter: {
    card: 'summary_large_image',
    title: 'Yuvraj Gupta',
    description:
      'Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch.',
    images: {
      url: 'https://YuvrajGupta1808.github.io/yuvrajgupta-portfolio/screenshot.png',
      alt: 'Portfolio Screenshot',
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
