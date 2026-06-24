# SBA 任务一 · 构思与应用（25 分）

> 证明你能把实际问题转化为方案，并用所学 ICT 技能做出可运行的原型。

## 评分关注点

| 部分 | 包含什么 | 建议 |
|------|---------|------|
| **问题识别** | 用户是谁、解决什么痛点、范围 | 1–2 段，具体 |
| **需求** | 功能性 + 非功能性 | 项目化列 |
| **系统设计** | ER 图、数据字典、架构图、线框图 | 用官方 ER 符号 |
| **实施计划** | 模块、技术、里程碑 | 甘特图加分 |
| **构建成果** | 代码截图、UI、数据库表 | 加注释 |
| **用户手册** | 安装/使用步骤 | 像真说明书 |

## 推荐文档结构

```
1. 简介
   1.1 背景  1.2 目标  1.3 范围
2. 分析
   2.1 用户画像  2.2 用例  2.3 功能需求  2.4 非功能需求
3. 设计
   3.1 系统架构  3.2 ER 图  3.3 数据字典  3.4 UI 线框  3.5 流程图
4. 实现
   4.1 技术栈  4.2 数据库 schema (SQL)
   4.3 后端模块  4.4 前端页面  4.5 关键代码
5. 用户手册
6. 参考资料
```

## 示例 · 学校图书馆系统

### 问题陈述

> 我校图书管理员仍用纸记借还。难以找出逾期书、无法生成月报。本系统将借还流程数字化。

### ER 图（粗略）

```
[Member] ─── borrows ─── [Loan] ─── refers_to ─── [Book]
                            │
                            └── 1:M to [Fine]
```

### 数据库 schema（先在 SQL Books 调）

```sql
CREATE TABLE Member (
  member_id INTEGER PRIMARY KEY,
  name      VARCHAR(50) NOT NULL,
  class     VARCHAR(10)
);
CREATE TABLE Book (
  isbn   VARCHAR(20) PRIMARY KEY,
  title  VARCHAR(200) NOT NULL,
  author VARCHAR(100),
  copies INTEGER NOT NULL DEFAULT 1
);
CREATE TABLE Loan (
  loan_id     INTEGER PRIMARY KEY,
  member_id   INTEGER NOT NULL,
  isbn        VARCHAR(20) NOT NULL,
  loan_date   DATE NOT NULL,
  due_date    DATE NOT NULL,
  return_date DATE,
  FOREIGN KEY (member_id) REFERENCES Member(member_id),
  FOREIGN KEY (isbn)      REFERENCES Book(isbn)
);
```

### 实现轮廓

1. 起一个小 PHP 项目：`index.php`、`style.css`、`db.php`。
2. CRUD 页：会员、书、借出、归还。
3. 报表页：所有 3 表 JOIN 查逾期。
4. `session_start()` 实现管理员登录。

### 常见交付物

- 源代码（zip）
- 数据库 `.sql` dump
- 用户手册（PDF，2–4 页）
- 演示视频（可选 3 分钟）
- 自评表

## 时间管理

25 分任务一般花 **20–30 小时**：

- 15% 计划/需求
- 30% 设计/文档
- 45% 编码与测试
- 10% 报告撰写

## 常见陷阱

- **范围蔓延** —— 3 个稳的好过 10 个烂的。
- **无版本控制** —— 每个里程碑都备份。
- **没设计直接写代码** —— 先画 schema。
- **硬编码数据** —— 评卷想看变量、参数、配置。

::: tip 快速迭代 schema
数据库设计是 SBA 最大的返工源。设计阶段就开 **[SQL Books](https://sqlbooks.codenav.dev)**：粘 `CREATE TABLE`、插 5 行样例、跑最复杂的报表查询。能跑通再去写 PHP。
:::

➡️ 下一篇：[任务二 · 测试与评估](./task2)
