/** @type {import('next').Metadata} */
export const rootMetadata = {
  metadataBase: new URL('https://yuvraj-gupta-portfolio.vercel.app/'),
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
  authors: [
    { name: 'Ali Bagheri', url: 'https://www.github.com/alibagheri2079' },
  ],
  creator: 'Ali Bagheri',
  publisher: 'Ali Bagheri',
  twitter: {
    card: 'summary_large_image',
    title: 'Yuvraj Gupta',
    description:
      'Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Dennis',
    siteId: '1467726470533754880',
    creator: '@AliBagheri2079',
    creatorId: '1467726470533754880',
    images: {
      url: 'https://yuvraj-gupta-portfolio.vercel.app/screenshot.png',
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
