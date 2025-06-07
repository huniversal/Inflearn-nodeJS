require('dotenv').config();
// require -> Node.js에서 다른 파일이나 모듈을 불러오는 키워드
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const { User } = require("./models/Users");

// bodyParser는 클라이언트에서 오는 정보를 서버에서 분석해서 가져올 수 있게 해줌
// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// json 형식으로 데이터 요청
// application/json
app.use(bodyParser.json());

const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${encodeURIComponent(process.env.MONGO_PASSWORD)}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB}`;

mongoose.connect(uri)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.error("MongoDB Connection Error:", err));

app.get('/', (req, res) => res.send("Hello world 안녕하세요 저는 이훈진입니다. "));

app.post('/register', async (req, res) => {
  // 회원가입 할 때 필요한 정보들을 client에서 가져오면 
  // 그것들을 데이터 베이스에 넣어준다. 
  try {
    const user = new User(req.body)
    await user.save();
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(400).json({ success: false, err });
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));