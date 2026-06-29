# 3.3 · 规范化到 3NF

> **目标：** 把未规范化表转为 3NF，并解释每步。

## 为何要规范化？

为了**减少数据冗余**并避免**更新异常**。

| 异常 | 症状 |
|---------|---------|
| **插入** | 不能加记录除非给假数据 |
| **更新** | 同一事实存在多行；一处更新漏一行 → 不一致 |
| **删除** | 删一行误删其他有用事实 |

## 旅程 · UNF → 1NF → 2NF → 3NF

HKEAA 要求到**第三范式 (3NF)**。

## 起点 · UNF（未规范化）

设学校把选课存在一张表：

```
StudentID  Name         Courses                       Teacher
S001       Alice Chan   ICT, Maths, Eng               Mr.Lee, Ms.Wong, Mr.Tam
S002       Bob Wong     ICT, Bio                      Mr.Lee, Ms.Lam
```

问题：

- `Courses` 与 `Teacher` 是**逗号分隔列表** —— 违反 1NF。

## 1NF · 原子值

把每个重复值拆成自己一行。

```
StudentID  Name         Course  Teacher
S001       Alice Chan   ICT     Mr.Lee
S001       Alice Chan   Maths   Ms.Wong
S001       Alice Chan   Eng     Mr.Tam
S002       Bob Wong     ICT     Mr.Lee
S002       Bob Wong     Bio     Ms.Lam
```

**主键**现为复合：`(StudentID, Course)`。

## 2NF · 不对复合键部分依赖

`Name` 只依赖 `StudentID` —— 对复合键部分依赖。移出。

```
Student(StudentID PK, Name)
Enrolment(StudentID PK, Course PK, Teacher)
```

2NF 后每个非键属性都依赖**整个**复合键。

## 3NF · 无传递依赖

新 `Enrolment` 表中 `Teacher` 依赖 `Course`（每课一师），而后者依赖键。这是**传递依赖** (`PK → Course → Teacher`)。把 Teacher 移出。

```
Student(StudentID PK, Name)
Course(Course PK, Teacher)
Enrolment(StudentID PK, Course PK)
```

3NF 后每个非键属性**只**依赖键。

## 快速总结

| 范式 | 规则 |
|------|------|
| 1NF | 原子值；无重复组 |
| 2NF | 1NF + 非键属性依赖**整个**键（PK 复合时相关） |
| 3NF | 2NF + 无传递依赖（非键只依赖键） |

常见助记：「**键、整个键、只有键**」。

## 实用提示

- 表只有单列 PK，就已 2NF。
- 找总同行的列组（如 `Course → Teacher`） —— 缺表的迹象。
- 在规范化模式上测查询，确保无数据丢。

## 学生常见错误

- 1NF 就叫规范化收工。
- 2NF 与 3NF 混淆。
- 过规范成几百张表 —— 可读性差。
- 拆分后忘加参照完整性（加 FK）。

## 考试式题目

> **题（6 分）：** 书店存销售如：
>
> ```
> SaleID Customer  Books                       Prices
> 101    Alice     Book A, Book B             50, 80
> 102    Bob       Book A                     50
> ```
>
> 规范化到 3NF，展示中间 1NF 与 2NF 阶段。

**参考答案：**

**1NF** —— 拆为原子行：

```
Sale(SaleID, Customer, Book, Price)
101 Alice Book A 50
101 Alice Book B 80
102 Bob   Book A 50
```

主键复合：`(SaleID, Book)`。

**2NF** —— `Customer` 只依赖 `SaleID`；移出。

```
SaleHeader(SaleID PK, Customer)
SaleLine(SaleID PK, Book PK, Price)
```

**3NF** —— `Price` 依赖 `Book`（设每书固定价），不在键上。移出。

```
SaleHeader(SaleID PK, Customer)
Book(Book PK, Price)
SaleLine(SaleID PK, Book PK)
```

每张表满足 3NF。冗余消失 —— 改一本书价格在 `Book` 一行改，不是 `SaleLine` 每行。

## 关键要点

- 1NF：原子值，无列表。
- 2NF：无部分依赖。
- 3NF：无传递依赖。
- 「键、整个键、只有键。」

➡️ 下一节：[3.4 反规范化](./denormalisation)
