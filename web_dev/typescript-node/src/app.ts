import express, { Express } from 'express';

const app: Express = express();

app.get('/', (req, res) => {
  res.redirect('/api-docs');
});

app.listen(5000, () => console.log('Server running'));
