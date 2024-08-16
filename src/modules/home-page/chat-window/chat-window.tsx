import { SC } from './chat-window.styles';
import { useChatWindowLogic } from '@/modules/home-page/chat-window/chat-window.hooks';
import Loading from '@/components/loading';
import { isEmpty } from '@/utils/data';
import Button from '@/components/button';
import IconCleanDB from '@/assets/icons/jsx/icon-clean-db';
import IconSend from '@/assets/icons/jsx/icon-send';
import Legend from '@/modules/home-page/chat-window/legend';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import * as markdownComponents from './markdown-components';

function ChatWindow() {
  const {
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
  } = useChatWindowLogic();
  return (
    <SC.Container>
      <SC.ChatAIContainer>
        <SC.ChatHistory ref={chatHistoryRef}>
          {!conversation.length && <Legend onSubmit={sendMessage} />}
          {conversation.map(({ role, content }, index) => {
            return (
              <SC.ChatMessage
                key={`message-${role}-${index}`}
                $isUser={role === 'user'}
              >
                <SC.ChatMessageRole $isUser={role === 'user'}>
                  {role === 'user' ? 'You' : role}:
                </SC.ChatMessageRole>
                <SC.ChatMessageText>
                  <ReactMarkdown
                    // eslint-disable-next-line react/no-children-prop
                    children={content}
                    remarkPlugins={[remarkGfm]}
                    components={markdownComponents}
                  />
                </SC.ChatMessageText>
              </SC.ChatMessage>
            );
          })}
        </SC.ChatHistory>
        <SC.ChatAIControls>
          <SC.ChatAIControlsInner>
            {!isEmpty(conversation) && (
              <Button
                onClick={onClickCleanDB}
                disabled={showConversationLoading}
                className={'btn'}
              >
                <IconCleanDB />
              </Button>
            )}
          </SC.ChatAIControlsInner>
        </SC.ChatAIControls>
      </SC.ChatAIContainer>

      {/*-----------------------------*/}

      <SC.ChatUserContainer>
        {showConversationLoading && <Loading />}
        <SC.InputContainer>
          <SC.Input
            placeholder="Type your prompt here..."
            value={inputValue}
            onInput={onInput}
            onKeyDown={onEnterPress}
            rows={1}
            ref={inputRef}
          />
          <Button
            onClick={onClickSendBtn}
            className={'btn'}
            disabled={!inputValue}
          >
            <IconSend />
          </Button>
        </SC.InputContainer>
      </SC.ChatUserContainer>
    </SC.Container>
  );
}
export default ChatWindow;
