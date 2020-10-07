const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let requests = [];

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello hooks</h1>
    ${JSON.stringify(requests, null, 2)}
  `);
});

const API_KEY = process.env.API_KEY || 'my-api-key';

app.post('/hooks/notifications', (req, res) => {
  if (req.headers['x-api-key'] !== API_KEY) {
    res.status(401).send('Unauthorized Request.');
    return;
  }

  res.json({
    ...req.body,
  });

  requests.push(req.body);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
