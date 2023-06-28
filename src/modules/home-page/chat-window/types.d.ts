import React, { Dispatch, SetStateAction } from 'react';
import { TConversation } from '@/server/types';

type TUseChatWindowLogic = {
  value: string;
  onInput: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  inputRef: React.MutableRefObject<HTMLTextAreaElement | null>;
  chatHistoryRef: React.useRef<HTMLDivElement> | null;
  conversation: TConversation;
  onEnterPress: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onClickSendBtn: () => void;
  showConversationLoading: boolean;
};
