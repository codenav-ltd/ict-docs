# 2.1 · CREATE、ALTER、DROP (DDL)

> **目标：** 用数据定义语言 (DDL) 定义数据库结构。

## 三个 DDL 动词

| 动词 | 用途 |
|------|---------|
| `CREATE` | 创建新数据库对象（表、视图、索引） |
| `ALTER` | 改现有对象 |
| `DROP` | 删对象 |

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
| `INTEGER`、`VARCHAR(n)`、`DATE`、`BOOLEAN`、`DECIMAL(p,s)` | 数据类型 |
| `PRIMARY KEY` | 标主键 |
| `NOT NULL` | 拒 NULL |
| `UNIQUE` | 拒重复（除 PK 唯一之外） |
| `CHECK (cond)` | 拒不符合条件的行 |
| `DEFAULT value` | 未提供时插入此值 |
| `FOREIGN KEY … REFERENCES …` | 强制参照完整性 |

## 常见数据类型

| 类型 | 用途 |
|------|-----|
| `INTEGER` | 整数 |
| `DECIMAL(p, s)` | 定点（`DECIMAL(8,2)` 给钱） |
| `VARCHAR(n)` | 变长字符串，至多 n 字符 |
| `CHAR(n)` | 定长字符串 |
| `DATE` / `TIME` / `DATETIME` | 时间 |
| `BOOLEAN` | True / False（某些 DBMS 用 `BIT`） |

## ALTER TABLE

```sql
ALTER TABLE Student ADD email VARCHAR(100);
ALTER TABLE Student ADD CONSTRAINT chk_dob CHECK (dob > '1900-01-01');
ALTER TABLE Student DROP COLUMN email;
ALTER TABLE Student RENAME TO Pupil;
```

ALTER 让你不丢数据地演进模式。

## DROP

```sql
DROP TABLE Student;
DROP VIEW HighScorers;
DROP INDEX idx_student_name;
```

注意：`DROP TABLE` 无备份则不可逆。

## 实例 · 建示范模式

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

## 学生常见错误

- 必填列忘 `NOT NULL`。
- 要做算术的数字 ID 用 `VARCHAR`。
- 在被引用表存在之前就定 FK。
- 表被进程锁定时尝试 `ALTER TABLE`。

## 考试式题目

> **题（5 分）：** 写 SQL 创建 `Book` 表：isbn (PK，13 字符)、title（必填，至多 200 字符）、author（至多 100 字符）、price（正小数，2 位小数，默认 0）、publication_date。

**参考答案：**

```sql
CREATE TABLE Book (
  isbn             CHAR(13) PRIMARY KEY,
  title            VARCHAR(200) NOT NULL,
  author           VARCHAR(100),
  price            DECIMAL(8,2) DEFAULT 0 CHECK (price >= 0),
  publication_date DATE
);
```

## 关键要点

- `CREATE / ALTER / DROP` 构成 DDL。
- 小心选类型；声明键与约束。
- 应用到生产前先在沙箱测。

➡️ 下一节：[2.2 INSERT、UPDATE、DELETE](./dml)
