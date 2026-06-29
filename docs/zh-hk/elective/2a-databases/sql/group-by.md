# 2.6 · GROUP BY 與 HAVING

> **目標：** 按組聚合行並過濾結果組。

## GROUP BY

`GROUP BY` 把共享相同值的行折成一行，便於聚合。

```sql
SELECT class_id, COUNT(*) AS student_count
FROM   Student
GROUP BY class_id;
```

輸出：

| class_id | student_count |
|----------|---------------|
| F.4A | 3 |
| F.4B | 2 |

## 聚合函式

| 函式 | 返回 |
|----------|-----------------|
| `COUNT(*)` | 組中行數 |
| `COUNT(col)` | 列非空值數 |
| `SUM(col)` | 數值求和 |
| `AVG(col)` | 平均 |
| `MIN(col)` | 最小 |
| `MAX(col)` | 最大 |

```sql
SELECT subject, COUNT(*) AS sat, AVG(score) AS avg, MAX(score) AS top
FROM   Score
GROUP BY subject;
```

## HAVING —— 對聚合過濾

```sql
SELECT subject, AVG(score) AS avg
FROM   Score
GROUP BY subject
HAVING AVG(score) >= 70;
```

> **WHERE 在分組前過濾行。HAVING 在聚合後過濾組。**

## WHERE 和 HAVING 同用

```sql
SELECT class_id, COUNT(*) AS pass_count
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.subject = 'ICT'      -- 過濾行
GROUP BY class_id
HAVING COUNT(*) >= 2;          -- 過濾組
```

## 子句順序（背！）

```sql
SELECT  …                ← 輸出什麼
FROM    …                ← 哪些表
WHERE   …                ← 過濾行
GROUP BY …               ← 折成組
HAVING  …                ← 過濾組
ORDER BY …               ← 排最終結果
```

助記：**F W G H S O**（「Friends With Great Habits Sing On」）

## 學生常見錯誤

- 把聚合放 `WHERE` 而不是 `HAVING`。
- SELECT 非聚合、非分組列：
  ```sql
  -- 嚴格 SQL 錯：「name」不在 GROUP BY
  SELECT name, AVG(score) FROM Score GROUP BY student_id;
  ```
- 忘 `COUNT(*)` 含 NULL 行；`COUNT(col)` 忽 NULL。

## 實例 · 班級報告

> 「為每個班，顯示學生數與 ICT 平均分，但只含至少 2 個 ICT 分的班。」

```sql
SELECT s.class_id, COUNT(*) AS cnt, AVG(sc.score) AS avg_score
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.subject = 'ICT'
GROUP BY s.class_id
HAVING COUNT(*) >= 2
ORDER BY avg_score DESC;
```

## 考試式題目

> **題（5 分）：** 對 `Score(student_id, subject, score)` 寫 SQL：
>
> (a) 每科顯示記錄數與平均分。
> (b) 平均 ≥ 75 的科，顯示 subject、最高分與平均。

**參考答案：**

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

## 關鍵要點

- GROUP BY 折行；聚合彙總。
- WHERE 分組前；HAVING 之後。
- 子句順序：`FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY`。

➡️ 下一節：[2.7 聚合與內建函式](./functions)