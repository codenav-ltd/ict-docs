# 3.7 · 字符串

> **目標：** 用切片、方法與拼接操作字符串。

## 創建字符串

```python
greeting = "Hello"
name = 'Alice'             # 單雙引號皆可
multi = """Line 1
Line 2"""
```

## 長度與索引

```python
s = "HKDSE"
print(len(s))      # 5
print(s[0])        # 'H'
print(s[-1])       # 'E'
print(s[1:4])      # 'KDS'   切片右開
```

## 拼接與重複

```python
first = "Hello"
last  = "World"
combined = first + " " + last       # "Hello World"
echoed   = "abc" * 3                # "abcabcabc"
```

## 常用字符串方法

| 方法 | 用途 | 例子 |
|--------|---------|---------|
| `s.lower()` | 全小寫 | `"HKDSE".lower()` → `"hkdse"` |
| `s.upper()` | 全大寫 | |
| `s.strip()` | 去首尾空白 | `"  hi  ".strip()` → `"hi"` |
| `s.replace(a, b)` | 把 `a` 全替換為 `b` | `"aaa".replace("a","b")` → `"bbb"` |
| `s.split(sep)` | 拆為列表 | `"a,b,c".split(",")` → `["a","b","c"]` |
| `sep.join(list)` | 以分隔符連接列表 | `",".join(["a","b"])` → `"a,b"` |
| `s.startswith(p)` / `s.endswith(p)` | 布林 | |
| `s.find(sub)` | 首次出現的索引或 -1 | |
| `s.count(sub)` | 出現次數 | |
| `s.isdigit()` / `s.isalpha()` | 布林檢查 | |

## 遍歷字符串

```python
for ch in "HKDSE":
    print(ch)
```

## 字符串格式化

```python
name = "Alice"
score = 86
print(f"{name} scored {score}")        # f-string
print("{} scored {}".format(name, score))  # 舊式 .format
```

## 實例 · 數元音

```python
def count_vowels(s):
    count = 0
    for ch in s.lower():
        if ch in "aeiou":
            count += 1
    return count

print(count_vowels("Hong Kong DSE ICT"))   # 5
```

## 實例 · 反轉字符串

```python
s = "HKDSE"
reversed_s = s[::-1]   # 'ESDKH'
```

或逐步：

```python
result = ""
for ch in s:
    result = ch + result
```

## 實例 · 校驗密碼

```python
pw = input("Password: ")
ok = len(pw) >= 8 and any(c.isdigit() for c in pw) and any(c.isupper() for c in pw)
print("Strong" if ok else "Weak")
```

## 學生常見錯誤

- 字符串**不可變** —— `s[0] = "Z"` 報錯。要構造新字符串。
- 忘了切片右開（`s[1:4]` 不含索引 4）。
- 用 `is` 比較字符串相等（應用 `==`；`is` 檢查身份）。

## 考試式題目

> **題（5 分）：** 寫一個 Python 函式 `is_palindrome(s)`，若 `s` 正反讀相同則返回 True（不區分大小寫、忽略空格）。

**參考答案：**

```python
def is_palindrome(s):
    cleaned = s.replace(" ", "").lower()
    return cleaned == cleaned[::-1]

print(is_palindrome("Race car"))   # True
print(is_palindrome("Hello"))      # False
```

## 關鍵要點

- 字符串：索引、切片、方法。
- 不可變 —— 創建新字符串而非修改。
- 格式字符串 (`f"…"`) 讓輸出整潔。

➡️ 下一節：[3.8 標準演算法](./standard-algorithms)