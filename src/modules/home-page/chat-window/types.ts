import React from 'react';
import { TConversation } from '@/server/types';

export type TUseChatWindowLogic = {
  value: string;
  onInput: (_event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  inputRef: React.MutableRefObject<HTMLTextAreaElement | null>;
  chatHistoryRef: React.RefObject<HTMLDivElement>;
  conversation: TConversation;
  onEnterPress: (_event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onClickSendBtn: () => void;
  onClickCleanDB: () => void;
  sendMessage: (_content: string) => void;
  showConversationLoading: boolean;
};
