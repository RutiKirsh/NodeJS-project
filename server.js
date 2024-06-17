import { configDotenv } from 'dotenv';
import  express  from 'express';
import VolunteersRouter from './src/routers/VolunteersRouter.js';
import HelpRequestRouter from './src/routers/HelpRequestRouter.js';

configDotenv();
const server = express();
const hostname = process.env.HOST_NAME;
const port = process.env.PORT||3001;

server.use(express.json());

server.use('/api/Volunteers', VolunteersRouter);
server.use('/api/HelpRequests', HelpRequestRouter);
server.use('/', (req, res) => {
    res.send('welcome to our api');
});

server.listen(port, hostname, () => {
    console.log(`Server running at  http://${hostname}:${port}/`)
})