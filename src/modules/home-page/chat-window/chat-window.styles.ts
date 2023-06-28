import styled from 'styled-components';

export const Component = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
  `,
  CharAIContainer: styled.div`
    padding: calc(var(--spacing) * 2);
    padding-bottom: 0;
    flex: 1 1 auto;
    display: flex;
    overflow: hidden;
  `,
  ChatHistory: styled.div`
    max-width: 768px;
    margin: 0 auto;
    overflow: auto;
    flex: 1 1 auto;
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
  ChatUserContainer: styled.div`
    height: max-content;
    bottom: 0;
    left: 0;
    padding: calc(var(--spacing) * 2);
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    flex-shrink: 0;
    justify-content: center;
    gap: var(--spacing);
  `,
  InputContainer: styled.div`
    width: 100%;
    flex: 100%;
    max-height: max-content;
  `,
  Input: styled.textarea`
    display: block;
    background-color: #0c162d;
    border: 1px solid #202637;
    border-radius: 6px;
    padding: calc(var(--spacing) * 2);
    line-height: 1;
    font-size: 16px;
    width: 100%;
    max-height: 112px;
    resize: none;
    max-width: 768px;
    margin: 0 auto;
    &::-webkit-input-placeholder {
      color: #8193b2;
    }
  `,
};
