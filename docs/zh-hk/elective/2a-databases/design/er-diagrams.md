# 3.1 · ER 圖

> **目標：** 用 HKEAA 符號讀畫實體-關係圖。

## ER 圖是什麼

資料庫**實體**、其**屬性**與**關係**的圖。它是建表前的設計藍圖。

## HKEAA 符號集

```
實體:           ┌─────────────┐
                │   Student   │
                └─────────────┘

屬性:           ◯ name

鍵屬性:         ◉ student_id   （印刷圖中下劃線）

關係:           ◇ enrols ◇
```

## 畫 ER 圖

### 第 1 步 · 識別實體

讀情境。每個描述「你要存資料的事物」的名詞都是候選實體。

> 「學校把學生編入班級。每個班有一位老師。」

實體：**Student**、**Class**（Teacher 可作實體或 Class 的屬性）。

### 第 2 步 · 識別屬性

為每個實體列出關心的屬性（列）。

```
Student: student_id (PK)、name、dob、class_id (FK)
Class:   class_id (PK)、teacher
```

### 第 3 步 · 識別關係

找連接實體的動詞（「enrols」「borrows」「owns」）。

> 「每位學生恰編入一個班；每個班可有多位學生。」

關係：`Student — enrols — Class`，基數 **多對一**（每位學生 → 一班；每班 → 多生）。

### 第 4 步 · 加基數與參與度

詳見 [3.2 基數與參與度](./cardinality)。

## 簡單圖例

```
Student ───< enrols >─── Class
  │                          │
  ◯ name                     ◯ teacher
  ◉ student_id               ◉ class_id
```

「<」與「>」暗示「多」側。

## 更大例子 · 學校圖書館

實體與關係：

```
       Member ───< Loan >─── Book
          │            │           │
       ◯ name       ◯ date     ◯ title
       ◉ id         ◉ id       ◉ isbn
```

關係：

- Member ─ borrows ─ Book（多對多）→ 由 `Loan` 關聯實體化解。
- 一次借閲恰屬一位 Member 和一本 Book。

## 何時加弱 / 關聯實體

多對多關係自帶屬性（如 `loan_date`、`due_date`）時，它該獨立成實體。

## 學生常見錯誤

- 畫多對多關係而無關聯實體。
- 把實體（名詞）與屬性（性質）混淆。
- 在屬性間畫關係。
- 忘了給鍵屬性下劃線。

## 考試式題目

> **題（5 分）：** 為情境畫 ER 圖：在線補習平台連接學生與導師。每位學生可訂多節課。每節課由恰好一位導師在一個時間段授。平台存課題與價格。

**參考答案（文字表示）：**

實體：

- **Student**（`student_id PK, name, email`）
- **Tutor**（`tutor_id PK, name, subject`）
- **Lesson**（`lesson_id PK, topic, price, slot_datetime, student_id FK, tutor_id FK`）

關係：

- Student **— books —** Lesson：1 對多
- Tutor **— gives —** Lesson：1 對多

圖（文字）：

```
Student ────< books >──── Lesson ────< gives >──── Tutor
```

## 關鍵要點

- ER 圖展示實體、屬性、關係。
- 多對多用關聯實體化解。
- 用 HKEAA 符號。

➡️ 下一節：[3.2 基數與參與度](./cardinality)