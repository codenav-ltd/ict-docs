# 3.5 · ER → 关系表

> **目标：** 把 ER 图翻译成 CREATE TABLE 语句。

## 转换规则

| ER 元素 | 变成 |
|-----------|---------|
| 实体 | 表，每属性一列；键属性 → PK |
| 1:1 关系 | 两表之一里的单一 FK |
| 1:M 关系 | 多侧的 FK 引用一侧的 PK |
| M:N 关系 | 新关联表，两个 FK（复合 PK） |
| 弱实体 | 表含到主实体的 FK 入 PK |
| 继承（罕） | 单表加判别列 或 子类分表 |

## 例 · 学校图书馆

ER 图（文字）：

- 实体：`Member(member_id, name, class)`、`Book(isbn, title, author, copies)`。
- 关系：`Loan(loan_date, due_date, return_date)` —— Member 与 Book 间 M:N。

### 表

```sql
CREATE TABLE Member (
  member_id INTEGER PRIMARY KEY,
  name      VARCHAR(50) NOT NULL,
  class     VARCHAR(10)
);

CREATE TABLE Book (
  isbn   VARCHAR(13) PRIMARY KEY,
  title  VARCHAR(200) NOT NULL,
  author VARCHAR(100),
  copies INTEGER DEFAULT 1
);

CREATE TABLE Loan (
  loan_id     INTEGER PRIMARY KEY,
  member_id   INTEGER NOT NULL,
  isbn        VARCHAR(13) NOT NULL,
  loan_date   DATE NOT NULL,
  due_date    DATE NOT NULL,
  return_date DATE,
  FOREIGN KEY (member_id) REFERENCES Member(member_id),
  FOREIGN KEY (isbn)      REFERENCES Book(isbn)
);
```

加代理 `loan_id` 而非复合 PK `(member_id, isbn)`，因为会员可能日后再借同一本书 —— 仅复合不唯一。

## 实例 · 网上商店

ER：

- `Customer(customer_id, name, email)`
- `Product(sku, name, price, stock)`
- `Order(order_id, customer_id, order_date, status)`
- `OrderLine(order_id, sku, quantity)`（Order 与 Product 间 M:N）

### 表

```sql
CREATE TABLE Customer (
  customer_id INTEGER PRIMARY KEY,
  name        VARCHAR(100) NOT NULL,
  email       VARCHAR(150) UNIQUE
);

CREATE TABLE Product (
  sku   VARCHAR(20) PRIMARY KEY,
  name  VARCHAR(200) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE "Order" (                       -- 加引号因为 ORDER 是保留字
  order_id    INTEGER PRIMARY KEY,
  customer_id INTEGER NOT NULL,
  order_date  DATE NOT NULL,
  status      VARCHAR(20) NOT NULL,
  FOREIGN KEY (customer_id) REFERENCES Customer(customer_id)
);

CREATE TABLE OrderLine (
  order_id INTEGER,
  sku      VARCHAR(20),
  quantity INTEGER NOT NULL CHECK (quantity > 0),
  PRIMARY KEY (order_id, sku),
  FOREIGN KEY (order_id) REFERENCES "Order"(order_id),
  FOREIGN KEY (sku)      REFERENCES Product(sku)
);
```

## 最佳实践

- 总指定 FK 约束。
- 自然会冲突的实体用代理 PK。
- 刻意选类型（`VARCHAR(n)` vs `TEXT`）。
- 避用 SQL 保留字作标识符（必须时加引号）。

## 学生常见错误

- 忘把 M:N 关系转关联表。
- 用有意义的名给代理键（`alice_id` 而非 `id`）。
- 在多表存相同数据而非用 FK。

## 考试式题目

> **题（6 分）：** 把以下 ER 转 CREATE TABLE：
>
> - `Person(person_id, name)`
> - `Skill(skill_id, name)`
> - Person 与 Skill 间多对多关系「knows」，属性 `level`（1–5）。

**参考答案：**

```sql
CREATE TABLE Person (
  person_id INTEGER PRIMARY KEY,
  name      VARCHAR(100) NOT NULL
);

CREATE TABLE Skill (
  skill_id INTEGER PRIMARY KEY,
  name     VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE PersonSkill (
  person_id INTEGER,
  skill_id  INTEGER,
  level     INTEGER NOT NULL CHECK (level BETWEEN 1 AND 5),
  PRIMARY KEY (person_id, skill_id),
  FOREIGN KEY (person_id) REFERENCES Person(person_id),
  FOREIGN KEY (skill_id)  REFERENCES Skill(skill_id)
);
```

## 关键要点

- 每实体 → 表。
- M:N → 关联表。
- 总指定 FK 约束。

➡️ 下一节：[3.6 访问权与隐私](./access-rights)
