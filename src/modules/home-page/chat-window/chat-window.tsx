import { Component } from './chat-window.styles';
import { useChatWindowLogic } from '@/modules/home-page/chat-window/hooks';
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
  const state = useChatWindowLogic();
  return (
    <Component.Container>
      <Component.ChatAIContainer>
        <Component.ChatHistory ref={state.chatHistoryRef}>
          {!state.conversation.length && (
            <Legend onSubmit={state.sendMessage} />
          )}
          {state.conversation.map(({ role, content }, index) => {
            return (
              <Component.ChatMessage
                key={`message-${role}-${index}`}
                $isUser={role === 'user'}
              >
                <Component.ChatMessageRole $isUser={role === 'user'}>
                  {role === 'user' ? 'You' : role}:
                </Component.ChatMessageRole>
                <Component.ChatMessageText>
                  <ReactMarkdown
                    // eslint-disable-next-line react/no-children-prop
                    children={content}
                    remarkPlugins={[remarkGfm]}
                    components={markdownComponents}
                  />
                </Component.ChatMessageText>
              </Component.ChatMessage>
            );
          })}
        </Component.ChatHistory>
        <Component.ChatAIControls>
          <Component.ChatAIControlsInner>
            {!isEmpty(state.conversation) && (
              <Button
                onClick={state.onClickCleanDB}
                disabled={state.showConversationLoading}
                className={'btn'}
              >
                <IconCleanDB />
              </Button>
            )}
          </Component.ChatAIControlsInner>
        </Component.ChatAIControls>
      </Component.ChatAIContainer>

      {/*-----------------------------*/}

      <Component.ChatUserContainer>
        {state.showConversationLoading && <Loading />}
        <Component.InputContainer>
          <Component.Input
            placeholder="Type your prompt here..."
            value={state.value}
            onInput={state.onInput}
            onKeyDown={state.onEnterPress}
            rows={1}
            ref={state.inputRef}
          />
          <Button
            onClick={state.onClickSendBtn}
            className={'btn'}
            disabled={!state.value}
          >
            <IconSend />
          </Button>
        </Component.InputContainer>
      </Component.ChatUserContainer>
    </Component.Container>
  );
}
export default ChatWindow;
