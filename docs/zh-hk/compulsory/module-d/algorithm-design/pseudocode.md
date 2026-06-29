# 2.1 · 偽程式碼

> **目標：** 用 HKEAA 規範讀寫偽程式碼。

## 偽程式碼是什麼

**偽程式碼**是非正式、類英語的演算法描述。它**語言無關** —— 之後可用 Python、C++、Pascal 等任意語言實現。

## HKEAA 風格規範

| 規範 | 例子 |
|------------|---------|
| 賦值用 `←` 不用 `=` | `total ← 0` |
| 比較用 `=`（不用 `==`） | `IF age = 17 THEN` |
| 關鍵字全大寫 | `IF, THEN, ELSE, FOR, WHILE, END FOR, END IF` |
| 縮進表示塊結構 | （無花括號、無冒號） |
| 註釋以 `//` 起 | `// initialise counter` |

## 一個完整例子

```text
// 計算 1+2+…+n
INPUT n
total ← 0
FOR i ← 1 TO n
    total ← total + i
END FOR
OUTPUT total
```

## 常用關鍵字

| 關鍵字 | 用途 |
|---------|-----|
| `INPUT x` | 讀入值到變數 x |
| `OUTPUT x` | 顯示 x |
| `IF cond THEN … ELSE IF … ELSE … END IF` | 選擇 |
| `FOR x ← a TO b STEP s … END FOR` | 計數迴圈 |
| `WHILE cond … END WHILE` | 條件迴圈 |
| `REPEAT … UNTIL cond` | 後測迴圈 |
| `CASE … END CASE` | 多路選擇 |
| `BEGIN / END` | 塊標記（某些教材） |

## 讀 vs 寫

HKEAA 可能：

1. **給**偽程式碼讓你算輸出 / 作追蹤表。
2. **讓你為**給定問題寫偽程式碼。
3. **讓你轉**偽程式碼為 Python。

三種都要遵守上述規範。

## 實例 · 三數最大

```text
INPUT a, b, c
max ← a
IF b > max THEN max ← b END IF
IF c > max THEN max ← c END IF
OUTPUT max
```

## 翻成 Python（速查）

| 偽程式碼 | Python |
|------------|--------|
| `INPUT x` | `x = int(input())` |
| `OUTPUT x` | `print(x)` |
| `x ← 5` | `x = 5` |
| `IF a = b THEN` | `if a == b:` |
| `IF a >= b THEN … ELSE …` | `if a >= b: … else: …` |
| `FOR i ← 1 TO n` | `for i in range(1, n+1):` |
| `WHILE cond` | `while cond:` |

## 學生常見錯誤

- 偽程式碼裏用 `=` 賦值（應用 `←`）。
- 混入 Python `==` 比較（應用單 `=`）。
- 忘 `END FOR` / `END IF`。
- 加入 `try/except` 等語言特定結構到偽程式碼。

## 考試式題目

> **題（5 分）：** 寫偽程式碼讀 10 個數並輸出正數、負數、零各有多少個。

**參考答案：**

```text
positives ← 0
negatives ← 0
zeros     ← 0
FOR i ← 1 TO 10
    INPUT n
    IF n > 0 THEN
        positives ← positives + 1
    ELSE IF n < 0 THEN
        negatives ← negatives + 1
    ELSE
        zeros ← zeros + 1
    END IF
END FOR
OUTPUT positives, negatives, zeros
```

## 關鍵要點

- HKEAA 風格：大寫關鍵字、`←` 賦值、`END FOR/IF`。
- 用它在編碼前交流演算法。

➡️ 下一節：[2.2 流程圖](./flowcharts)