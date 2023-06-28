import styled from 'styled-components';
import IconSend from '@/assets/icons/jsx/icon-send';
import IconCleanDB from '@/assets/icons/jsx/icon-clean-db';
import cssVariables from '@/assets/style/variables';
import { lighten } from 'polished';
export const Component = {
  Container: styled.button<{ height?: number; width?: number }>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${({ height }) => height || 36}px;
    width: ${({ width }) => width || 36}px;
    cursor: pointer;
    background-color: var(--color-primary-dark);
    border: 1px solid var(--color-border);
    border-radius: 5px;
    overflow: hidden;
    &[disabled] {
      cursor: not-allowed;
      opacity: 0.5;
    }
    &:hover {
      transform: scale(1.05);
      background-color: ${lighten(0.1, cssVariables.colorPrimaryDark)};
      .icon-bg {
        fill: ${lighten(0.1, cssVariables.colorPrimaryDark)};
      }
    }
    &:active {
      transform: scale(0.95);
    }

    .icon {
      display: block;
      height: 90%;
      width: 90%;
    }
  `,
};
