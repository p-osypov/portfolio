import React, { KeyboardEventHandler, useEffect, useState } from 'react';
import { TUseChatWindowLogic } from '@/modules/home-page/chat-window/types';
import axios from 'axios';
import { TConversation } from '@/server/types';

export const useChatWindowLogic = (): TUseChatWindowLogic => {
  const [value, setValue] = useState('');
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  const chatHistoryRef = React.useRef<HTMLDivElement>(null);
  const [conversation, setConversation] = useState<TConversation>([]);
  const [showConversationLoading, setShowConversationLoading] =
    useState<boolean>(false);
  const onInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const sendMessage = async (content: string) => {
    setValue(() => '');
    setShowConversationLoading(true);
    const userData = { role: 'user', content };
    const reqData = [...conversation, userData];
    const { data } = await axios.post('/api/gpt', { conversation: reqData });
    setConversation((prevState) => {
      const newConversation = [...prevState, userData, data];
      localStorage.setItem('conversation', JSON.stringify(newConversation));
      return newConversation;
    });
    setShowConversationLoading(false);
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

  useEffect(() => {
    chatHistoryRef?.current?.scrollTo({
      top: chatHistoryRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [conversation]);

  return {
    value,
    inputRef,
    onInput,
    conversation,
    onEnterPress,
    showConversationLoading,
    chatHistoryRef,
  };
};
