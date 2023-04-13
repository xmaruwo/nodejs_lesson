const express = require('express');
const app = express();
const port = 3000;

// テンプレートエンジンの指定
//app.set('views', './views')
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index.ejs');
  //  res.sendFile(`${__dirname}/views/hello.html`)
  console.log("/ へアクセスがありました")
})

app.get('/hello', (req, res) => {
  res.render('hello.ejs');
  console.log("/hello へアクセスがありました")
});

app.get('/top', (req, res) => {
  // トップ画面を表示
  res.render('top.ejs');
  console.log("/top へアクセスがありました");
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
});
