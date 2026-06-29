# 2.5 · ORDER BY 與 DISTINCT

> **目標：** 對結果排序、去重。

## ORDER BY

```sql
SELECT * FROM Student ORDER BY name;             -- 默認升序
SELECT * FROM Student ORDER BY name ASC;         -- 明確升序
SELECT * FROM Student ORDER BY dob DESC;         -- 降序
```

### 按多列排

```sql
SELECT * FROM Student
ORDER BY class_id ASC, name ASC;
```

先按 class_id 排，每個 class 內再按 name。

### 按表達式或別名排

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

沒 DISTINCT 你看到每學生一行。

### DISTINCT 多列

```sql
SELECT DISTINCT class_id, subject FROM Score;
-- 每唯一 (class, subject) 對一行
```

## LIMIT / TOP（不在 SQL-92 參考表，但常見）

```sql
SELECT * FROM Score ORDER BY score DESC LIMIT 3;     -- MySQL/Postgres/SQLite
SELECT TOP 3 * FROM Score ORDER BY score DESC;       -- SQL Server
```

HKEAA 參考表不列這些；預期基本 SELECT 在 2A 足夠。

## 實例

### ICT 前 3 名

```sql
SELECT s.name, sc.score
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.subject = 'ICT'
ORDER BY sc.score DESC
LIMIT 3;
```

### 已開的不同科目

```sql
SELECT DISTINCT subject FROM Score;
```

### 按 class 字母升序排列、每 class 內按 teacher 字母排

```sql
SELECT * FROM Class ORDER BY class_id ASC, teacher ASC;
```

## 學生常見錯誤

- 排多列時某列忘 `ASC`/`DESC`。
- 用 `DISTINCT *` 還假設按一列去重（其實考慮所有列）。
- 在 GROUP BY 查詢裏先排再分組 —— 子句順序重要。

## 考試式題目

> **題（4 分）：** 對 `Score(student_id, subject, score)` 寫 SQL：
>
> (a) 列不同科目。
> (b) 顯示所有分數，按 subject 升序、按 score 降序排。

**參考答案：**

```sql
-- (a)
SELECT DISTINCT subject FROM Score;

-- (b)
SELECT * FROM Score
ORDER BY subject ASC, score DESC;
```

## 關鍵要點

- ORDER BY 支援多列 + 各自 ASC / DESC。
- DISTINCT 考慮所有選中列。

➡️ 下一節：[2.6 GROUP BY 與 HAVING](./group-by)