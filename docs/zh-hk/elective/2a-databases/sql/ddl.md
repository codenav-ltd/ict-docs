# 2.1 · CREATE、ALTER、DROP (DDL)

> **目標：** 用資料定義語言 (DDL) 定義資料庫結構。

## 三個 DDL 動詞

| 動詞 | 用途 |
|------|---------|
| `CREATE` | 創建新資料庫物件（表、視圖、索引） |
| `ALTER` | 改現有物件 |
| `DROP` | 刪物件 |

## CREATE TABLE

```sql
CREATE TABLE Student (
  student_id INTEGER     PRIMARY KEY,
  name       VARCHAR(50) NOT NULL,
  class_id   VARCHAR(10),
  dob        DATE,
  email      VARCHAR(100) UNIQUE,
  FOREIGN KEY (class_id) REFERENCES Class(class_id)
);
```

解剖：

| 部分 | 用途 |
|------|---------|
| `INTEGER`、`VARCHAR(n)`、`DATE`、`BOOLEAN`、`DECIMAL(p,s)` | 資料類型 |
| `PRIMARY KEY` | 標主鍵 |
| `NOT NULL` | 拒 NULL |
| `UNIQUE` | 拒重複（除 PK 唯一之外） |
| `CHECK (cond)` | 拒不符合條件的行 |
| `DEFAULT value` | 未提供時插入此值 |
| `FOREIGN KEY … REFERENCES …` | 強制參照完整性 |

## 常見資料類型

| 類型 | 用途 |
|------|-----|
| `INTEGER` | 整數 |
| `DECIMAL(p, s)` | 定點（`DECIMAL(8,2)` 給錢） |
| `VARCHAR(n)` | 變長字符串，至多 n 字符 |
| `CHAR(n)` | 定長字符串 |
| `DATE` / `TIME` / `DATETIME` | 時間 |
| `BOOLEAN` | True / False（某些 DBMS 用 `BIT`） |

## ALTER TABLE

```sql
ALTER TABLE Student ADD email VARCHAR(100);
ALTER TABLE Student ADD CONSTRAINT chk_dob CHECK (dob > '1900-01-01');
ALTER TABLE Student DROP COLUMN email;
ALTER TABLE Student RENAME TO Pupil;
```

ALTER 讓你不丟資料地演進模式。

## DROP

```sql
DROP TABLE Student;
DROP VIEW HighScorers;
DROP INDEX idx_student_name;
```

注意：`DROP TABLE` 無備份則不可逆。

## 實例 · 建示範模式

（在 [SQL Books](https://sqlbooks.codenav.dev) 跑跟着做。）

```sql
CREATE TABLE Class (
  class_id VARCHAR(10) PRIMARY KEY,
  teacher  VARCHAR(50)
);

CREATE TABLE Student (
  student_id INTEGER     PRIMARY KEY,
  name       VARCHAR(50) NOT NULL,
  class_id   VARCHAR(10),
  dob        DATE,
  FOREIGN KEY (class_id) REFERENCES Class(class_id)
);
```

## 學生常見錯誤

- 必填列忘 `NOT NULL`。
- 要做算術的數字 ID 用 `VARCHAR`。
- 在被引用表存在之前就定 FK。
- 表被進程鎖定時嘗試 `ALTER TABLE`。

## 考試式題目

> **題（5 分）：** 寫 SQL 創建 `Book` 表：isbn (PK，13 字符)、title（必填，至多 200 字符）、author（至多 100 字符）、price（正小數，2 位小數，默認 0）、publication_date。

**參考答案：**

```sql
CREATE TABLE Book (
  isbn             CHAR(13) PRIMARY KEY,
  title            VARCHAR(200) NOT NULL,
  author           VARCHAR(100),
  price            DECIMAL(8,2) DEFAULT 0 CHECK (price >= 0),
  publication_date DATE
);
```

## 關鍵要點

- `CREATE / ALTER / DROP` 構成 DDL。
- 小心選類型；聲明鍵與約束。
- 應用到生產前先在沙箱測。

➡️ 下一節：[2.2 INSERT、UPDATE、DELETE](./dml)