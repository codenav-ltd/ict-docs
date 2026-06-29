# 2.9 · 子查询（一层）

> **目标：** 在另一个 SELECT 里用 SELECT。HKEAA 限**一层**。

## 子查询是什么

**子查询**是嵌在另一 SQL 语句里的 SELECT。

## 可以用的位置

| 位置 | 例 |
|----------|---------|
| 在 `WHERE` | `WHERE x IN (SELECT …)` |
| 在 `HAVING` | `HAVING SUM(x) > (SELECT AVG(x) FROM …)` |
| 在 `FROM`（子查询作表） | `SELECT … FROM (SELECT … ) AS t` |
| 在 `SELECT` | `SELECT x, (SELECT MAX(y) FROM …) AS m FROM …` |

## 三种要知道的模式

### 模式 1 · 标量子查询（返回一个值）

```sql
SELECT name, score
FROM   Score INNER JOIN Student ON Score.student_id = Student.student_id
WHERE  score = (SELECT MAX(score) FROM Score WHERE subject = 'ICT');
```

### 模式 2 · IN 列表

```sql
SELECT name
FROM   Student
WHERE  student_id IN (
         SELECT student_id FROM Score WHERE score >= 90
       );
```

### 模式 3 · EXISTS 检查

```sql
SELECT name
FROM   Student s
WHERE  EXISTS (
         SELECT 1 FROM Score sc WHERE sc.student_id = s.student_id AND sc.score >= 90
       );
```

## 对比：IN vs JOIN

IN 子查询通常可改写为 JOIN：

```sql
-- IN 形式
SELECT DISTINCT s.name
FROM   Student s
WHERE  s.student_id IN (SELECT student_id FROM Score WHERE score >= 90);

-- JOIN 形式
SELECT DISTINCT s.name
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.score >= 90;
```

两种结果相同。按情境选清晰的。

## 相关子查询

引用外查询行的子查询：

```sql
SELECT s.name, sc.subject, sc.score
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.score = (
         SELECT MAX(sc2.score)
         FROM   Score sc2
         WHERE  sc2.student_id = s.student_id
       );
```

这返回每位学生最高分的科目。内 SELECT 对每外行跑一次。

## 「只一层」

HKEAA 参考卷说卷 2A 子查询**一层**。所以以下可以：

```sql
WHERE x IN (SELECT a FROM t1 WHERE b > 10)
```

但**两层嵌套**不要求：

```sql
WHERE x IN (SELECT a FROM t1 WHERE b IN (SELECT c FROM t2))
```

不会要你写这种；若题里有，通常可改写为 JOIN。

## 学生常见错误

- 把子查询放 `SELECT` 而应在 `WHERE`。
- 标量子查询返回多行（会错）。
- 忘了子查询结果中的 NULL 让 `IN` 与 `NOT IN` 行为意外。
- 写两层嵌套（过复杂）。

## 实例 · 高于平均的得分者

> 「ICT 分数高于本班 ICT 平均分的学生。」

```sql
SELECT s.name, sc.score
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.subject = 'ICT'
  AND  sc.score > (
         SELECT AVG(sc2.score)
         FROM   Score sc2 INNER JOIN Student s2 ON sc2.student_id = s2.student_id
         WHERE  sc2.subject = 'ICT'
           AND  s2.class_id = s.class_id
       );
```

## 考试式题目

> **题（5 分）：** 用 `Student(student_id, name, class_id)` 与 `Score(student_id, subject, score)` 写 SQL：
>
> (a) ICT 分高于平均的学生姓名。
> (b) 无记录分数的学生姓名（用子查询）。

**参考答案：**

```sql
-- (a)
SELECT DISTINCT s.name
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.subject = 'ICT'
  AND  sc.score > (SELECT AVG(score) FROM Score WHERE subject = 'ICT');

-- (b)
SELECT name
FROM   Student
WHERE  student_id NOT IN (SELECT student_id FROM Score);
```

## 关键要点

- 子查询让你问「匹配另一查询结果的行」。
- 三种常见模式：标量、IN、EXISTS。
- 保持一层；通常可用 JOIN 改写。

➡️ 下一节：[2.10 集合操作](./set-ops)
