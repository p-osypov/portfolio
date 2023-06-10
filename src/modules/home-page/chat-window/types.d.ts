import React from 'react';
import { TConversation } from '@/server/types';

type TUseChatWindowLogic = {
  value: string;
  onInput: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  inputRef: React.MutableRefObject<HTMLTextAreaElement | null>;
  conversation: TConversation;
  onEnterPress: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
};
