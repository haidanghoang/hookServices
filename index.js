const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/hooks', (req, res) => {
  console.log(req.body);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
