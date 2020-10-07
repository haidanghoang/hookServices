const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Hello Hook</h1>');
})

app.post('/hooks', (req, res) => {
  res.json({
    response: 'Received.',
    ...req.body,
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
