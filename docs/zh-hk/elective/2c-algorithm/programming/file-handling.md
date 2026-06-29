# 1.4 · 文件處理

> **目標：** 讀、寫、追加、修改文本文件。必備操作：刪、插、追加、修改記錄。

## 打開模式

| 模式 | 含義 |
|------|---------|
| `"r"` | 讀（默認；文件須存在） |
| `"w"` | 寫 —— 截斷 / 創建 |
| `"a"` | 追加 —— 不存在則創建 |
| `"r+"` | 讀 + 寫 |
| `"x"` | 獨佔創建 —— 存在則失敗 |
| `"b"` 後綴 | 二進制模式（`"rb"`、`"wb"`） |

## 讀

```python
with open("students.txt", "r", encoding="utf-8") as f:
    for line in f:
        print(line.strip())
```

`with` 確保文件自動關 —— 總優先用。

批量讀：

```python
with open("students.txt", encoding="utf-8") as f:
    all_text = f.read()
    print(all_text)
```

## 寫

```python
with open("output.txt", "w", encoding="utf-8") as f:
    f.write("Hello\n")
    f.write("World\n")
```

## 追加

```python
with open("log.txt", "a", encoding="utf-8") as f:
    f.write(f"{datetime.now()}: event\n")
```

## CSV 處理

```python
import csv

with open("students.csv", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row["name"], row["score"])
```

## 記錄更新 —— 四項必備操作

設 CSV `students.csv` 表頭 `id,name,score`。

### 把所有行讀入記憶體

```python
import csv

def read_all(path):
    with open(path, encoding="utf-8") as f:
        return list(csv.DictReader(f))

def write_all(path, rows):
    if not rows: return
    with open(path, "w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=rows[0].keys())
        w.writeheader()
        w.writerows(rows)
```

### 追加

```python
rows = read_all("students.csv")
rows.append({"id": "1006", "name": "Frank", "score": "75"})
write_all("students.csv", rows)
```

### 插到特定位置

```python
rows = read_all("students.csv")
rows.insert(2, {"id": "1007", "name": "Grace", "score": "80"})
write_all("students.csv", rows)
```

### 修改 (Amend)

```python
rows = read_all("students.csv")
for r in rows:
    if r["id"] == "1001":
        r["score"] = "90"
write_all("students.csv", rows)
```

### 刪除

```python
rows = read_all("students.csv")
rows = [r for r in rows if r["id"] != "1003"]
write_all("students.csv", rows)
```

## 錯誤處理

```python
try:
    with open("missing.txt") as f:
        ...
except FileNotFoundError:
    print("File not found")
```

## 學生常見錯誤

- 忘 `with` → 文件留打開。
- 模式錯（`"r"` 去寫、`"w"` 去讀）。
- Windows 上換行混亂 —— `csv` writer 用 `newline=""`。
- 不指定 `encoding="utf-8"` → 中文變亂碼。

## 考試式題目

> **題（5 分）：** 寫 Python 讀 `marks.csv`（列 id、name、score），給每個低於 50 的 score 加 5 分獎勵（上限 100），並寫回同文件。

**參考答案：**

```python
import csv

with open("marks.csv", encoding="utf-8") as f:
    rows = list(csv.DictReader(f))

for r in rows:
    s = int(r["score"])
    if s < 50:
        r["score"] = str(min(100, s + 5))

with open("marks.csv", "w", encoding="utf-8", newline="") as f:
    w = csv.DictWriter(f, fieldnames=["id","name","score"])
    w.writeheader()
    w.writerows(rows)
```

## 關鍵要點

- 總用 `with open(... , encoding="utf-8")`。
- 4 項必備操作：插、追加、修改、刪。
- 表格資料用 `csv` 模組。

➡️ 下一節：[1.5 線性與二分查找](./searching)