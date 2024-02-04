import styled from 'styled-components';

export const Component = {
  Main: styled.main`
    position: relative;
    height: 100%;
    width: 100dvw;
    canvas {
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
    }
  `,
};
