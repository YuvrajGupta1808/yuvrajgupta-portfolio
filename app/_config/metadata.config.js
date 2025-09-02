/** @type {import('next').Metadata} */
export const rootMetadata = {
  metadataBase: new URL('https://yuvrajgupta.com'),
    icons: {
    icon: '/favicon.png',
  },
  title: {
    template: '%s | Yuvraj Gupta',
    default: 'Yuvraj Gupta • Freelance Designer & Developer',
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
