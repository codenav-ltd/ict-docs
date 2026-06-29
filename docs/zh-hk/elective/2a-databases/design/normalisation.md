# 3.3 · 規範化到 3NF

> **目標：** 把未規範化錶轉為 3NF，並解釋每步。

## 為何要規範化？

為了**減少資料冗餘**並避免**更新異常**。

| 異常 | 症狀 |
|---------|---------|
| **插入** | 不能加記錄除非給假資料 |
| **更新** | 同一事實存在多行；一處更新漏一行 → 不一致 |
| **刪除** | 刪一行誤刪其他有用事實 |

## 旅程 · UNF → 1NF → 2NF → 3NF

HKEAA 要求到**第三範式 (3NF)**。

## 起點 · UNF（未規範化）

設學校把選課存在一張表：

```
StudentID  Name         Courses                       Teacher
S001       Alice Chan   ICT, Maths, Eng               Mr.Lee, Ms.Wong, Mr.Tam
S002       Bob Wong     ICT, Bio                      Mr.Lee, Ms.Lam
```

問題：

- `Courses` 與 `Teacher` 是**逗號分隔列表** —— 違反 1NF。

## 1NF · 原子值

把每個重複值拆成自己一行。

```
StudentID  Name         Course  Teacher
S001       Alice Chan   ICT     Mr.Lee
S001       Alice Chan   Maths   Ms.Wong
S001       Alice Chan   Eng     Mr.Tam
S002       Bob Wong     ICT     Mr.Lee
S002       Bob Wong     Bio     Ms.Lam
```

**主鍵**現為複合：`(StudentID, Course)`。

## 2NF · 不對複合鍵部分依賴

`Name` 只依賴 `StudentID` —— 對複合鍵部分依賴。移出。

```
Student(StudentID PK, Name)
Enrolment(StudentID PK, Course PK, Teacher)
```

2NF 後每個非鍵屬性都依賴**整個**複合鍵。

## 3NF · 無傳遞依賴

新 `Enrolment` 表中 `Teacher` 依賴 `Course`（每課一師），而後者依賴鍵。這是**傳遞依賴** (`PK → Course → Teacher`)。把 Teacher 移出。

```
Student(StudentID PK, Name)
Course(Course PK, Teacher)
Enrolment(StudentID PK, Course PK)
```

3NF 後每個非鍵屬性**只**依賴鍵。

## 快速總結

| 範式 | 規則 |
|------|------|
| 1NF | 原子值；無重複組 |
| 2NF | 1NF + 非鍵屬性依賴**整個**鍵（PK 複合時相關） |
| 3NF | 2NF + 無傳遞依賴（非鍵只依賴鍵） |

常見助記：「**鍵、整個鍵、只有鍵**」。

## 實用提示

- 表只有單列 PK，就已 2NF。
- 找總同行的列組（如 `Course → Teacher`） —— 缺表的跡象。
- 在規範化模式上測查詢，確保無資料丟。

## 學生常見錯誤

- 1NF 就叫規範化收工。
- 2NF 與 3NF 混淆。
- 過規範成幾百張表 —— 可讀性差。
- 拆分後忘加參照完整性（加 FK）。

## 考試式題目

> **題（6 分）：** 書店存銷售如：
>
> ```
> SaleID Customer  Books                       Prices
> 101    Alice     Book A, Book B             50, 80
> 102    Bob       Book A                     50
> ```
>
> 規範化到 3NF，展示中間 1NF 與 2NF 階段。

**參考答案：**

**1NF** —— 拆為原子行：

```
Sale(SaleID, Customer, Book, Price)
101 Alice Book A 50
101 Alice Book B 80
102 Bob   Book A 50
```

主鍵複合：`(SaleID, Book)`。

**2NF** —— `Customer` 只依賴 `SaleID`；移出。

```
SaleHeader(SaleID PK, Customer)
SaleLine(SaleID PK, Book PK, Price)
```

**3NF** —— `Price` 依賴 `Book`（設每書固定價），不在鍵上。移出。

```
SaleHeader(SaleID PK, Customer)
Book(Book PK, Price)
SaleLine(SaleID PK, Book PK)
```

每張表滿足 3NF。冗餘消失 —— 改一本書價格在 `Book` 一行改，不是 `SaleLine` 每行。

## 關鍵要點

- 1NF：原子值，無列表。
- 2NF：無部分依賴。
- 3NF：無傳遞依賴。
- 「鍵、整個鍵、只有鍵。」

➡️ 下一節：[3.4 反規範化](./denormalisation)