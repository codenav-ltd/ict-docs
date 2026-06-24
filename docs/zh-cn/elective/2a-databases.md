# 2A · 数据库

> **课时：** 38 · **试卷权重：** 约全科 12.5%（卷二的一半） · **主要语言：** SQL（SQL-92）。

本选修扩展模块 A。学习关系理论、ER 图设计、范式化，并用 SQL 查询和修改数据。

## 子话题速览

| # | 子话题 | 课时 |
|---|--------|------|
| a | 关系数据库概念 | 6 |
| b | SQL | 18 |
| c | 数据库设计方法 | 14 |

---

## a. 关系数据库概念（6h）

### 关键术语

| 术语 | 含义 |
|------|------|
| **实体（Entity）** | 我们储存数据的对象（学生、课程、书） |
| **属性（Attribute）** | 实体的性质（姓名、年龄、ISBN） |
| **域（Domain）** | 属性的合法值集合（年龄 ∈ 0..150） |
| **元组 / 行 / 记录** | 实体的一次出现 |
| **关系 / 表** | 共享相同属性的元组集合 |
| **索引（Index）** | 加速查询的数据结构（以写性能为代价） |

### 键

| 键 | 定义 | 例子 |
|----|------|------|
| **候选键** | 任意能唯一标识一行的属性（组合） | `student_id`、`(name, dob)` |
| **主键** | 选中的候选键 | `student_id` |
| **外键** | 一表中引用另一表主键的属性 | `Student.class_id → Class.class_id` |
| **复合键** | 主键由多个属性构成 | Enrolment 表的 `(student_id, course_id)` |
| **代理键** | 无业务含义的人工键 | `auto_increment id` |

### 完整性规则

| 规则 | 含义 |
|------|------|
| **实体完整性** | 主键不可为 NULL |
| **引用完整性** | 外键必须指向存在的主键（或允许 NULL） |
| **域完整性** | 属性值必须在其域内 |

### 为何需要 Rollback？

**回滚**撤销最近事务，恢复到良好状态 —— 用于事务半途失败、数据损坏、用户操作失误等场景。

---

## b. SQL（18h）—— 卷 2A 的核心

HKEAA 基于 **SQL-92 标准** 出题，卷 2A 提供这张参考表：

```
常数：FALSE、TRUE
运算符：+ − * / > < = >= <= <> AND OR NOT
通配符：%  _
聚合：AVG、COUNT、MAX、MIN、SUM
字符串：CHAR (CHR), CHAR_LENGTH (LEN), LOWER, UPPER,
        TRIM, SUBSTRING (SUBSTR/MID), VALUE (VAL), SPACE
日期：DATE, DAY, MONTH, YEAR
关键字：ADD, ALL, ALTER, ANY, AS, ASC, BETWEEN, BY,
        CREATE, DELETE, DESC, DISTINCT, DROP, EXISTS,
        FROM, GROUP, HAVING, IN, INDEX,
        INNER JOIN, INSERT, INTEGER, INTERSECT, INTO,
        LEFT [OUTER] JOIN, LIKE, MINUS, NULL,
        RIGHT [OUTER] JOIN, FULL [OUTER] JOIN, ON,
        ORDER, SELECT, SET, TABLE, TO, UNION, UNIQUE,
        UPDATE, VALUES, VIEW, WHERE
```

要能组合以上所有内容查询**最多 3 个表**，并写**一层子查询**。

### CREATE / ALTER / DROP

```sql
CREATE TABLE Student (
  student_id   INTEGER     PRIMARY KEY,
  name         VARCHAR(50) NOT NULL,
  class_id     INTEGER,
  dob          DATE,
  FOREIGN KEY (class_id) REFERENCES Class(class_id)
);

ALTER TABLE Student ADD email VARCHAR(100);
ALTER TABLE Student DROP COLUMN email;
DROP TABLE Student;
```

### INSERT / UPDATE / DELETE

```sql
INSERT INTO Student VALUES (1001, 'Alice', 4101, '2007-05-12');
UPDATE Student SET name = 'Alicia' WHERE student_id = 1001;
DELETE FROM Student WHERE student_id = 1001;
```

### SELECT 核心

```sql
SELECT   name, class_id
FROM     Student
WHERE    name LIKE 'A%'
   AND   dob >= '2007-01-01'
ORDER BY name ASC;
```

### GROUP BY + HAVING

```sql
SELECT   class_id, COUNT(*) AS cnt, AVG(score) AS avg_score
FROM     Score
GROUP BY class_id
HAVING   AVG(score) >= 60
ORDER BY avg_score DESC;
```

> **`WHERE` 在分组前过滤行，`HAVING` 在聚合后过滤组。**

### JOIN（最多 3 表）

