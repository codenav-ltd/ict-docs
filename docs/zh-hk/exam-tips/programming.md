# 編程陷阱（Python / 偽程式碼 / SQL）

> 考評局最愛考的那種 bug。

## Python 陷阱

### 1. 可變默認參數

```python
def add_item(item, basket=[]):     # 壞 — basket 被共享
    basket.append(item)
    return basket
```

應該：

```python
def add_item(item, basket=None):
    if basket is None: basket = []
    basket.append(item)
    return basket
```

### 2. 整數 vs 浮點除法

```python
print(5 / 2)     # 2.5
print(5 // 2)    # 2
```

### 3. 字符串不可變

```python
s = "abc"
s[0] = "z"       # TypeError
```

### 4. 邊迭代邊改

```python
lst = [1, 2, 3, 4]
for x in lst:
    if x % 2 == 0:
        lst.remove(x)    # 結果令人意外
```

改為：

```python
lst = [x for x in lst if x % 2 != 0]
```

### 5. 真值陷阱

`0`、`''`、`[]`、`{}`、`None` 都是 False。需要時顯式：

```python
if x is not None:
    ...
```

## 偽程式碼陷阱

```text
INPUT  n
total ← 0
FOR i ← 1 TO n
    IF i MOD 2 = 0 THEN
        total ← total + i
    END IF
END FOR
OUTPUT total
```

- `←` 不用 `=`
- `END FOR`、`END IF` 收尾
- 關鍵字大寫

### 別用 Python 習慣

```text
nums.append(5)        # OK in Python, 不是偽程式碼
ADD 5 TO nums         # 偽程式碼風格
```

## SQL 陷阱

### 1. `WHERE` vs `HAVING`

```sql
-- 錯
SELECT class, AVG(score) FROM Score WHERE AVG(score) >= 60 GROUP BY class;

-- 對
SELECT class, AVG(score) FROM Score GROUP BY class HAVING AVG(score) >= 60;
```

### 2. JOIN 無 ON → 笛卡爾積

```sql
SELECT * FROM Student, Score;          -- 1000 × 5000 = 5,000,000 行
```

### 3. 引號混亂

```sql
WHERE class = "F4A";   -- 標準 SQL 雙引號是標識符
WHERE class = 'F4A';   -- 字符串用單引號
```

### 4. NULL 比較

```sql
WHERE email = NULL;     -- 永遠不匹配！
WHERE email IS NULL;    -- 正確
```

### 5. 聚合 + 非聚合列

```sql
-- 嚴格 SQL 下錯
SELECT name, AVG(score) FROM Score;

-- 對
SELECT s.name, AVG(sc.score)
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id
GROUP  BY s.name;
```

::: tip 秒級捕獲 SQL bug
最快的 SQL 反饋環是直接跑：粘到 **[SQL Books](https://sqlbooks.codenav.dev)** —— 粘、運行、看結果或錯誤、修、再來。JOIN 錯了行數就異常；HAVING 錯了立刻報聚合不匹配。跑通後再放進 PHP。
:::

## PHP 陷阱

### 1. SQL 注入

```php
// 很壞
$pdo->query("SELECT * FROM Member WHERE name = '" . $_GET['n'] . "'");
```

```php
// 好
$stmt = $pdo->prepare('SELECT * FROM Member WHERE name = ?');
$stmt->execute([$_GET['n']]);
```

### 2. 明文存密碼

```php
// 壞
$pdo->query("INSERT INTO Users (pw) VALUES ('$pw')");

// 好
$hash = password_hash($pw, PASSWORD_DEFAULT);
$stmt = $pdo->prepare('INSERT INTO Users (pw_hash) VALUES (?)');
$stmt->execute([$hash]);
$ok = password_verify($pw, $hash);
```

### 3. 忘記 `session_start()`

```php
session_start();
echo $_SESSION['user_id'] ?? 'not logged in';
```

### 4. 直接 echo 用户輸入 → XSS

```php
echo $_GET['msg'];                       // 壞
echo htmlspecialchars($_GET['msg']);     // 好
```

➡️ 返回：[應試策略總覽](./)
