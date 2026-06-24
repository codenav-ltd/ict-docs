import type { LocaleSpecificConfig, DefaultTheme } from 'vitepress'

export const zhHkConfig: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link?: string } = {
  label: '繁體中文',
  lang: 'zh-HK',
  description: '香港中學文憑試 ICT 課程的完整學習、溫習與校本評核指南。',
  themeConfig: {
    nav: [
      { text: '首頁', link: '/zh-hk/' },
      {
        text: '必修部分',
        items: [
          { text: '總覽', link: '/zh-hk/compulsory/' },
          { text: 'A · 資訊處理', link: '/zh-hk/compulsory/module-a-information-processing' },
          { text: 'B · 電腦系統基礎', link: '/zh-hk/compulsory/module-b-computer-system' },
          { text: 'C · 互聯網及其應用', link: '/zh-hk/compulsory/module-c-internet' },
          { text: 'D · 計算思維與編程', link: '/zh-hk/compulsory/module-d-programming' },
          { text: 'E · 社會影響', link: '/zh-hk/compulsory/module-e-social' }
        ]
      },
      {
        text: '選修部分',
        items: [
          { text: '總覽', link: '/zh-hk/elective/' },
          { text: '2A · 資料庫', link: '/zh-hk/elective/2a-databases' },
          { text: '2B · 網絡應用開發', link: '/zh-hk/elective/2b-web' },
          { text: '2C · 演算法與編程', link: '/zh-hk/elective/2c-algorithm' }
        ]
      },
      { text: '校本評核', link: '/zh-hk/sba/' },
      { text: '學習路線', link: '/zh-hk/study-plan/' },
      { text: '應試策略', link: '/zh-hk/exam-tips/' },
      { text: '資源', link: '/zh-hk/resources/' }
    ],
    sidebar: {
      '/zh-hk/compulsory/': [
        {
          text: '卷一 · 必修部分',
          collapsed: false,
          items: [
            { text: '總覽', link: '/zh-hk/compulsory/' },
            { text: 'A · 資訊處理', link: '/zh-hk/compulsory/module-a-information-processing' },
            { text: 'B · 電腦系統基礎', link: '/zh-hk/compulsory/module-b-computer-system' },
            { text: 'C · 互聯網及其應用', link: '/zh-hk/compulsory/module-c-internet' },
            { text: 'D · 計算思維與編程', link: '/zh-hk/compulsory/module-d-programming' },
            { text: 'E · 社會影響', link: '/zh-hk/compulsory/module-e-social' }
          ]
        }
      ],
      '/zh-hk/elective/': [
        {
          text: '卷二 · 選修部分（3 選 2）',
          collapsed: false,
          items: [
            { text: '總覽', link: '/zh-hk/elective/' },
            { text: '2A · 資料庫', link: '/zh-hk/elective/2a-databases' },
            { text: '2B · 網絡應用開發', link: '/zh-hk/elective/2b-web' },
            { text: '2C · 演算法與編程', link: '/zh-hk/elective/2c-algorithm' }
          ]
        }
      ],
      '/zh-hk/sba/': [
        {
          text: '校本評核 SBA',
          collapsed: false,
          items: [
            { text: '總覽', link: '/zh-hk/sba/' },
            { text: '課業一 · 構思與應用', link: '/zh-hk/sba/task1' },
            { text: '課業二 · 測試與評估', link: '/zh-hk/sba/task2' },
            { text: '主題示例', link: '/zh-hk/sba/examples' }
          ]
        }
      ],
      '/zh-hk/study-plan/': [
        {
          text: '學習路線',
          collapsed: false,
          items: [
            { text: '總覽', link: '/zh-hk/study-plan/' },
            { text: '中四 · 打基礎', link: '/zh-hk/study-plan/s4' },
            { text: '中五 · 拓深度', link: '/zh-hk/study-plan/s5' },
            { text: '中六 · 終極衝刺', link: '/zh-hk/study-plan/s6' },
            { text: '給老師的建議', link: '/zh-hk/study-plan/teachers' }
          ]
        }
      ],
      '/zh-hk/exam-tips/': [
        {
          text: '應試策略',
          collapsed: false,
          items: [
            { text: '總覽', link: '/zh-hk/exam-tips/' },
            { text: '卷一應試技巧', link: '/zh-hk/exam-tips/paper1' },
            { text: '卷二應試技巧', link: '/zh-hk/exam-tips/paper2' },
            { text: '常見錯誤', link: '/zh-hk/exam-tips/mistakes' },
            { text: '編程陷阱', link: '/zh-hk/exam-tips/programming' }
          ]
        }
      ],
      '/zh-hk/resources/': [
        {
          text: '資源',
          collapsed: false,
          items: [
            { text: '官方文件', link: '/zh-hk/resources/' },
            { text: '歷屆試題', link: '/zh-hk/resources/past-papers' },
            { text: '工具與軟件', link: '/zh-hk/resources/tools' },
            { text: '詞彙表', link: '/zh-hk/resources/glossary' }
          ]
        }
      ]
    },
    editLink: {
      pattern: 'https://github.com/codenav-ltd/ict-docs/edit/main/docs/:path',
      text: '在 GitHub 上編輯此頁'
    },
    footer: {
      message: '基於 MIT 協議發佈',
      copyright: 'Copyright © 2024-present HKDSE ICT Hub · 由 VitePress 強力驅動'
    },
    docFooter: { prev: '上一頁', next: '下一頁' },
    outline: { level: [2, 3], label: '本頁內容' },
    lastUpdated: { text: '最後更新' },
    darkModeSwitchLabel: '主題',
    sidebarMenuLabel: '選單',
    returnToTopLabel: '返回頂部',
    langMenuLabel: '語言'
  }
}
