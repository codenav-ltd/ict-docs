# 2.8 · JOIN（至多 3 表）

> **目标：** 组合多表数据。卷 2A 最多考的 SQL 主题。

## 为何 JOIN

关系型数据库把数据拆到多表避免冗余。要回答跨表问题，须用共享键把表**连**回来。

## INNER JOIN

返回两边连接条件都匹配的行。

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

条件是等式的 INNER JOIN。语法与上面同。

## NATURAL JOIN

自动按**同名列**两边连接：

```sql
SELECT name, subject, score
FROM   Student NATURAL JOIN Score;
-- 自动按 student_id 连（唯一共享列）
```

⚠️ NATURAL JOIN 在真实模式里**危险**，因为后加同名列可能默默破坏查询。优先用明示 `ON`。

## OUTER JOIN

| 类型 | 行为 |
|------|-----------|
| `LEFT [OUTER] JOIN` | 左表所有行；右表匹配的（无则 NULL） |
| `RIGHT [OUTER] JOIN` | 右表全；左表匹配 |
| `FULL [OUTER] JOIN` | 两侧全部 |

### LEFT OUTER JOIN 例

> 列出每位学生及其 ICT 分，含没 ICT 分的学生。

```sql
SELECT s.name, sc.score
FROM   Student s
       LEFT OUTER JOIN Score sc
                    ON s.student_id = sc.student_id
                   AND sc.subject = 'ICT';
```

没 ICT 分的学生出现时 `sc.score = NULL`。

## 连接 3 表

HKEAA 明言**至多 3 表**。

```sql
SELECT s.name, c.teacher, sc.subject, sc.score
FROM   Student s
       INNER JOIN Class c  ON s.class_id  = c.class_id
       INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.subject = 'ICT'
ORDER BY sc.score DESC;
```

连接图：

```
Student ─── class_id ──→ Class
   │
   └─── student_id ──→ Score
```

## 表别名（最佳实践）

用短别名保持查询可读：

```sql
SELECT s.name, c.teacher, sc.score
FROM   Student s
       INNER JOIN Class c  ON s.class_id  = c.class_id
       INNER JOIN Score sc ON s.student_id = sc.student_id;
```

## 常见陷阱

### 1 · 漏 ON → 笛卡尔积

```sql
SELECT * FROM Student, Score;     -- 5 × 10 = 50 行！
```

总要带 `ON`：

```sql
SELECT * FROM Student s, Score sc WHERE s.student_id = sc.student_id;
```

或用明示 JOIN 语法：

```sql
SELECT * FROM Student s INNER JOIN Score sc ON s.student_id = sc.student_id;
```

### 2 · 连接类型错

如要每位学生（即使无分），用 LEFT OUTER JOIN —— INNER 会丢掉他们。

### 3 · 方向混淆

LEFT 保留 `JOIN` 左侧表全部行。RIGHT 保留右侧全部。

## 实例 · 每班前几

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

（用了相关子查询 —— 见下节。）

## 考试式题目

> **题（6 分）：** 用 `Student(student_id, name, class_id)`、`Class(class_id, teacher)`、`Score(student_id, subject, score)` 写 SQL：
>
> (a) 每位学生显示其姓名与班主任姓名。
> (b) 列出无记录分数的学生。
> (c) 每班 ICT 平均分，按降序。

**参考答案：**

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

## 关键要点

- INNER JOIN = 仅匹配。
- LEFT / RIGHT / FULL OUTER JOIN = 不论是否匹配保留一侧或两侧。
- 用别名，总要 ON。

➡️ 下一节：[2.9 子查询](./subqueries)
