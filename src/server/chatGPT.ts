import axios from 'axios';

export async function sendMessageToChatGPT(prompt: string): Promise<string> {
    const API_URL = 'https://api.openai.com/v1/chat/completions';

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPEN_AI_API_KEY}`,
    };

    const payload = {
        max_tokens: 100,
        model: "gpt-3.5-turbo",
        temperature: 0,
        "messages": [{"role": "user", "content": "Say this is a test!"}],
    };

    try {
        const response = await axios.post(API_URL, payload, { headers });
        return response.data.choices[0].message.content;
    } catch (error) {
        return 'Error: Unable to process your message';
    }
}
