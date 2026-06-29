# 3.6 · 訪問權與資料隱私

> **目標：** 描述資料庫如何透過用户賬號、權限與視圖保證機密性。

## 最小權限原則

給每個用户 / 角色其工作所需的**最小**權限。限制賬號被攻破時的損害。

## DBMS 用户與角色

```sql
CREATE USER teacher@'%' IDENTIFIED BY 'strong_pw_here';
CREATE ROLE teacher_role;

GRANT SELECT ON StudentPublic TO teacher_role;
GRANT teacher_role TO teacher;
```

（DBMS 間語法不同 —— 上是 MySQL。）

## 常見權限

| 權限 | 允許 |
|-----------|--------|
| `SELECT` | 讀 |
| `INSERT` | 加行 |
| `UPDATE` | 改行 |
| `DELETE` | 刪行 |
| `CREATE` | 建新表 |
| `DROP` | 刪表 |
| `ALL PRIVILEGES` | 一切 |

`GRANT` 加；`REVOKE` 移。

## 分層訪問控制

| 層 | 做什麼 |
|-------|--------------|
| **認證** | 確認身份（密碼、證書） |
| **角色** | 按職能分組權限（teacher、admin） |
| **物件級權限** | 此角色可對每表/視圖做什麼 |
| **行級安全（進階）** | 某些 DBMS 限制用户能見哪些行 |
| **視圖** | 僅暴露安全列 / 過濾行 |
| **靜態加密** | 盤上文件加密 |
| **傳輸加密** | App 到 DB 間用 TLS |
| **審計日誌** | 記錄誰做了什麼 |

## 用視圖保隱私

回顧 SQL 章：

```sql
CREATE VIEW StudentPublic AS
SELECT student_id, name, class_id FROM Student;

GRANT SELECT ON StudentPublic TO teacher_role;
```

老師可從 `StudentPublic` SELECT，永遠看不到底層 `medical_notes` 列。

## 香港情境 · PDPO

香港的**《個人資料（私隱）條例》**列出六項資料保護原則。DBA 須：

1. 僅採集聲明目的所需資料。
2. 保持資料準確與最新。
3. 僅在必要時長內保留。
4. 僅依聲明目的（或經同意）使用資料。
5. 實施合理安全措施。
6. 容許資料當事人查閲與更正其資料。

不照辦可引執法行動與聲譽損害。

## 學生常見錯誤

- 為方便授 `ALL PRIVILEGES`。
- 多用户共享單一資料庫賬號 → 無問責。
- 把 DB 憑證硬編碼到提交 GitHub 的源碼裏。
- 員工離職忘撤銷訪問。

## 考試式題目

> **題（5 分）：** 學校學生資料庫把敏感醫療筆記與基本檔案欄位並存。描述訪問權與視圖如何限制誰看醫療筆記，並提一項香港法律義務。

**參考答案：**

學校創兩資料庫角色：`admin` 與 `teacher`。含 `medical_notes` 的完整 `Student` 表僅 `admin` 可訪問。視圖 `StudentPublic` 只選 `student_id`、`name`、`class_id` 與 `dob` —— 醫療筆記列排除。

```sql
GRANT SELECT ON StudentPublic TO teacher_role;
REVOKE ALL ON Student FROM teacher_role;
```

老師僅見安全列。**最小權限**原則得以落實 —— 管理員仍需改筆記，但其他人被鎖出。

法律義務：香港**《個人資料（私隱）條例》**要求資料使用者**僅採集聲明目的所需的個人資料**並**實施合理安全措施**。透過視圖與角色限制對醫療筆記的訪問直接支援 DPP 1（資料採集 / 目的限制）與 DPP 4（資料安全）。

## 關鍵要點

- 經角色 + 授權實施最小權限。
- 視圖收窄暴露面。
- 加密 + 審計 + PDPO 合規補全整圖。

## 第 3 章總結

你完成了選修 2A。

➡️ 下一選修：[2B · 網頁應用開發](../../2b-web/)