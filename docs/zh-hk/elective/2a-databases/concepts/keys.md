# 1.2 · 鍵 —— 主鍵、外來鍵、候選鍵

> **目標：** 識別各種鍵並挑對。

## 鍵為何重要

- **唯一識別**每一行。
- **連接**表。
- 經索引啓用**快速查找**。

## 必知五術語

| 鍵 | 定義 |
|-----|------------|
| **Super key 超鍵** | 任何能唯一識別行的屬性組合 |
| **Candidate key 候選鍵** | 最小超鍵（不能再去任何屬性） |
| **Primary key (PK) 主鍵** | 表所選的候選鍵 |
| **Alternate key 替代鍵** | 未被選作 PK 的其他候選鍵 |
| **Foreign key (FK) 外來鍵** | 一表中引用另一表 PK 的屬性 |

## 特殊類型

| 鍵 | 備註 |
|-----|-------|
| **Composite key 複合鍵** | 由兩個或更多屬性組成 |
| **Surrogate key 代理鍵** | 無業務意義的人工鍵（`id INTEGER AUTO_INCREMENT`） |
| **Natural key 自然鍵** | 來自真實世界資料的鍵（HKID、ISBN） |

## 實例 · Student 表

```
Student(
  student_id      INTEGER PRIMARY KEY,   ← 代理、單屬性
  hkid            VARCHAR(10) UNIQUE,    ← 候選（自然）
  name            VARCHAR(50) NOT NULL,
  dob             DATE,
  class_id        INTEGER,
  FOREIGN KEY (class_id) REFERENCES Class(class_id)
)
```

- **候選鍵**：`student_id`、`hkid`（都唯一）。
- **主鍵**：`student_id`（所選）。
- **替代鍵**：`hkid`（另一候選）。
- **外來鍵**：`class_id` → `Class.class_id`。

## 複合鍵例 · Enrolment

學生可選多門課，課有多個學生：

```
Enrolment(
  student_id INTEGER,
  course_id  INTEGER,
  semester   VARCHAR(10),
  PRIMARY KEY (student_id, course_id, semester),
  FOREIGN KEY (student_id) REFERENCES Student(student_id),
  FOREIGN KEY (course_id)  REFERENCES Course(course_id)
)
```

這裏 `(student_id, course_id, semester)` 一起唯一識別一條選課記錄。

## 選主鍵

| 標準 | 為何 |
|-----------|-----|
| 唯一 | 必須識別單行 |
| 非空 | PK 不能為 NULL |
| 不變 | 應少改 |
| 緊湊 | 索引更小、查更快 |
| 方便 | 代理鍵避免業務意義與身份耦合 |

## 學生常見錯誤

- 用姓名作主鍵（姓名不唯一且可能變）。
- 忘了**外來鍵必須引用另一表的現有主鍵**。
- 把複合鍵與多個主鍵混淆（一表**一**個 PK，可能複合）。
- 用可空列作主鍵。

## 考試式題目

> **題（5 分）：** 對錶 `Order(order_id, customer_id, product_id, quantity, order_date)`：
>
> (a) 建議合適主鍵。
> (b) 識別兩個外來鍵及其引用表。
> (c) `(customer_id, product_id)` 能作主鍵嗎？説明。

**參考答案：**

(a) `order_id` —— 代理鍵、單列、唯一、永非空。

(b) `customer_id` 引用 `Customer(customer_id)`；`product_id` 引用 `Product(product_id)`。

(c) `(customer_id, product_id)` **不**適合作 PK，因為顧客可能在不同日子多次訂同一產品 —— 複合不會唯一。要唯一需加 `order_date`，但原 `order_id` 代理更簡單可靠。

## 關鍵要點

- 主鍵唯一識別行。
- 外來鍵引用另一表的主鍵。
- 複合鍵存在；代理鍵常最乾淨。

➡️ 下一節：[1.3 完整性規則](./integrity)