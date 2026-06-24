import type { LocaleSpecificConfig, DefaultTheme } from 'vitepress'

const moduleASidebar = {
  text: '模块 A · 资讯处理',
  collapsed: false,
  items: [
    { text: '模块总览', link: '/zh-cn/compulsory/module-a/' },
    {
      text: '1 · 资讯处理简介',
      collapsed: true,
      items: [
        { text: '章节概览', link: '/zh-cn/compulsory/module-a/introduction/' },
        { text: '1.1 什么是资讯系统', link: '/zh-cn/compulsory/module-a/introduction/information-system' },
        { text: '1.2 数据 vs 资讯', link: '/zh-cn/compulsory/module-a/introduction/data-vs-information' },
        { text: '1.3 资讯处理过程', link: '/zh-cn/compulsory/module-a/introduction/information-processes' },
        { text: '1.4 资讯时代与素养', link: '/zh-cn/compulsory/module-a/introduction/information-age' }
      ]
    },
    {
      text: '2 · 数据组织与控制',
      collapsed: true,
      items: [
        { text: '章节概览', link: '/zh-cn/compulsory/module-a/data-organisation/' },
        { text: '2.1 数据层级', link: '/zh-cn/compulsory/module-a/data-organisation/hierarchy' },
        { text: '2.2 顺序 vs 直接存取', link: '/zh-cn/compulsory/module-a/data-organisation/access-methods' },
        { text: '2.3 验证与核实', link: '/zh-cn/compulsory/module-a/data-organisation/data-control' }
      ]
    },
    {
      text: '3 · 数据表示',
      collapsed: true,
      items: [
        { text: '章节概览', link: '/zh-cn/compulsory/module-a/data-representation/' },
        { text: '3.1 模拟 vs 数位', link: '/zh-cn/compulsory/module-a/data-representation/analog-vs-digital' },
        { text: '3.2 进制系统', link: '/zh-cn/compulsory/module-a/data-representation/number-systems' },
        { text: '3.3 二进制运算与溢出', link: '/zh-cn/compulsory/module-a/data-representation/binary-arithmetic' },
        { text: '3.4 二进制补码', link: '/zh-cn/compulsory/module-a/data-representation/twos-complement' },
        { text: '3.5 字符编码', link: '/zh-cn/compulsory/module-a/data-representation/character-encoding' },
        { text: '3.6 多媒体数字化', link: '/zh-cn/compulsory/module-a/data-representation/multimedia-encoding' },
        { text: '3.7 文件格式', link: '/zh-cn/compulsory/module-a/data-representation/file-formats' }
      ]
    },
    {
      text: '4 · 数据操控与分析',
      collapsed: true,
      items: [
        { text: '章节概览', link: '/zh-cn/compulsory/module-a/data-manipulation/' },
        { text: '4.1 电子表格基础', link: '/zh-cn/compulsory/module-a/data-manipulation/spreadsheet-basics' },
        { text: '4.2 单元格引用与函数', link: '/zh-cn/compulsory/module-a/data-manipulation/functions-and-formulas' },
        { text: '4.3 透视表与 What-if', link: '/zh-cn/compulsory/module-a/data-manipulation/pivot-tables' },
        { text: '4.4 DBMS 数据库基础', link: '/zh-cn/compulsory/module-a/data-manipulation/database-basics' },
        { text: '4.5 读懂简单 SQL', link: '/zh-cn/compulsory/module-a/data-manipulation/sql-introduction' }
      ]
    }
  ]
}

