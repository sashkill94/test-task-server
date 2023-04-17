import express, { Request, Response } from 'express';

const app = express();
const port = 5000;
app.get('/', (request: Request, response: Response) => {
  response.send('Hello world!');
});
app.listen(port, () => console.log(`Running on port ${port}`));