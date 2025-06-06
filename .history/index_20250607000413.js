const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://hunivers:gnswls3945@@huniivers.w6utpi3.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send("Hello world"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));