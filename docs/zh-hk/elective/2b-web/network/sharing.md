# 1.5 · 文件共享與權限

> **目標：** 適當配置共享文件夾與權限層級。

## 共享方法

| 方法 | 用 |
|--------|-----|
| **Windows 文件共享 (SMB)** | 辦公 LAN；作盤符掛載 |
| **NFS** | Linux/Unix 共享 |
| **NAS**（網絡附加儲存） | 專用設備 —— Synology、QNAP |
| **雲**（OneDrive、Google Drive、Dropbox） | 任何有網處 |
| **WebDAV** | 基於 HTTP 的文件共享 |

## 權限三件套

多數文件系統以這些組合表示權限：

- **讀 (R)** —— 看內容。
- **寫 (W)** —— 改內容。
- **執行 (X)** —— 作程序執行（或打開文件夾）。

### Windows ACL

細粒度：Full Control、Modify、Read & Execute、Read、Write。按用户或組。

### Unix 風格

| 記號 | 含義 |
|----------|---------|
| `-rwxr-xr--` | 所有者：rwx、組：r-x、其他：r-- |
| `chmod 755 file` | rwxr-xr-x |
| `chmod 644 file` | rw-r--r-- |
| `chown user:group file` | 改所有者 / 組 |

## 最佳實踐

1. **按角色分組**用户；給組授權而非個人。
2. **最小權限** —— 給所需最小。
3. **定期審計** —— 離職員工移除權限。
4. **備份** —— 共享無備份很危險。
5. **靜態加密** —— 給敏感文件夾。

## 實例 · 學校共享盤

```
\\schoolfileserver\
├── Public  (Everyone: 讀)
├── Teachers   (TeachersGroup: 讀+寫)
├── Students   (StudentsGroup: 讀; TeachersGroup: 讀+寫)
└── Admin   (AdminGroup: 完全控制)
```

學生打開 `Teachers` 文件夾得 "Access Denied"。老師不能刪 `Admin` 文件夾。

## 學生常見錯誤

- 為方便授 「Everyone — 完全控制」 → 災難性資料損失。
- 混淆**讀**（看文件）與**執行**（打開文件夾 / 執行程序）。
- 留舊項目陳舊共享。

## 考試式題目

> **題（5 分）：** 為學校共享盤的 `Public`、`Students`、`Teachers`、`Admin` 文件夾設計權限。為每個選擇説明理由。

**參考答案：**

| 文件夾 | 組 | 權限 | 理由 |
|--------|-------|------------|---------------|
| Public | Everyone | 讀 | 公告 / 共享資源，任何人都不應誤覆。老師或有寫以發佈。 |
| Students | StudentsGroup | 讀；TeachersGroup：讀+寫 | 學生看作業；老師發與改。 |
| Teachers | TeachersGroup | 讀+寫 | 教職合作的內部材料；學生排除。 |
| Admin | AdminGroup | 完全控制 | 敏感 HR / 財務文件；其他人無訪問。 |

落實**最小權限** —— 每個角色只能做所需。按角色分組讓員工變動時維護簡單。

## 關鍵要點

- R / W / X（Windows 裏更細 ACL）。
- 按角色分組；最小權限。
- 審計、備份、敏感文件夾加密。

## 第 1 章總結

你覆蓋了 2B 所需的所有網絡層技能。該寫程式碼了。

➡️ 下一章：[2 · 網頁創作](../authoring/)