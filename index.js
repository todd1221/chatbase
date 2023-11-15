const express = require("express");
const app = express();
const port = 3000;

const cors = require('cors')
app.use(cors())

app.get("/", async function (req, res) {
  var url = 'https://www.chatbase.co/chatbot-iframe/o6U4lcYPq7OBFWrz-T3Nx';
  res.redirect(url)
});

app.listen(port, () => {
  console.log(`jangle's chasebase API listening on port ${port}`);
});
