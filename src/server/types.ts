export type TMessage = {
  role: 'user' | 'assistant';
  content: string;
};
export type TConversation = TMessage[];
