# 1.3 · 完整性規則

> **目標：** 解釋三條命名完整性規則並識別違反。

## 三條規則

| 規則 | 定義 |
|------|------------|
| **實體完整性 Entity integrity** | 主鍵不能為 NULL 且在表內唯一 |
| **參照完整性 Referential integrity** | 外來鍵必須引用**已存在**的主鍵值（或為 NULL 如允許） |
| **域完整性 Domain integrity** | 每個屬性值必須在其聲明域內（資料類型 + 約束） |

## 實體完整性例子

| 動作 | 狀態 |
|--------|--------|
| `INSERT INTO Student VALUES (NULL, 'Alice', ...)` | ❌ 違反 —— PK 為 NULL |
| `INSERT INTO Student VALUES (1001, 'Alice', ...)` 再有 `(1001, 'Bob', ...)` | ❌ 違反 —— PK 重複 |

## 參照完整性例子

| 動作 | 狀態 |
|--------|--------|
| `INSERT INTO Loan VALUES (1, member_id=999, ...)` 當無 member 999 | ❌ 違反 —— 孤兒 FK |
| 刪除有未結借出的會員 | ❌ 可能違反，除非設 ON DELETE CASCADE |

### 刪除被引用行時

DBMS 提供幾種**參照動作**：

| 動作 | 行為 |
|--------|-----------|
| `RESTRICT`（默認） | 若有 FK 引用就阻止刪除 |
| `CASCADE` | 也刪引用行 |
| `SET NULL` | 把引用 FK 設為 NULL |
| `SET DEFAULT` | 把 FK 設為列默認值 |

按業務規則選：刪一個會員通常不該悄悄刪其借閲歷史（RESTRICT 或歸檔記錄）。

## 域完整性例子

| 聲明 | 違反 |
|-------------|-----------|
| `score INTEGER CHECK (score BETWEEN 0 AND 100)` | `INSERT … score = 150` 拒絕 |
| `class CHAR(4)` | `INSERT … class = 'F5BBB'` 截斷 / 拒絕 |
| `dob DATE NOT NULL` | `INSERT … dob = NULL` 拒絕 |
| `is_active BOOLEAN` | `INSERT … is_active = 'maybe'` 拒絕 |

## 三條命名規則之外

DBMS 還強制：

- 非鍵列上的 **UNIQUE** 約束（如郵箱唯一）。
- **CHECK** 約束（自定規則）。
- **DEFAULT** 值。
- **NOT NULL**。

## 學生常見錯誤

- 混淆實體完整性（PK 級）與參照完整性（FK 級）。
- 忘了 NULL **不**等於任何東西，包括它自己。
- 重要列沒聲明 `NOT NULL`。
- 寫允許無效組合的 `CHECK` 約束。

## 考試式題目

> **題（5 分）：** 解釋三條完整性規則，並就學校學生資料庫各舉一個現實違反例子。

**參考答案：**

1. **實體完整性** —— 主鍵須唯一且非空。例：插入 `student_id = NULL` 的學生行被拒，因為每位學生須可被唯一識別。

2. **參照完整性** —— 外來鍵必須引用現存主鍵。例：插入借閲記錄 (`Loan`) 時 `student_id = 9999` 但該學生不存在於 `Student` —— DBMS 拒插。

3. **域完整性** —— 屬性值須在聲明域內。例：列聲明 `CHECK (score BETWEEN 0 AND 100)` 時插 `score = 150` —— DBMS 因超範圍而拒。

## 關鍵要點

- 三規則：實體、參照、域。
- DBMS 經約束強制。
- 按業務規則選參照動作（RESTRICT / CASCADE / SET NULL）。

➡️ 下一節：[1.4 索引與回滾](./indexes-rollback)