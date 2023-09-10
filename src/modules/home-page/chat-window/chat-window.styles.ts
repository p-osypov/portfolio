import styled from 'styled-components';
export const Component = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100dvh;
  `,
  ChatAIContainer: styled.section`
    padding: calc(var(--spacing) * 2);
    padding-bottom: 0;
    flex: 1 1 auto;
    display: flex;
    overflow: hidden;
    position: relative;
    animation: fadeIn 0.3s ease-in-out;
  `,
  ChatAIControls: styled.div`
    position: absolute;
    bottom: var(--spacing);
    left: 0;
    width: 100%;
    padding: 0 calc(var(--spacing) * 2);
  `,
  ChatAIControlsInner: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    max-width: 768px;
    padding: 0 var(--spacing);
    margin: 0 auto;
  `,
  ChatHistory: styled.div`
    max-width: 768px;
    margin: 0 auto;
    overflow: auto;
    flex: 1 1 auto;
    background-color: var(--color-bg-chat-asistant);
    border: 1px solid var(--color-border);
    border-radius: 6px;
    padding: calc(var(--spacing) * 2);
    position: relative;
  `,
  ChatMessage: styled.div<{ $isUser: boolean }>`
    display: flex;
    align-items: flex-start;
    gap: var(--spacing);
    color: ${({ $isUser }) => ($isUser ? '#c5e0ff' : 'white')};
    white-space: pre-wrap;
    @media (max-width: 575px) {
      flex-direction: column;
    }
    &:not(:last-child),
    &:first-child {
      margin-bottom: var(--spacing);
      padding-bottom: var(--spacing);
      border-bottom: 1px dashed #bfcfff;
    }
  `,
  ChatMessageRole: styled.span<{ $isUser: boolean }>`
    display: flex;
    align-items: flex-start;
    color: var(--color-${({ $isUser }) => ($isUser ? 'user' : 'matrix')});
    text-transform: capitalize;
    min-width: 100px;
    max-width: 100px;
  `,
  ChatMessageText: styled.div`
    display: block;
    flex: 1;
  `,
  ChatUserContainer: styled.section`
    height: max-content;
    bottom: 0;
    left: 0;
    padding: calc(var(--spacing) * 2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    gap: var(--spacing);
    position: relative;
    animation: fadeIn 0.7s ease-out;
  `,
  InputContainer: styled.div`
    width: 100%;
    flex: 100%;
    max-height: max-content;
    max-width: 768px;
    margin: 0 auto;
    position: relative;
    .btn {
      position: absolute;
      right: var(--spacing);
      top: 6px;
    }
  `,
  Input: styled.textarea`
    display: block;
    background-color: var(--color-input);
    border: 1px solid var(--color-border);
    border-radius: 6px;
    padding: calc(var(--spacing) * 2);
    padding-right: 45px;
    line-height: 1;
    font-size: 16px;
    width: 100%;
    max-height: 112px;
    resize: none;
    color: white;
    overflow: hidden;
    font-family: 'Source Sans Pro', sans-serif;
    &:focus,
    &:focus-visible {
      outline: 2px solid var(--color-focus);
    }
    &::-webkit-input-placeholder {
      color: #8193b2;
    }
  `,
};
