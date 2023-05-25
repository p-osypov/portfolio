import { Component } from '@/modules/home-page/chat-window/styles';

function ChatWindow() {
  return (
    <Component.Container>
      <Component.InputWrapper>
        <Component.Input placeholder="Type your prompt here" />
      </Component.InputWrapper>
    </Component.Container>
  );
}
export default ChatWindow;
