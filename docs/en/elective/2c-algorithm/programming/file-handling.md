# 1.4 · File Handling

> **Goal:** read, write, append, modify text files. Required operations: delete, insert, append, amend records.

## Opening modes

| Mode | Meaning |
|------|---------|
| `"r"` | Read (default; file must exist) |
| `"w"` | Write — truncates / creates |
| `"a"` | Append — creates if missing |
| `"r+"` | Read + write |
| `"x"` | Exclusive create — fails if exists |
| `"b"` suffix | Binary mode (`"rb"`, `"wb"`) |

## Reading

```python
with open("students.txt", "r", encoding="utf-8") as f:
    for line in f:
        print(line.strip())
```

`with` ensures the file closes automatically — always prefer it.

Bulk read:

```python
with open("students.txt", encoding="utf-8") as f:
    all_text = f.read()
    print(all_text)
```

## Writing

```python
with open("output.txt", "w", encoding="utf-8") as f:
    f.write("Hello\n")
    f.write("World\n")
```

## Appending

```python
with open("log.txt", "a", encoding="utf-8") as f:
    f.write(f"{datetime.now()}: event\n")
```

## CSV processing

```python
import csv

with open("students.csv", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row["name"], row["score"])
```

## Record updates — the four required operations

Assume a CSV `students.csv` with header `id,name,score`.

### Read all rows into memory

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

### Append

```python
rows = read_all("students.csv")
rows.append({"id": "1006", "name": "Frank", "score": "75"})
write_all("students.csv", rows)
```

### Insert at a specific position

```python
rows = read_all("students.csv")
rows.insert(2, {"id": "1007", "name": "Grace", "score": "80"})
write_all("students.csv", rows)
```

### Amend (update)

```python
rows = read_all("students.csv")
for r in rows:
    if r["id"] == "1001":
        r["score"] = "90"
write_all("students.csv", rows)
```

### Delete

```python
rows = read_all("students.csv")
rows = [r for r in rows if r["id"] != "1003"]
write_all("students.csv", rows)
```

## Error handling

```python
try:
    with open("missing.txt") as f:
        ...
except FileNotFoundError:
    print("File not found")
```

## Common student mistakes

- Forgetting `with` → file stays open.
- Wrong mode (`"r"` to write, `"w"` to read).
- Mixing newlines on Windows — use `newline=""` for `csv` writer.
- Not specifying `encoding="utf-8"` → Chinese turns into mojibake.

## Exam-style question

> **Q (5 marks):** Write Python that reads `marks.csv` (columns id, name, score), adds 5 bonus points to every score below 50 (capped at 100), and writes the result back to the same file.

**Sample answer:**

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

## Key takeaways

- `with open(... , encoding="utf-8")` always.
- 4 required operations: insert, append, amend, delete.
- Use `csv` module for tabular data.

➡️ Next: [1.5 Linear & Binary Search](./searching)
