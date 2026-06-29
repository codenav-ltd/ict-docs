# 1.4 · 索引与回滚

> **目标：** 解释索引做什么、何时用，以及回滚作用。

## 索引

**索引**是让 DBMS 不必扫描整表也能快速找到行的数据结构。

### 无索引

```sql
SELECT * FROM Student WHERE name = 'Alice Chan';
```

DBMS 读每一行比较 `name` —— O(N)。

### `name` 上有索引

索引是排序的（或哈希的）。查找在 B-tree 上 O(log N)，哈希平均 O(1)。

### 代价

- **读快**（尤其 WHERE / JOIN / ORDER BY）。
- **写慢** —— 每次 INSERT/UPDATE/DELETE 都要更新索引。
- **磁盘空间** —— 索引占储存。

### 何时加索引

- `WHERE`、`JOIN`、`ORDER BY` 常用列。
- 多个不同值（高基数）的列。
- 主键自动加索引。
- 小表别加（全扫更快）。

### 语法

```sql
CREATE INDEX idx_student_name ON Student(name);
DROP INDEX idx_student_name ON Student;
```

## 回滚

**回滚**撤销一个或多个未提交的改动，把数据库恢复到上次一致状态。是**事务**的一部分。

### 事务模型

```sql
BEGIN TRANSACTION;
   UPDATE Account SET balance = balance - 100 WHERE id = 1;
   UPDATE Account SET balance = balance + 100 WHERE id = 2;
COMMIT;     -- 或 ROLLBACK;
```

第二个 UPDATE 中途失败时，应用可 `ROLLBACK` 恢复第一个 UPDATE。

### ACID 属性

| 字母 | 属性 | 含义 |
|--------|----------|---------|
| A | **Atomicity 原子性** | 全部或全无 |
| C | **Consistency 一致性** | 数据库总在合法状态 |
| I | **Isolation 隔离** | 并发事务不互扰 |
| D | **Durability 持久** | 提交后能扛崩溃 |

### 常见回滚用例

- 应用代码检出错误并调用 `ROLLBACK`。
- 事务中网络中断 —— DBMS 自动回滚。
- 操作员注意到刚跑了错改 —— 提交前回滚。

## 考试式题目

> **题（4 分）：** 解释数据库索引是什么，并各给一个为表加索引的优势与劣势。然后描述 `ROLLBACK` 的目的。

**参考答案：**

- **索引**是把一个或多个列的值映射到含有它们的行的独立数据结构，让 DBMS 能快速找到匹配行（典型 O(log N) 而不是 O(N)）。

- **优势**：极大加速按索引列过滤的读（如 `WHERE name = 'Alice'`）。
- **劣势**：每次 INSERT/UPDATE/DELETE 都要更新索引，写变慢且耗额外磁盘空间。

- **ROLLBACK** 撤销当前事务所做的改动，把数据库恢复到事务开始（或上次提交）时的状态。用于事务中途出错或操作员在 COMMIT 前察觉错误时，确保数据库保持一致。

## 关键要点

- 索引 = 快查的代价是写慢与占盘。
- 回滚 = 事务的「撤销」，ACID 核心。

## 第 1 章总结

你完成了关系概念。现在你理解每个 SQL 语句使用的词汇。

➡️ 下一章：[2 · SQL](../sql/)
