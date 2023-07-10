import React from 'react';
import { TConversation } from '@/server/types';

export type TUseChatWindowLogic = {
  value: string;
  onInput: () => void;
  inputRef: React.MutableRefObject<HTMLTextAreaElement | null>;
  chatHistoryRef: React.RefObject<HTMLDivElement>;
  conversation: TConversation;
  onEnterPress: () => void;
  onClickSendBtn: () => void;
  onClickCleanDB: () => void;
  showConversationLoading: boolean;
};
