# 1.4 · 文件处理

> **目标：** 读、写、追加、修改文本文件。必备操作：删、插、追加、修改记录。

## 打开模式

| 模式 | 含义 |
|------|---------|
| `"r"` | 读（默认；文件须存在） |
| `"w"` | 写 —— 截断 / 创建 |
| `"a"` | 追加 —— 不存在则创建 |
| `"r+"` | 读 + 写 |
| `"x"` | 独占创建 —— 存在则失败 |
| `"b"` 后缀 | 二进制模式（`"rb"`、`"wb"`） |

## 读

```python
with open("students.txt", "r", encoding="utf-8") as f:
    for line in f:
        print(line.strip())
```

`with` 确保文件自动关 —— 总优先用。

批量读：

```python
with open("students.txt", encoding="utf-8") as f:
    all_text = f.read()
    print(all_text)
```

## 写

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

## CSV 处理

```python
import csv

with open("students.csv", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row["name"], row["score"])
```

## 记录更新 —— 四项必备操作

设 CSV `students.csv` 表头 `id,name,score`。

### 把所有行读入内存

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

### 删除

```python
rows = read_all("students.csv")
rows = [r for r in rows if r["id"] != "1003"]
write_all("students.csv", rows)
```

## 错误处理

```python
try:
    with open("missing.txt") as f:
        ...
except FileNotFoundError:
    print("File not found")
```

## 学生常见错误

- 忘 `with` → 文件留打开。
- 模式错（`"r"` 去写、`"w"` 去读）。
- Windows 上换行混乱 —— `csv` writer 用 `newline=""`。
- 不指定 `encoding="utf-8"` → 中文变乱码。

## 考试式题目

> **题（5 分）：** 写 Python 读 `marks.csv`（列 id、name、score），给每个低于 50 的 score 加 5 分奖励（上限 100），并写回同文件。

**参考答案：**

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

## 关键要点

- 总用 `with open(... , encoding="utf-8")`。
- 4 项必备操作：插、追加、修改、删。
- 表格数据用 `csv` 模组。

➡️ 下一节：[1.5 线性与二分查找](./searching)
