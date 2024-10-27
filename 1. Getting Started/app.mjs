import express from 'express';

import connectToDatabase from './helpers.mjs'

const app = express();

app.get('/ping', (req, res) => {
  res.send('<h2>Pong! 🏓</h2>');
});

await connectToDatabase();

app.listen(3000);
