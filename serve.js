const express = require('express')
const app = express()
const port = 3000

// テンプレートエンジンの指定
//app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('hello.ejs');
  //  res.sendFile(`${__dirname}/views/hello.html`)
  console.log("/ へアクセスがありました")
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
