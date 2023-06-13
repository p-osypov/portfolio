import { Component } from './chat-window.styles';
import { useChatWindowLogic } from '@/modules/home-page/chat-window/hooks';
import Loading from '@/components/loading';

function ChatWindow() {
  const {
    value,
    inputRef,
    onInput,
    conversation,
    onEnterPress,
    showConversationLoading,
    chatHistoryRef,
  } = useChatWindowLogic();
  return (
    <Component.Container>
      <Component.AvatarContainer>
        <Component.ChatHistory ref={chatHistoryRef}>
          {conversation.map(({ role, content }, index) => {
            return (
              <Component.ChatMessage
                key={`message-${role}-${index}`}
                $isUser={role === 'user'}
              >
                <Component.ChatMessageRole $isUser={role === 'user'}>
                  {role === 'user' ? 'You' : role}:
                </Component.ChatMessageRole>
                {content}
              </Component.ChatMessage>
            );
          })}
        </Component.ChatHistory>
      </Component.AvatarContainer>
      <Component.ChatContainer>
        {showConversationLoading && <Loading />}
        <Component.InputContainer>
          <Component.Input
            placeholder="Type your prompt here..."
            value={value}
            onInput={onInput}
            onKeyDown={onEnterPress}
            ref={inputRef}
          />
        </Component.InputContainer>
      </Component.ChatContainer>
    </Component.Container>
  );
}
export default ChatWindow;
