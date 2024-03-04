import styled, { keyframes } from 'styled-components';
import openProps from "open-props";

const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const MediaScroller = styled.div`
  --_spacer: 1rem;
  display: grid;
  grid-auto-flow: column;
  gap: var(--_spacer);
  /* grid-auto-columns: 20%; */
  padding: 0 var(--_spacer) var(--_spacer);
  overflow: hidden;

  /* &.snaps-inline {
    scroll-snap-type: inline mandatory;
    scroll-padding-inline: var(--_spacer);
  } */

  &.scrolling {
    animation: ${scrollAnimation} 10s linear infinite;
  }

  & > * {
    scroll-snap-align: start;
  }
`;

export const MediaElement = styled.div`
    display: grid;
    grid-template-rows: min-content;
    gap: var(--_spacer);
    padding: var(--_spacer);
    background-color: #808080; 
    border-radius: var(--radius-2);
    box-shadow: var(--shadow-2);

    img {
        inline-size: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        gap: var(--spacer);
    }
`;

