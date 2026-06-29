# 2.11 · 视图

> **目标：** 创建并使用视图；解释其用途。

## 视图是什么

**视图**是保存的 SELECT 语句，行为像虚拟表。你可像查询真表那样查视图；DBMS 每次都跑底层 SELECT。

## 创建视图

```sql
CREATE VIEW HighScorers AS
SELECT s.student_id, s.name, sc.subject, sc.score
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.score >= 90;
```

## 使用视图

```sql
SELECT * FROM HighScorers;
SELECT name FROM HighScorers WHERE subject = 'ICT';
```

## 更新 / 删除视图

```sql
DROP VIEW HighScorers;
CREATE OR REPLACE VIEW HighScorers AS …;     -- DBMS 特定
```

## 为何用视图

1. **隐藏复杂性** —— 应用代码 SELECT `HighScorers`，不必重写 3 表 JOIN。
2. **访问控制** —— 在公开列的视图上授读权而非底层表。
3. **报表一致** —— 一处定义，处处用，所有人看到相同数字。
4. **向后兼容** —— 重命名 / 重设计表后，可保留原名为视图。

## 局限

- 含聚合或连接的视图可能不能经 `UPDATE`/`INSERT` 更新。
- 对视图的每次查询都重跑底层 SELECT（要缓存用**物化视图**，但超出课程）。

## 例 · 透过视图隐私保护

> Student 表有列 `medical_notes`，不想老师看到。

```sql
-- 底层表有所有列
CREATE TABLE Student (
  student_id  INTEGER PRIMARY KEY,
  name        VARCHAR(50),
  class_id    VARCHAR(10),
  dob         DATE,
  medical_notes TEXT
);

-- 公开视图仅暴露安全列
CREATE VIEW StudentPublic AS
SELECT student_id, name, class_id, dob FROM Student;

-- 给老师仅授视图访问
GRANT SELECT ON StudentPublic TO teacher_role;
```

老师能 SELECT 学生详情但永远看不到医疗笔记。

## 实例 · 组合视图

```sql
CREATE VIEW ClassICT AS
SELECT s.class_id, s.name, sc.score
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.subject = 'ICT';

-- 对视图的简单查询
SELECT class_id, AVG(score) AS avg_ict FROM ClassICT GROUP BY class_id;
```

## 学生常见错误

- 把视图与真表混淆（视图不存数据，每次重跑 SELECT）。
- 试图对复杂视图插入。
- 用 `SELECT *` 建视图 —— 底层模式改时脆弱。

## 考试式题目

> **题（5 分）：** 学校图书馆员常跑「所有逾期借阅显示会员名与书名」报告。建议简化用的视图并列一个用视图的访问权优势。

**参考答案：**

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

然后 `SELECT * FROM OverdueLoans;` 替代 3 表 JOIN。

**访问权优势**：学校可仅授图书馆员 `SELECT` `OverdueLoans`，把底层表里诸如会员电话或借阅历史细节这种敏感列隐藏。

## 关键要点

- 视图 = 像表那样用的保存查询。
- 隐藏复杂、执行访问控制、保证一致。
- 不是所有视图都可更新。

## 第 2 章总结

你已看过选修 2A 的**全部** SQL 表面。自测：

- DDL：带 PK、FK、NOT NULL、CHECK 的 `CREATE TABLE`。
- DML：带 WHERE 的 INSERT、UPDATE、DELETE。
- SELECT：WHERE、ORDER BY、GROUP BY、HAVING。
- JOIN：INNER + LEFT/RIGHT/FULL OUTER，至多 3 表。
- 子查询：标量、IN、EXISTS，一层。
- 集合操作：UNION、INTERSECT、MINUS。
- 视图：创建、删除、用于隐私。

::: tip 钻透本章
打开 [SQL Books](https://sqlbooks.codenav.dev)，粘本章概览的示范模式，**跑每个例子查询**。然后每个查询做一个变体。这样练 90 分钟后 SQL 就熟透了。
:::

➡️ 下一章：[3 · 数据库设计方法学](../design/)
