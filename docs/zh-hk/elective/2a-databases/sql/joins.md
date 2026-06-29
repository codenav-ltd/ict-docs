# 2.8 · JOIN（至多 3 表）

> **目標：** 組合多表資料。卷 2A 最多考的 SQL 主題。

## 為何 JOIN

關係型資料庫把資料拆到多表避免冗餘。要回答跨表問題，須用共享鍵把表**連**回來。

## INNER JOIN

返回兩邊連接條件都匹配的行。

```sql
SELECT s.name, sc.subject, sc.score
FROM   Student s
       INNER JOIN Score sc ON s.student_id = sc.student_id;
```

| s.name | sc.subject | sc.score |
|--------|------------|----------|
| Alice  | ICT        | 86 |
| Alice  | Maths      | 78 |
| Bob    | ICT        | 72 |
| …      | …          | … |

## EQUI-JOIN

條件是等式的 INNER JOIN。語法與上面同。

## NATURAL JOIN

自動按**同名列**兩邊連接：

```sql
SELECT name, subject, score
FROM   Student NATURAL JOIN Score;
-- 自動按 student_id 連（唯一共享列）
```

⚠️ NATURAL JOIN 在真實模式裏**危險**，因為後加同名列可能默默破壞查詢。優先用明示 `ON`。

## OUTER JOIN

| 類型 | 行為 |
|------|-----------|
| `LEFT [OUTER] JOIN` | 左表所有行；右表匹配的（無則 NULL） |
| `RIGHT [OUTER] JOIN` | 右表全；左表匹配 |
| `FULL [OUTER] JOIN` | 兩側全部 |

### LEFT OUTER JOIN 例

> 列出每位學生及其 ICT 分，含沒 ICT 分的學生。

```sql
SELECT s.name, sc.score
FROM   Student s
       LEFT OUTER JOIN Score sc
                    ON s.student_id = sc.student_id
                   AND sc.subject = 'ICT';
```

沒 ICT 分的學生出現時 `sc.score = NULL`。

## 連接 3 表

HKEAA 明言**至多 3 表**。

```sql
SELECT s.name, c.teacher, sc.subject, sc.score
FROM   Student s
       INNER JOIN Class c  ON s.class_id  = c.class_id
       INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.subject = 'ICT'
ORDER BY sc.score DESC;
```

連接圖：

```
Student ─── class_id ──→ Class
   │
   └─── student_id ──→ Score
```

## 表別名（最佳實踐）

用短別名保持查詢可讀：

```sql
SELECT s.name, c.teacher, sc.score
FROM   Student s
       INNER JOIN Class c  ON s.class_id  = c.class_id
       INNER JOIN Score sc ON s.student_id = sc.student_id;
```

## 常見陷阱

### 1 · 漏 ON → 笛卡爾積

```sql
SELECT * FROM Student, Score;     -- 5 × 10 = 50 行！
```

總要帶 `ON`：

```sql
SELECT * FROM Student s, Score sc WHERE s.student_id = sc.student_id;
```

或用明示 JOIN 語法：

```sql
SELECT * FROM Student s INNER JOIN Score sc ON s.student_id = sc.student_id;
```

### 2 · 連接類型錯

如要每位學生（即使無分），用 LEFT OUTER JOIN —— INNER 會丟掉他們。

### 3 · 方向混淆

LEFT 保留 `JOIN` 左側表全部行。RIGHT 保留右側全部。

## 實例 · 每班前幾

```sql
SELECT s.class_id, s.name, sc.score
FROM   Student s
       INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.subject = 'ICT'
  AND  sc.score = (
        SELECT MAX(sc2.score)
        FROM   Score sc2 INNER JOIN Student s2 ON sc2.student_id = s2.student_id
        WHERE  sc2.subject = 'ICT' AND s2.class_id = s.class_id
       );
```

（用了相關子查詢 —— 見下節。）

## 考試式題目

> **題（6 分）：** 用 `Student(student_id, name, class_id)`、`Class(class_id, teacher)`、`Score(student_id, subject, score)` 寫 SQL：
>
> (a) 每位學生顯示其姓名與班主任姓名。
> (b) 列出無記錄分數的學生。
> (c) 每班 ICT 平均分，按降序。

**參考答案：**

```sql
-- (a)
SELECT s.name, c.teacher
FROM   Student s INNER JOIN Class c ON s.class_id = c.class_id;

-- (b)
SELECT s.name
FROM   Student s LEFT OUTER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.student_id IS NULL;

-- (c)
SELECT s.class_id, AVG(sc.score) AS avg_ict
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.subject = 'ICT'
GROUP  BY s.class_id
ORDER  BY avg_ict DESC;
```

## 關鍵要點

- INNER JOIN = 僅匹配。
- LEFT / RIGHT / FULL OUTER JOIN = 不論是否匹配保留一側或兩側。
- 用別名，總要 ON。

➡️ 下一節：[2.9 子查詢](./subqueries)