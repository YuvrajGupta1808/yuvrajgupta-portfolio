import chess from '../assets/chess2.png';
import GatorMart1 from '../assets/GatorMart1.png';
import GatorMart2 from '../assets/GatorMart2.png';
import Pizza from '../assets/Pizza2.png';


export const projectOptions = {
  first: [
    {
      type: 'image',
      source: GatorMart1,
    },
    {
      type: 'video',
      source: '/videos/Car1.mp4',
    },
    {
      type: 'image',
      source: Pizza,
    },
    {
      type: 'video',
      source: '/videos/chess1.mov',
    },
  ],
  second: [
    {
      type: 'image',
      source: chess,
    },    
    {
      type: 'video',
      source: '/videos/Car2.mp4',
    },
    {
      type: 'image',
      source: GatorMart2,
    },
    {
      type: 'video',
      source: '/videos/videoapp1.mov',
    },
  ],
};
