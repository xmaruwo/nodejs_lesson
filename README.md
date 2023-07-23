# nodejs_lesson
Progate nodejs web app program

<a href="https://trackgit.com">
<img src="https://us-central1-trackgit-analytics.cloudfunctions.net/token/ping/lgm0wx35ouwwns9wkhbl" alt="trackgit-views" />
</a>

***
## Demo


https://github.com/xmaruwo/nodejs_lesson/assets/94747777/6228bd0c-45dc-4ba5-8529-50b1b8925d31



## node version
```
$ node -v
$ v18.15.0
```
## サーバー起動
```
$ npm start
```

## mysqlだとDB接続時にエラーが発生するためmysql2をインストール
```
$ npm install mysql2
```

## テスト用DB作成
```
CREATE DATABASES nodejs_lesson;
```
テスト用テーブル作成、データ追加
```
 CREATE TABLE items (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255));

 insert into items (name) values ('じゃがいも'), ('にんじん'), ('たまねぎ');
```


