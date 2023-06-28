import styled from 'styled-components';
import IconSend from '@/assets/icons/jsx/icon-send';
import IconCleanDB from '@/assets/icons/jsx/icon-clean-db';

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
  `,
  ChatAIControls: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 768px;
    padding: 0 var(--spacing);
  `,
  BtnCleanDB: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    width: 36px;
    cursor: pointer;
    background-color: var(--color-primary-dark);
    border: 1px solid var(--color-border);
    border-radius: 5px;
    transition: 0.1s;
    &[disabled] {
      cursor: not-allowed;
      opacity: 0.5;
    }
    &:hover {
      transform: scale(1.05);
      background-color: lighten(var(--color-primary-dark), 5%);
      #icon-clean-db-bg {
        fill: lighten(var(--color-primary-dark), 5%);
      }
    }
    &:active {
      transform: scale(0.95);
    }
  `,
  BtnCleanDBIcon: styled(IconCleanDB)`
    display: block;
    height: 90%;
    width: 90%;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    gap: var(--spacing);
    position: relative;
  `,
  InputContainer: styled.div`
    width: 100%;
    flex: 100%;
    max-height: max-content;
    max-width: 768px;
    margin: 0 auto;
    position: relative;
  `,
  Input: styled.textarea`
    display: block;
    background-color: #0c162d;
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
  BtnSubmit: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: var(--spacing);
    top: 6px;
    height: 36px;
    width: 36px;
    cursor: pointer;
    background-color: var(--color-primary-dark);
    border: 1px solid var(--color-border);
    border-radius: 5px;
    transition: 0.1s;
    &:hover {
      transform: scale(1.05);
      background-color: lighten(var(--color-primary-dark), 5%);
      #icon-send-bg {
        fill: lighten(var(--color-primary-dark), 5%);
      }
    }
    &:active {
      transform: scale(0.95);
    }
  `,
  BtnSubmitIcon: styled(IconSend)`
    display: block;
    height: 90%;
    width: 90%;
  `,
};
