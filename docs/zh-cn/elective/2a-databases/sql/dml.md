# 2.2 · INSERT、UPDATE、DELETE (DML)

> **目标：** 用数据操纵语言 (DML) 安全修改数据。

## INSERT

### 单行

```sql
INSERT INTO Student (student_id, name, class_id, dob)
VALUES (1006, 'Frank', 'F.4B', '2008-04-19');
```

### 多行

```sql
INSERT INTO Student VALUES
  (1007, 'Grace', 'F.4A', '2008-06-21'),
  (1008, 'Henry', 'F.4B', '2007-12-05');
```

### 从 SELECT 插

```sql
INSERT INTO StudentArchive
SELECT * FROM Student WHERE dob < '2008-01-01';
```

## UPDATE

```sql
UPDATE Student
SET    class_id = 'F.4A'
WHERE  student_id = 1006;
```

⚠️ 除非有意改每一行，**永远要带 `WHERE`**。

```sql
-- 危险：改每一行！
UPDATE Student SET class_id = 'F.4A';
```

可一次改多列：

```sql
UPDATE Student
SET    name = 'Alicia Chan', dob = '2007-05-13'
WHERE  student_id = 1001;
```

## DELETE

```sql
DELETE FROM Student
WHERE       student_id = 1008;
```

⚠️ 与 UPDATE 同警告 —— 没 `WHERE` 就删全部。

```sql
-- 危险：清空表
DELETE FROM Student;
```

## 安全 DML 提示

1. **先用同 `WHERE` 跑 `SELECT`** 确认要影响的行。
   ```sql
   SELECT * FROM Student WHERE student_id = 1008;
   ```
2. **包在事务里**便于 `ROLLBACK`：
   ```sql
   BEGIN TRANSACTION;
     DELETE FROM Student WHERE student_id = 1008;
   -- 检查影响的行，然后…
   COMMIT;
   ```
3. **先在沙箱测**（[SQL Books](https://sqlbooks.codenav.dev) 每账号一个）。

## NULL 处理

```sql
INSERT INTO Student (student_id, name) VALUES (1009, 'Ivy');
-- class_id 与 dob 默认 NULL

UPDATE Student
SET    dob = NULL
WHERE  student_id = 1009;
```

按 NULL 过滤：

```sql
SELECT * FROM Student WHERE dob IS NULL;
SELECT * FROM Student WHERE dob IS NOT NULL;
```

⚠️ `WHERE dob = NULL` **永不匹配** —— NULL 不等于任何东西。

## 实例 · 管理课室分配

把 Bob 从 F.4A 移到 F.4B：

```sql
UPDATE Student SET class_id = 'F.4B' WHERE student_id = 1002;
```

删除退学学生：

```sql
DELETE FROM Student WHERE student_id = 1008;
```

为高端书批量加价 10%：

```sql
UPDATE Book SET price = price * 1.10 WHERE category = 'Premium';
```

## 学生常见错误

- 忘 `WHERE` 改每一行。
- INSERT 列顺序与 VALUES 不符。
- 忘了 `=` 对 NULL 不工作（用 `IS NULL`）。
- 在事务锁阻其他用户时改数据。

## 考试式题目

> **题（5 分）：** 写 SQL 语句：
> (a) 插入新学生 id 1010、name 「Jack」、class F.4B、dob 2008-09-10。
> (b) 把 Alice (student_id 1001) 的班级改为 F.4B。
> (c) 删除所有 dob 在 2007-01-01 之前的学生。
> (d) 把所有目前 NULL 的 email 设为 'unknown@school.edu.hk'。

**参考答案：**

```sql
-- (a)
INSERT INTO Student (student_id, name, class_id, dob)
VALUES (1010, 'Jack', 'F.4B', '2008-09-10');

-- (b)
UPDATE Student SET class_id = 'F.4B' WHERE student_id = 1001;

-- (c)
DELETE FROM Student WHERE dob < '2007-01-01';

-- (d)
UPDATE Student SET email = 'unknown@school.edu.hk' WHERE email IS NULL;
```

## 关键要点

- `INSERT`、`UPDATE`、`DELETE` 改行。
- UPDATE / DELETE 总要带 `WHERE`。
- 用事务保安全；沙箱练习。

➡️ 下一节：[2.3 SELECT 与 WHERE](./select)
