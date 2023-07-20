import { Component } from './chat-window.styles';
import { useChatWindowLogic } from '@/modules/home-page/chat-window/hooks';
import Loading from '@/components/loading';
import { isEmpty } from '@/utils/data';
import Button from '@/components/button';
import IconCleanDB from '@/assets/icons/jsx/icon-clean-db';
import IconSend from '@/assets/icons/jsx/icon-send';
import { TypeAnimation } from 'react-type-animation';
import Legend from '@/modules/home-page/chat-window/legend';

function ChatWindow() {
  const {
    value,
    inputRef,
    onInput,
    conversation,
    onEnterPress,
    onClickSendBtn,
    onClickCleanDB,
    showConversationLoading,
    chatHistoryRef,
  } = useChatWindowLogic();
  return (
    <Component.Container>
      <Component.ChatAIContainer>
        <Component.ChatHistory ref={chatHistoryRef}>
          {!conversation.length && <Legend />}
          {conversation.map(({ role, content }, index, array) => {
            return (
              <Component.ChatMessage
                key={`message-${role}-${index}`}
                $isUser={role === 'user'}
              >
                <Component.ChatMessageRole $isUser={role === 'user'}>
                  {role === 'user' ? 'You' : role}:
                </Component.ChatMessageRole>
                <Component.ChatMessageText>
                  {role === 'assistant' && index === array.length - 1 ? (
                    <TypeAnimation
                      sequence={[content]}
                      speed={60}
                      cursor={false}
                    />
                  ) : (
                    content
                  )}
                </Component.ChatMessageText>
              </Component.ChatMessage>
            );
          })}
        </Component.ChatHistory>
        <Component.ChatAIControls>
          <Component.ChatAIControlsInner>
            {!isEmpty(conversation) && (
              <Button
                onClick={onClickCleanDB}
                disabled={showConversationLoading}
                className={'btn'}
              >
                <IconCleanDB />
              </Button>
            )}
          </Component.ChatAIControlsInner>
        </Component.ChatAIControls>
      </Component.ChatAIContainer>
      <Component.ChatUserContainer>
        {showConversationLoading && <Loading />}
        <Component.InputContainer>
          <Component.Input
            placeholder="Type your prompt here..."
            value={value}
            onInput={onInput}
            onKeyDown={onEnterPress}
            rows={1}
            ref={inputRef}
          />
          <Button onClick={onClickSendBtn} className={'btn'} disabled={!value}>
            <IconSend />
          </Button>
        </Component.InputContainer>
      </Component.ChatUserContainer>
    </Component.Container>
  );
}
export default ChatWindow;
