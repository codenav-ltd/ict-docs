# HKDSE ICT Hub

> 一站式的 HKDSE 资讯及通讯科技（ICT）学习与备考文档站，提供 **English / 简体中文 / 繁體中文** 三语版本。

[![Deploy](https://github.com/codenav-ltd/ict-docs/actions/workflows/deploy.yml/badge.svg)](https://github.com/codenav-ltd/ict-docs/actions/workflows/deploy.yml)

## 站点内容

- **必修部分（Paper 1）** — 五大模块完整讲解：资讯处理、电脑系统、互联网、计算思维与编程、社会影响
- **选修部分（Paper 2）** — 2A 数据库、2B 网络应用开发、2C 算法与编程
- **校本评核（SBA）** — 任务一/二完整指引、模板与示例
- **学习路线** — 中四 → 中六按学期/周的备考路线图
- **应试策略** — 卷一、卷二应试技巧、常见错误、编程陷阱
- **资源** — 官方文件、历届试题、推荐工具、三语术语表

## 本地开发

```bash
pnpm install
pnpm docs:dev      # 启动开发服务器（http://localhost:5173）
pnpm docs:build    # 构建静态文件到 docs/.vitepress/dist
pnpm docs:preview  # 预览构建结果
```

## 简繁转换

简体中文为主笔语种。繁体中文版本通过脚本自动从简体转换并应用 HK 词汇表覆盖：

```bash
node scripts/zh-cn-to-zh-hk.mjs
```

修改简体内容后请重跑转换脚本，并对照检查关键术语（如「資料庫 / 數據庫」「函式 / 函數」「課業 / 任務」等）。

## 部署

推送到 `main` 分支会自动触发 GitHub Actions 部署到 GitHub Pages。

> 注意：首次启用需要在仓库 Settings → Pages → Build and deployment source 选择 **GitHub Actions**。

## 目录结构

```
ict-docs/
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts           # VitePress 主配置
│   │   └── locales/            # 三语 navbar/sidebar 配置
│   ├── public/                 # 静态资源（favicon、logo）
│   ├── index.md                # 英文首页（默认 locale 在 root）
│   ├── en/                     # English 内容
│   ├── zh-cn/                  # 简体中文内容（主笔）
│   └── zh-hk/                  # 繁體中文内容（自动转换）
├── scripts/
│   └── zh-cn-to-zh-hk.mjs     # 简繁转换脚本
├── .github/workflows/
│   └── deploy.yml              # GitHub Pages 部署
└── package.json
```

## 关于资料来源

本站内容基于以下官方资料编纂：

- HKEAA《2026 HKDSE ICT Assessment Framework》
- EDB《Information and Communication Technology Curriculum and Assessment Guide》
- HKEAA 历届试题与样卷

若与官方文件存在冲突，请以官方文件为准。

## 关于 SQL Books

文档中多次提到 **[SQL Books](https://sqlbooks.codenav.dev)**——这是一款由 CodeNav 团队开发的浏览器 SQL 学习工具，为 ICT 学生与教师提供：

- 个人沙盒数据库（每账号独立，无相互干扰）
- 浏览器内即时执行
- 内置 SQL Books 课程
- 学校功能：作业、自动评分、教师面板

非常适合 Paper 2A 与 SBA 期间的日常练习。

## 许可

MIT License — 欢迎学校、老师、学生使用、分享、改编。
