# 3.1 · ER 图

> **目标：** 用 HKEAA 符号读画实体-关系图。

## ER 图是什么

数据库**实体**、其**属性**与**关系**的图。它是建表前的设计蓝图。

## HKEAA 符号集

```
实体:           ┌─────────────┐
                │   Student   │
                └─────────────┘

属性:           ◯ name

键属性:         ◉ student_id   （印刷图中下划线）

关系:           ◇ enrols ◇
```

## 画 ER 图

### 第 1 步 · 识别实体

读情境。每个描述「你要存数据的事物」的名词都是候选实体。

> 「学校把学生编入班级。每个班有一位老师。」

实体：**Student**、**Class**（Teacher 可作实体或 Class 的属性）。

### 第 2 步 · 识别属性

为每个实体列出关心的属性（列）。

```
Student: student_id (PK)、name、dob、class_id (FK)
Class:   class_id (PK)、teacher
```

### 第 3 步 · 识别关系

找连接实体的动词（「enrols」「borrows」「owns」）。

> 「每位学生恰编入一个班；每个班可有多位学生。」

关系：`Student — enrols — Class`，基数 **多对一**（每位学生 → 一班；每班 → 多生）。

### 第 4 步 · 加基数与参与度

详见 [3.2 基数与参与度](./cardinality)。

## 简单图例

```
Student ───< enrols >─── Class
  │                          │
  ◯ name                     ◯ teacher
  ◉ student_id               ◉ class_id
```

「<」与「>」暗示「多」侧。

## 更大例子 · 学校图书馆

实体与关系：

```
       Member ───< Loan >─── Book
          │            │           │
       ◯ name       ◯ date     ◯ title
       ◉ id         ◉ id       ◉ isbn
```

关系：

- Member ─ borrows ─ Book（多对多）→ 由 `Loan` 关联实体化解。
- 一次借阅恰属一位 Member 和一本 Book。

## 何时加弱 / 关联实体

多对多关系自带属性（如 `loan_date`、`due_date`）时，它该独立成实体。

## 学生常见错误

- 画多对多关系而无关联实体。
- 把实体（名词）与属性（性质）混淆。
- 在属性间画关系。
- 忘了给键属性下划线。

## 考试式题目

> **题（5 分）：** 为情境画 ER 图：在线补习平台连接学生与导师。每位学生可订多节课。每节课由恰好一位导师在一个时间段授。平台存课题与价格。

**参考答案（文字表示）：**

实体：

- **Student**（`student_id PK, name, email`）
- **Tutor**（`tutor_id PK, name, subject`）
- **Lesson**（`lesson_id PK, topic, price, slot_datetime, student_id FK, tutor_id FK`）

关系：

- Student **— books —** Lesson：1 对多
- Tutor **— gives —** Lesson：1 对多

图（文字）：

```
Student ────< books >──── Lesson ────< gives >──── Tutor
```

## 关键要点

- ER 图展示实体、属性、关系。
- 多对多用关联实体化解。
- 用 HKEAA 符号。

➡️ 下一节：[3.2 基数与参与度](./cardinality)
