import styled from 'styled-components';

export const Component = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    width: 10px;
    height: 10px;
    margin: 0 2px;
    background: var(--color-matrix);
    animation: loading 1s infinite;
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
  @keyframes loading {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    50% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(-10px);
    }
  }
`;
