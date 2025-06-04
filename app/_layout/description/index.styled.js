'use client';

import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
  gap: 2.5rem;
  padding-block: clamp(4em, 12vw, 20em) clamp(5em, 14vh, 16em);
  padding-inline: clamp(2.5em, 4vw, 8em);

  @media screen and (min-width: ${({ theme }) => theme?.breakpoints?.lg}) {
    flex-wrap: revert;
  }
`;

export const Title = styled.h4`
  font-size: clamp(2em, 3vw, 3.6em);
  line-height: 1.45;
`;

export const SubTitle = styled.h4`
  font-size: clamp(1.8em, 2.2vw, 3em);
  line-height: 1.45;
`;

export const Paragraph = styled.h4`
  font-size: clamp(1.1em, 2.0vw, 1.4em);
  line-height: 1.45;
`;


export const Paragraph2 = styled.h4`
  font-size: clamp(0.4em, 1.8vw, 1.15em);
  line-height: 1.45;
`;