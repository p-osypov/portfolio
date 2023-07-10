import React, { useEffect, useState } from 'react';
import { TUseChatWindowLogic } from '@/modules/home-page/chat-window/types';
import axios from 'axios';
import { TConversation, TMessage } from '@/server/types';
import locStorage, { LOC_STORAGE_KEYS } from '@/utils/local-storage';

export const useChatWindowLogic = (): TUseChatWindowLogic => {
  const [value, setValue] = useState('');
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  const chatHistoryRef = React.useRef<HTMLDivElement>(null);
  const [conversation, setConversation] = useState<TConversation>([]);
  const [showConversationLoading, setShowConversationLoading] =
    useState<boolean>(false);

  const onInput: TUseChatWindowLogic['onInput'] = (e) => {
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
      locStorage.set<TConversation>(
        LOC_STORAGE_KEYS.conversation,
        newConversation
      );
      return newConversation;
    });
    setShowConversationLoading(false);
  };

  const onEnterPress: TUseChatWindowLogic['onEnterPress'] = (event) => {
    if (event.key === 'Enter' && !!value) {
      event.preventDefault(); // prevent the default action (form submission)
      void sendMessage(value);
    }
  };

  const onClickSendBtn = () => !!value && void sendMessage(value);

  const onClickCleanDB = () => {
    setConversation(
      locStorage.set<TConversation>(LOC_STORAGE_KEYS.conversation, [])
    );
  };

  useEffect(() => {
    inputRef.current?.focus();
    setConversation(
      locStorage.get<TConversation>(LOC_STORAGE_KEYS.conversation, [])
    );
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
    onClickCleanDB,
    showConversationLoading,
    chatHistoryRef,
  };
};
