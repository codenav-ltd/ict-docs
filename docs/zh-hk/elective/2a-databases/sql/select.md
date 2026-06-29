# 2.3 · SELECT 與 WHERE

> **目標：** 用 SELECT 有效讀資料並用 WHERE 過濾行。

## SELECT —— 選列

```sql
SELECT * FROM Student;                   -- 每一列
SELECT name, class_id FROM Student;      -- 指定列
SELECT name AS pupil_name FROM Student;  -- 別名
```

## WHERE —— 過濾行

```sql
SELECT * FROM Student WHERE class_id = 'F.4A';
SELECT * FROM Student WHERE dob >= '2008-01-01';
SELECT * FROM Score WHERE subject = 'ICT' AND score >= 80;
SELECT * FROM Student WHERE name LIKE 'A%';
```

## 比較運算符

| 運算符 | 含義 | 例子 |
|----------|---------|---------|
| `=` | 等於 | `score = 100` |
| `<>` | 不等（標準 SQL） | `class_id <> 'F.4B'` |
| `>` `<` `>=` `<=` | 比較 | `score >= 50` |
| `BETWEEN a AND b` | 含端範圍 | `score BETWEEN 70 AND 90` |
| `IN (...)` | 在列表中 | `class_id IN ('F.4A','F.4C')` |
| `LIKE pattern` | 模式匹配 | `name LIKE 'A%'` |
| `IS NULL` / `IS NOT NULL` | 空測試 | `email IS NULL` |

## 邏輯運算符

| 運算符 | 含義 |
|----------|---------|
| `AND` | 兩條件都真 |
| `OR` | 至少一真 |
| `NOT` | 取反 |

為清晰用括號：

```sql
SELECT *
FROM   Student
WHERE  (class_id = 'F.4A' AND dob >= '2008-01-01')
   OR  class_id = 'F.4C';
```

## 實例

### 列所有 F.4A 學生

```sql
SELECT student_id, name FROM Student WHERE class_id = 'F.4A';
```

### ICT 分數高於 80

```sql
SELECT s.name, sc.score
FROM   Student s, Score sc                   -- （JOIN 見 2.8）
WHERE  s.student_id = sc.student_id
  AND  sc.subject = 'ICT'
  AND  sc.score > 80;
```

### 2007 年出生的學生

```sql
SELECT name, dob FROM Student WHERE dob BETWEEN '2007-01-01' AND '2007-12-31';
SELECT name, dob FROM Student WHERE YEAR(dob) = 2007;        -- 用 YEAR() 更簡
```

### 名字以 A 或 B 開頭

```sql
SELECT name FROM Student WHERE name LIKE 'A%' OR name LIKE 'B%';
```

## 怎樣手動預測輸出

1. **FROM** —— 寫下表所有行。
2. **WHERE** —— 劃掉不滿足條件的行。
3. **SELECT** —— 只保留要求列。

三步追蹤在「輸出是什麼」題裏掙分。

## 學生常見錯誤

- 用 `=` 比 NULL（用 `IS NULL`）。
- 標準 SQL 用單引號給字符串、雙引號給標識符（多數 DBMS 兩者皆接受，但一致）。
- 條件間漏 `AND`（`WHERE a=1 b=2` → 語法錯）。

## 考試式題目

> **題（5 分）：** 對 `Student(student_id, name, class_id, dob)` 和 `Score(student_id, subject, score)` 寫 SQL：
>
> (a) 列 F.4A 學生姓名。
> (b) 列出有學生得 100 的科目。
> (c) 列出 2007-01-01 到 2008-12-31 間出生、名字以 'A' 起的學生。

**參考答案：**

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

## 關鍵要點

- SELECT 選列；WHERE 過濾行。
- 用對運算符：`=`、`BETWEEN`、`IN`、`LIKE`、`IS NULL`。
- AND / OR / NOT 組合條件。

➡️ 下一節：[2.4 運算符與 LIKE / IN](./operators)