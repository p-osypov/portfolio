const express = require('express');
const next = require('next');
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-8GpBJ6EHZVJpNTDOFZXaubzS",
    apiKey: process.env.OPEN_AI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const port = parseInt(process.env.PORT, 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    // Example proxy route to ChatGPT backend
    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, async (err) => {
        if (err) throw err;
        console.group(`===`.repeat(10));
        console.log(`Server started on ${port} PORT`);
        console.log(`===`.repeat(10));
        console.groupEnd();
        try {
            const { data } = await axios.listEngines();
            console.warn(data.data.map(({ id }) => id));
        }catch (e) {
            console.error(e);
        }

    });
});
