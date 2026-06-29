# 2.7 · 聚合與內建函式

> **目標：** 用 HKEAA 參考表所列的函式家族。

## 聚合函式

| 函式 | 例 | 返回 |
|----------|---------|---------|
| `COUNT(*)` | `COUNT(*)` | 行數 |
| `COUNT(col)` | `COUNT(email)` | 非空值 |
| `SUM(col)` | `SUM(score)` | 總和 |
| `AVG(col)` | `AVG(score)` | 平均 |
| `MIN(col)` | `MIN(score)` | 最小 |
| `MAX(col)` | `MAX(score)` | 最大 |

## 字符串函式（來自參考表）

| 函式 | 例 | 返回 |
|----------|---------|---------|
| `CHAR_LENGTH(s)` 或 `LEN(s)` | `LEN('HKDSE')` | 5 |
| `LOWER(s)` | `LOWER('HKDSE')` | `'hkdse'` |
| `UPPER(s)` | `UPPER('dse')` | `'DSE'` |
| `TRIM(s)` | `TRIM('  hi  ')` | `'hi'` |
| `SUBSTRING(s, start, length)` | `SUBSTRING('HKDSE', 1, 2)` | `'HK'` |
| `VALUE(s)` 或 `VAL(s)` | `VAL('123abc')` | `123`（DBMS 特定） |
| `CHAR(n)` 或 `CHR(n)` | `CHR(65)` | `'A'` |
| `SPACE(n)` | `SPACE(3)` | `'   '` |

## 日期函式

| 函式 | 返回 |
|----------|---------|
| `DATE` | 構造或提取 |
| `DAY(d)` | 月日 |
| `MONTH(d)` | 月 |
| `YEAR(d)` | 年 |

```sql
SELECT name, YEAR(dob) AS birth_year
FROM   Student
WHERE  MONTH(dob) = 5;       -- 5 月出生
```

## 數值輔助

| 函式 | 返回 |
|----------|---------|
| `ABS(n)` | 絕對值 |
| `INT(n)` | 整數部分（截尾） |
| `ROUND(n, d)`（DBMS 特定） | 取 d 位小數 |

## 聚合與函式組合

```sql
SELECT subject, ROUND(AVG(score), 1) AS avg_rounded
FROM   Score
GROUP BY subject;
```

## 實例 · 顧客報告

```sql
SELECT UPPER(name) AS NAME,
       LEN(name) AS NAME_LEN,
       YEAR(dob) AS YOB
FROM   Student
ORDER  BY name;
```

## 學生常見錯誤

- 對文本列用 `AVG()`。
- 用 `COUNT(col)` 還驚訝 NULL 值被跳過。
- 跨 DBMS 函式名混用（如 `LEN` 某些可、`CHAR_LENGTH` 標準 SQL）。

## 考試式題目

> **題（5 分）：** 對 `Student(student_id, name, class_id, dob)` 寫 SQL：
>
> (a) 輸出每位學生姓名大寫與出生年。
> (b) 顯示學生姓名平均長度。
> (c) 2007 年出生的學生數。

**參考答案：**

```sql
-- (a)
SELECT UPPER(name) AS upper_name, YEAR(dob) AS birth_year FROM Student;

-- (b)
SELECT AVG(CHAR_LENGTH(name)) AS avg_name_length FROM Student;

-- (c)
SELECT COUNT(*) AS born_2007 FROM Student WHERE YEAR(dob) = 2007;
```

## 關鍵要點

- 聚合函式彙總組。
- 自由用字符串 / 日期 / 數值輔助。
- 函式名因 DBMS 而異 —— HKEAA 參考表給的是 SQL-92 標準。

➡️ 下一節：[2.8 JOIN](./joins)