# 2.6 · 模組化

> **目標：** 解釋把程序拆成子程式為何必要。

## 模組化是什麼

**模組化**指把程序設計為一組**獨立、可複用的子程式（函式 / 過程）**，每個負責一個明確任務。

## 好處

| 好處 | 為何重要 |
|---------|----------------|
| **易讀** | 函式小；讀者一次專注一件事 |
| **易測** | 每個函式可單獨單元測試 |
| **易調試** | `calc_grade` 的 bug 在 `calc_grade` 裏修，不外溢 |
| **可複用** | 同一函式被多個程序使用 |
| **並行** | 不同開發者處理不同函式 |
| **可維護** | 改一個函式不破壞其他 |

## 實例 · 前後對比

### 之前（一體式）

```python
print("Welcome")
name = input("Name? ")
score = int(input("Score? "))
if score >= 80:
    grade = "A"
elif score >= 70:
    grade = "B"
elif score >= 60:
    grade = "C"
else:
    grade = "F"
print(f"{name} scored {score}, grade {grade}")
```

### 之後（模組化）

```python
def greet():
    print("Welcome")

def read_student():
    name = input("Name? ")
    score = int(input("Score? "))
    return name, score

def calc_grade(score):
    if score >= 80: return "A"
    if score >= 70: return "B"
    if score >= 60: return "C"
    return "F"

def report(name, score, grade):
    print(f"{name} scored {score}, grade {grade}")

# main
greet()
name, score = read_student()
report(name, score, calc_grade(score))
```

行為相同但更易擴展（如換不同評分規則只換 `calc_grade`）。

## 好函式設計規則

- **一職** —— 用動詞命名（`calculate_grade`）。
- **輸入作參數、輸出作返回值。** 避隱藏副作用。
- **短** —— 理想 30 行以內。
- **儘可能純** —— 同輸入 → 同輸出，無意外。
- **有文件** —— 一行 docstring 説意圖。

## 學生常見錯誤

- 函式幹太多（讀輸入、計算、保存、列印、發郵件…）。
- 大量用**全局變數**而非參數 —— 函式耦合。
- 在多個文件複製相同代碼而不是提取函式。
- 「上帝物件」 —— 一個萬事知道的巨型類。

## 考試式題目

> **題（4 分）：** 描述模組化設計的兩個優勢，以及不模組化寫一個長程序的一個風險。

**參考答案：**

優勢：

1. **可維護** —— bug 與改動侷限於單個函式，降低破壞無關程式碼的機會。
2. **可複用** —— 設計良好的函式可跨不同程序複用，不必複製粘貼。

無模組化的風險：

- 單一一體程序難讀、難測，任何小改可能在無關部分引入隱藏 bug，因為邏輯與狀態糾纏。

## 關鍵要點

- 把大程序拆成小函式。
- 每個函式做**一件**事好。
- 模組化在測試、團隊、維護上回報豐厚。

## 第 2 章總結

自測：能在不參考的情況下讀 15 行偽程式碼並寫出追蹤表嗎？能就去第 3 章。

➡️ 下一章：[3 · 程序開發 (Python)](../programming/)