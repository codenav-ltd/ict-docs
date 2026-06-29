# 2.5 · ORDER BY 与 DISTINCT

> **目标：** 对结果排序、去重。

## ORDER BY

```sql
SELECT * FROM Student ORDER BY name;             -- 默认升序
SELECT * FROM Student ORDER BY name ASC;         -- 明确升序
SELECT * FROM Student ORDER BY dob DESC;         -- 降序
```

### 按多列排

```sql
SELECT * FROM Student
ORDER BY class_id ASC, name ASC;
```

先按 class_id 排，每个 class 内再按 name。

### 按表达式或别名排

```sql
SELECT name, score, score * 1.1 AS adjusted
FROM   Score
ORDER BY adjusted DESC;
```

## DISTINCT —— 去重

```sql
SELECT DISTINCT class_id FROM Student;
-- 返回: 'F.4A'、'F.4B'（各一）
```

没 DISTINCT 你看到每学生一行。

### DISTINCT 多列

```sql
SELECT DISTINCT class_id, subject FROM Score;
-- 每唯一 (class, subject) 对一行
```

## LIMIT / TOP（不在 SQL-92 参考表，但常见）

```sql
SELECT * FROM Score ORDER BY score DESC LIMIT 3;     -- MySQL/Postgres/SQLite
SELECT TOP 3 * FROM Score ORDER BY score DESC;       -- SQL Server
```

HKEAA 参考表不列这些；预期基本 SELECT 在 2A 足够。

## 实例

### ICT 前 3 名

```sql
SELECT s.name, sc.score
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.subject = 'ICT'
ORDER BY sc.score DESC
LIMIT 3;
```

### 已开的不同科目

```sql
SELECT DISTINCT subject FROM Score;
```

### 按 class 字母升序排列、每 class 内按 teacher 字母排

```sql
SELECT * FROM Class ORDER BY class_id ASC, teacher ASC;
```

## 学生常见错误

- 排多列时某列忘 `ASC`/`DESC`。
- 用 `DISTINCT *` 还假设按一列去重（其实考虑所有列）。
- 在 GROUP BY 查询里先排再分组 —— 子句顺序重要。

## 考试式题目

> **题（4 分）：** 对 `Score(student_id, subject, score)` 写 SQL：
>
> (a) 列不同科目。
> (b) 显示所有分数，按 subject 升序、按 score 降序排。

**参考答案：**

```sql
-- (a)
SELECT DISTINCT subject FROM Score;

-- (b)
SELECT * FROM Score
ORDER BY subject ASC, score DESC;
```

## 关键要点

- ORDER BY 支援多列 + 各自 ASC / DESC。
- DISTINCT 考虑所有选中列。

➡️ 下一节：[2.6 GROUP BY 与 HAVING](./group-by)
