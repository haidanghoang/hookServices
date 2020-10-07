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

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