const moduleBSidebar = {
  text: '模块 B · 电脑系统基础',
  collapsed: false,
  items: [
    { text: '模块总览', link: '/zh-cn/compulsory/module-b/' },
    {
      text: '1 · 基本机器组织',
      collapsed: true,
      items: [
        { text: '章节概览', link: '/zh-cn/compulsory/module-b/machine-organisation/' },
        { text: '1.1 CPU 架构', link: '/zh-cn/compulsory/module-b/machine-organisation/cpu-architecture' },
        { text: '1.2 取指-译码-执行', link: '/zh-cn/compulsory/module-b/machine-organisation/fetch-decode-execute' },
        { text: '1.3 内存类型', link: '/zh-cn/compulsory/module-b/machine-organisation/memory-types' },
        { text: '1.4 存储装置', link: '/zh-cn/compulsory/module-b/machine-organisation/storage-devices' },
        { text: '1.5 输入/输出装置', link: '/zh-cn/compulsory/module-b/machine-organisation/io-devices' }
      ]
    },
    {
      text: '2 · 系统软件',
      collapsed: true,
      items: [
        { text: '章节概览', link: '/zh-cn/compulsory/module-b/system-software/' },
        { text: '2.1 操作系统', link: '/zh-cn/compulsory/module-b/system-software/operating-system' },
        { text: '2.2 实用程序与驱动', link: '/zh-cn/compulsory/module-b/system-software/utilities-drivers' },
        { text: '2.3 运行模式', link: '/zh-cn/compulsory/module-b/system-software/operation-modes' }
      ]
    }
  ]
}

const moduleCSidebar = {
  text: '模块 C · 互联网及其应用',
  collapsed: false,
  items: [
    { text: '模块总览', link: '/zh-cn/compulsory/module-c/' },
    {
      text: '1 · 网络与互联网基础',
      collapsed: true,
      items: [
        { text: '章节概览', link: '/zh-cn/compulsory/module-c/networking/' },
        { text: '1.1 LAN vs WAN', link: '/zh-cn/compulsory/module-c/networking/lan-vs-wan' },
        { text: '1.2 IPv4 与 IPv6', link: '/zh-cn/compulsory/module-c/networking/ip-addressing' },
        { text: '1.3 网络硬件', link: '/zh-cn/compulsory/module-c/networking/network-hardware' },
        { text: '1.4 传输介质', link: '/zh-cn/compulsory/module-c/networking/transmission-media' },
        { text: '1.5 TCP/IP 基础', link: '/zh-cn/compulsory/module-c/networking/tcp-ip' }
      ]
    },
    {
      text: '2 · 互联网服务与应用',
      collapsed: true,
      items: [
        { text: '章节概览', link: '/zh-cn/compulsory/module-c/services/' },
        { text: '2.1 URL 与 DNS', link: '/zh-cn/compulsory/module-c/services/url-dns' },
        { text: '2.2 HTTP vs HTTPS', link: '/zh-cn/compulsory/module-c/services/http-vs-https' },
        { text: '2.3 Web 文件格式', link: '/zh-cn/compulsory/module-c/services/web-formats' },
        { text: '2.4 流媒体与云', link: '/zh-cn/compulsory/module-c/services/streaming' }
      ]
    },
    {
      text: '3 · 网页编写基础',
      collapsed: true,
      items: [
        { text: '章节概览', link: '/zh-cn/compulsory/module-c/web-authoring/' },
        { text: '3.1 HTML 基础', link: '/zh-cn/compulsory/module-c/web-authoring/html-basics' },
        { text: '3.2 网页发布', link: '/zh-cn/compulsory/module-c/web-authoring/web-publishing' }
      ]
    },
    {
      text: '4 · 威胁与安全',
      collapsed: true,
      items: [
        { text: '章节概览', link: '/zh-cn/compulsory/module-c/security/' },
        { text: '4.1 威胁清单', link: '/zh-cn/compulsory/module-c/security/threats' },
        { text: '4.2 防御措施', link: '/zh-cn/compulsory/module-c/security/defences' },
        { text: '4.3 加密基础', link: '/zh-cn/compulsory/module-c/security/encryption' },
        { text: '4.4 认证与电商', link: '/zh-cn/compulsory/module-c/security/authentication' }
      ]
    }
  ]
}

