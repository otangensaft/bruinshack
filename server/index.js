const express = require("express")
const app = express()

app.get('/api/', (req, res) => {
  res.send("Hello Luke I am your father")
})

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});