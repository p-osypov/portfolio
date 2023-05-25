import styled from 'styled-components';

export const Component = {
  Container: styled.div`
    position: fixed;
    height: 50vh;
    width: 100vw;
    bottom: 0;
    left: 0;
    padding: var(--spacing);
  `,
  InputWrapper: styled.div`
    width: 100%;
    max-width: 768px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-content: flex-end;
  `,
  Input: styled.textarea`
    flex: 0 1 100%;
    
  `,
};
