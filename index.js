const express = require("express");
const app = express();
const port = 3000;

app.set('views', __dirname+'/views');
app.set('view engine', 'jade');

app.get('/', function(req, res){
  if (req.headers['sec-fetch-dest'] == 'iframe') {
    res.render('home', {
      id: req.query.chatbotId
    });
  } else {
    res.send('None')
  }
});

app.listen(port, () => {
  console.log(`jangle's chasebase API listening on port ${port}`);
});