const moduleDSidebar = {
  text: '模块 D · 计算思维与编程',
  collapsed: false,
  items: [
    { text: '模块总览', link: '/zh-cn/compulsory/module-d/' },
    {
      text: '1 · 问题分析与制定',
      collapsed: true,
      items: [
        { text: '章节概览', link: '/zh-cn/compulsory/module-d/problem-analysis/' },
        { text: '1.1 定义问题 (IPO)', link: '/zh-cn/compulsory/module-d/problem-analysis/defining-problems' },
        { text: '1.2 分解', link: '/zh-cn/compulsory/module-d/problem-analysis/decomposition' },
        { text: '1.3 模式识别', link: '/zh-cn/compulsory/module-d/problem-analysis/pattern-recognition' }
      ]
    },
    {
      text: '2 · 算法设计',
      collapsed: true,
      items: [
        { text: '章节概览', link: '/zh-cn/compulsory/module-d/algorithm-design/' },
        { text: '2.1 伪代码', link: '/zh-cn/compulsory/module-d/algorithm-design/pseudocode' },
        { text: '2.2 流程图', link: '/zh-cn/compulsory/module-d/algorithm-design/flowcharts' },
        { text: '2.3 数据类型与结构', link: '/zh-cn/compulsory/module-d/algorithm-design/data-types' },
        { text: '2.4 控制结构', link: '/zh-cn/compulsory/module-d/algorithm-design/control-structures' },
        { text: '2.5 追踪表', link: '/zh-cn/compulsory/module-d/algorithm-design/trace-tables' },
        { text: '2.6 模块化', link: '/zh-cn/compulsory/module-d/algorithm-design/modularity' }
      ]
    },
    {
      text: '3 · 程序开发 (Python)',
      collapsed: true,
      items: [
        { text: '章节概览', link: '/zh-cn/compulsory/module-d/programming/' },
        { text: '3.1 Python 安装', link: '/zh-cn/compulsory/module-d/programming/python-setup' },
        { text: '3.2 变量与运算符', link: '/zh-cn/compulsory/module-d/programming/variables-operators' },
        { text: '3.3 输入与输出', link: '/zh-cn/compulsory/module-d/programming/input-output' },
        { text: '3.4 选择结构', link: '/zh-cn/compulsory/module-d/programming/selection' },
        { text: '3.5 迭代结构', link: '/zh-cn/compulsory/module-d/programming/iteration' },
        { text: '3.6 列表 (一维数组)', link: '/zh-cn/compulsory/module-d/programming/arrays-lists' },
        { text: '3.7 字符串', link: '/zh-cn/compulsory/module-d/programming/strings' },
        { text: '3.8 标准算法', link: '/zh-cn/compulsory/module-d/programming/standard-algorithms' }
      ]
    },
    {
      text: '4 · 程序测试与调试',
      collapsed: true,
      items: [
        { text: '章节概览', link: '/zh-cn/compulsory/module-d/testing/' },
        { text: '4.1 设计测试数据', link: '/zh-cn/compulsory/module-d/testing/test-data' },
        { text: '4.2 错误类型', link: '/zh-cn/compulsory/module-d/testing/error-types' },
        { text: '4.3 调试技巧', link: '/zh-cn/compulsory/module-d/testing/debugging' }
      ]
    }
  ]
}

