# 编程陷阱（Python / 伪代码 / SQL）

> HKEAA 喜欢考的 bug 类型参考卡。

## Python 陷阱

### 1. 可变默认参数

```python
def add_item(item, basket=[]):     # 坏 —— basket 被共享
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

### 3. 字符串不可变

```python
s = "abc"
s[0] = "z"       # TypeError —— 字符串不能改
```

用切片 / 拼接：

```python
s = "z" + s[1:]
```

### 4. 遍历列表时修改

```python
lst = [1, 2, 3, 4]
for x in lst:
    if x % 2 == 0:
        lst.remove(x)    # 意外结果
```

更好 —— 遍历副本或建新列表：

```python
lst = [x for x in lst if x % 2 != 0]
```

### 5. 真值陷阱

```python
if x:        # 非零、非空、非 None 为 True
    ...
```

但 `0`、`''`、`[]`、`{}`、`None` 全求值为 False —— 需要时明确区分：

```python
if x is not None:
    ...
```

## 伪代码陷阱

### 用 HKEAA 规范

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
- `END FOR`、`END IF` 闭块
- 大写关键字（部分学校用小写 —— 按老师 / 评分参考）

### 别引入 Python 习惯

```text
nums.append(5)                  # Python 行，HKEAA 伪代码不
ADD 5 TO nums                   # 伪代码里更好
```

## SQL 陷阱

### 1. `WHERE` vs `HAVING`

```sql
-- 错
SELECT class, AVG(score)
FROM   Score
WHERE  AVG(score) >= 60
GROUP  BY class;

-- 对
SELECT class, AVG(score)
FROM   Score
GROUP  BY class
HAVING AVG(score) >= 60;
```

### 2. `JOIN` 没 `ON` → 笛卡尔积

```sql
SELECT * FROM Student, Score;          -- 1000 学生 × 5000 分 = 5,000,000 行！
```

明示关系：

```sql
SELECT *
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id;
```

### 3. 引号混乱

```sql
SELECT name FROM Student WHERE class = "F4A";   -- 许多 DBMS 接受，但 "..." 在标准 SQL 给标识符用
```

标准 SQL 字符串用单引号：

```sql
SELECT name FROM Student WHERE class = 'F4A';
```

### 4. `NULL` 比较

```sql
SELECT * FROM Student WHERE email = NULL;     -- 永不匹配！
SELECT * FROM Student WHERE email IS NULL;    -- 正确
```

### 5. 聚合与非聚合列同选

```sql
-- 错（严格 SQL 下）
SELECT name, AVG(score) FROM Score;

-- 对
SELECT s.name, AVG(sc.score)
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id
GROUP  BY s.name;
```

::: tip 秒级抓 SQL bug 而非分钟
SQL bug 最快反馈是在 **[SQL Books](https://sqlbooks.codenav.dev)** 里跑查询 —— 粘、跑、读错误或结果、修、再来。`JOIN` 错你立刻看到行数惊喜。`HAVING` 错你会得聚合 vs 行不符错。成功后把 SQL 移到 PHP 代码。
:::

## PHP 陷阱

### 1. 经字符串拼接注入 SQL

```php
// 非常坏
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
// 之后：
$ok = password_verify($pw, $hash);
```

### 3. 读 `$_SESSION` 前忘 `session_start()`

```php
session_start();
echo $_SESSION['user_id'] ?? 'not logged in';
```

### 4. echo 原始用户输入 → XSS

```php
echo $_GET['msg'];                       // 坏
echo htmlspecialchars($_GET['msg']);     // 好
```

➡️ 回到：[考试提示概览](./)
