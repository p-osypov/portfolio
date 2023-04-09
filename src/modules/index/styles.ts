import styled from 'styled-components';

export const Component = {
  Main: styled.main`
    position: relative;
    min-height: 100vh;
    padding: var(--spacing);
    &::before,
    &::after {
      content: '';
      left: 50%;
      top: 50%;
      position: absolute;
      filter: blur(45px);
      transform: translate(-50%, -50%);
    }
    &::before {
      background: linear-gradient(
        to bottom right,
        rgba(1, 65, 255, 0),
        rgba(1, 65, 255, 0),
        rgba(1, 65, 255, 0.3)
      );
      border-radius: 50%;
      width: 480px;
      height: 360px;
      margin-left: -240px;
    }
    &::after {
      background: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));
      width: 240px;
      height: 180px;
      z-index: -1;
      top: 40%;
      left: 55%;
    }
  `,
};
