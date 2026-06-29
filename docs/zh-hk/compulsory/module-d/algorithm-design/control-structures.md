# 2.4 · 控制結構

> **目標：** 掌握順序、選擇（二元 / 多路）和迭代。**巢狀迴圈不在必修**。

## 三種結構

| 結構 | 説明 |
|-----------|-------------|
| **Sequence 順序** | 語句從上往下執行 |
| **Selection 選擇** | 在備選間選（二元 / 多路） |
| **Iteration 迭代** | 滿足 while/until 條件時重複 |

## 順序

```text
INPUT a
INPUT b
sum ← a + b
OUTPUT sum
```

不花哨 —— 直線執行。

## 選擇 · 二元 (IF / THEN / ELSE)

```text
IF mark >= 50 THEN
    OUTPUT "Pass"
ELSE
    OUTPUT "Fail"
END IF
```

## 選擇 · 多路 (IF / ELSE IF / ELSE)

```text
IF mark >= 80 THEN
    OUTPUT "A"
ELSE IF mark >= 70 THEN
    OUTPUT "B"
ELSE IF mark >= 60 THEN
    OUTPUT "C"
ELSE
    OUTPUT "F"
END IF
```

或用 CASE（教材若用）：

```text
CASE mark OF
    80..100 : OUTPUT "A"
    70..79  : OUTPUT "B"
    60..69  : OUTPUT "C"
    OTHERWISE: OUTPUT "F"
END CASE
```

## 迭代 · FOR（計數迴圈）

```text
sum ← 0
FOR i ← 1 TO 10
    sum ← sum + i
END FOR
OUTPUT sum     // 55
```

## 迭代 · WHILE（前測迴圈）

```text
i ← 1
sum ← 0
WHILE i <= 10
    sum ← sum + i
    i ← i + 1
END WHILE
OUTPUT sum
```

## 迭代 · REPEAT … UNTIL（後測迴圈）

源自 Pascal 教材。至少執行一次。

```text
i ← 1
sum ← 0
REPEAT
    sum ← sum + i
    i ← i + 1
UNTIL i > 10
OUTPUT sum
```

## ⚠️ 巢狀迴圈不在必修

課程指引明言：

> 「順序、選擇和迭代（**不要求巢狀迴圈**）構造來創建程序。」

**巢狀迴圈**屬**選修 2C**。模組 D 只要單層迴圈。

## 組合結構

多數真實演算法三者並用。例：數 N 人班通過的學生：

```text
INPUT n
pass_count ← 0
FOR i ← 1 TO n
    INPUT mark
    IF mark >= 50 THEN
        pass_count ← pass_count + 1
    END IF
END FOR
OUTPUT pass_count
```

## 學生常見錯誤

- 忘 `END IF` / `END FOR` / `END WHILE`。
- 用 `IF a = b` 做賦值（賦值用 `←`）。
- 必修偽程式碼寫巢狀迴圈（這是 2C 專用）。
- 死迴圈 —— 忘更新迴圈控制變數。

## 考試式題目

> **題（5 分）：** 寫偽程式碼讀 20 個數並輸出大於 10 的個數。

**參考答案：**

```text
count ← 0
FOR i ← 1 TO 20
    INPUT n
    IF n > 10 THEN
        count ← count + 1
    END IF
END FOR
OUTPUT count
```

## 關鍵要點

- 三種結構：順序、選擇、迭代。
- 選擇：二元與多路。
- 迭代：FOR（計數）、WHILE（前測）、REPEAT-UNTIL（後測）。
- 必修**無巢狀迴圈**。

➡️ 下一節：[2.5 追蹤表](./trace-tables)