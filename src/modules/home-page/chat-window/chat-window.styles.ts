import styled from 'styled-components';
export const SC = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
  `,
  ChatAIContainer: styled.section`
    padding: var(--spacing-2);
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
    padding: 0 var(--spacing-2);
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
    padding: var(--spacing-2) var(--spacing-2) 42px var(--spacing-2);
    position: relative;
  `,
  ChatMessage: styled.div<{ $isUser: boolean }>`
    display: flex;
    align-items: flex-start;
    gap: var(--spacing);
    color: ${({ $isUser }) => ($isUser ? '#c5e0ff' : 'white')};
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
    max-width: calc(100% - 100px - var(--spacing));
    @media (max-width: 575px) {
      max-width: 100%;
    }
    ul,
    ol {
      padding: var(--spacing) var(--spacing) var(--spacing) var(--spacing-3);
      list-style-type: square;
      margin: var(--spacing-2) 0;
      display: flex;
      flex-direction: column;
      gap: var(--spacing);
      background-color: var(--color-bg-markdown);
      border: 1px solid var(--color-border-white);
      border-radius: var(--border-radius);
      li {
        &::marker {
          color: var(--color-matrix);
        }
      }
    }
    a {
      color: var(--color-link);
      &:hover {
        color: var(--color-focus);
        text-decoration: underline;
      }
    }
    .table-wrapper {
      overflow-x: auto;
      max-width: 100%;
    }
    table {
      border-collapse: separate;
      border: 1px solid var(--color-border-white);
      background-color: var(--color-bg-markdown);
      border-radius: var(--border-radius);
      margin: var(--spacing-2) 0;
      overflow: hidden;
      td,
      th {
        border: 1px solid var(--color-border-white);
        padding: var(--spacing);
      }
      /* Top-left corner */
      thead tr:first-child th:first-child {
        border-top-left-radius: calc(var(--border-radius) - 2px);
      }

      /* Top-right corner */
      thead tr:first-child th:last-child {
        border-top-right-radius: calc(var(--border-radius) - 2px);
      }

      /* Bottom-left corner */
      tr:last-child td:first-child {
        border-bottom-left-radius: calc(var(--border-radius) - 2px);
      }

      /* Bottom-right corner */
      tr:last-child td:last-child {
        border-bottom-right-radius: calc(var(--border-radius) - 2px);
      }
    }
  `,
  ChatUserContainer: styled.section`
    height: max-content;
    bottom: 0;
    left: 0;
    padding: var(--spacing-2);
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
    padding: var(--spacing-2) calc(var(--spacing) * 1.8);
    padding-right: 45px;
    line-height: 1;
    font-size: 16px;
    width: 100%;
    max-height: 112px;
    resize: none;
    color: white;
    overflow: auto;
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
