# 2.3 · 資料類型與結構

> **目標：** 為每個變數挑對資料類型並識別模組 D 用到的簡單資料結構。

## 簡單資料類型

| 類型 | 儲存 | Python 對應 |
|------|--------|-------------------|
| **Integer 整數** | 整數 | `int` |
| **Real / Float 實數 / 浮點** | 小數 | `float` |
| **Character 字符** | 單字符 | 長度 1 的 `str` |
| **Boolean 布林** | True / False | `bool` |

### 選對類型

- 不需要小數用 **integer**（年齡、計數）。快且精確。
- 測量值用 **float**（身高、體重、金錢 —— 真實系統中金錢用定點更穩）。
- 是 / 否、開 / 關、找到 / 沒找到用 **boolean**。
- 字符少用；現實更常用 **string**。

## 簡單資料結構

課程把必修資料結構限於：

- **String 字符串** —— 字符序列
- **1D array 一維數組** —— 固定大小有序集合

（2D 數組、棧、隊列、鏈表是**選修 2C** 內容。）

### 字符串基礎

```text
name ← "HKDSE"
length ← LENGTH(name)        // 5
first  ← name[1]             // 'H'（偽程式碼風格 1 索引）
rest   ← SUBSTRING(name, 2, 5) // 'KDSE'
```

Python：

```python
name = "HKDSE"
print(len(name))     # 5
print(name[0])       # 'H'   (Python 是 0 索引)
print(name[1:5])     # 'KDSE'
```

> **索引慣例**：HKEAA 文件中的偽程式碼常 1 索引；Python 0 索引。轉換時小心。

### 1D 數組基礎

```text
DECLARE marks[1..10]
marks[1] ← 65
marks[2] ← 90
total ← 0
FOR i ← 1 TO 10
    total ← total + marks[i]
END FOR
average ← total / 10
```

Python（用列表）：

```python
marks = [65, 90, 78, 85, 92, 60, 73, 88, 95, 80]
average = sum(marks) / len(marks)
```

## 布林邏輯與真值表

| A | B | A AND B | A OR B | NOT A |
|---|---|---------|--------|-------|
| F | F | F | F | T |
| F | T | F | T | T |
| T | F | F | T | F |
| T | T | T | T | F |

可能要你為複合條件填或套真值表。

### 例 · 折扣資格

> 「會員如果年齡超過 60 或消費超過 \$1,000 可享折扣。」

```text
discount ← (age > 60) OR (spent > 1000)
```

age = 65、spent = 500 → True（前半為真）。
age = 30、spent = 2000 → True（後半為真）。
age = 25、spent = 100 → False。

## 學生常見錯誤

- 把電話號碼存為**整數** —— 丟首零；用**字符串**。
- 混淆**整數除法**與**實數除法**。Python 裏 `5/2 = 2.5`、`5//2 = 2`。
- 偽程式碼與 Python 互轉時 off-by-one。

## 考試式題目

> **題（4 分）：** 為下列變數挑最合適的資料類型並説明理由：
> (a) student_id、(b) bmi、(c) is_member、(d) student_name。

**參考答案：**

- (a) **String** —— ID 可能有首零或字母；從不需數字運算。
- (b) **Real / Float** —— BMI 是小數。
- (c) **Boolean** —— 只兩態：會員或否。
- (d) **String** —— 長度可變的字符序列。

## 關鍵要點

- 四種簡單類型：integer、real、character、boolean。
- 必修資料結構：string 與 1D array。
- 選符合資料本質的類型（不算數 → 不用數字）。

➡️ 下一節：[2.4 控制結構](./control-structures)