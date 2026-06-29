# 2.6 · GROUP BY 与 HAVING

> **目标：** 按组聚合行并过滤结果组。

## GROUP BY

`GROUP BY` 把共享相同值的行折成一行，便于聚合。

```sql
SELECT class_id, COUNT(*) AS student_count
FROM   Student
GROUP BY class_id;
```

输出：

| class_id | student_count |
|----------|---------------|
| F.4A | 3 |
| F.4B | 2 |

## 聚合函数

| 函数 | 返回 |
|----------|-----------------|
| `COUNT(*)` | 组中行数 |
| `COUNT(col)` | 列非空值数 |
| `SUM(col)` | 数值求和 |
| `AVG(col)` | 平均 |
| `MIN(col)` | 最小 |
| `MAX(col)` | 最大 |

```sql
SELECT subject, COUNT(*) AS sat, AVG(score) AS avg, MAX(score) AS top
FROM   Score
GROUP BY subject;
```

## HAVING —— 对聚合过滤

```sql
SELECT subject, AVG(score) AS avg
FROM   Score
GROUP BY subject
HAVING AVG(score) >= 70;
```

> **WHERE 在分组前过滤行。HAVING 在聚合后过滤组。**

## WHERE 和 HAVING 同用

```sql
SELECT class_id, COUNT(*) AS pass_count
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.subject = 'ICT'      -- 过滤行
GROUP BY class_id
HAVING COUNT(*) >= 2;          -- 过滤组
```

## 子句顺序（背！）

```sql
SELECT  …                ← 输出什么
FROM    …                ← 哪些表
WHERE   …                ← 过滤行
GROUP BY …               ← 折成组
HAVING  …                ← 过滤组
ORDER BY …               ← 排最终结果
```

助记：**F W G H S O**（「Friends With Great Habits Sing On」）

## 学生常见错误

- 把聚合放 `WHERE` 而不是 `HAVING`。
- SELECT 非聚合、非分组列：
  ```sql
  -- 严格 SQL 错：「name」不在 GROUP BY
  SELECT name, AVG(score) FROM Score GROUP BY student_id;
  ```
- 忘 `COUNT(*)` 含 NULL 行；`COUNT(col)` 忽 NULL。

## 实例 · 班级报告

> 「为每个班，显示学生数与 ICT 平均分，但只含至少 2 个 ICT 分的班。」

```sql
SELECT s.class_id, COUNT(*) AS cnt, AVG(sc.score) AS avg_score
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.subject = 'ICT'
GROUP BY s.class_id
HAVING COUNT(*) >= 2
ORDER BY avg_score DESC;
```

## 考试式题目

> **题（5 分）：** 对 `Score(student_id, subject, score)` 写 SQL：
>
> (a) 每科显示记录数与平均分。
> (b) 平均 ≥ 75 的科，显示 subject、最高分与平均。

**参考答案：**

```sql
-- (a)
SELECT subject, COUNT(*) AS cnt, AVG(score) AS avg
FROM   Score
GROUP BY subject;

-- (b)
SELECT subject, MAX(score) AS top, AVG(score) AS avg
FROM   Score
GROUP BY subject
HAVING AVG(score) >= 75;
```

## 关键要点

- GROUP BY 折行；聚合汇总。
- WHERE 分组前；HAVING 之后。
- 子句顺序：`FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY`。

➡️ 下一节：[2.7 聚合与内置函数](./functions)
