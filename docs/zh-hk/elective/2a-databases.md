# 2A · 資料庫

> **課時：** 38 · **試卷權重：** 約全科 12.5%（卷二的一半） · **主要語言：** SQL（SQL-92）。

本選修擴展模組 A。學習關係理論、ER 圖設計、範式化，並用 SQL 查詢和修改資料。

## 子話題速覽

| # | 子話題 | 課時 |
|---|--------|------|
| a | 關係資料庫概念 | 6 |
| b | SQL | 18 |
| c | 資料庫設計方法 | 14 |

---

## a. 關係資料庫概念（6h）

### 關鍵術語

| 術語 | 含義 |
|------|------|
| **實體（Entity）** | 我們儲存資料的對象（學生、課程、書） |
| **屬性（Attribute）** | 實體的性質（姓名、年齡、ISBN） |
| **域（Domain）** | 屬性的合法值集合（年齡 ∈ 0..150） |
| **元組 / 行 / 記錄** | 實體的一次出現 |
| **關係 / 表** | 共享相同屬性的元組集合 |
| **索引（Index）** | 加速查詢的資料結構（以寫性能為代價） |

### 鍵

| 鍵 | 定義 | 例子 |
|----|------|------|
| **候選鍵** | 任意能唯一標識一行的屬性（組合） | `student_id`、`(name, dob)` |
| **主鍵** | 選中的候選鍵 | `student_id` |
| **外鍵** | 一表中引用另一表主鍵的屬性 | `Student.class_id → Class.class_id` |
| **複合鍵** | 主鍵由多個屬性構成 | Enrolment 表的 `(student_id, course_id)` |
| **代理鍵** | 無業務含義的人工鍵 | `auto_increment id` |

### 完整性規則

| 規則 | 含義 |
|------|------|
| **實體完整性** | 主鍵不可為 NULL |
| **引用完整性** | 外鍵必須指向存在的主鍵（或允許 NULL） |
| **域完整性** | 屬性值必須在其域內 |

### 為何需要 Rollback？

**回溯**撤銷最近事務，恢復到良好狀態 —— 用於事務半途失敗、資料損壞、用户操作失誤等場景。

---

## b. SQL（18h）—— 卷 2A 的核心

HKEAA 基於 **SQL-92 標準** 出題，卷 2A 提供這張參考表：

```
常數：FALSE、TRUE
運算符：+ − * / > < = >= <= <> AND OR NOT
通配符：%  _
聚合：AVG、COUNT、MAX、MIN、SUM
字符串：CHAR (CHR), CHAR_LENGTH (LEN), LOWER, UPPER,
        TRIM, SUBSTRING (SUBSTR/MID), VALUE (VAL), SPACE
日期：DATE, DAY, MONTH, YEAR
關鍵字：ADD, ALL, ALTER, ANY, AS, ASC, BETWEEN, BY,
        CREATE, DELETE, DESC, DISTINCT, DROP, EXISTS,
        FROM, GROUP, HAVING, IN, INDEX,
        INNER JOIN, INSERT, INTEGER, INTERSECT, INTO,
        LEFT [OUTER] JOIN, LIKE, MINUS, NULL,
        RIGHT [OUTER] JOIN, FULL [OUTER] JOIN, ON,
        ORDER, SELECT, SET, TABLE, TO, UNION, UNIQUE,
        UPDATE, VALUES, VIEW, WHERE
```

要能組合以上所有內容查詢**最多 3 個表**，並寫**一層子查詢**。

### CREATE / ALTER / DROP

```sql
CREATE TABLE Student (
  student_id   INTEGER     PRIMARY KEY,
  name         VARCHAR(50) NOT NULL,
  class_id     INTEGER,
  dob          DATE,
  FOREIGN KEY (class_id) REFERENCES Class(class_id)
);

ALTER TABLE Student ADD email VARCHAR(100);
ALTER TABLE Student DROP COLUMN email;
DROP TABLE Student;
```

### INSERT / UPDATE / DELETE

```sql
INSERT INTO Student VALUES (1001, 'Alice', 4101, '2007-05-12');
UPDATE Student SET name = 'Alicia' WHERE student_id = 1001;
DELETE FROM Student WHERE student_id = 1001;
```

### SELECT 核心

```sql
SELECT   name, class_id
FROM     Student
WHERE    name LIKE 'A%'
   AND   dob >= '2007-01-01'
ORDER BY name ASC;
```

### GROUP BY + HAVING

```sql
SELECT   class_id, COUNT(*) AS cnt, AVG(score) AS avg_score
FROM     Score
GROUP BY class_id
HAVING   AVG(score) >= 60
ORDER BY avg_score DESC;
```

> **`WHERE` 在分組前過濾行，`HAVING` 在聚合後過濾組。**

### JOIN（最多 3 表）

