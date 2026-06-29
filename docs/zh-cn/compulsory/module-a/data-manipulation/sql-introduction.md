# 4.5 · 读简单 SQL

> **目标：** 读懂并预测基础 `SELECT` 查询的输出 —— 这是卷一所期望的水平。

## 为什么要「读」 SQL？

模块 A 层级**不**要求你写复杂 SQL —— 那是选修 2A 的事。但卷一经常让你**读**短短的 `SELECT` 并预测输出。即便不选 2A，这技能也送分。

## 一句话说 SQL 干什么

> **SQL**（结构化查询语言）是与关系型数据库交流的语言。多数操作涉及 `SELECT … FROM … WHERE …`。

## 必须认得的五个子句

| 子句 | 用途 |
|--------|---------|
| `SELECT columns` | 显示哪些列 |
| `FROM table` | 从哪张表读 |
| `WHERE condition` | 过滤行 |
| `ORDER BY column` | 排序输出 |
| `GROUP BY column` | 按组聚合 |

这里聚焦前四个。`GROUP BY` 在 2A 简略介绍。

## 演示数据集

```sql
CREATE TABLE student (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50),
  class VARCHAR(10),
  score INTEGER
);

INSERT INTO student VALUES
  (1001, 'Alice', 'F.4A', 86),
  (1002, 'Bob',   'F.4A', 72),
  (1003, 'Carol', 'F.4B', 91),
  (1004, 'David', 'F.4B', 55),
  (1005, 'Eve',   'F.4A', 78);
```

你可以把它粘进 **[SQL Books](https://sqlbooks.codenav.dev)**，在浏览器沙箱里跑下面每个例子 —— 无需安装。

## 例子查询

### Q1 · 所有人

```sql
SELECT * FROM student;
```

输出：

```
id    name   class  score
1001  Alice  F.4A   86
1002  Bob    F.4A   72
1003  Carol  F.4B   91
1004  David  F.4B   55
1005  Eve    F.4A   78
```

### Q2 · 选定列

```sql
SELECT name, score FROM student;
```

```
name   score
Alice  86
Bob    72
Carol  91
David  55
Eve    78
```

### Q3 · 加过滤

```sql
SELECT name, score
FROM   student
WHERE  score >= 80;
```

```
name   score
Alice  86
Carol  91
```

### Q4 · 两个条件

```sql
SELECT name, score
FROM   student
WHERE  class = 'F.4A'
  AND  score >= 80;
```

```
name   score
Alice  86
```

### Q5 · 排序

```sql
SELECT name, score
FROM   student
WHERE  class = 'F.4A'
ORDER BY score DESC;
```

```
name   score
Alice  86
Eve    78
Bob    72
```

### Q6 · LIKE 模式

```sql
SELECT name
FROM   student
WHERE  name LIKE 'A%';      -- 以 A 开头
```

```
name
Alice
```

| 模式 | 含义 |
|---------|---------|
| `%` | 任意多个字符 |
| `_` | 恰好一个字符 |

### Q7 · BETWEEN 范围

```sql
SELECT name, score
FROM   student
WHERE  score BETWEEN 70 AND 90;
```

```
name   score
Alice  86
Bob    72
Eve    78
```

### Q8 · IN 集合

```sql
SELECT name, class
FROM   student
WHERE  class IN ('F.4A', 'F.4C');
```

```
name   class
Alice  F.4A
Bob    F.4A
Eve    F.4A
```

### Q9 · 聚合（提前看一眼 2A 内容）

```sql
SELECT COUNT(*) FROM student;             -- 5
SELECT AVG(score) FROM student;           -- 76.4
SELECT MAX(score), MIN(score) FROM student; -- 91, 55
```

## 怎样手动预测输出

一个可靠的心算算法：

1. **FROM** —— 写下表中所有行。
2. **WHERE** —— 划掉不匹配的行。
3. **ORDER BY** —— 对剩下的排序。
4. **SELECT** —— 只保留要求的列。

走查 Q5：

| 步骤 | 结果 |
|------|--------|
| FROM student | 5 行 |
| WHERE class = 'F.4A' | Alice、Bob、Eve |
| ORDER BY score DESC | Alice (86)、Eve (78)、Bob (72) |
| SELECT name, score | 完成 |

## 学生常见错误

- 忘了**字符串**要加**单引号**：`'F.4A'`，而非 `F.4A`。
- 用 `==` 而非 `=`（SQL 用单 `=`）。
- 把 `<>` 与 `!=` 视为相同 —— 标准 SQL 是 `<>`；多数 DBMS 两者都接受，但 HKEAA 参考表印的是 `<>`。
- 条件之间漏 `AND`。
- 在聚合上用 `WHERE` —— 那要 `HAVING`（2A 内容）。

## 练习活动

用上面数据集预测每个查询的输出：

1. `SELECT name FROM student WHERE class = 'F.4B';`
2. `SELECT * FROM student WHERE score < 70;`
3. `SELECT name, score FROM student ORDER BY score DESC LIMIT 2;`
4. `SELECT class, COUNT(*) FROM student GROUP BY class;`
5. `SELECT name FROM student WHERE name LIKE '%e%';`

::: details 答案
1. Carol、David
2. David、55
3. Carol 91、Alice 86
4. F.4A 3、F.4B 2
5. Alice、Eve（任何含 'e' 的名字 —— 大小写敏感看排序规则；默认通常不敏感）
:::

## 考试式题目

> **题（5 分）：** 表 `book` 含字段 `isbn, title, author, year_published`。写一个 SQL 查询，返回作者为 `'Lewis Carroll'`、于 2000 年后出版的所有书的标题与年份，按年份升序排。

**参考答案：**

```sql
SELECT title, year_published
FROM   book
WHERE  author = 'Lewis Carroll'
  AND  year_published > 2000
ORDER BY year_published ASC;
```

## 关键要点

- SQL 查询形状可预测：`SELECT … FROM … WHERE … ORDER BY …`。
- 比较用 `=`，字符串加单引号。
- 课程指引说你要会**追踪并解读**简单 SQL —— 这里练的正是这个。
- 想**写**更复杂查询，继续学选修 2A。

::: tip 跑每个查询，改每个子句
你**自己打**才会懂。打开 [SQL Books](https://sqlbooks.codenav.dev)，把示范 `CREATE TABLE` 与 `INSERT` 粘进去，跑 Q1 到 Q9。改一个条件，按运行，看输出变。10 分钟胜过 1 小时被动阅读。
:::

## 章节总结

你完成了第 4 章 —— 也就是模块 A 全部。自测：

- 能写一条 3 行电子表格公式找中位数吗？提示：有 `MEDIAN()` 函数。
- 能 30 秒内根据 CSV 画出透视表草图吗？
- 能预测 `SELECT name FROM student WHERE score BETWEEN 60 AND 80 ORDER BY name` 的输出吗？

如果都能 —— 恭喜，可以继续前进。

➡️ 下一模块：[模块 B · 电脑系统基础](../../module-b/)
