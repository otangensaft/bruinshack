const express = require("express")
const app = express()

app.get('/api/', (req, res) => {
  res.send("Hello Luke I am your father")
})

app.listen(3000)