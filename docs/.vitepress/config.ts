import { defineConfig } from 'vitepress'
import { enConfig } from './locales/en'
import { zhCnConfig } from './locales/zh-cn'
import { zhHkConfig } from './locales/zh-hk'

export default defineConfig({
  title: 'HKDSE ICT Hub',
  description: 'The complete HKDSE Information and Communication Technology learning, revision and SBA guide for students and teachers.',
  base: '/',
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'theme-color', content: '#3c6df0' }],
    ['meta', { property: 'og:title', content: 'HKDSE ICT Hub' }],
    ['meta', { property: 'og:description', content: 'The complete HKDSE ICT learning, revision and SBA guide.' }],
    ['meta', { name: 'keywords', content: 'HKDSE, ICT, DSE ICT, Information and Communication Technology, SQL, Python, PHP, SBA, Databases, Web Application Development, Algorithm and Programming, 香港中學文憑試, 資訊及通訊科技' }]
  ],

  themeConfig: {
    logo: { src: '/logo.svg', width: 28, height: 28 },
    search: {
      provider: 'local',
      options: {
        locales: {
          'zh-cn': {
            translations: {
              button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
              modal: {
                noResultsText: '无相关结果',
                resetButtonTitle: '清除查询条件',
                footer: { selectText: '选择', navigateText: '切换' }
              }
            }
          },
          'zh-hk': {
            translations: {
              button: { buttonText: '搜尋文檔', buttonAriaLabel: '搜尋文檔' },
              modal: {
                noResultsText: '沒有相關結果',
                resetButtonTitle: '清除查詢條件',
                footer: { selectText: '選擇', navigateText: '切換' }
              }
            }
          }
        }
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/codenav-ltd/ict-docs' }
    ],
    externalLinkIcon: true,
    outline: { level: [2, 3] }
  },

  locales: {
    root: enConfig,
    'zh-cn': zhCnConfig,
    'zh-hk': zhHkConfig
  },

  markdown: {
    lineNumbers: true,
    theme: { light: 'github-light', dark: 'github-dark' }
  }
})
