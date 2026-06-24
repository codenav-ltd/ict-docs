# 模組 D · 計算思維與編程

> **建議課時：** 48 小時 · **最大的模組。** 偽程式碼與 Python 題每屆卷一必考。

本模組講系統化的問題解決流程：分解、演算法設計、編程、測試。

::: tip 公開考試編程語言
- **2025–2027 DSE：** 可用 **Python、C++ 或 Pascal** 作答。
- **2028 DSE 起：** 僅 **Python 與 C++**。
- 本站例子全部用 Python（HKEAA 參考資料明確推薦、最普遍）。
:::

## 子話題速覽

| # | 子話題 | 課時 |
|---|--------|------|
| a | 問題分析與制定 | 5 |
| b | 演算法設計 | 12 |
| c | 程序開發 | 20 |
| d | 程序測試與調試 | 11 |

---

## a. 問題分析與制定（5h）

### IPO 分析例子

> 計算用户的 BMI，並指出體重等級。

```
輸入   weight (kg), height (m)
處理   bmi = weight / (height * height)
       if bmi < 18.5    → "Underweight"
       elif bmi < 24    → "Normal"
       elif bmi < 28    → "Overweight"
       else             → "Obese"
輸出   bmi（一位小數）, 類別
```

### 模式識別

把學生身高升序排序，和把體重降序排序，**模式相同** —— 只改比較方向。

---

## b. 演算法設計（12h）

### 資料類型

| 類型 | 值 | 例子 |
|------|----|------|
| Integer | 整數 | `42, -7, 0` |
| Real（float） | 小數 | `3.14, -0.5` |
| Character | 單字符 | `'A', '?'` |
| Boolean | 真假 | `True, False` |

### 簡單資料結構（必修）

- **字符串**
- **一維陣列**（Python 的 list）

### 布爾邏輯真值表

| A | B | A AND B | A OR B | NOT A |
|---|---|---------|--------|-------|
| F | F | F | F | T |
| F | T | F | T | T |
| T | F | F | T | F |
| T | T | T | T | F |

### 控制結構

- **順序**
- **選擇**（`if / elif / else`）
- **迭代**（`for`、`while`）—— 必修部分**不要求嵌套循環**（在選修 2C）

### HKEAA 風格偽程式碼

```text
INPUT n
total ← 0
FOR i ← 1 TO n
    total ← total + i
END FOR
OUTPUT total
```

### 追蹤表例子

> 演算法：數碼符串 `s` 中元音個數

```text
count ← 0
FOR each ch IN s
    IF ch IN ['a','e','i','o','u'] THEN
        count ← count + 1
    END IF
END FOR
```

對 `s = "ict"`：

| 步 | ch | 條件 | count |
|----|----|------|-------|
| 0 | — | — | 0 |
| 1 | 'i' | 真 | 1 |
| 2 | 'c' | 假 | 1 |
| 3 | 't' | 假 | 1 |

最終：1。

### 模組化

把大程序分成小**子程序（函式）**：可讀性高、便於測試、可複用、易維護。

---

## c. 程序開發（20h）

### 運算符

| 類別 | 例子 |
|------|------|
| 算術 | `+ - * / % **` |
| 關係 | `== != > < >= <=` |
| 布爾 | `and or not` |

### 必備演算法

#### 最小/最大/平均

```python
nums = [12, 4, 7, 19, 3]
mn = mx = nums[0]
total = 0
for n in nums:
    if n < mn: mn = n
    if n > mx: mx = n
    total += n
avg = total / len(nums)
```

#### 線性搜索

```python
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1
```

#### 計數滿足條件的項

```python
scores = [55, 62, 47, 80, 73]
count_pass = sum(1 for s in scores if s >= 50)
```

#### 字符串操作

```python
s = "HKDSE"
print(len(s))             # 5
print(s[0])               # 'H'
print(s[1:3])             # 'KD'
print('K' in s)           # True
```

#### 檢查是否已排序

```python
def is_sorted(lst):
    for i in range(1, len(lst)):
        if lst[i] < lst[i-1]:
            return False
    return True
```

---

## d. 程序測試與調試（11h）

### 測試資料分類

| 類別 | 例子 |
|------|------|
| **正常** | 範圍內的典型輸入（如年齡 = 17） |
| **邊界** | 有效範圍邊緣（如年齡 = 0、150） |
| **錯誤** | 無效輸入（如年齡 = -5、"abc"） |

> 邊界值是 bug 最常見的來源。務必測試。

### 錯誤類型

| 類型 | 檢出時機 | 例子 |
|------|---------|------|
| **語法** | 編譯/解釋 | `print(x` 漏 `)` |
| **邏輯** | 運行後輸出錯 | 用 `<` 當 `<=` |
| **運行時** | 運行中崩潰 | 除以零、文件不存在 |

### 調試技術

- 加 `print()` 列印變量值
- 用調試器設**斷點**
- 紙上做**追蹤表**
- 用樣例資料**手算試運行**

---

## 常見錯誤

- 用 Python 語法寫偽程式碼（應用 `←` 而非 `=`）。
- 忘記邊界測試。
- 條件裏用 `=` 而非 `==`。

## 歷屆考題熱點

- MC：判斷錯誤類型。
- Section B：寫/補全基本演算法的偽程式碼。
- Section B：給定偽程式碼產出追蹤表。
- Section B：解釋模組化並改寫。

::: tip 每週練習
讀程式碼不等於會寫。SQL 用 **[SQL Books](https://sqlbooks.codenav.dev)** 練；Python 裝本地或用任意在線沙盒。HKEAA 看的是邏輯正確，不是花哨。
:::

---

➡️ 下一篇：[模組 E · 社會影響](./module-e-social)
