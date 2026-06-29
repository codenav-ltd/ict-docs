# 3.7 · 字符串

> **目标：** 用切片、方法与拼接操作字符串。

## 创建字符串

```python
greeting = "Hello"
name = 'Alice'             # 单双引号皆可
multi = """Line 1
Line 2"""
```

## 长度与索引

```python
s = "HKDSE"
print(len(s))      # 5
print(s[0])        # 'H'
print(s[-1])       # 'E'
print(s[1:4])      # 'KDS'   切片右开
```

## 拼接与重复

```python
first = "Hello"
last  = "World"
combined = first + " " + last       # "Hello World"
echoed   = "abc" * 3                # "abcabcabc"
```

## 常用字符串方法

| 方法 | 用途 | 例子 |
|--------|---------|---------|
| `s.lower()` | 全小写 | `"HKDSE".lower()` → `"hkdse"` |
| `s.upper()` | 全大写 | |
| `s.strip()` | 去首尾空白 | `"  hi  ".strip()` → `"hi"` |
| `s.replace(a, b)` | 把 `a` 全替换为 `b` | `"aaa".replace("a","b")` → `"bbb"` |
| `s.split(sep)` | 拆为列表 | `"a,b,c".split(",")` → `["a","b","c"]` |
| `sep.join(list)` | 以分隔符连接列表 | `",".join(["a","b"])` → `"a,b"` |
| `s.startswith(p)` / `s.endswith(p)` | 布尔 | |
| `s.find(sub)` | 首次出现的索引或 -1 | |
| `s.count(sub)` | 出现次数 | |
| `s.isdigit()` / `s.isalpha()` | 布尔检查 | |

## 遍历字符串

```python
for ch in "HKDSE":
    print(ch)
```

## 字符串格式化

```python
name = "Alice"
score = 86
print(f"{name} scored {score}")        # f-string
print("{} scored {}".format(name, score))  # 旧式 .format
```

## 实例 · 数元音

```python
def count_vowels(s):
    count = 0
    for ch in s.lower():
        if ch in "aeiou":
            count += 1
    return count

print(count_vowels("Hong Kong DSE ICT"))   # 5
```

## 实例 · 反转字符串

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

## 实例 · 校验密码

```python
pw = input("Password: ")
ok = len(pw) >= 8 and any(c.isdigit() for c in pw) and any(c.isupper() for c in pw)
print("Strong" if ok else "Weak")
```

## 学生常见错误

- 字符串**不可变** —— `s[0] = "Z"` 报错。要构造新字符串。
- 忘了切片右开（`s[1:4]` 不含索引 4）。
- 用 `is` 比较字符串相等（应用 `==`；`is` 检查身份）。

## 考试式题目

> **题（5 分）：** 写一个 Python 函数 `is_palindrome(s)`，若 `s` 正反读相同则返回 True（不区分大小写、忽略空格）。

**参考答案：**

```python
def is_palindrome(s):
    cleaned = s.replace(" ", "").lower()
    return cleaned == cleaned[::-1]

print(is_palindrome("Race car"))   # True
print(is_palindrome("Hello"))      # False
```

## 关键要点

- 字符串：索引、切片、方法。
- 不可变 —— 创建新字符串而非修改。
- 格式字符串 (`f"…"`) 让输出整洁。

➡️ 下一节：[3.8 标准算法](./standard-algorithms)
