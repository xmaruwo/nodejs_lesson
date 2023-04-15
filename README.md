# nodejs_lesson
Progate nodejs web app program

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
