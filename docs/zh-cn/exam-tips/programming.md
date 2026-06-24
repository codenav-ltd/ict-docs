# 编程陷阱（Python / 伪代码 / SQL）

> 考评局最爱考的那种 bug。

## Python 陷阱

### 1. 可变默认参数

```python
def add_item(item, basket=[]):     # 坏 — basket 被共享
    basket.append(item)
    return basket
```

应该：

```python
def add_item(item, basket=None):
    if basket is None: basket = []
    basket.append(item)
    return basket
```

### 2. 整数 vs 浮点除法

```python
print(5 / 2)     # 2.5
print(5 // 2)    # 2
```

### 3. 字符串不可变

```python
s = "abc"
s[0] = "z"       # TypeError
```

### 4. 边迭代边改

```python
lst = [1, 2, 3, 4]
for x in lst:
    if x % 2 == 0:
        lst.remove(x)    # 结果令人意外
```

改为：

```python
lst = [x for x in lst if x % 2 != 0]
```

### 5. 真值陷阱

`0`、`''`、`[]`、`{}`、`None` 都是 False。需要时显式：

```python
if x is not None:
    ...
```

## 伪代码陷阱

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
- 关键字大写

### 别用 Python 习惯

```text
nums.append(5)        # OK in Python, 不是伪代码
ADD 5 TO nums         # 伪代码风格
```

## SQL 陷阱

### 1. `WHERE` vs `HAVING`

```sql
-- 错
SELECT class, AVG(score) FROM Score WHERE AVG(score) >= 60 GROUP BY class;

-- 对
SELECT class, AVG(score) FROM Score GROUP BY class HAVING AVG(score) >= 60;
```

### 2. JOIN 无 ON → 笛卡尔积

```sql
SELECT * FROM Student, Score;          -- 1000 × 5000 = 5,000,000 行
```

### 3. 引号混乱

```sql
WHERE class = "F4A";   -- 标准 SQL 双引号是标识符
WHERE class = 'F4A';   -- 字符串用单引号
```

### 4. NULL 比较

```sql
WHERE email = NULL;     -- 永远不匹配！
WHERE email IS NULL;    -- 正确
```

### 5. 聚合 + 非聚合列

```sql
-- 严格 SQL 下错
SELECT name, AVG(score) FROM Score;

-- 对
SELECT s.name, AVG(sc.score)
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id
GROUP  BY s.name;
```

::: tip 秒级捕获 SQL bug
最快的 SQL 反馈环是直接跑：粘到 **[SQL Books](https://sqlbooks.codenav.dev)** —— 粘、运行、看结果或错误、修、再来。JOIN 错了行数就异常；HAVING 错了立刻报聚合不匹配。跑通后再放进 PHP。
:::

## PHP 陷阱

### 1. SQL 注入

```php
// 很坏
$pdo->query("SELECT * FROM Member WHERE name = '" . $_GET['n'] . "'");
```

```php
// 好
$stmt = $pdo->prepare('SELECT * FROM Member WHERE name = ?');
$stmt->execute([$_GET['n']]);
```

### 2. 明文存密码

```php
// 坏
$pdo->query("INSERT INTO Users (pw) VALUES ('$pw')");

// 好
$hash = password_hash($pw, PASSWORD_DEFAULT);
$stmt = $pdo->prepare('INSERT INTO Users (pw_hash) VALUES (?)');
$stmt->execute([$hash]);
$ok = password_verify($pw, $hash);
```

### 3. 忘记 `session_start()`

```php
session_start();
echo $_SESSION['user_id'] ?? 'not logged in';
```

### 4. 直接 echo 用户输入 → XSS

```php
echo $_GET['msg'];                       // 坏
echo htmlspecialchars($_GET['msg']);     // 好
```

➡️ 返回：[应试策略总览](./)