const moduleESidebar = {
  text: '模块 E · 社会影响',
  collapsed: false,
  items: [
    { text: '模块总览', link: '/zh-cn/compulsory/module-e/' },
    {
      text: '1 · 技术创新',
      collapsed: true,
      items: [
        { text: '章节概览', link: '/zh-cn/compulsory/module-e/innovations/' },
        { text: '1.1 AI 与数据科学', link: '/zh-cn/compulsory/module-e/innovations/ai-data-science' },
        { text: '1.2 3D 打印', link: '/zh-cn/compulsory/module-e/innovations/3d-printing' },
        { text: '1.3 AR 与 VR', link: '/zh-cn/compulsory/module-e/innovations/ar-vr' }
      ]
    },
    {
      text: '2 · 健康与伦理',
      collapsed: true,
      items: [
        { text: '章节概览', link: '/zh-cn/compulsory/module-e/health-ethics/' },
        { text: '2.1 健康危害', link: '/zh-cn/compulsory/module-e/health-ethics/health-hazards' },
        { text: '2.2 人体工学', link: '/zh-cn/compulsory/module-e/health-ethics/ergonomics' },
        { text: '2.3 数字鸿沟', link: '/zh-cn/compulsory/module-e/health-ethics/digital-divide' },
        { text: '2.4 ICT 伦理', link: '/zh-cn/compulsory/module-e/health-ethics/ethics' }
      ]
    },
    {
      text: '3 · 知识产权',
      collapsed: true,
      items: [
        { text: '章节概览', link: '/zh-cn/compulsory/module-e/intellectual-property/' },
        { text: '3.1 版权基础', link: '/zh-cn/compulsory/module-e/intellectual-property/copyright' },
        { text: '3.2 许可方式', link: '/zh-cn/compulsory/module-e/intellectual-property/licensing' },
        { text: '3.3 盗版与执法', link: '/zh-cn/compulsory/module-e/intellectual-property/piracy' }
      ]
    }
  ]
}

const elective2ASidebar = {
  text: '选修 2A · 数据库',
  collapsed: false,
  items: [
    { text: '选修总览', link: '/zh-cn/elective/2a-databases/' },
    {
      text: '1 · 关系数据库概念',
      collapsed: true,
      items: [
        { text: '章节概览', link: '/zh-cn/elective/2a-databases/concepts/' },
        { text: '1.1 表 / 行 / 属性', link: '/zh-cn/elective/2a-databases/concepts/tables' },
        { text: '1.2 键 (主/外/候选)', link: '/zh-cn/elective/2a-databases/concepts/keys' },
        { text: '1.3 完整性规则', link: '/zh-cn/elective/2a-databases/concepts/integrity' },
        { text: '1.4 索引与回滚', link: '/zh-cn/elective/2a-databases/concepts/indexes-rollback' }
      ]
    },
    {
      text: '2 · SQL',
      collapsed: true,
      items: [
        { text: '章节概览', link: '/zh-cn/elective/2a-databases/sql/' },
        { text: '2.1 CREATE / ALTER / DROP', link: '/zh-cn/elective/2a-databases/sql/ddl' },
        { text: '2.2 INSERT / UPDATE / DELETE', link: '/zh-cn/elective/2a-databases/sql/dml' },
        { text: '2.3 SELECT 与 WHERE', link: '/zh-cn/elective/2a-databases/sql/select' },
        { text: '2.4 运算符与 LIKE/IN', link: '/zh-cn/elective/2a-databases/sql/operators' },
        { text: '2.5 ORDER BY 与 DISTINCT', link: '/zh-cn/elective/2a-databases/sql/ordering' },
        { text: '2.6 GROUP BY 与 HAVING', link: '/zh-cn/elective/2a-databases/sql/group-by' },
        { text: '2.7 聚合与内置函数', link: '/zh-cn/elective/2a-databases/sql/functions' },
        { text: '2.8 JOIN (最多 3 表)', link: '/zh-cn/elective/2a-databases/sql/joins' },
        { text: '2.9 子查询 (一层)', link: '/zh-cn/elective/2a-databases/sql/subqueries' },
        { text: '2.10 集合运算', link: '/zh-cn/elective/2a-databases/sql/set-ops' },
        { text: '2.11 视图', link: '/zh-cn/elective/2a-databases/sql/views' }
      ]
    },
    {
      text: '3 · 数据库设计方法',
      collapsed: true,
      items: [
        { text: '章节概览', link: '/zh-cn/elective/2a-databases/design/' },
        { text: '3.1 ER 图', link: '/zh-cn/elective/2a-databases/design/er-diagrams' },
        { text: '3.2 基数与参与', link: '/zh-cn/elective/2a-databases/design/cardinality' },
        { text: '3.3 范式化至 3NF', link: '/zh-cn/elective/2a-databases/design/normalisation' },
        { text: '3.4 反范式化', link: '/zh-cn/elective/2a-databases/design/denormalisation' },
        { text: '3.5 ER → 表', link: '/zh-cn/elective/2a-databases/design/er-to-tables' },
        { text: '3.6 访问权限与隐私', link: '/zh-cn/elective/2a-databases/design/access-rights' }
      ]
    }
  ]
}

