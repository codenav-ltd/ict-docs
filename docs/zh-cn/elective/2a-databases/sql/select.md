# 2.3 · SELECT 与 WHERE

> **目标：** 用 SELECT 有效读数据并用 WHERE 过滤行。

## SELECT —— 选列

```sql
SELECT * FROM Student;                   -- 每一列
SELECT name, class_id FROM Student;      -- 指定列
SELECT name AS pupil_name FROM Student;  -- 别名
```

## WHERE —— 过滤行

```sql
SELECT * FROM Student WHERE class_id = 'F.4A';
SELECT * FROM Student WHERE dob >= '2008-01-01';
SELECT * FROM Score WHERE subject = 'ICT' AND score >= 80;
SELECT * FROM Student WHERE name LIKE 'A%';
```

## 比较运算符

| 运算符 | 含义 | 例子 |
|----------|---------|---------|
| `=` | 等于 | `score = 100` |
| `<>` | 不等（标准 SQL） | `class_id <> 'F.4B'` |
| `>` `<` `>=` `<=` | 比较 | `score >= 50` |
| `BETWEEN a AND b` | 含端范围 | `score BETWEEN 70 AND 90` |
| `IN (...)` | 在列表中 | `class_id IN ('F.4A','F.4C')` |
| `LIKE pattern` | 模式匹配 | `name LIKE 'A%'` |
| `IS NULL` / `IS NOT NULL` | 空测试 | `email IS NULL` |

## 逻辑运算符

| 运算符 | 含义 |
|----------|---------|
| `AND` | 两条件都真 |
| `OR` | 至少一真 |
| `NOT` | 取反 |

为清晰用括号：

```sql
SELECT *
FROM   Student
WHERE  (class_id = 'F.4A' AND dob >= '2008-01-01')
   OR  class_id = 'F.4C';
```

## 实例

### 列所有 F.4A 学生

```sql
SELECT student_id, name FROM Student WHERE class_id = 'F.4A';
```

### ICT 分数高于 80

```sql
SELECT s.name, sc.score
FROM   Student s, Score sc                   -- （JOIN 见 2.8）
WHERE  s.student_id = sc.student_id
  AND  sc.subject = 'ICT'
  AND  sc.score > 80;
```

### 2007 年出生的学生

```sql
SELECT name, dob FROM Student WHERE dob BETWEEN '2007-01-01' AND '2007-12-31';
SELECT name, dob FROM Student WHERE YEAR(dob) = 2007;        -- 用 YEAR() 更简
```

### 名字以 A 或 B 开头

```sql
SELECT name FROM Student WHERE name LIKE 'A%' OR name LIKE 'B%';
```

## 怎样手动预测输出

1. **FROM** —— 写下表所有行。
2. **WHERE** —— 划掉不满足条件的行。
3. **SELECT** —— 只保留要求列。

三步追踪在「输出是什么」题里挣分。

## 学生常见错误

- 用 `=` 比 NULL（用 `IS NULL`）。
- 标准 SQL 用单引号给字符串、双引号给标识符（多数 DBMS 两者皆接受，但一致）。
- 条件间漏 `AND`（`WHERE a=1 b=2` → 语法错）。

## 考试式题目

> **题（5 分）：** 对 `Student(student_id, name, class_id, dob)` 和 `Score(student_id, subject, score)` 写 SQL：
>
> (a) 列 F.4A 学生姓名。
> (b) 列出有学生得 100 的科目。
> (c) 列出 2007-01-01 到 2008-12-31 间出生、名字以 'A' 起的学生。

**参考答案：**

```sql
-- (a)
SELECT name FROM Student WHERE class_id = 'F.4A';

-- (b)
SELECT DISTINCT subject FROM Score WHERE score = 100;

-- (c)
SELECT name, dob
FROM   Student
WHERE  dob BETWEEN '2007-01-01' AND '2008-12-31'
  AND  name LIKE 'A%';
```

## 关键要点

- SELECT 选列；WHERE 过滤行。
- 用对运算符：`=`、`BETWEEN`、`IN`、`LIKE`、`IS NULL`。
- AND / OR / NOT 组合条件。

➡️ 下一节：[2.4 运算符与 LIKE / IN](./operators)
