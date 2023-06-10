import styled from 'styled-components';

export const Component = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  `,
  AvatarContainer: styled.div`
    height: calc(100vh - 50px - calc(var(--spacing) * 3));
    overflow: auto;
    padding: calc(var(--spacing) * 2);
  `,
  ChatHistory: styled.div`
    max-height: 100%;
    max-width: 768px;
    margin: 0 auto;
  `,
  ChatMessage: styled.p`
    display: flex;
    align-items: flex-start;
    margin-bottom: var(--spacing);
    padding-bottom: var(--spacing);
    border-bottom: 1px dashed #bfcfff;
    gap: var(--spacing);
  `,
  ChatMessageRole: styled.span<{ $isUser: boolean }>`
    display: flex;
    align-items: flex-start;
    color: ${({ $isUser }) => ($isUser ? '#809fff' : 'var(--color-matrix)')};
    text-transform: capitalize;
    flex-basis: 100px;
  `,
  ChatContainer: styled.div`
    height: max-content;
    width: 100vw;
    bottom: 0;
    left: 0;
    padding: calc(var(--spacing) * 2);
    display: flex;
    align-items: flex-end;
  `,
  InputWrapper: styled.div`
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
    height: 50px;
  `,
  Input: styled.textarea`
    flex: 0 1 100%;
    background-color: #0c162d;
    border: 1px solid #202637;
    border-radius: 6px;
    padding: calc(var(--spacing) * 2);
    height: 50px;
    width: 100%;
    resize: none;
    &::-webkit-input-placeholder {
      color: #8193b2;
    }
  `,
};
