interface Message {
  text: string;
  isUser: boolean;
}

export function saveMessageToHistory(message: string, isUser: boolean): void {
  const history = getConversationHistory();

  const newMessage: Message = {
    text: message,
    isUser: isUser,
  };

  history.push(newMessage);
  localStorage.setItem('conversationHistory', JSON.stringify(history));
}

export function getConversationHistory(): Message[] {
  const history = JSON.parse(
    localStorage.getItem('conversationHistory') || '[]'
  );
  if (history) return history;
  return [];
}

export function clearConversationHistory(): void {
  localStorage.removeItem('conversationHistory');
}
