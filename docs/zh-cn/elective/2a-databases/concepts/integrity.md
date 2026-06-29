# 1.3 · 完整性规则

> **目标：** 解释三条命名完整性规则并识别违反。

## 三条规则

| 规则 | 定义 |
|------|------------|
| **实体完整性 Entity integrity** | 主键不能为 NULL 且在表内唯一 |
| **参照完整性 Referential integrity** | 外键必须引用**已存在**的主键值（或为 NULL 如允许） |
| **域完整性 Domain integrity** | 每个属性值必须在其声明域内（数据类型 + 约束） |

## 实体完整性例子

| 动作 | 状态 |
|--------|--------|
| `INSERT INTO Student VALUES (NULL, 'Alice', ...)` | ❌ 违反 —— PK 为 NULL |
| `INSERT INTO Student VALUES (1001, 'Alice', ...)` 再有 `(1001, 'Bob', ...)` | ❌ 违反 —— PK 重复 |

## 参照完整性例子

| 动作 | 状态 |
|--------|--------|
| `INSERT INTO Loan VALUES (1, member_id=999, ...)` 当无 member 999 | ❌ 违反 —— 孤儿 FK |
| 删除有未结借出的会员 | ❌ 可能违反，除非设 ON DELETE CASCADE |

### 删除被引用行时

DBMS 提供几种**参照动作**：

| 动作 | 行为 |
|--------|-----------|
| `RESTRICT`（默认） | 若有 FK 引用就阻止删除 |
| `CASCADE` | 也删引用行 |
| `SET NULL` | 把引用 FK 设为 NULL |
| `SET DEFAULT` | 把 FK 设为列默认值 |

按业务规则选：删一个会员通常不该悄悄删其借阅历史（RESTRICT 或归档记录）。

## 域完整性例子

| 声明 | 违反 |
|-------------|-----------|
| `score INTEGER CHECK (score BETWEEN 0 AND 100)` | `INSERT … score = 150` 拒绝 |
| `class CHAR(4)` | `INSERT … class = 'F5BBB'` 截断 / 拒绝 |
| `dob DATE NOT NULL` | `INSERT … dob = NULL` 拒绝 |
| `is_active BOOLEAN` | `INSERT … is_active = 'maybe'` 拒绝 |

## 三条命名规则之外

DBMS 还强制：

- 非键列上的 **UNIQUE** 约束（如邮箱唯一）。
- **CHECK** 约束（自定规则）。
- **DEFAULT** 值。
- **NOT NULL**。

## 学生常见错误

- 混淆实体完整性（PK 级）与参照完整性（FK 级）。
- 忘了 NULL **不**等于任何东西，包括它自己。
- 重要列没声明 `NOT NULL`。
- 写允许无效组合的 `CHECK` 约束。

## 考试式题目

> **题（5 分）：** 解释三条完整性规则，并就学校学生数据库各举一个现实违反例子。

**参考答案：**

1. **实体完整性** —— 主键须唯一且非空。例：插入 `student_id = NULL` 的学生行被拒，因为每位学生须可被唯一识别。

2. **参照完整性** —— 外键必须引用现存主键。例：插入借阅记录 (`Loan`) 时 `student_id = 9999` 但该学生不存在于 `Student` —— DBMS 拒插。

3. **域完整性** —— 属性值须在声明域内。例：列声明 `CHECK (score BETWEEN 0 AND 100)` 时插 `score = 150` —— DBMS 因超范围而拒。

## 关键要点

- 三规则：实体、参照、域。
- DBMS 经约束强制。
- 按业务规则选参照动作（RESTRICT / CASCADE / SET NULL）。

➡️ 下一节：[1.4 索引与回滚](./indexes-rollback)
