const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Hello Hook</h1>');
})

app.post('/hooks', (req, res) => {
  res.json({
    message: 'Received.',
    ...req.body,
  });
});



app.listen(3000, () => {
  console.log('Listening on port 3000');
});
