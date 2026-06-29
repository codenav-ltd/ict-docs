# 4.5 · 讀簡單 SQL

> **目標：** 讀懂並預測基礎 `SELECT` 查詢的輸出 —— 這是卷一所期望的水平。

## 為什麼要「讀」 SQL？

模組 A 層級**不**要求你寫複雜 SQL —— 那是選修 2A 的事。但卷一經常讓你**讀**短短的 `SELECT` 並預測輸出。即便不選 2A，這技能也送分。

## 一句話説 SQL 幹什麼

> **SQL**（結構化查詢語言）是與關係型資料庫交流的語言。多數操作涉及 `SELECT … FROM … WHERE …`。

## 必須認得的五個子句

| 子句 | 用途 |
|--------|---------|
| `SELECT columns` | 顯示哪些列 |
| `FROM table` | 從哪張表讀 |
| `WHERE condition` | 過濾行 |
| `ORDER BY column` | 排序輸出 |
| `GROUP BY column` | 按組聚合 |

這裏聚焦前四個。`GROUP BY` 在 2A 簡略介紹。

## 演示資料集

```sql
CREATE TABLE student (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50),
  class VARCHAR(10),
  score INTEGER
);

INSERT INTO student VALUES
  (1001, 'Alice', 'F.4A', 86),
  (1002, 'Bob',   'F.4A', 72),
  (1003, 'Carol', 'F.4B', 91),
  (1004, 'David', 'F.4B', 55),
  (1005, 'Eve',   'F.4A', 78);
```

你可以把它粘進 **[SQL Books](https://sqlbooks.codenav.dev)**，在瀏覽器沙箱裏跑下面每個例子 —— 無需安裝。

## 例子查詢

### Q1 · 所有人

```sql
SELECT * FROM student;
```

輸出：

```
id    name   class  score
1001  Alice  F.4A   86
1002  Bob    F.4A   72
1003  Carol  F.4B   91
1004  David  F.4B   55
1005  Eve    F.4A   78
```

### Q2 · 選定列

```sql
SELECT name, score FROM student;
```

```
name   score
Alice  86
Bob    72
Carol  91
David  55
Eve    78
```

### Q3 · 加過濾

```sql
SELECT name, score
FROM   student
WHERE  score >= 80;
```

```
name   score
Alice  86
Carol  91
```

### Q4 · 兩個條件

```sql
SELECT name, score
FROM   student
WHERE  class = 'F.4A'
  AND  score >= 80;
```

```
name   score
Alice  86
```

### Q5 · 排序

```sql
SELECT name, score
FROM   student
WHERE  class = 'F.4A'
ORDER BY score DESC;
```

```
name   score
Alice  86
Eve    78
Bob    72
```

### Q6 · LIKE 模式

```sql
SELECT name
FROM   student
WHERE  name LIKE 'A%';      -- 以 A 開頭
```

```
name
Alice
```

| 模式 | 含義 |
|---------|---------|
| `%` | 任意多個字符 |
| `_` | 恰好一個字符 |

### Q7 · BETWEEN 範圍

```sql
SELECT name, score
FROM   student
WHERE  score BETWEEN 70 AND 90;
```

```
name   score
Alice  86
Bob    72
Eve    78
```

### Q8 · IN 集合

```sql
SELECT name, class
FROM   student
WHERE  class IN ('F.4A', 'F.4C');
```

```
name   class
Alice  F.4A
Bob    F.4A
Eve    F.4A
```

### Q9 · 聚合（提前看一眼 2A 內容）

```sql
SELECT COUNT(*) FROM student;             -- 5
SELECT AVG(score) FROM student;           -- 76.4
SELECT MAX(score), MIN(score) FROM student; -- 91, 55
```

## 怎樣手動預測輸出

一個可靠的心算演算法：

1. **FROM** —— 寫下表中所有行。
2. **WHERE** —— 劃掉不匹配的行。
3. **ORDER BY** —— 對剩下的排序。
4. **SELECT** —— 只保留要求的列。

走查 Q5：

| 步驟 | 結果 |
|------|--------|
| FROM student | 5 行 |
| WHERE class = 'F.4A' | Alice、Bob、Eve |
| ORDER BY score DESC | Alice (86)、Eve (78)、Bob (72) |
| SELECT name, score | 完成 |

## 學生常見錯誤

- 忘了**字符串**要加**單引號**：`'F.4A'`，而非 `F.4A`。
- 用 `==` 而非 `=`（SQL 用單 `=`）。
- 把 `<>` 與 `!=` 視為相同 —— 標準 SQL 是 `<>`；多數 DBMS 兩者都接受，但 HKEAA 參考表印的是 `<>`。
- 條件之間漏 `AND`。
- 在聚合上用 `WHERE` —— 那要 `HAVING`（2A 內容）。

## 練習活動

用上面資料集預測每個查詢的輸出：

1. `SELECT name FROM student WHERE class = 'F.4B';`
2. `SELECT * FROM student WHERE score < 70;`
3. `SELECT name, score FROM student ORDER BY score DESC LIMIT 2;`
4. `SELECT class, COUNT(*) FROM student GROUP BY class;`
5. `SELECT name FROM student WHERE name LIKE '%e%';`

::: details 答案
1. Carol、David
2. David、55
3. Carol 91、Alice 86
4. F.4A 3、F.4B 2
5. Alice、Eve（任何含 'e' 的名字 —— 大小寫敏感看排序規則；默認通常不敏感）
:::

## 考試式題目

> **題（5 分）：** 表 `book` 含欄位 `isbn, title, author, year_published`。寫一個 SQL 查詢，返回作者為 `'Lewis Carroll'`、於 2000 年後出版的所有書的標題與年份，按年份升序排。

**參考答案：**

```sql
SELECT title, year_published
FROM   book
WHERE  author = 'Lewis Carroll'
  AND  year_published > 2000
ORDER BY year_published ASC;
```

## 關鍵要點

- SQL 查詢形狀可預測：`SELECT … FROM … WHERE … ORDER BY …`。
- 比較用 `=`，字符串加單引號。
- 課程指引説你要會**追蹤並解讀**簡單 SQL —— 這裏練的正是這個。
- 想**寫**更復雜查詢，繼續學選修 2A。

::: tip 跑每個查詢，改每個子句
你**自己打**才會懂。打開 [SQL Books](https://sqlbooks.codenav.dev)，把示範 `CREATE TABLE` 與 `INSERT` 粘進去，跑 Q1 到 Q9。改一個條件，按執行，看輸出變。10 分鐘勝過 1 小時被動閲讀。
:::

## 章節總結

你完成了第 4 章 —— 也就是模組 A 全部。自測：

- 能寫一條 3 行電子表格公式找中位數嗎？提示：有 `MEDIAN()` 函式。
- 能 30 秒內根據 CSV 畫出透視表草圖嗎？
- 能預測 `SELECT name FROM student WHERE score BETWEEN 60 AND 80 ORDER BY name` 的輸出嗎？

如果都能 —— 恭喜，可以繼續前進。

➡️ 下一模組：[模組 B · 電腦系統基礎](../../module-b/)