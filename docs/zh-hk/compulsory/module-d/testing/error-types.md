# 4.2 · 錯誤類型

> **目標：** 把任何程序錯誤歸為語法、邏輯或執行時，並解釋其症狀。

## 三種類型

| 類型 | 何時被發現 | 症狀 | 例子 |
|------|---------------|---------|---------|
| **Syntax 語法** | 編譯 / 解釋時 | 程序根本跑不起 | `print(x` 漏閉合 `)` |
| **Logic 邏輯** | 執行時給錯答案 | 程序跑但結果錯 | 用 `<` 應是 `<=` |
| **Run-time 執行時** | 執行中 | 程序中途崩 | 除以零、文件找不到、索引越界 |

## 語法錯誤

解釋器（Python）在你修正文法前拒絕跑。

```python
# SyntaxError: '(' was never closed
print("hi"
```

```python
# IndentationError: unexpected indent
if x > 0:
        print(x)
    print(x)        # 縮進未對齊！
```

修法：讀行號、找筆誤。

## 邏輯錯誤

最陰險。程序跑出輸出 —— 但輸出錯。

```python
# 想要：分數 >= 50 印「Pass」，否則「Fail」
if score > 50:           # BUG：應為 >=
    print("Pass")
else:
    print("Fail")
```

分數 = 50 → 錯印「Fail」。

邏輯錯誤靠**測試**發現，Python 抓不到。

## 執行時錯誤（異常）

程序在跑，但意外條件令它崩。

| 錯誤 | 原因 |
|-------|-------|
| `ZeroDivisionError` | 除以 0 |
| `ValueError` | `int("abc")` |
| `IndexError` | 3 元素列表上 `lst[10]` |
| `KeyError` | 缺字典鍵 |
| `FileNotFoundError` | 打開不存在文件 |
| `TypeError` | `"5" + 3` |

用 `try` / `except` 處理：

```python
try:
    n = int(input("Number: "))
    print(100 / n)
except ZeroDivisionError:
    print("Can't divide by zero")
except ValueError:
    print("That's not a number")
```

## 把錯誤對應到發現手段

| 錯誤類型 | 最佳捕獲 |
|------------|----------------|
| 語法 | 代碼檢查 / IDE 語法高亮 |
| 邏輯 | 單元測試 + 追蹤表 + 人工檢查 |
| 執行時 | 防禦代碼 (try/except)、好測試資料 |

## 學生常見錯誤

- 混淆語法錯與邏輯錯。
- 用過多 `try/except` 掩蓋 bug 而非修復。
- 把 Python `print` 調試視為不體面 —— 它是十分有效的技術。

## 考試式題目

> **題（4 分）：** 識別每段程式碼的錯誤類型：
>
> (a) `print("Hello World"`
> (b) `total = 0; for i in range(1,11): total += i; print("Sum = ", total + 1)` *(偏差 1)*
> (c) `mark = int("87a")`
> (d) `result = 10 / 0`

**參考答案：**

(a) **語法** —— 括號未匹配。
(b) **邏輯** —— `+ 1` 不該有；導致總和錯。
(c) **執行時** (`ValueError`) —— 字符串含非數字字符。
(d) **執行時** (`ZeroDivisionError`)。

## 關鍵要點

- 3 類：語法、邏輯、執行時。
- 語法：早期抓。邏輯：最難。執行時：優雅處理。

➡️ 下一節：[4.3 調試技巧](./debugging)