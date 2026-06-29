# 2.4 · 运算符、LIKE 与 IN

> **目标：** 掌握算术、比较、模式匹配运算符。

## 算术运算符

| 符 | 例 |
|----|---------|
| `+` | `score + 5` |
| `-` | `100 - score` |
| `*` | `price * quantity` |
| `/` | `total / count` |
| `%` | `id % 2`（取余） |

SELECT 表达式里有用：

```sql
SELECT name, price, quantity, price * quantity AS subtotal FROM OrderItem;
```

## 比较运算符

| 符 | 含义 |
|----|---------|
| `=` | 等 |
| `<>` | 不等（标准） |
| `!=` | 不等（DBMS 特定，也接受） |
| `>` `<` `>=` `<=` | 比较 |

## LIKE 模式匹配

| 模式 | 含义 |
|---------|---------|
| `%` | 任意（含空）字符序列 |
| `_` | 恰好一个字符 |

### 例子

```sql
SELECT * FROM Student WHERE name LIKE 'A%';     -- 以 A 起
SELECT * FROM Student WHERE name LIKE '%a';     -- 以 a 终
SELECT * FROM Student WHERE name LIKE '%a%';    -- 含 a
SELECT * FROM Student WHERE name LIKE 'A___';   -- A 后跟恰好 3 字符
```

### 转义特殊字符

```sql
SELECT * FROM Product WHERE code LIKE '100\%off' ESCAPE '\';   -- 字面 '%'
```

## IN 集合成员

```sql
SELECT * FROM Student WHERE class_id IN ('F.4A','F.4B');
```

等价 OR 形式：

```sql
SELECT * FROM Student WHERE class_id = 'F.4A' OR class_id = 'F.4B';
```

`IN` 更短更清；也可接子查询结果（子查询章节）。

## NOT 版本

| 形 | 含义 |
|------|---------|
| `NOT IN (…)` | 不在 |
| `NOT LIKE 'A%'` | 不以 A 起 |
| `NOT BETWEEN a AND b` | 范围外 |

## BETWEEN

`BETWEEN` **含**两端：

```sql
SELECT * FROM Score WHERE score BETWEEN 70 AND 90;
-- 含 70、含 90
```

## 运算符优先级（在 WHERE 内）

1. 比较运算符 (`=`、`<` 等)
2. `NOT`
3. `AND`
4. `OR`

不确定 —— 用括号。

## 实例 · 找高级 ICT 学生

> 「F.4A 的学生，ICT 分数至少 80 且名字以 A 或 E 起。」

```sql
SELECT s.name, sc.score
FROM   Student s, Score sc
WHERE  s.student_id = sc.student_id
  AND  s.class_id   = 'F.4A'
  AND  sc.subject   = 'ICT'
  AND  sc.score    >= 80
  AND  (s.name LIKE 'A%' OR s.name LIKE 'E%');
```

## 学生常见错误

- 对 LIKE 模式用 `=`（`WHERE name = 'A%'` 只匹配字面「A%」）。
- 忘 `BETWEEN` 含端。
- 忘 `_` 恰好一个字符，不是零或多。

## 考试式题目

> **题（4 分）：** 对 `Product(sku, name, price, category)` 写 SQL：
>
> (a) 类别为 'Drink' 或 'Snack' 的产品。
> (b) 名字以 "Pro" 终的产品。
> (c) 价格在 100 与 500 间排除两端（即 >100 且 <500）。

**参考答案：**

```sql
-- (a)
SELECT * FROM Product WHERE category IN ('Drink','Snack');

-- (b)
SELECT * FROM Product WHERE name LIKE '%Pro';

-- (c)
SELECT * FROM Product WHERE price > 100 AND price < 500;
```

## 关键要点

- 挑对工具：`=`、`LIKE`、`IN`、`BETWEEN`。
- `%` 与 `_` 是 `LIKE` 内通配。
- `BETWEEN` 含端。

➡️ 下一节：[2.5 ORDER BY 与 DISTINCT](./ordering)
