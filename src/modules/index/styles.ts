import styled from "styled-components";

export const Component = {
    Main: styled.main`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      min-height: 100vh;
    `,
    Center: styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      height: 100vh;
      width: 100vw;
      padding: var(--spacing);
      &::before {
        background: var(--secondary-glow);
        border-radius: 50%;
        width: 480px;
        height: 360px;
        margin-left: -400px;
      }
      &::after {
        background: var(--primary-glow);
        width: 240px;
        height: 180px;
        z-index: -1;
      }
      &::before,
      &::after {
        content: '';
        left: 50%;
        position: absolute;
        filter: blur(45px);
        transform: translateZ(0);
      }
      @media (max-width: 700px) {
        padding: 8rem 0 6rem;
        &::before {
          transform: none;
          height: 300px;
        }
      }
    `,
    PowerButton: styled.div`
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
        animation: 5s rotate linear infinite;
        width: 200%;
        height: 200%;
        background: var(--tile-border);
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
                rgba(var(--tile-start-rgb), 1),
                rgba(var(--tile-end-rgb), 1)
        );
        background-clip: content-box;
      }
      svg {
        width: 100%;
        height: 100%;
      }
    `
}
