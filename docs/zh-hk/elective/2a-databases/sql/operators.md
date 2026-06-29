# 2.4 · 運算符、LIKE 與 IN

> **目標：** 掌握算術、比較、模式匹配運算符。

## 算術運算符

| 符 | 例 |
|----|---------|
| `+` | `score + 5` |
| `-` | `100 - score` |
| `*` | `price * quantity` |
| `/` | `total / count` |
| `%` | `id % 2`（取餘） |

SELECT 表達式裏有用：

```sql
SELECT name, price, quantity, price * quantity AS subtotal FROM OrderItem;
```

## 比較運算符

| 符 | 含義 |
|----|---------|
| `=` | 等 |
| `<>` | 不等（標準） |
| `!=` | 不等（DBMS 特定，也接受） |
| `>` `<` `>=` `<=` | 比較 |

## LIKE 模式匹配

| 模式 | 含義 |
|---------|---------|
| `%` | 任意（含空）字符序列 |
| `_` | 恰好一個字符 |

### 例子

```sql
SELECT * FROM Student WHERE name LIKE 'A%';     -- 以 A 起
SELECT * FROM Student WHERE name LIKE '%a';     -- 以 a 終
SELECT * FROM Student WHERE name LIKE '%a%';    -- 含 a
SELECT * FROM Student WHERE name LIKE 'A___';   -- A 後跟恰好 3 字符
```

### 轉義特殊字符

```sql
SELECT * FROM Product WHERE code LIKE '100\%off' ESCAPE '\';   -- 字面 '%'
```

## IN 集合成員

```sql
SELECT * FROM Student WHERE class_id IN ('F.4A','F.4B');
```

等價 OR 形式：

```sql
SELECT * FROM Student WHERE class_id = 'F.4A' OR class_id = 'F.4B';
```

`IN` 更短更清；也可接子查詢結果（子查詢章節）。

## NOT 版本

| 形 | 含義 |
|------|---------|
| `NOT IN (…)` | 不在 |
| `NOT LIKE 'A%'` | 不以 A 起 |
| `NOT BETWEEN a AND b` | 範圍外 |

## BETWEEN

`BETWEEN` **含**兩端：

```sql
SELECT * FROM Score WHERE score BETWEEN 70 AND 90;
-- 含 70、含 90
```

## 運算符優先級（在 WHERE 內）

1. 比較運算符 (`=`、`<` 等)
2. `NOT`
3. `AND`
4. `OR`

不確定 —— 用括號。

## 實例 · 找高級 ICT 學生

> 「F.4A 的學生，ICT 分數至少 80 且名字以 A 或 E 起。」

```sql
SELECT s.name, sc.score
FROM   Student s, Score sc
WHERE  s.student_id = sc.student_id
  AND  s.class_id   = 'F.4A'
  AND  sc.subject   = 'ICT'
  AND  sc.score    >= 80
  AND  (s.name LIKE 'A%' OR s.name LIKE 'E%');
```

## 學生常見錯誤

- 對 LIKE 模式用 `=`（`WHERE name = 'A%'` 只匹配字面「A%」）。
- 忘 `BETWEEN` 含端。
- 忘 `_` 恰好一個字符，不是零或多。

## 考試式題目

> **題（4 分）：** 對 `Product(sku, name, price, category)` 寫 SQL：
>
> (a) 類別為 'Drink' 或 'Snack' 的產品。
> (b) 名字以 "Pro" 終的產品。
> (c) 價格在 100 與 500 間排除兩端（即 >100 且 <500）。

**參考答案：**

```sql
-- (a)
SELECT * FROM Product WHERE category IN ('Drink','Snack');

-- (b)
SELECT * FROM Product WHERE name LIKE '%Pro';

-- (c)
SELECT * FROM Product WHERE price > 100 AND price < 500;
```

## 關鍵要點

- 挑對工具：`=`、`LIKE`、`IN`、`BETWEEN`。
- `%` 與 `_` 是 `LIKE` 內通配。
- `BETWEEN` 含端。

➡️ 下一節：[2.5 ORDER BY 與 DISTINCT](./ordering)