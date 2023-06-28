import { Component } from './chat-window.styles';
import { useChatWindowLogic } from '@/modules/home-page/chat-window/hooks';
import Loading from '@/components/loading';
import { isEmpty } from '@/utils/data';

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
        <Component.ChatAIControls>
          {!isEmpty(conversation) && (
            <Component.BtnCleanDB
              onClick={onClickCleanDB}
              disabled={showConversationLoading}
            >
              <Component.BtnCleanDBIcon />
            </Component.BtnCleanDB>
          )}
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
          <Component.BtnSubmit onClick={onClickSendBtn}>
            <Component.BtnSubmitIcon />
          </Component.BtnSubmit>
        </Component.InputContainer>
      </Component.ChatUserContainer>
    </Component.Container>
  );
}
export default ChatWindow;
