const express = require("express");
const app = express();
const port = 3000;
const CryptoJS = require("crypto-js")

const cors = require('cors')
app.use(cors())

app.get("/", async function (req, res) {
  const encrypted = req._parsedUrl.query
  const decrypt = CryptoJS.AES.decrypt(encrypted, "jangle-fortuitas").toString(CryptoJS.enc.Utf8);

  res.send(decrypt)
  // if (req.headers['sec-fetch-dest'] == 'iframe') {
  //   res.redirect(`https://www.chatbase.co/chatbot-iframe/${decrypt}`)
  // } else {
  //   res.send('None')
  // }  
});

app.listen(port, () => {
  console.log(`jangle's chasebase API listening on port ${port}`);
});
