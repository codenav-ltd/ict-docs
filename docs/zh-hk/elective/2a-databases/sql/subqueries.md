# 2.9 · 子查詢（一層）

> **目標：** 在另一個 SELECT 裏用 SELECT。HKEAA 限**一層**。

## 子查詢是什麼

**子查詢**是嵌在另一 SQL 語句裏的 SELECT。

## 可以用的位置

| 位置 | 例 |
|----------|---------|
| 在 `WHERE` | `WHERE x IN (SELECT …)` |
| 在 `HAVING` | `HAVING SUM(x) > (SELECT AVG(x) FROM …)` |
| 在 `FROM`（子查詢作表） | `SELECT … FROM (SELECT … ) AS t` |
| 在 `SELECT` | `SELECT x, (SELECT MAX(y) FROM …) AS m FROM …` |

## 三種要知道的模式

### 模式 1 · 標量子查詢（返回一個值）

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

### 模式 3 · EXISTS 檢查

```sql
SELECT name
FROM   Student s
WHERE  EXISTS (
         SELECT 1 FROM Score sc WHERE sc.student_id = s.student_id AND sc.score >= 90
       );
```

## 對比：IN vs JOIN

IN 子查詢通常可改寫為 JOIN：

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

兩種結果相同。按情境選清晰的。

## 相關子查詢

引用外查詢行的子查詢：

```sql
SELECT s.name, sc.subject, sc.score
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.score = (
         SELECT MAX(sc2.score)
         FROM   Score sc2
         WHERE  sc2.student_id = s.student_id
       );
```

這返回每位學生最高分的科目。內 SELECT 對每外行跑一次。

## 「只一層」

HKEAA 參考卷説卷 2A 子查詢**一層**。所以以下可以：

```sql
WHERE x IN (SELECT a FROM t1 WHERE b > 10)
```

但**兩層嵌套**不要求：

```sql
WHERE x IN (SELECT a FROM t1 WHERE b IN (SELECT c FROM t2))
```

不會要你寫這種；若題裏有，通常可改寫為 JOIN。

## 學生常見錯誤

- 把子查詢放 `SELECT` 而應在 `WHERE`。
- 標量子查詢返回多行（會錯）。
- 忘了子查詢結果中的 NULL 讓 `IN` 與 `NOT IN` 行為意外。
- 寫兩層嵌套（過複雜）。

## 實例 · 高於平均的得分者

> 「ICT 分數高於本班 ICT 平均分的學生。」

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

## 考試式題目

> **題（5 分）：** 用 `Student(student_id, name, class_id)` 與 `Score(student_id, subject, score)` 寫 SQL：
>
> (a) ICT 分高於平均的學生姓名。
> (b) 無記錄分數的學生姓名（用子查詢）。

**參考答案：**

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

## 關鍵要點

- 子查詢讓你問「匹配另一查詢結果的行」。
- 三種常見模式：標量、IN、EXISTS。
- 保持一層；通常可用 JOIN 改寫。

➡️ 下一節：[2.10 集合操作](./set-ops)