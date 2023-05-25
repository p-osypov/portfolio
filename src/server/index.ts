const express = require('express');
const cors = require('cors');
const next = require('next');
const routes = require('./routes');
// @ts-ignore
const port = parseInt(process.env.PORT, 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();
server.use(cors({ origin: '*' }));
server.use(express.json());
server.use(routes.default);

app.prepare().then(() => {
  // @ts-ignore
  server.all('*', (req, res) => handle(req, res));

  server.listen(port, async (err: unknown) => {
    if (err) throw err;
    console.log('_'.repeat(31));
    console.log('|', `Server started on ${port} PORT`, '|');
    console.log('-'.repeat(31));
  });
});
