# 第 2 章 · SQL

> **课时：** 18 · **选修 2A 之心。** 掌握此章可获半数选修分。

HKEAA 按 **SQL-92 标准**考 SQL，并在卷 2A 内附此保留字参考表：

```
Constants : FALSE, TRUE
Operators : + − * / > < = >= <= <> AND OR NOT
Wildcards : %  _
Aggregates: AVG, COUNT, MAX, MIN, SUM
String    : CHAR (CHR), CHAR_LENGTH (LEN), LOWER, UPPER,
            TRIM, SUBSTRING (SUBSTR/MID), VALUE (VAL),
            SPACE
Date      : DATE, DAY, MONTH, YEAR
Keywords  : ADD, ALL, ALTER, ANY, AS, ASC, BETWEEN, BY,
            CREATE, DELETE, DESC, DISTINCT, DROP, EXISTS,
            FROM, GROUP, HAVING, IN, INDEX,
            INNER JOIN, INSERT, INTEGER, INTERSECT, INTO,
            LEFT [OUTER] JOIN, LIKE, MINUS, NULL,
            RIGHT [OUTER] JOIN, FULL [OUTER] JOIN, ON,
            ORDER, SELECT, SET, TABLE, TO, UNION, UNIQUE,
            UPDATE, VALUES, VIEW, WHERE
```

## 子题（拆开方便阅读）

| # | 主题 |
|---|-------|
| 2.1 | [CREATE、ALTER、DROP (DDL)](./ddl) |
| 2.2 | [INSERT、UPDATE、DELETE (DML)](./dml) |
| 2.3 | [SELECT 与 WHERE](./select) |
| 2.4 | [运算符与 LIKE / IN](./operators) |
| 2.5 | [ORDER BY 与 DISTINCT](./ordering) |
| 2.6 | [GROUP BY 与 HAVING](./group-by) |
| 2.7 | [聚合与内置函数](./functions) |
| 2.8 | [JOIN（至多 3 表）](./joins) |
| 2.9 | [子查询（一层）](./subqueries) |
| 2.10 | [集合操作 (UNION、INTERSECT、MINUS)](./set-ops) |
| 2.11 | [视图](./views) |

## 练习环境

本章全程用以下示范数据集。**粘到 [SQL Books](https://sqlbooks.codenav.dev)** 跟着做。

```sql
CREATE TABLE Class (
  class_id   VARCHAR(10) PRIMARY KEY,
  teacher    VARCHAR(50)
);

CREATE TABLE Student (
  student_id INTEGER     PRIMARY KEY,
  name       VARCHAR(50) NOT NULL,
  class_id   VARCHAR(10),
  dob        DATE,
  FOREIGN KEY (class_id) REFERENCES Class(class_id)
);

CREATE TABLE Score (
  student_id INTEGER,
  subject    VARCHAR(30),
  score      INTEGER CHECK (score BETWEEN 0 AND 100),
  PRIMARY KEY (student_id, subject),
  FOREIGN KEY (student_id) REFERENCES Student(student_id)
);

INSERT INTO Class VALUES
  ('F.4A', 'Mr. Lee'),
  ('F.4B', 'Ms. Wong');

INSERT INTO Student VALUES
  (1001, 'Alice', 'F.4A', '2007-05-12'),
  (1002, 'Bob',   'F.4A', '2008-03-22'),
  (1003, 'Carol', 'F.4B', '2007-11-08'),
  (1004, 'David', 'F.4B', '2008-01-30'),
  (1005, 'Eve',   'F.4A', '2007-07-15');

INSERT INTO Score VALUES
  (1001, 'ICT',  86), (1001, 'Maths', 78),
  (1002, 'ICT',  72), (1002, 'Maths', 65),
  (1003, 'ICT',  91), (1003, 'Maths', 88),
  (1004, 'ICT',  55), (1004, 'Maths', 60),
  (1005, 'ICT',  78), (1005, 'Maths', 80);
```

➡️ 开始：[2.1 CREATE、ALTER、DROP](./ddl)
