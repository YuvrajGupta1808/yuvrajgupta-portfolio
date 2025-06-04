import animatePlugin from 'tailwindcss-animate';
import { tailwindPlugin } from './app/_lib/tailwindPlugin.js';

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ['./components/**/*.{js,jsx,mdx}', './app/**/*.{js,jsx,mdx}'],
  plugins: [tailwindPlugin, animatePlugin],
};

module.exports = tailwindConfig;
