# 2.10 · 集合操作 —— UNION、INTERSECT、MINUS

> **目標：** 用集合代數合併結果集。

## 三種操作

| 操作 | 返回 |
|-----------|---------|
| `UNION` | 任一集合中的行（去重） |
| `UNION ALL` | 任一集合中的行（保留重複） |
| `INTERSECT` | 兩集合都在的行 |
| `MINUS`（或 `EXCEPT`） | 第一集合有但第二沒的行 |

## 規則

- 兩查詢必須**列數相同**。
- 對應列必須**資料類型兼容**。
- 結果列名來自第一查詢。

## 例子

設兩表班級名單：

```sql
CREATE TABLE Math (student_id INTEGER, name VARCHAR(50));
CREATE TABLE Physics (student_id INTEGER, name VARCHAR(50));
```

### 修 Math 或 Physics 的學生

```sql
SELECT student_id, name FROM Math
UNION
SELECT student_id, name FROM Physics;
```

### 同時修 Math 與 Physics 的學生

```sql
SELECT student_id, name FROM Math
INTERSECT
SELECT student_id, name FROM Physics;
```

### 修 Math 但不修 Physics

```sql
SELECT student_id, name FROM Math
MINUS                                  -- 或標準 SQL 的 EXCEPT
SELECT student_id, name FROM Physics;
```

## UNION vs UNION ALL

```sql
SELECT 1 UNION SELECT 1;           -- 1 行
SELECT 1 UNION ALL SELECT 1;       -- 2 行
```

`UNION` 去重（較慢）。`UNION ALL` 全留（較快）。

## DBMS 變種

| 操作 | MySQL | PostgreSQL | SQL Server | Oracle |
|-----------|-------|------------|-----------|--------|
| UNION | ✓ | ✓ | ✓ | ✓ |
| INTERSECT | ✓ (8.0+) | ✓ | ✓ | ✓ |
| MINUS | 用 NOT IN | EXCEPT | EXCEPT | MINUS |

HKEAA 參考表用 **MINUS** —— SQL-92 認可的關鍵字。

## 實例 · 合併報告

> 「F.4A 或 F.4B 開出的全部不同科目。」

```sql
SELECT subject FROM Score INNER JOIN Student ON Score.student_id = Student.student_id
WHERE  Student.class_id = 'F.4A'
UNION
SELECT subject FROM Score INNER JOIN Student ON Score.student_id = Student.student_id
WHERE  Student.class_id = 'F.4B';
```

## 學生常見錯誤

- 兩查詢列數不同 → 錯。
- 資料類型不匹配（字符串 vs 整數）。
- 忘 UNION 默認去重。

## 考試式題目

> **題（4 分）：** 兩社團成員表 `Chess(member_id, name)` 與 `Robotics(member_id, name)`。寫 SQL 找：
>
> (a) 任一社團的成員。
> (b) 兩社團都參加的成員。
> (c) 僅 Chess 的成員。

**參考答案：**

```sql
-- (a)
SELECT member_id, name FROM Chess
UNION
SELECT member_id, name FROM Robotics;

-- (b)
SELECT member_id, name FROM Chess
INTERSECT
SELECT member_id, name FROM Robotics;

-- (c)
SELECT member_id, name FROM Chess
MINUS
SELECT member_id, name FROM Robotics;
```

## 關鍵要點

- UNION / INTERSECT / MINUS 合併兩兼容結果集。
- 列數與類型須匹配。
- UNION 去重；UNION ALL 保留。

➡️ 下一節：[2.11 視圖](./views)