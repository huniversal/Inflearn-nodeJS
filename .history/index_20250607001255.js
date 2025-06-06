require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${encodeURIComponent(process.env.MONGO_PASSWORD)}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB}`;

mongoose.connect(uri)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.error("MongoDB Connection Error:", err));

app.get('/', (req, res) => res.send("Hello world"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));