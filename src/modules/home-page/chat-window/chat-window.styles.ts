import styled from 'styled-components';

export const Component = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  `,
  AvatarContainer: styled.div`
    height: calc(100vh - 76px - calc(var(--spacing) * 3));
    padding: calc(var(--spacing) * 2);
    padding-bottom: 0;
  `,
  ChatHistory: styled.div`
    height: 100%;
    overflow: auto;
    max-width: 768px;
    margin: 0 auto;
  `,
  ChatMessage: styled.p<{ $isUser: boolean }>`
    display: flex;
    align-items: flex-start;
    gap: var(--spacing);
    color: ${({ $isUser }) => ($isUser ? '#c5e0ff' : 'white')};
    &:not(:last-child) {
      margin-bottom: var(--spacing);
      padding-bottom: var(--spacing);
      border-bottom: 1px dashed #bfcfff;
    }
  `,
  ChatMessageRole: styled.span<{ $isUser: boolean }>`
    display: flex;
    align-items: flex-start;
    color: ${({ $isUser }) => ($isUser ? '#809fff' : 'var(--color-matrix)')};
    text-transform: capitalize;
    flex-basis: 100px;
    min-width: 100px;
    max-width: 100px;
  `,
  ChatContainer: styled.div`
    height: max-content;
    flex: 100%;
    bottom: 0;
    left: 0;
    padding: calc(var(--spacing) * 2);
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--spacing);
  `,
  InputContainer: styled.div`
    width: 100%;
    flex-basis: 100%;
  `,
  Input: styled.textarea`
    display: block;
    flex: 100%;
    background-color: #0c162d;
    border: 1px solid #202637;
    border-radius: 6px;
    padding: calc(var(--spacing) * 2);
    height: 50px;
    width: 100%;
    resize: none;
    max-width: 768px;
    margin: 0 auto;
    &::-webkit-input-placeholder {
      color: #8193b2;
    }
  `,
};
