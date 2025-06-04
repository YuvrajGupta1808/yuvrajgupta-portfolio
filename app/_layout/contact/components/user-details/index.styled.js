'use client';

import { styled } from 'styled-components';

const containerValue = ({ theme }) => theme?.breakpoints?.container;

export const Container = styled.div`
  width: 100%;
  padding: 0 0 2rem 0;

  @media screen and (min-width: ${containerValue}) {
    max-width: ${containerValue};
  }
`;

export const AvatarWrapper = styled.div`
  --avatar-size: clamp(8rem, 12vw, 14rem);
  width: var(--avatar-size);
  height: var(--avatar-size);

  position: relative;
  border-radius: 20px; /* perfect circle */
  overflow: hidden;
`;


export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: clamp(2rem, 2.2vw, 3.2rem);
`;

export const ImageWrapper = styled.div`
  --image-size: clamp(4.5em, 6.5vw, 8em);

  
  position: relative;
  width: var(--image-size);
  height: var(--image-size);
`;

export const ImageWrapper2 = styled.div`
  --image-size: clamp(6em, 20vw, 21em);
  overflow: hidden;
  border-radius: 20rem; /* perfect circle */
  position: relative;
  width: var(--image-size);
  height: var(--image-size);
`;

export const MainTitle = styled.h2`
  font-size: calc(clamp(3.25em, 7vw, 8em) * 0.6);
  line-height: 1.1;
  width: 100%;
`;
