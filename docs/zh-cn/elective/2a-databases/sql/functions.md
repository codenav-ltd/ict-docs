# 2.7 · 聚合与内置函数

> **目标：** 用 HKEAA 参考表所列的函数家族。

## 聚合函数

| 函数 | 例 | 返回 |
|----------|---------|---------|
| `COUNT(*)` | `COUNT(*)` | 行数 |
| `COUNT(col)` | `COUNT(email)` | 非空值 |
| `SUM(col)` | `SUM(score)` | 总和 |
| `AVG(col)` | `AVG(score)` | 平均 |
| `MIN(col)` | `MIN(score)` | 最小 |
| `MAX(col)` | `MAX(score)` | 最大 |

## 字符串函数（来自参考表）

| 函数 | 例 | 返回 |
|----------|---------|---------|
| `CHAR_LENGTH(s)` 或 `LEN(s)` | `LEN('HKDSE')` | 5 |
| `LOWER(s)` | `LOWER('HKDSE')` | `'hkdse'` |
| `UPPER(s)` | `UPPER('dse')` | `'DSE'` |
| `TRIM(s)` | `TRIM('  hi  ')` | `'hi'` |
| `SUBSTRING(s, start, length)` | `SUBSTRING('HKDSE', 1, 2)` | `'HK'` |
| `VALUE(s)` 或 `VAL(s)` | `VAL('123abc')` | `123`（DBMS 特定） |
| `CHAR(n)` 或 `CHR(n)` | `CHR(65)` | `'A'` |
| `SPACE(n)` | `SPACE(3)` | `'   '` |

## 日期函数

| 函数 | 返回 |
|----------|---------|
| `DATE` | 构造或提取 |
| `DAY(d)` | 月日 |
| `MONTH(d)` | 月 |
| `YEAR(d)` | 年 |

```sql
SELECT name, YEAR(dob) AS birth_year
FROM   Student
WHERE  MONTH(dob) = 5;       -- 5 月出生
```

## 数值辅助

| 函数 | 返回 |
|----------|---------|
| `ABS(n)` | 绝对值 |
| `INT(n)` | 整数部分（截尾） |
| `ROUND(n, d)`（DBMS 特定） | 取 d 位小数 |

## 聚合与函数组合

```sql
SELECT subject, ROUND(AVG(score), 1) AS avg_rounded
FROM   Score
GROUP BY subject;
```

## 实例 · 顾客报告

```sql
SELECT UPPER(name) AS NAME,
       LEN(name) AS NAME_LEN,
       YEAR(dob) AS YOB
FROM   Student
ORDER  BY name;
```

## 学生常见错误

- 对文本列用 `AVG()`。
- 用 `COUNT(col)` 还惊讶 NULL 值被跳过。
- 跨 DBMS 函数名混用（如 `LEN` 某些可、`CHAR_LENGTH` 标准 SQL）。

## 考试式题目

> **题（5 分）：** 对 `Student(student_id, name, class_id, dob)` 写 SQL：
>
> (a) 输出每位学生姓名大写与出生年。
> (b) 显示学生姓名平均长度。
> (c) 2007 年出生的学生数。

**参考答案：**

```sql
-- (a)
SELECT UPPER(name) AS upper_name, YEAR(dob) AS birth_year FROM Student;

-- (b)
SELECT AVG(CHAR_LENGTH(name)) AS avg_name_length FROM Student;

-- (c)
SELECT COUNT(*) AS born_2007 FROM Student WHERE YEAR(dob) = 2007;
```

## 关键要点

- 聚合函数汇总组。
- 自由用字符串 / 日期 / 数值辅助。
- 函数名因 DBMS 而异 —— HKEAA 参考表给的是 SQL-92 标准。

➡️ 下一节：[2.8 JOIN](./joins)