```sql
SELECT s.name, c.class_name, sc.score
FROM   Student s
       INNER JOIN Class c  ON s.class_id  = c.class_id
       INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.subject = 'ICT';

SELECT s.name, sc.score
FROM   Student s
       LEFT OUTER JOIN Score sc ON s.student_id = sc.student_id;
```

| JOIN 类型 | 行为 |
|----------|------|
| **INNER / EQUI-JOIN** | 两边都匹配的行 |
| **LEFT [OUTER] JOIN** | 左边全留，右边匹配（不匹配则 NULL） |
| **RIGHT [OUTER] JOIN** | 右边全留 |
| **FULL [OUTER] JOIN** | 两边全留 |
| **NATURAL JOIN** | 自动按同名列连接（慎用） |

### 子查询（一层）

```sql
SELECT name
FROM   Student
WHERE  student_id IN (
         SELECT student_id
         FROM   Score
         WHERE  score > (SELECT AVG(score) FROM Score)
       );
```

参考资料说**仅一层子查询** —— 不要在子查询里再嵌套子查询。

### 运算符与模式

| 运算符 | 含义 |
|--------|------|
| `BETWEEN a AND b` | 闭区间 |
| `IN (…)` | 在列表中 |
| `LIKE 'A%'` | 以 A 开头（`%` = 任意长度） |
| `LIKE 'A_'` | A 加一个字符（`_` = 1 个字符） |
| `IS NULL` / `IS NOT NULL` | 判空 |

### 视图

```sql
CREATE VIEW HighScorers AS
SELECT s.student_id, s.name, sc.score
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.score >= 90;

SELECT * FROM HighScorers;
```

### 内置函数

```sql
SELECT UPPER(name), SUBSTRING(name, 1, 3), CHAR_LENGTH(name) FROM Student;
SELECT YEAR(dob), MONTH(dob), DAY(dob) FROM Student;
```

### 集合运算

```sql
SELECT student_id FROM Math_Class UNION     SELECT student_id FROM Physics_Class;
SELECT student_id FROM Math_Class INTERSECT SELECT student_id FROM Physics_Class;
SELECT student_id FROM Math_Class MINUS     SELECT student_id FROM Physics_Class;
```

::: tip 在真实数据库里练
理论只有跑过、看过结果、改一下再跑，才会真正记住。打开 **[SQL Books](https://sqlbooks.codenav.dev)** 建一个 `dse_demo` 沙盒，把上面代码粘贴跑一遍，然后改 `WHERE`、把 `INNER` 换成 `LEFT`、加上 `GROUP BY`。每个账号还内置 **SQL Books 课程**（SELECT → WHERE → JOIN → 子查询），与本选修完美对齐。
:::

---

## c. 数据库设计方法（14h）

### ER 图符号（HKEAA 标准）

```
实体：     ┌─────────────┐
           │   Student   │
           └─────────────┘

属性：     ◯ name

键属性：   ◉ student_id  （图中用下划线）

联系：     ◇ enrols ◇

基数：
  1 ────── 1       一对一
  1 ────── M       一对多
  M ────── N       多对多

参与约束：
  ── 单线   可选
  ══ 双线   必须
```

### 示例 · 学校图书馆

> 图书馆把书借给学生。一本书可被借多次，一个学生可同时借多本。

实体：

- **Student** —— student_id、name、class_id
- **Book** —— isbn、title、author、copies
- **Loan**（M:N → 拆为关系表）—— loan_id、student_id、isbn、loan_date、return_date

```
Student ──< Loan >── Book
```

### 范式化至 3NF

| 范式 | 规则 |
|------|------|
| **1NF** | 属性原子；无重复组 |
| **2NF** | 1NF + 非键属性依赖整个主键 |
| **3NF** | 2NF + 非键属性间无传递依赖 |

### 反范式化

为加速读取，故意保留冗余数据（如订单缓存客户姓名）。代价：储存增加、可能不一致。读远多于写时常用。

### 访问权限保护数据隐私

- 最小权限原则
- 角色分离：管理员、教师、学生
- 用视图隐藏敏感字段
- 真实 DBMS 用 `GRANT SELECT ON view TO user;`

---

## 常见错误

- 用 `WHERE` 过滤聚合（应用 `HAVING`）。
- `JOIN` 漏写 `ON` → 笛卡尔积。
- 弄错 `LEFT` / `RIGHT` JOIN 方向。
- 把子查询写进 `SELECT`（应在 `WHERE`）。
- M:N 关系不拆解。

## 历届考题热点

- 读 CREATE TABLE 找约束违反。
- 写 2 或 3 表 JOIN + GROUP BY + HAVING 的报表 SQL。
- 把情境转为 ER 图再转为关系表。
- 把未范式化的表化到 3NF。

➡️ 下一篇：[2B · 网络应用开发](./2b-web)
