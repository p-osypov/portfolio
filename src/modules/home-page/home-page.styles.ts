import styled from 'styled-components';

export const Component = {
  Main: styled.main`
    position: relative;
    min-height: 100vh;

    canvas {
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      width: 100vw;
      height: 100vh;
    }
  `,
};
