import React, { KeyboardEventHandler, useEffect, useState } from 'react';
import { TUseChatWindowLogic } from '@/modules/home-page/chat-window/types';
import axios from 'axios';
import { TConversation } from '@/server/types';

export const useChatWindowLogic = (): TUseChatWindowLogic => {
  const [value, setValue] = useState('');
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  const [conversation, setConversation] = useState<TConversation>([]);

  const onInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const sendMessage = async (content: string) => {
    const userData = { role: 'user', content };
    const reqData = [...conversation, userData];
    const { data } = await axios.post('/api/gpt', { conversation: reqData });
    setValue(() => '');
    setConversation((prevState) => {
      const newConversation = [...prevState, userData, data];
      localStorage.setItem('conversation', JSON.stringify(newConversation));
      return newConversation;
    });
  };

  const onEnterPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // prevent the default action (form submission)
      void sendMessage(value);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
    setConversation(JSON.parse(localStorage.getItem('conversation') || '[]'));
  }, []);

  return {
    value,
    inputRef,
    onInput,
    conversation,
    onEnterPress,
  };
};
