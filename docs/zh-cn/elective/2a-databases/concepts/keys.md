# 1.2 · 键 —— 主键、外键、候选键

> **目标：** 识别各种键并挑对。

## 键为何重要

- **唯一识别**每一行。
- **连接**表。
- 经索引启用**快速查找**。

## 必知五术语

| 键 | 定义 |
|-----|------------|
| **Super key 超键** | 任何能唯一识别行的属性组合 |
| **Candidate key 候选键** | 最小超键（不能再去任何属性） |
| **Primary key (PK) 主键** | 表所选的候选键 |
| **Alternate key 替代键** | 未被选作 PK 的其他候选键 |
| **Foreign key (FK) 外键** | 一表中引用另一表 PK 的属性 |

## 特殊类型

| 键 | 备注 |
|-----|-------|
| **Composite key 复合键** | 由两个或更多属性组成 |
| **Surrogate key 代理键** | 无业务意义的人工键（`id INTEGER AUTO_INCREMENT`） |
| **Natural key 自然键** | 来自真实世界数据的键（HKID、ISBN） |

## 实例 · Student 表

```
Student(
  student_id      INTEGER PRIMARY KEY,   ← 代理、单属性
  hkid            VARCHAR(10) UNIQUE,    ← 候选（自然）
  name            VARCHAR(50) NOT NULL,
  dob             DATE,
  class_id        INTEGER,
  FOREIGN KEY (class_id) REFERENCES Class(class_id)
)
```

- **候选键**：`student_id`、`hkid`（都唯一）。
- **主键**：`student_id`（所选）。
- **替代键**：`hkid`（另一候选）。
- **外键**：`class_id` → `Class.class_id`。

## 复合键例 · Enrolment

学生可选多门课，课有多个学生：

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

这里 `(student_id, course_id, semester)` 一起唯一识别一条选课记录。

## 选主键

| 标准 | 为何 |
|-----------|-----|
| 唯一 | 必须识别单行 |
| 非空 | PK 不能为 NULL |
| 不变 | 应少改 |
| 紧凑 | 索引更小、查更快 |
| 方便 | 代理键避免业务意义与身份耦合 |

## 学生常见错误

- 用姓名作主键（姓名不唯一且可能变）。
- 忘了**外键必须引用另一表的现有主键**。
- 把复合键与多个主键混淆（一表**一**个 PK，可能复合）。
- 用可空列作主键。

## 考试式题目

> **题（5 分）：** 对表 `Order(order_id, customer_id, product_id, quantity, order_date)`：
>
> (a) 建议合适主键。
> (b) 识别两个外键及其引用表。
> (c) `(customer_id, product_id)` 能作主键吗？说明。

**参考答案：**

(a) `order_id` —— 代理键、单列、唯一、永非空。

(b) `customer_id` 引用 `Customer(customer_id)`；`product_id` 引用 `Product(product_id)`。

(c) `(customer_id, product_id)` **不**适合作 PK，因为顾客可能在不同日子多次订同一产品 —— 复合不会唯一。要唯一需加 `order_date`，但原 `order_id` 代理更简单可靠。

## 关键要点

- 主键唯一识别行。
- 外键引用另一表的主键。
- 复合键存在；代理键常最干净。

➡️ 下一节：[1.3 完整性规则](./integrity)
