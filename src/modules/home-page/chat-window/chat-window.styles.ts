import styled from 'styled-components';
import cssVariables from '@/assets/style/variables';
import { lighten } from 'polished';
export const Component = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
  `,
  ChatAIContainer: styled.div`
    padding: calc(var(--spacing) * 2);
    padding-bottom: 0;
    flex: 1 1 auto;
    display: flex;
    overflow: hidden;
    position: relative;
    animation: fadeIn 0.3s ease-in-out;
  `,
  ChatAIControls: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    position: absolute;
    bottom: var(--spacing);
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 768px;
    padding: 0 var(--spacing);
  `,
  ChatHistory: styled.div`
    max-width: 768px;
    margin: 0 auto;
    overflow: auto;
    flex: 1 1 auto;
    background-color: ${lighten(0.05, cssVariables.colorPrimaryDark)};
    border: 1px solid var(--color-border);
    border-radius: 6px;
    padding: calc(var(--spacing) * 2);
  `,
  ChatMessage: styled.p<{ $isUser: boolean }>`
    display: flex;
    align-items: flex-start;
    gap: var(--spacing);
    color: ${({ $isUser }) => ($isUser ? '#c5e0ff' : 'white')};
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    gap: var(--spacing);
    position: relative;
    animation: fadeIn 0.3s ease-out;
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
    line-height: 1;
    font-size: 16px;
    width: 100%;
    max-height: 112px;
    resize: none;
    &::-webkit-input-placeholder {
      color: #8193b2;
    }
  `,
};
