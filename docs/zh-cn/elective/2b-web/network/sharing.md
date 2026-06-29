# 1.5 · 文件共享与权限

> **目标：** 适当配置共享文件夹与权限层级。

## 共享方法

| 方法 | 用 |
|--------|-----|
| **Windows 文件共享 (SMB)** | 办公 LAN；作盘符挂载 |
| **NFS** | Linux/Unix 共享 |
| **NAS**（网络附加储存） | 专用设备 —— Synology、QNAP |
| **云**（OneDrive、Google Drive、Dropbox） | 任何有网处 |
| **WebDAV** | 基于 HTTP 的文件共享 |

## 权限三件套

多数文件系统以这些组合表示权限：

- **读 (R)** —— 看内容。
- **写 (W)** —— 改内容。
- **执行 (X)** —— 作程序运行（或打开文件夹）。

### Windows ACL

细粒度：Full Control、Modify、Read & Execute、Read、Write。按用户或组。

### Unix 风格

| 记号 | 含义 |
|----------|---------|
| `-rwxr-xr--` | 所有者：rwx、组：r-x、其他：r-- |
| `chmod 755 file` | rwxr-xr-x |
| `chmod 644 file` | rw-r--r-- |
| `chown user:group file` | 改所有者 / 组 |

## 最佳实践

1. **按角色分组**用户；给组授权而非个人。
2. **最小权限** —— 给所需最小。
3. **定期审计** —— 离职员工移除权限。
4. **备份** —— 共享无备份很危险。
5. **静态加密** —— 给敏感文件夹。

## 实例 · 学校共享盘

```
\\schoolfileserver\
├── Public  (Everyone: 读)
├── Teachers   (TeachersGroup: 读+写)
├── Students   (StudentsGroup: 读; TeachersGroup: 读+写)
└── Admin   (AdminGroup: 完全控制)
```

学生打开 `Teachers` 文件夹得 "Access Denied"。老师不能删 `Admin` 文件夹。

## 学生常见错误

- 为方便授 「Everyone — 完全控制」 → 灾难性数据损失。
- 混淆**读**（看文件）与**执行**（打开文件夹 / 运行程序）。
- 留旧项目陈旧共享。

## 考试式题目

> **题（5 分）：** 为学校共享盘的 `Public`、`Students`、`Teachers`、`Admin` 文件夹设计权限。为每个选择说明理由。

**参考答案：**

| 文件夹 | 组 | 权限 | 理由 |
|--------|-------|------------|---------------|
| Public | Everyone | 读 | 公告 / 共享资源，任何人都不应误覆。老师或有写以发布。 |
| Students | StudentsGroup | 读；TeachersGroup：读+写 | 学生看作业；老师发与改。 |
| Teachers | TeachersGroup | 读+写 | 教职合作的内部材料；学生排除。 |
| Admin | AdminGroup | 完全控制 | 敏感 HR / 财务文件；其他人无访问。 |

落实**最小权限** —— 每个角色只能做所需。按角色分组让员工变动时维护简单。

## 关键要点

- R / W / X（Windows 里更细 ACL）。
- 按角色分组；最小权限。
- 审计、备份、敏感文件夹加密。

## 第 1 章总结

你覆盖了 2B 所需的所有网络层技能。该写代码了。

➡️ 下一章：[2 · 网页创作](../authoring/)
