# 2.10 · 集合操作 —— UNION、INTERSECT、MINUS

> **目标：** 用集合代数合并结果集。

## 三种操作

| 操作 | 返回 |
|-----------|---------|
| `UNION` | 任一集合中的行（去重） |
| `UNION ALL` | 任一集合中的行（保留重复） |
| `INTERSECT` | 两集合都在的行 |
| `MINUS`（或 `EXCEPT`） | 第一集合有但第二没的行 |

## 规则

- 两查询必须**列数相同**。
- 对应列必须**数据类型兼容**。
- 结果列名来自第一查询。

## 例子

设两表班级名单：

```sql
CREATE TABLE Math (student_id INTEGER, name VARCHAR(50));
CREATE TABLE Physics (student_id INTEGER, name VARCHAR(50));
```

### 修 Math 或 Physics 的学生

```sql
SELECT student_id, name FROM Math
UNION
SELECT student_id, name FROM Physics;
```

### 同时修 Math 与 Physics 的学生

```sql
SELECT student_id, name FROM Math
INTERSECT
SELECT student_id, name FROM Physics;
```

### 修 Math 但不修 Physics

```sql
SELECT student_id, name FROM Math
MINUS                                  -- 或标准 SQL 的 EXCEPT
SELECT student_id, name FROM Physics;
```

## UNION vs UNION ALL

```sql
SELECT 1 UNION SELECT 1;           -- 1 行
SELECT 1 UNION ALL SELECT 1;       -- 2 行
```

`UNION` 去重（较慢）。`UNION ALL` 全留（较快）。

## DBMS 变种

| 操作 | MySQL | PostgreSQL | SQL Server | Oracle |
|-----------|-------|------------|-----------|--------|
| UNION | ✓ | ✓ | ✓ | ✓ |
| INTERSECT | ✓ (8.0+) | ✓ | ✓ | ✓ |
| MINUS | 用 NOT IN | EXCEPT | EXCEPT | MINUS |

HKEAA 参考表用 **MINUS** —— SQL-92 认可的关键字。

## 实例 · 合并报告

> 「F.4A 或 F.4B 开出的全部不同科目。」

```sql
SELECT subject FROM Score INNER JOIN Student ON Score.student_id = Student.student_id
WHERE  Student.class_id = 'F.4A'
UNION
SELECT subject FROM Score INNER JOIN Student ON Score.student_id = Student.student_id
WHERE  Student.class_id = 'F.4B';
```

## 学生常见错误

- 两查询列数不同 → 错。
- 数据类型不匹配（字符串 vs 整数）。
- 忘 UNION 默认去重。

## 考试式题目

> **题（4 分）：** 两社团成员表 `Chess(member_id, name)` 与 `Robotics(member_id, name)`。写 SQL 找：
>
> (a) 任一社团的成员。
> (b) 两社团都参加的成员。
> (c) 仅 Chess 的成员。

**参考答案：**

```sql
-- (a)
SELECT member_id, name FROM Chess
UNION
SELECT member_id, name FROM Robotics;

-- (b)
SELECT member_id, name FROM Chess
INTERSECT
SELECT member_id, name FROM Robotics;

-- (c)
SELECT member_id, name FROM Chess
MINUS
SELECT member_id, name FROM Robotics;
```

## 关键要点

- UNION / INTERSECT / MINUS 合并两兼容结果集。
- 列数与类型须匹配。
- UNION 去重；UNION ALL 保留。

➡️ 下一节：[2.11 视图](./views)
