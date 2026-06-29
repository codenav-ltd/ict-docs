# 編程陷阱（Python / 偽程式碼 / SQL）

> HKEAA 喜歡考的 bug 類型參考卡。

## Python 陷阱

### 1. 可變默認參數

```python
def add_item(item, basket=[]):     # 壞 —— basket 被共享
    basket.append(item)
    return basket
```

用 `None` 替代：

```python
def add_item(item, basket=None):
    if basket is None:
        basket = []
    basket.append(item)
    return basket
```

### 2. 整除 vs 真除

```python
print(5 / 2)     # 2.5
print(5 // 2)    # 2（整除 / 地板除）
```

### 3. 字符串不可變

```python
s = "abc"
s[0] = "z"       # TypeError —— 字符串不能改
```

用切片 / 拼接：

```python
s = "z" + s[1:]
```

### 4. 遍歷列表時修改

```python
lst = [1, 2, 3, 4]
for x in lst:
    if x % 2 == 0:
        lst.remove(x)    # 意外結果
```

更好 —— 遍歷副本或建新列表：

```python
lst = [x for x in lst if x % 2 != 0]
```

### 5. 真值陷阱

```python
if x:        # 非零、非空、非 None 為 True
    ...
```

但 `0`、`''`、`[]`、`{}`、`None` 全求值為 False —— 需要時明確區分：

```python
if x is not None:
    ...
```

## 偽程式碼陷阱

### 用 HKEAA 規範

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

- `←` 不是 `=`
- `END FOR`、`END IF` 閉塊
- 大寫關鍵字（部分學校用小寫 —— 按老師 / 評分參考）

### 別引入 Python 習慣

```text
nums.append(5)                  # Python 行，HKEAA 偽程式碼不
ADD 5 TO nums                   # 偽程式碼裏更好
```

## SQL 陷阱

### 1. `WHERE` vs `HAVING`

```sql
-- 錯
SELECT class, AVG(score)
FROM   Score
WHERE  AVG(score) >= 60
GROUP  BY class;

-- 對
SELECT class, AVG(score)
FROM   Score
GROUP  BY class
HAVING AVG(score) >= 60;
```

### 2. `JOIN` 沒 `ON` → 笛卡爾積

```sql
SELECT * FROM Student, Score;          -- 1000 學生 × 5000 分 = 5,000,000 行！
```

明示關係：

```sql
SELECT *
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id;
```

### 3. 引號混亂

```sql
SELECT name FROM Student WHERE class = "F4A";   -- 許多 DBMS 接受，但 "..." 在標準 SQL 給標識符用
```

標準 SQL 字符串用單引號：

```sql
SELECT name FROM Student WHERE class = 'F4A';
```

### 4. `NULL` 比較

```sql
SELECT * FROM Student WHERE email = NULL;     -- 永不匹配！
SELECT * FROM Student WHERE email IS NULL;    -- 正確
```

### 5. 聚合與非聚合列同選

```sql
-- 錯（嚴格 SQL 下）
SELECT name, AVG(score) FROM Score;

-- 對
SELECT s.name, AVG(sc.score)
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id
GROUP  BY s.name;
```

::: tip 秒級抓 SQL bug 而非分鐘
SQL bug 最快反饋是在 **[SQL Books](https://sqlbooks.codenav.dev)** 裏跑查詢 —— 粘、跑、讀錯誤或結果、修、再來。`JOIN` 錯你立刻看到行數驚喜。`HAVING` 錯你會得聚合 vs 行不符錯。成功後把 SQL 移到 PHP 代碼。
:::

## PHP 陷阱

### 1. 經字符串拼接注入 SQL

```php
// 非常壞
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
// 之後：
$ok = password_verify($pw, $hash);
```

### 3. 讀 `$_SESSION` 前忘 `session_start()`

```php
session_start();
echo $_SESSION['user_id'] ?? 'not logged in';
```

### 4. echo 原始用户輸入 → XSS

```php
echo $_GET['msg'];                       // 壞
echo htmlspecialchars($_GET['msg']);     // 好
```

➡️ 回到：[考試提示概覽](./)