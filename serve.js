const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  database: 'nodejs_lesson'
});

// テンプレートエンジンの指定
//app.set('views', './views')
app.set('view engine', 'ejs');

// CSSおよび画像ファイル格納場所設定
app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.send('Hello World!');
//   console.log("/ へアクセスがありました")
// })

app.get('/hello', (req, res) => {
  res.render('hello.ejs');
  console.log("/hello へアクセスがありました")
});

app.get('/', (req, res) => {
  // トップ画面を表示
  res.render('top.ejs');
  console.log("/ へアクセスがありました");
});

app.get('/index', (req, res) => {
  connection.query(
    'SELECT * FROM items',
    (error, results) => {
      console.log(error);
      res.render('index.ejs', {items: results});
    }
  );

  // 一覧画面を表示
  // res.render('index.ejs');
  console.log("/index へアクセスがありました");
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
});
