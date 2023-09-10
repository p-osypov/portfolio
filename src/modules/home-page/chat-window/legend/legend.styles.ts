import styled from 'styled-components';
import Button from '@/components/button';
export const Component = {
  Container: styled.section`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - calc(var(--spacing) * 4));
    max-width: 400px;
    border-radius: var(--border-radius);
    background-color: var(--color-gray);
    border: 1px solid var(--color-border-white);
  `,
  Header: styled.header`
    padding: calc(var(--spacing) * 2);
    padding-right: calc(var(--spacing) * 5);
    border-bottom: 1px solid var(--color-border-white);
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: calc(var(--spacing) * 2);
    font-size: 20px;
    .icon {
      font-style: normal;
      font-size: 26px;
    }
  `,
  Content: styled.div`
    padding: calc(var(--spacing) * 2);
  `,
  ContentCard: styled.p`
    line-height: 1.4;
    white-space: pre-line;
  `,
  Footer: styled.div`
    display: flex;
    justify-content: flex-end;
    padding: calc(var(--spacing) * 2);
    padding-top: 0;
  `,
  Button: styled(Button)`
    color: var(--color-matrix);
  `,
  ButtonClose: styled(Button)`
    position: absolute;
    top: var(--spacing);
    right: var(--spacing);
    .icon {
      height: 100%;
      width: 100%;
    }
  `,
};
