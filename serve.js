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
// フォームの値を受け取るための設定
app.use(express.urlencoded({extended: false}));

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
      if(error) {
        console.log(error);
      }
      // 一覧画面を表示
      res.render('index.ejs', {items: results});
      console.log("/index へアクセスがありました");
    }
  );
});

app.get('/new', (req, res) => {
  // 新規作成画面を表示
  res.render('new.ejs');
  console.log("/new へアクセスがありました");
});

app.post('/create', (req, res) => {
  console.log("/create へアクセスがありました");

  // データ追加
  connection.query(
    'INSERT INTO items (name) VALUES (?)',
    [req.body.itemName],
    (error, results) => {
      if(error) {
        console.log(error);
      }
      // 一覧画面へリダイレクト
      res.redirect('/index');
    }
  );
});

app.post('/delete/:id', (req, res) => {
  console.log('/delete へアクセスがありました');

  // データ削除
  connection.query(
    'DELETE FROM items WHERE id = ?',
    [req.params.id],
    (error, results) => {
      if(error) {
        console.log(error);
      }
      // 一覧画面へリダイレクト
      res.redirect('/index');
    }
  );
});

app.get('/edit/:id', (req, res) => {
  console.log('/edit へアクセスしました');

  // 編集データ取得
  connection.query(
    'SELECT * FROM items WHERE id = ?',
    [req.params.id],
    (error, results) => {
      if(error) {
        console.log(error);
      }
      // データ編集画面表示
      res.render('edit.ejs', {item: results[0]});
    }
  );
});

app.post('/update/:id', (req, res) => {
  console.log('/update へアクセスしました');

  // データ更新
  connection.query(
    'UPDATE items SET name = ? WHERE id = ?',
    [req.body.itemName, req.params.id],
    (error, results) => {
      if(error) {
        console.log(error);
      }
      // 一覧画面へリダイレクト
      res.redirect('/index');
    }
  );
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
});
