require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

const { User } = require("./models/User");

const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${encodeURIComponent(process.env.MONGO_PASSWORD)}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB}`;

mongoose.connect(uri)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.error("MongoDB Connection Error:", err));

app.get('/', (req, res) => res.send("Hello world"));

app.post('/register', (req, res) => {
  // 회원가입 할 때 필요한 정보들을 client에서 가져오면 
  // 그것들을 데이터 베이스에 넣어준다. 
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));