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

app.post('/hooks', (req, res) => {
  res.json({
    response: 'Received.',
    ...req.body,
  });
  requests.push(req.body);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
