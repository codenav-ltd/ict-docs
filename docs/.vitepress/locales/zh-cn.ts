import type { LocaleSpecificConfig, DefaultTheme } from 'vitepress'

export const zhCnConfig: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link?: string } = {
  label: '简体中文',
  lang: 'zh-CN',
  description: '香港中学文凭试 ICT 课程的完整学习、复习与校本评核指南。',
  themeConfig: {
    nav: [
      { text: '首页', link: '/zh-cn/' },
      {
        text: '必修部分',
        items: [
          { text: '总览', link: '/zh-cn/compulsory/' },
          { text: 'A · 资讯处理', link: '/zh-cn/compulsory/module-a-information-processing' },
          { text: 'B · 电脑系统基础', link: '/zh-cn/compulsory/module-b-computer-system' },
          { text: 'C · 互联网及其应用', link: '/zh-cn/compulsory/module-c-internet' },
          { text: 'D · 计算思维与编程', link: '/zh-cn/compulsory/module-d-programming' },
          { text: 'E · 社会影响', link: '/zh-cn/compulsory/module-e-social' }
        ]
      },
      {
        text: '选修部分',
        items: [
          { text: '总览', link: '/zh-cn/elective/' },
          { text: '2A · 数据库', link: '/zh-cn/elective/2a-databases' },
          { text: '2B · 网络应用开发', link: '/zh-cn/elective/2b-web' },
          { text: '2C · 算法与编程', link: '/zh-cn/elective/2c-algorithm' }
        ]
      },
      { text: '校本评核', link: '/zh-cn/sba/' },
      { text: '学习路线', link: '/zh-cn/study-plan/' },
      { text: '应试策略', link: '/zh-cn/exam-tips/' },
      { text: '资源', link: '/zh-cn/resources/' }
    ],
    sidebar: {
      '/zh-cn/compulsory/': [
        {
          text: '卷一 · 必修部分',
          collapsed: false,
          items: [
            { text: '总览', link: '/zh-cn/compulsory/' },
            { text: 'A · 资讯处理', link: '/zh-cn/compulsory/module-a-information-processing' },
            { text: 'B · 电脑系统基础', link: '/zh-cn/compulsory/module-b-computer-system' },
            { text: 'C · 互联网及其应用', link: '/zh-cn/compulsory/module-c-internet' },
            { text: 'D · 计算思维与编程', link: '/zh-cn/compulsory/module-d-programming' },
            { text: 'E · 社会影响', link: '/zh-cn/compulsory/module-e-social' }
          ]
        }
      ],
      '/zh-cn/elective/': [
        {
          text: '卷二 · 选修部分（3 选 2）',
          collapsed: false,
          items: [
            { text: '总览', link: '/zh-cn/elective/' },
            { text: '2A · 数据库', link: '/zh-cn/elective/2a-databases' },
            { text: '2B · 网络应用开发', link: '/zh-cn/elective/2b-web' },
            { text: '2C · 算法与编程', link: '/zh-cn/elective/2c-algorithm' }
          ]
        }
      ],
      '/zh-cn/sba/': [
        {
          text: '校本评核 SBA',
          collapsed: false,
          items: [
            { text: '总览', link: '/zh-cn/sba/' },
            { text: '任务一 · 构思与应用', link: '/zh-cn/sba/task1' },
            { text: '任务二 · 测试与评估', link: '/zh-cn/sba/task2' },
            { text: '主题示例', link: '/zh-cn/sba/examples' }
          ]
        }
      ],
      '/zh-cn/study-plan/': [
        {
          text: '学习路线',
          collapsed: false,
          items: [
            { text: '总览', link: '/zh-cn/study-plan/' },
            { text: '中四 · 打基础', link: '/zh-cn/study-plan/s4' },
            { text: '中五 · 拓深度', link: '/zh-cn/study-plan/s5' },
            { text: '中六 · 终极冲刺', link: '/zh-cn/study-plan/s6' },
            { text: '给老师的建议', link: '/zh-cn/study-plan/teachers' }
          ]
        }
      ],
      '/zh-cn/exam-tips/': [
        {
          text: '应试策略',
          collapsed: false,
          items: [
            { text: '总览', link: '/zh-cn/exam-tips/' },
            { text: '卷一应试技巧', link: '/zh-cn/exam-tips/paper1' },
            { text: '卷二应试技巧', link: '/zh-cn/exam-tips/paper2' },
            { text: '常见错误', link: '/zh-cn/exam-tips/mistakes' },
            { text: '编程陷阱', link: '/zh-cn/exam-tips/programming' }
          ]
        }
      ],
      '/zh-cn/resources/': [
        {
          text: '资源',
          collapsed: false,
          items: [
            { text: '官方文件', link: '/zh-cn/resources/' },
            { text: '历届试题', link: '/zh-cn/resources/past-papers' },
            { text: '工具与软件', link: '/zh-cn/resources/tools' },
            { text: '术语表', link: '/zh-cn/resources/glossary' }
          ]
        }
      ]
    },
    editLink: {
      pattern: 'https://github.com/codenav-ltd/ict-docs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    footer: {
      message: '基于 MIT 协议发布',
      copyright: 'Copyright © 2024-present HKDSE ICT Hub · 由 VitePress 强力驱动'
    },
    docFooter: { prev: '上一页', next: '下一页' },
    outline: { level: [2, 3], label: '本页内容' },
    lastUpdated: { text: '最后更新' },
    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    langMenuLabel: '语言'
  }
}
