import type { LocaleSpecificConfig, DefaultTheme } from 'vitepress'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link?: string } = {
  label: 'English',
  lang: 'en-US',
  description: 'The complete HKDSE Information and Communication Technology guide for students and teachers.',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Compulsory',
        items: [
          { text: 'Overview', link: '/en/compulsory/' },
          { text: 'A · Information Processing', link: '/en/compulsory/module-a-information-processing' },
          { text: 'B · Computer System Fundamentals', link: '/en/compulsory/module-b-computer-system' },
          { text: 'C · Internet & its Applications', link: '/en/compulsory/module-c-internet' },
          { text: 'D · Computational Thinking & Programming', link: '/en/compulsory/module-d-programming' },
          { text: 'E · Social Implications', link: '/en/compulsory/module-e-social' }
        ]
      },
      {
        text: 'Electives',
        items: [
          { text: 'Overview', link: '/en/elective/' },
          { text: '2A · Databases', link: '/en/elective/2a-databases' },
          { text: '2B · Web Application Development', link: '/en/elective/2b-web' },
          { text: '2C · Algorithm & Programming', link: '/en/elective/2c-algorithm' }
        ]
      },
      { text: 'SBA', link: '/en/sba/' },
      { text: 'Study Plan', link: '/en/study-plan/' },
      { text: 'Exam Tips', link: '/en/exam-tips/' },
      { text: 'Resources', link: '/en/resources/' }
    ],
    sidebar: {
      '/en/compulsory/': [
        {
          text: 'Paper 1 · Compulsory Part',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/en/compulsory/' },
            { text: 'A · Information Processing', link: '/en/compulsory/module-a-information-processing' },
            { text: 'B · Computer System Fundamentals', link: '/en/compulsory/module-b-computer-system' },
            { text: 'C · Internet & its Applications', link: '/en/compulsory/module-c-internet' },
            { text: 'D · Computational Thinking & Programming', link: '/en/compulsory/module-d-programming' },
            { text: 'E · Social Implications', link: '/en/compulsory/module-e-social' }
          ]
        }
      ],
      '/en/elective/': [
        {
          text: 'Paper 2 · Electives (choose 2)',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/en/elective/' },
            { text: '2A · Databases', link: '/en/elective/2a-databases' },
            { text: '2B · Web Application Development', link: '/en/elective/2b-web' },
            { text: '2C · Algorithm & Programming', link: '/en/elective/2c-algorithm' }
          ]
        }
      ],
      '/en/sba/': [
        {
          text: 'School-based Assessment',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/en/sba/' },
            { text: 'Task 1 · Design & Implementation', link: '/en/sba/task1' },
            { text: 'Task 2 · Testing & Evaluation', link: '/en/sba/task2' },
            { text: 'Topic Examples', link: '/en/sba/examples' }
          ]
        }
      ],
      '/en/study-plan/': [
        {
          text: 'Study Plans',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/en/study-plan/' },
            { text: 'S4 · Foundation Year', link: '/en/study-plan/s4' },
            { text: 'S5 · Building Depth', link: '/en/study-plan/s5' },
            { text: 'S6 · Final Sprint', link: '/en/study-plan/s6' },
            { text: 'For Teachers', link: '/en/study-plan/teachers' }
          ]
        }
      ],
      '/en/exam-tips/': [
        {
          text: 'Exam Tips',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/en/exam-tips/' },
            { text: 'Paper 1 Strategy', link: '/en/exam-tips/paper1' },
            { text: 'Paper 2 Strategy', link: '/en/exam-tips/paper2' },
            { text: 'Common Mistakes', link: '/en/exam-tips/mistakes' },
            { text: 'Programming Pitfalls', link: '/en/exam-tips/programming' }
          ]
        }
      ],
      '/en/resources/': [
        {
          text: 'Resources',
          collapsed: false,
          items: [
            { text: 'Official Documents', link: '/en/resources/' },
            { text: 'Past Papers', link: '/en/resources/past-papers' },
            { text: 'Tools & Software', link: '/en/resources/tools' },
            { text: 'Glossary', link: '/en/resources/glossary' }
          ]
        }
      ]
    },
    editLink: {
      pattern: 'https://github.com/codenav-ltd/ict-docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present HKDSE ICT Hub · Built with VitePress'
    },
    docFooter: { prev: 'Previous page', next: 'Next page' },
    outline: { level: [2, 3], label: 'On this page' },
    lastUpdated: { text: 'Last updated' },
    darkModeSwitchLabel: 'Theme',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Return to top'
  }
}
