# SBA 任務一 · 構思與應用（25 分）

> 證明你能把實際問題轉化為方案，並用所學 ICT 技能做出可執行的原型。

## 評分關注點

| 部分 | 包含什麼 | 建議 |
|------|---------|------|
| **問題識別** | 用户是誰、解決什麼痛點、範圍 | 1–2 段，具體 |
| **需求** | 功能性 + 非功能性 | 項目化列 |
| **系統設計** | ER 圖、資料字典、架構圖、線框圖 | 用官方 ER 符號 |
| **實施計劃** | 模組、技術、里程碑 | 甘特圖加分 |
| **構建成果** | 代碼截圖、UI、資料庫表 | 加註釋 |
| **用户手冊** | 安裝/使用步驟 | 像真説明書 |

## 推薦文件結構

```
1. 簡介
   1.1 背景  1.2 目標  1.3 範圍
2. 分析
   2.1 用户畫像  2.2 用例  2.3 功能需求  2.4 非功能需求
3. 設計
   3.1 系統架構  3.2 ER 圖  3.3 資料字典  3.4 UI 線框  3.5 流程圖
4. 實現
   4.1 技術棧  4.2 資料庫 schema (SQL)
   4.3 後端模組  4.4 前端頁面  4.5 關鍵代碼
5. 用户手冊
6. 參考資料
```

## 示例 · 學校圖書館系統

### 問題陳述

> 我校圖書管理員仍用紙記借還。難以找出逾期書、無法生成月報。本系統將借還流程數字化。

### ER 圖（粗略）

```
[Member] ─── borrows ─── [Loan] ─── refers_to ─── [Book]
                            │
                            └── 1:M to [Fine]
```

### 資料庫 schema（先在 SQL Books 調）

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

### 實現輪廓

1. 起一個小 PHP 項目：`index.php`、`style.css`、`db.php`。
2. CRUD 頁：會員、書、借出、歸還。
3. 報表頁：所有 3 表 JOIN 查逾期。
4. `session_start()` 實現管理員登錄。

### 常見交付物

- 源程式碼（zip）
- 資料庫 `.sql` dump
- 用户手冊（PDF，2–4 頁）
- 演示視頻（可選 3 分鐘）
- 自評表

## 時間管理

25 分任務一般花 **20–30 小時**：

- 15% 計劃/需求
- 30% 設計/文件
- 45% 編碼與測試
- 10% 報告撰寫

## 常見陷阱

- **範圍蔓延** —— 3 個穩的好過 10 個爛的。
- **無版本控制** —— 每個里程碑都備份。
- **沒設計直接寫程式碼** —— 先畫 schema。
- **硬編碼資料** —— 評卷想看變數、參數、配置。

::: tip 快速迭代 schema
資料庫設計是 SBA 最大的返工源。設計階段就開 **[SQL Books](https://sqlbooks.codenav.dev)**：粘 `CREATE TABLE`、插 5 行樣例、跑最複雜的報表查詢。能跑通再去寫 PHP。
:::

➡️ 下一篇：[任務二 · 測試與評估](./task2)