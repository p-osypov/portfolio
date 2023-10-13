import styled from 'styled-components';

export const Component = {
  Container: styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    min-height: 100vh;
  `,
  Cloud: styled.div`
    position: fixed;
    height: 100dvh;
    width: 100vw;
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
  Gates: styled.div<{ $open: boolean }>`
    &::before,
    &::after {
      content: '';
      position: fixed;
      z-index: -1;
      width: 100vw;
      height: 50vh;
      left: 0;
      background: linear-gradient(to bottom, transparent, rgb(0, 0, 0))
        rgb(0, 0, 0);
      transition: ${({ $open }) => ($open ? '0.3s ease-in-out' : 'initial')};
      transition-delay: 0.5s;
    }
    &::before {
      top: 0;
      transform: translateY(${({ $open }) => ($open ? '-100%' : '0')});
    }
    &::after {
      bottom: 0;
      transform: translateY(${({ $open }) => ($open ? '100%' : '0')});
    }
  `,
  PowerButtonWrapper: styled.div`
    display: flex;
    justify-content: center;
    flex-basis: 100%;
  `,
  PowerButton: styled.div<{ $fastBorderAnimation: boolean }>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75px;
    height: 75px;
    padding: 25px 10px;
    transform: translateZ(0);
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: 0 2px 8px -1px #0000001a;
    cursor: pointer;
    transition: 0.3s ease-out;
    &:hover {
      transform: scale(1.05);
    }
    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    &::before,
    &::after {
      content: '';
      position: absolute;
      z-index: -1;
    }
    &::before {
      animation: ${(p) => (p.$fastBorderAnimation ? '0.5s' : '4s')} rotate
        linear infinite;
      width: 200%;
      height: 200%;
      background: conic-gradient(
        #ffffff80,
        #ffffff40,
        #ffffff30,
        #ffffff20,
        #ffffff10,
        #ffffff10,
        #ffffff80
      );
      @media (prefers-reduced-motion) {
        animation: none;
      }
    }
    &::after {
      inset: 0;
      padding: 1px;
      border-radius: var(--border-radius);
      background: linear-gradient(
        to bottom right,
        rgba(2, 13, 46, 1),
        rgba(2, 5, 19, 1)
      );
      background-clip: content-box;
    }
    svg {
      width: 100%;
      height: 100%;
    }
  `,
  Title: styled.h1`
    flex-basis: 100%;
    text-align: center;
    margin-top: var(--spacing-2);
    & > span::after {
      content: '█' !important;
    }
    @media (max-width: 575px) {
      font-size: 20px;
    }
  `,
};
