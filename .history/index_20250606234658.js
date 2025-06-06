const express = require('express');
const app = express();
const port = 3000

mongosh "mongodb+srv://huniivers.w6utpi3.mongodb.net/" --apiVersion 1 --username hunivers --password gnswls3945@

app.get('/', (req, res) => res.send("Hello world"))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))