const elective2BSidebar = {
  text: '选修 2B · 网络应用开发',
  collapsed: false,
  items: [
    { text: '选修总览', link: '/zh-cn/elective/2b-web/' },
    {
      text: '1 · 网络服务与实施',
      collapsed: true,
      items: [
        { text: '章节概览', link: '/zh-cn/elective/2b-web/network/' },
        { text: '1.1 客户端-服务器模型', link: '/zh-cn/elective/2b-web/network/client-server' },
        { text: '1.2 HTTP 请求/响应', link: '/zh-cn/elective/2b-web/network/http-request' },
        { text: '1.3 网络服务器', link: '/zh-cn/elective/2b-web/network/servers' },
        { text: '1.4 Ethernet/Wi-Fi 设置', link: '/zh-cn/elective/2b-web/network/setup' },
        { text: '1.5 文件共享与权限', link: '/zh-cn/elective/2b-web/network/sharing' }
      ]
    },
    {
      text: '2 · 网页编写',
      collapsed: true,
      items: [
        { text: '章节概览', link: '/zh-cn/elective/2b-web/authoring/' },
        { text: '2.1 HTML 深入', link: '/zh-cn/elective/2b-web/authoring/html-deep' },
        { text: '2.2 CSS 一致样式', link: '/zh-cn/elective/2b-web/authoring/css' },
        { text: '2.3 发布选项', link: '/zh-cn/elective/2b-web/authoring/publishing' }
      ]
    },
    {
      text: '3 · 网页编程与应用',
      collapsed: true,
      items: [
        { text: '章节概览', link: '/zh-cn/elective/2b-web/programming/' },
        { text: '3.1 客户端 vs 服务器端', link: '/zh-cn/elective/2b-web/programming/client-vs-server' },
        { text: '3.2 JavaScript 基础', link: '/zh-cn/elective/2b-web/programming/javascript' },
        { text: '3.3 PHP 基础', link: '/zh-cn/elective/2b-web/programming/php' },
        { text: '3.4 表单与校验', link: '/zh-cn/elective/2b-web/programming/forms' },
        { text: '3.5 PDO 数据库', link: '/zh-cn/elective/2b-web/programming/php-database' },
        { text: '3.6 Cookie 与 Session', link: '/zh-cn/elective/2b-web/programming/cookies-sessions' },
        { text: '3.7 构建简单 Web 应用', link: '/zh-cn/elective/2b-web/programming/simple-app' }
      ]
    }
  ]
}

