import express from 'express';
import cors from 'cors';
import next from 'next';
import routes from './routes';

const port = parseInt(process.env.PORT as string, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

server.use(cors({ origin: '*' }));
server.use(express.json());
server.use(routes);

app.prepare().then(() => {
  server.all('*', (req, res) => handle(req, res));

  server.listen(port, () => {
    console.log('_'.repeat(31));
    console.log('|', `Server started on ${port} PORT`, '|');
    console.log('-'.repeat(31));
  });
});
