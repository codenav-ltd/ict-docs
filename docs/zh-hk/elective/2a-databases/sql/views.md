# 2.11 · 視圖

> **目標：** 創建並使用視圖；解釋其用途。

## 視圖是什麼

**視圖**是保存的 SELECT 語句，行為像虛擬表。你可像查詢真表那樣查視圖；DBMS 每次都跑底層 SELECT。

## 創建視圖

```sql
CREATE VIEW HighScorers AS
SELECT s.student_id, s.name, sc.subject, sc.score
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.score >= 90;
```

## 使用視圖

```sql
SELECT * FROM HighScorers;
SELECT name FROM HighScorers WHERE subject = 'ICT';
```

## 更新 / 刪除視圖

```sql
DROP VIEW HighScorers;
CREATE OR REPLACE VIEW HighScorers AS …;     -- DBMS 特定
```

## 為何用視圖

1. **隱藏複雜性** —— 應用程式碼 SELECT `HighScorers`，不必重寫 3 表 JOIN。
2. **訪問控制** —— 在公開列的視圖上授讀權而非底層表。
3. **報表一致** —— 一處定義，處處用，所有人看到相同數字。
4. **向後兼容** —— 重命名 / 重設計表後，可保留原名為視圖。

## 侷限

- 含聚合或連接的視圖可能不能經 `UPDATE`/`INSERT` 更新。
- 對視圖的每次查詢都重跑底層 SELECT（要快取用**物化視圖**，但超出課程）。

## 例 · 透過視圖隱私保護

> Student 表有列 `medical_notes`，不想老師看到。

```sql
-- 底層表有所有列
CREATE TABLE Student (
  student_id  INTEGER PRIMARY KEY,
  name        VARCHAR(50),
  class_id    VARCHAR(10),
  dob         DATE,
  medical_notes TEXT
);

-- 公開視圖僅暴露安全列
CREATE VIEW StudentPublic AS
SELECT student_id, name, class_id, dob FROM Student;

-- 給老師僅授視圖訪問
GRANT SELECT ON StudentPublic TO teacher_role;
```

老師能 SELECT 學生詳情但永遠看不到醫療筆記。

## 實例 · 組合視圖

```sql
CREATE VIEW ClassICT AS
SELECT s.class_id, s.name, sc.score
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.subject = 'ICT';

-- 對視圖的簡單查詢
SELECT class_id, AVG(score) AS avg_ict FROM ClassICT GROUP BY class_id;
```

## 學生常見錯誤

- 把視圖與真表混淆（視圖不存資料，每次重跑 SELECT）。
- 試圖對複雜視圖插入。
- 用 `SELECT *` 建視圖 —— 底層模式改時脆弱。

## 考試式題目

> **題（5 分）：** 學校圖書館員常跑「所有逾期借閲顯示會員名與書名」報告。建議簡化用的視圖並列一個用視圖的訪問權優勢。

**參考答案：**

```sql
CREATE VIEW OverdueLoans AS
SELECT m.member_id, m.name AS member_name,
       b.isbn, b.title AS book_title,
       l.loan_date, l.due_date
FROM   Loan l
       INNER JOIN Member m ON l.member_id = m.member_id
       INNER JOIN Book   b ON l.isbn      = b.isbn
WHERE  l.return_date IS NULL
  AND  l.due_date    < CURRENT_DATE;
```

然後 `SELECT * FROM OverdueLoans;` 替代 3 表 JOIN。

**訪問權優勢**：學校可僅授圖書館員 `SELECT` `OverdueLoans`，把底層表裏諸如會員電話或借閲歷史細節這種敏感列隱藏。

## 關鍵要點

- 視圖 = 像表那樣用的保存查詢。
- 隱藏複雜、執行訪問控制、保證一致。
- 不是所有視圖都可更新。

## 第 2 章總結

你已看過選修 2A 的**全部** SQL 表面。自測：

- DDL：帶 PK、FK、NOT NULL、CHECK 的 `CREATE TABLE`。
- DML：帶 WHERE 的 INSERT、UPDATE、DELETE。
- SELECT：WHERE、ORDER BY、GROUP BY、HAVING。
- JOIN：INNER + LEFT/RIGHT/FULL OUTER，至多 3 表。
- 子查詢：標量、IN、EXISTS，一層。
- 集合操作：UNION、INTERSECT、MINUS。
- 視圖：創建、刪除、用於隱私。

::: tip 鑽透本章
打開 [SQL Books](https://sqlbooks.codenav.dev)，粘本章概覽的示範模式，**跑每個例子查詢**。然後每個查詢做一個變體。這樣練 90 分鐘後 SQL 就熟透了。
:::

➡️ 下一章：[3 · 資料庫設計方法學](../design/)