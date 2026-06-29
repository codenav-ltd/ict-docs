# 3.6 · 访问权与数据隐私

> **目标：** 描述数据库如何透过用户账号、权限与视图保证机密性。

## 最小权限原则

给每个用户 / 角色其工作所需的**最小**权限。限制账号被攻破时的损害。

## DBMS 用户与角色

```sql
CREATE USER teacher@'%' IDENTIFIED BY 'strong_pw_here';
CREATE ROLE teacher_role;

GRANT SELECT ON StudentPublic TO teacher_role;
GRANT teacher_role TO teacher;
```

（DBMS 间语法不同 —— 上是 MySQL。）

## 常见权限

| 权限 | 允许 |
|-----------|--------|
| `SELECT` | 读 |
| `INSERT` | 加行 |
| `UPDATE` | 改行 |
| `DELETE` | 删行 |
| `CREATE` | 建新表 |
| `DROP` | 删表 |
| `ALL PRIVILEGES` | 一切 |

`GRANT` 加；`REVOKE` 移。

## 分层访问控制

| 层 | 做什么 |
|-------|--------------|
| **认证** | 确认身份（密码、证书） |
| **角色** | 按职能分组权限（teacher、admin） |
| **对象级权限** | 此角色可对每表/视图做什么 |
| **行级安全（进阶）** | 某些 DBMS 限制用户能见哪些行 |
| **视图** | 仅暴露安全列 / 过滤行 |
| **静态加密** | 盘上文件加密 |
| **传输加密** | App 到 DB 间用 TLS |
| **审计日志** | 记录谁做了什么 |

## 用视图保隐私

回顾 SQL 章：

```sql
CREATE VIEW StudentPublic AS
SELECT student_id, name, class_id FROM Student;

GRANT SELECT ON StudentPublic TO teacher_role;
```

老师可从 `StudentPublic` SELECT，永远看不到底层 `medical_notes` 列。

## 香港情境 · PDPO

香港的**《个人资料（私隐）条例》**列出六项资料保护原则。DBA 须：

1. 仅采集声明目的所需数据。
2. 保持数据准确与最新。
3. 仅在必要时长内保留。
4. 仅依声明目的（或经同意）使用数据。
5. 实施合理安全措施。
6. 容许数据当事人查阅与更正其数据。

不照办可引执法行动与声誉损害。

## 学生常见错误

- 为方便授 `ALL PRIVILEGES`。
- 多用户共享单一数据库账号 → 无问责。
- 把 DB 凭证硬编码到提交 GitHub 的源码里。
- 员工离职忘撤销访问。

## 考试式题目

> **题（5 分）：** 学校学生数据库把敏感医疗笔记与基本档案字段并存。描述访问权与视图如何限制谁看医疗笔记，并提一项香港法律义务。

**参考答案：**

学校创两数据库角色：`admin` 与 `teacher`。含 `medical_notes` 的完整 `Student` 表仅 `admin` 可访问。视图 `StudentPublic` 只选 `student_id`、`name`、`class_id` 与 `dob` —— 医疗笔记列排除。

```sql
GRANT SELECT ON StudentPublic TO teacher_role;
REVOKE ALL ON Student FROM teacher_role;
```

老师仅见安全列。**最小权限**原则得以落实 —— 管理员仍需改笔记，但其他人被锁出。

法律义务：香港**《个人资料（私隐）条例》**要求资料使用者**仅采集声明目的所需的个人数据**并**实施合理安全措施**。透过视图与角色限制对医疗笔记的访问直接支援 DPP 1（数据采集 / 目的限制）与 DPP 4（数据安全）。

## 关键要点

- 经角色 + 授权实施最小权限。
- 视图收窄暴露面。
- 加密 + 审计 + PDPO 合规补全整图。

## 第 3 章总结

你完成了选修 2A。

➡️ 下一选修：[2B · 网页应用开发](../../2b-web/)
