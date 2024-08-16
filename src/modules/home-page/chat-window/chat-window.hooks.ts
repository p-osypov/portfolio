import React, { useEffect, useState } from 'react';
import { TUseChatWindowLogic } from '@/modules/home-page/chat-window/chat-windows.types';
import axios from 'axios';
import { TConversation, TMessage } from '@/server/types';
import { toast } from 'react-toastify';
import {
  LOC_STORAGE_KEYS,
  useLocalStorageContext,
} from '@/context/local-storage';

export const useChatWindowLogic = (): TUseChatWindowLogic => {
  const ls = useLocalStorageContext();
  const [inputValue, setInputValue] = useState('');
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  const chatHistoryRef = React.useRef<HTMLDivElement>(null);
  const [conversation, setConversation] = useState<TConversation>(() =>
    ls.get<TMessage[]>(LOC_STORAGE_KEYS.conversation, []),
  );
  const [showConversationLoading, setShowConversationLoading] =
    useState<boolean>(false);

  const onInput: TUseChatWindowLogic['onInput'] = (e) => {
    setInputValue(e.target.value);
  };

  const sendMessage = async (content: string) => {
    const userData: TMessage = { role: 'user', content };
    setInputValue(() => '');
    setConversation((prevState) => [...prevState, userData]);
    setShowConversationLoading(true);
    const reqData = [...conversation, userData];

    try {
      const { data } = await axios.post('/api/conversation', {
        conversation: reqData,
      });
      setConversation((prevState) => {
        const newConversation = [...prevState, data];
        return ls.set<TConversation>(
          LOC_STORAGE_KEYS.conversation,
          newConversation,
        );
      });
    } catch (e) {
      toast.error(`Something went wrong.\n Please try again later.`);
    } finally {
      setShowConversationLoading(false);
    }
  };

  const onEnterPress: TUseChatWindowLogic['onEnterPress'] = (event) => {
    if (event.key === 'Enter' && !!inputValue) {
      event.preventDefault(); // prevent the default action (form submission)
      void sendMessage(inputValue);
    }
  };

  const onClickSendBtn = () => !!inputValue && void sendMessage(inputValue);

  const onClickCleanDB = () => {
    setConversation(ls.set<TConversation>(LOC_STORAGE_KEYS.conversation, []));
  };

  useEffect(() => {
    inputRef.current?.focus();
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
  }, [inputValue]);

  return {
    inputValue,
    inputRef,
    onInput,
    conversation,
    onEnterPress,
    onClickSendBtn,
    onClickCleanDB,
    sendMessage,
    showConversationLoading,
    chatHistoryRef,
  };
};
