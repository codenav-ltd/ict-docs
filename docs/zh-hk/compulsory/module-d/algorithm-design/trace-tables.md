# 2.5 · 追蹤表

> **目標：** 制追蹤表，每一步後顯示每個變數的值。

## 追蹤表是什麼

逐步記錄演算法執行時每個變數的**狀態**的表。用於：

- **預測**代碼輸出。
- **找**邏輯 bug。
- 在考試答案中**展示**理解。

## 例 · 1 到 5 求和

```text
sum ← 0
FOR i ← 1 TO 5
    sum ← sum + i
END FOR
OUTPUT sum
```

追蹤表：

| 步驟 | i | sum | 輸出 |
|------|---|-----|--------|
| start | — | 0 | — |
| iter 1 | 1 | 1 | — |
| iter 2 | 2 | 3 | — |
| iter 3 | 3 | 6 | — |
| iter 4 | 4 | 10 | — |
| iter 5 | 5 | 15 | — |
| end | — | 15 | 15 |

提示：所有變數橫向列出；每輪迭代**值更新一次**。

## WHILE 迴圈的追蹤表

```text
n ← 16
count ← 0
WHILE n > 1
    n ← n / 2
    count ← count + 1
END WHILE
```

| 步驟 | n | count |
|------|---|-------|
| start | 16 | 0 |
| iter 1 | 8 | 1 |
| iter 2 | 4 | 2 |
| iter 3 | 2 | 3 |
| iter 4 | 1 | 4 |

`n = 1` 時條件假，迴圈結束。輸出 `count = 4`。

## 選擇 + 迴圈 的追蹤表

```text
total ← 0
count ← 0
FOR i ← 1 TO 4
    INPUT x
    IF x > 0 THEN
        total ← total + x
        count ← count + 1
    END IF
END FOR
IF count > 0 THEN
    OUTPUT total / count
ELSE
    OUTPUT "no positive numbers"
END IF
```

設輸入：5、-3、7、0。

| 步驟 | i | x | 條件 | total | count |
|------|---|---|-----------|-------|-------|
| 1 | 1 | 5 | true | 5 | 1 |
| 2 | 2 | -3 | false | 5 | 1 |
| 3 | 3 | 7 | true | 12 | 2 |
| 4 | 4 | 0 | false | 12 | 2 |

輸出：12 / 2 = 6。

## 學生常見錯誤

- 忘**start** 行（初始值）。
- 表中跳過一輪迭代（每輪都要寫）。
- 只寫最終值 —— 那不是追蹤。
- 不同行的列順序不一致。

## 考試式題目

> **題（5 分）：** 對下列偽程式碼做追蹤表，輸入 9：
>
> ```text
> n ← INPUT
> r ← 0
> WHILE n > 0
>     r ← r * 10 + n MOD 10
>     n ← n DIV 10
> END WHILE
> OUTPUT r
> ```

**參考追蹤（輸入 9，輸出倒序數字 —— 但 9 單數字）：**

| 步驟 | n | r |
|------|---|---|
| start | 9 | 0 |
| iter 1 | 0 | 9（= 0*10 + 9） |

輸出 `9`。（多位數字如 1234 會輸出 4321。）

## 關鍵要點

- 調試與考試答案都**必須**用追蹤表。
- 每個變數、每輪都要寫。
- 用簡單與邊緣情況輸入測。

➡️ 下一節：[2.6 模組化](./modularity)