```sql
SELECT s.name, c.class_name, sc.score
FROM   Student s
       INNER JOIN Class c  ON s.class_id  = c.class_id
       INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.subject = 'ICT';

SELECT s.name, sc.score
FROM   Student s
       LEFT OUTER JOIN Score sc ON s.student_id = sc.student_id;
```

| JOIN 類型 | 行為 |
|----------|------|
| **INNER / EQUI-JOIN** | 兩邊都匹配的行 |
| **LEFT [OUTER] JOIN** | 左邊全留，右邊匹配（不匹配則 NULL） |
| **RIGHT [OUTER] JOIN** | 右邊全留 |
| **FULL [OUTER] JOIN** | 兩邊全留 |
| **NATURAL JOIN** | 自動按同名列連接（慎用） |

### 子查詢（一層）

```sql
SELECT name
FROM   Student
WHERE  student_id IN (
         SELECT student_id
         FROM   Score
         WHERE  score > (SELECT AVG(score) FROM Score)
       );
```

參考資料説**僅一層子查詢** —— 不要在子查詢裏再嵌套子查詢。

### 運算符與模式

| 運算符 | 含義 |
|--------|------|
| `BETWEEN a AND b` | 閉區間 |
| `IN (…)` | 在列表中 |
| `LIKE 'A%'` | 以 A 開頭（`%` = 任意長度） |
| `LIKE 'A_'` | A 加一個字符（`_` = 1 個字符） |
| `IS NULL` / `IS NOT NULL` | 判空 |

### 視圖

```sql
CREATE VIEW HighScorers AS
SELECT s.student_id, s.name, sc.score
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.score >= 90;

SELECT * FROM HighScorers;
```

### 內置函式

```sql
SELECT UPPER(name), SUBSTRING(name, 1, 3), CHAR_LENGTH(name) FROM Student;
SELECT YEAR(dob), MONTH(dob), DAY(dob) FROM Student;
```

### 集合運算

```sql
SELECT student_id FROM Math_Class UNION     SELECT student_id FROM Physics_Class;
SELECT student_id FROM Math_Class INTERSECT SELECT student_id FROM Physics_Class;
SELECT student_id FROM Math_Class MINUS     SELECT student_id FROM Physics_Class;
```

::: tip 在真實資料庫裏練
理論只有跑過、看過結果、改一下再跑，才會真正記住。打開 **[SQL Books](https://sqlbooks.codenav.dev)** 建一個 `dse_demo` 沙盒，把上面程式碼粘貼跑一遍，然後改 `WHERE`、把 `INNER` 換成 `LEFT`、加上 `GROUP BY`。每個賬號還內置 **SQL Books 課程**（SELECT → WHERE → JOIN → 子查詢），與本選修完美對齊。
:::

---

## c. 資料庫設計方法（14h）

### ER 圖符號（HKEAA 標準）

```
實體：     ┌─────────────┐
           │   Student   │
           └─────────────┘

屬性：     ◯ name

鍵屬性：   ◉ student_id  （圖中用下劃線）

聯繫：     ◇ enrols ◇

基數：
  1 ────── 1       一對一
  1 ────── M       一對多
  M ────── N       多對多

參與約束：
  ── 單線   可選
  ══ 雙線   必須
```

### 例子 · 學校圖書館

> 圖書館把書借給學生。一本書可被借多次，一個學生可同時借多本。

實體：

- **Student** —— student_id、name、class_id
- **Book** —— isbn、title、author、copies
- **Loan**（M:N → 拆為關係表）—— loan_id、student_id、isbn、loan_date、return_date

```
Student ──< Loan >── Book
```

### 範式化至 3NF

| 範式 | 規則 |
|------|------|
| **1NF** | 屬性原子；無重複組 |
| **2NF** | 1NF + 非鍵屬性依賴整個主鍵 |
| **3NF** | 2NF + 非鍵屬性間無傳遞依賴 |

### 反範式化

為加速讀取，故意保留冗餘資料（如訂單緩存客户姓名）。代價：儲存增加、可能不一致。讀遠多於寫時常用。

### 存取權限保護資料隱私

- 最小權限原則
- 角色分離：管理員、教師、學生
- 用視圖隱藏敏感字段
- 真實 DBMS 用 `GRANT SELECT ON view TO user;`

---

## 常見錯誤

- 用 `WHERE` 過濾聚合（應用 `HAVING`）。
- `JOIN` 漏寫 `ON` → 笛卡爾積。
- 弄錯 `LEFT` / `RIGHT` JOIN 方向。
- 把子查詢寫進 `SELECT`（應在 `WHERE`）。
- M:N 關係不拆解。

## 歷屆考題熱點

- 讀 CREATE TABLE 找約束違反。
- 寫 2 或 3 表 JOIN + GROUP BY + HAVING 的報表 SQL。
- 把情境轉為 ER 圖再轉為關係表。
- 把未範式化的表化到 3NF。

➡️ 下一篇：[2B · 網絡應用開發](./2b-web)
