import 'dotenv/config';
import express, { Express } from 'express';

const app: Express = express();

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
