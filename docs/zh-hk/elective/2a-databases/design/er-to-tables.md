# 3.5 · ER → 關係表

> **目標：** 把 ER 圖翻譯成 CREATE TABLE 語句。

## 轉換規則

| ER 元素 | 變成 |
|-----------|---------|
| 實體 | 表，每屬性一列；鍵屬性 → PK |
| 1:1 關係 | 兩表之一里的單一 FK |
| 1:M 關係 | 多側的 FK 引用一側的 PK |
| M:N 關係 | 新關聯表，兩個 FK（複合 PK） |
| 弱實體 | 表含到主實體的 FK 入 PK |
| 繼承（罕） | 單表加判別列 或 子類分表 |

## 例 · 學校圖書館

ER 圖（文字）：

- 實體：`Member(member_id, name, class)`、`Book(isbn, title, author, copies)`。
- 關係：`Loan(loan_date, due_date, return_date)` —— Member 與 Book 間 M:N。

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

加代理 `loan_id` 而非複合 PK `(member_id, isbn)`，因為會員可能日後再借同一本書 —— 僅複合不唯一。

## 實例 · 網上商店

ER：

- `Customer(customer_id, name, email)`
- `Product(sku, name, price, stock)`
- `Order(order_id, customer_id, order_date, status)`
- `OrderLine(order_id, sku, quantity)`（Order 與 Product 間 M:N）

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

CREATE TABLE "Order" (                       -- 加引號因為 ORDER 是保留字
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

## 最佳實踐

- 總指定 FK 約束。
- 自然會衝突的實體用代理 PK。
- 刻意選類型（`VARCHAR(n)` vs `TEXT`）。
- 避用 SQL 保留字作標識符（必須時加引號）。

## 學生常見錯誤

- 忘把 M:N 關係轉關聯表。
- 用有意義的名給代理鍵（`alice_id` 而非 `id`）。
- 在多表存相同資料而非用 FK。

## 考試式題目

> **題（6 分）：** 把以下 ER 轉 CREATE TABLE：
>
> - `Person(person_id, name)`
> - `Skill(skill_id, name)`
> - Person 與 Skill 間多對多關係「knows」，屬性 `level`（1–5）。

**參考答案：**

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

## 關鍵要點

- 每實體 → 表。
- M:N → 關聯表。
- 總指定 FK 約束。

➡️ 下一節：[3.6 訪問權與隱私](./access-rights)