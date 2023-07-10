import React from 'react';
import { TConversation } from '@/server/types';

export type TUseChatWindowLogic = {
  value: string;
  onInput: (_: React.ChangeEvent<HTMLTextAreaElement>) => void;
  inputRef: React.MutableRefObject<HTMLTextAreaElement | null>;
  chatHistoryRef: React.RefObject<HTMLDivElement>;
  conversation: TConversation;
  onEnterPress: (_: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onClickSendBtn: () => void;
  onClickCleanDB: () => void;
  showConversationLoading: boolean;
};
