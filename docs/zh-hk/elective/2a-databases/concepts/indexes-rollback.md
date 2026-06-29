# 1.4 · 索引與回滾

> **目標：** 解釋索引做什麼、何時用，以及回滾作用。

## 索引

**索引**是讓 DBMS 不必掃描整表也能快速找到行的資料結構。

### 無索引

```sql
SELECT * FROM Student WHERE name = 'Alice Chan';
```

DBMS 讀每一行比較 `name` —— O(N)。

### `name` 上有索引

索引是排序的（或哈希的）。查找在 B-tree 上 O(log N)，哈希平均 O(1)。

### 代價

- **讀快**（尤其 WHERE / JOIN / ORDER BY）。
- **寫慢** —— 每次 INSERT/UPDATE/DELETE 都要更新索引。
- **磁碟空間** —— 索引佔儲存。

### 何時加索引

- `WHERE`、`JOIN`、`ORDER BY` 常用列。
- 多個不同值（高基數）的列。
- 主鍵自動加索引。
- 小表別加（全掃更快）。

### 語法

```sql
CREATE INDEX idx_student_name ON Student(name);
DROP INDEX idx_student_name ON Student;
```

## 回滾

**回滾**撤銷一個或多個未提交的改動，把資料庫恢復到上次一致狀態。是**事務**的一部分。

### 事務模型

```sql
BEGIN TRANSACTION;
   UPDATE Account SET balance = balance - 100 WHERE id = 1;
   UPDATE Account SET balance = balance + 100 WHERE id = 2;
COMMIT;     -- 或 ROLLBACK;
```

第二個 UPDATE 中途失敗時，應用可 `ROLLBACK` 恢復第一個 UPDATE。

### ACID 屬性

| 字母 | 屬性 | 含義 |
|--------|----------|---------|
| A | **Atomicity 原子性** | 全部或全無 |
| C | **Consistency 一致性** | 資料庫總在合法狀態 |
| I | **Isolation 隔離** | 併發事務不互擾 |
| D | **Durability 持久** | 提交後能扛崩潰 |

### 常見回滾用例

- 應用程式碼檢出錯誤並調用 `ROLLBACK`。
- 事務中網絡中斷 —— DBMS 自動回滾。
- 操作員注意到剛跑了錯改 —— 提交前回滾。

## 考試式題目

> **題（4 分）：** 解釋資料庫索引是什麼，並各給一個為表加索引的優勢與劣勢。然後描述 `ROLLBACK` 的目的。

**參考答案：**

- **索引**是把一個或多個列的值映射到含有它們的行的獨立資料結構，讓 DBMS 能快速找到匹配行（典型 O(log N) 而不是 O(N)）。

- **優勢**：極大加速按索引列過濾的讀（如 `WHERE name = 'Alice'`）。
- **劣勢**：每次 INSERT/UPDATE/DELETE 都要更新索引，寫變慢且耗額外磁碟空間。

- **ROLLBACK** 撤銷當前事務所做的改動，把資料庫恢復到事務開始（或上次提交）時的狀態。用於事務中途出錯或操作員在 COMMIT 前察覺錯誤時，確保資料庫保持一致。

## 關鍵要點

- 索引 = 快查的代價是寫慢與佔盤。
- 回滾 = 事務的「撤銷」，ACID 核心。

## 第 1 章總結

你完成了關係概念。現在你理解每個 SQL 語句使用的詞彙。

➡️ 下一章：[2 · SQL](../sql/)