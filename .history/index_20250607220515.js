require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const { User } = require("./models/User");

// bodyParser는 클라이언트에서 오는 정보를 서버에서 분석해서 가져올 수 있게 해줌
// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({exntended: true}));
// application/json
app.use(bodyParser.json);

const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${encodeURIComponent(process.env.MONGO_PASSWORD)}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB}`;

mongoose.connect(uri)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.error("MongoDB Connection Error:", err));

app.get('/', (req, res) => res.send("Hello world"));

app.post('/register', (req, res) => {
  // 회원가입 할 때 필요한 정보들을 client에서 가져오면 
  // 그것들을 데이터 베이스에 넣어준다. 
  const user = new User(req.body)

  // 정보들이 user 모델에 저장
  user.save((err, doc) => {
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));