const elective2CSidebar = {
  text: '选修 2C · 算法与编程',
  collapsed: false,
  items: [
    { text: '选修总览', link: '/zh-cn/elective/2c-algorithm/' },
    {
      text: '1 · 编程',
      collapsed: true,
      items: [
        { text: '章节概览', link: '/zh-cn/elective/2c-algorithm/programming/' },
        { text: '1.1 数据类型 (深入)', link: '/zh-cn/elective/2c-algorithm/programming/data-types' },
        { text: '1.2 嵌套循环与二维列表', link: '/zh-cn/elective/2c-algorithm/programming/nested-loops' },
        { text: '1.3 子程序与参数', link: '/zh-cn/elective/2c-algorithm/programming/sub-programs' },
        { text: '1.4 文件处理', link: '/zh-cn/elective/2c-algorithm/programming/file-handling' },
        { text: '1.5 线性与二分查找', link: '/zh-cn/elective/2c-algorithm/programming/searching' },
        { text: '1.6 排序算法', link: '/zh-cn/elective/2c-algorithm/programming/sorting' },
        { text: '1.7 合并与计数', link: '/zh-cn/elective/2c-algorithm/programming/merging' },
        { text: '1.8 栈 (Stack)', link: '/zh-cn/elective/2c-algorithm/programming/stack' },
        { text: '1.9 队列 (Queue)', link: '/zh-cn/elective/2c-algorithm/programming/queue' },
        { text: '1.10 链表', link: '/zh-cn/elective/2c-algorithm/programming/linked-list' },
        { text: '1.11 测试与调试', link: '/zh-cn/elective/2c-algorithm/programming/testing-debug' }
      ]
    },
    {
      text: '2 · 实生活编程',
      collapsed: true,
      items: [
        { text: '章节概览', link: '/zh-cn/elective/2c-algorithm/real-life/' },
        { text: '2.1 传感器与装置', link: '/zh-cn/elective/2c-algorithm/real-life/sensors' },
        { text: '2.2 事件驱动编程', link: '/zh-cn/elective/2c-algorithm/real-life/event-driven' },
        { text: '2.3 扩展模块/库', link: '/zh-cn/elective/2c-algorithm/real-life/modules' }
      ]
    }
  ]
}

export const zhCnConfig: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link?: string } = {
  label: '简体中文',
  lang: 'zh-CN',
  description: '香港中学文凭试 ICT 课程的完整学习、复习与校本评核指南。',
  themeConfig: {
    nav: [
      { text: '首页', link: '/zh-cn/' },
      {
        text: '必修部分 (卷一)',
        items: [
          { text: '总览', link: '/zh-cn/compulsory/' },
          { text: 'A · 资讯处理', link: '/zh-cn/compulsory/module-a/' },
          { text: 'B · 电脑系统基础', link: '/zh-cn/compulsory/module-b/' },
          { text: 'C · 互联网及其应用', link: '/zh-cn/compulsory/module-c/' },
          { text: 'D · 计算思维与编程', link: '/zh-cn/compulsory/module-d/' },
          { text: 'E · 社会影响', link: '/zh-cn/compulsory/module-e/' }
        ]
      },
      {
        text: '选修部分 (卷二)',
        items: [
          { text: '总览', link: '/zh-cn/elective/' },
          { text: '2A · 数据库', link: '/zh-cn/elective/2a-databases/' },
          { text: '2B · 网络应用开发', link: '/zh-cn/elective/2b-web/' },
          { text: '2C · 算法与编程', link: '/zh-cn/elective/2c-algorithm/' }
        ]
      },
      { text: '校本评核', link: '/zh-cn/sba/' },
      { text: '学习路线', link: '/zh-cn/study-plan/' },
      { text: '应试策略', link: '/zh-cn/exam-tips/' },
      { text: '资源', link: '/zh-cn/resources/' }
    ],
    sidebar: {
      '/zh-cn/compulsory/': [
        { text: '必修部分', items: [{ text: '总览', link: '/zh-cn/compulsory/' }] },
        moduleASidebar, moduleBSidebar, moduleCSidebar, moduleDSidebar, moduleESidebar
      ],
      '/zh-cn/elective/': [
        { text: '卷二选修部分', items: [{ text: '总览', link: '/zh-cn/elective/' }] },
        elective2ASidebar, elective2BSidebar, elective2CSidebar
      ],
      '/zh-cn/sba/': [
        {
          text: '校本评核',
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
      copyright: 'Copyright © 2024-present HKDSE ICT Hub'
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
