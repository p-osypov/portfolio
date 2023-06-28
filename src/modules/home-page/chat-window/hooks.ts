import React, { KeyboardEventHandler, useEffect, useState } from 'react';
import { TUseChatWindowLogic } from '@/modules/home-page/chat-window/types';
import axios from 'axios';
import { TConversation, TMessage } from '@/server/types';

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
    const userData: TMessage = { role: 'user', content };
    setValue(() => '');
    setConversation((prevState) => [...prevState, userData]);
    setShowConversationLoading(true);
    const reqData = [...conversation, userData];
    const { data } = await axios.post('/api/gpt', { conversation: reqData });
    setConversation((prevState) => {
      const newConversation = [...prevState, data];
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

  const onClickSendBtn = () => {
    void sendMessage(value);
  };
  useEffect(() => {
    inputRef.current?.focus();
    setConversation(JSON.parse(localStorage.getItem('conversation') || '[]'));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      chatHistoryRef.current?.scrollTo({
        top: chatHistoryRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }, 100); // delay of 0ms, just to push the operation to the end of the event queue
  }, [conversation]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [value]);
  return {
    value,
    inputRef,
    onInput,
    conversation,
    onEnterPress,
    onClickSendBtn,
    showConversationLoading,
    chatHistoryRef,
  };
};
