import type { LocaleSpecificConfig, DefaultTheme } from 'vitepress'

const moduleASidebar = {
  text: '模塊 A · 資訊處理',
  collapsed: false,
  items: [
    { text: '模塊總覽', link: '/zh-hk/compulsory/module-a/' },
    {
      text: '1 · 資訊處理簡介',
      collapsed: true,
      items: [
        { text: '章節概覽', link: '/zh-hk/compulsory/module-a/introduction/' },
        { text: '1.1 什麼是資訊系統', link: '/zh-hk/compulsory/module-a/introduction/information-system' },
        { text: '1.2 資料 vs 資訊', link: '/zh-hk/compulsory/module-a/introduction/data-vs-information' },
        { text: '1.3 資訊處理過程', link: '/zh-hk/compulsory/module-a/introduction/information-processes' },
        { text: '1.4 資訊時代與素養', link: '/zh-hk/compulsory/module-a/introduction/information-age' }
      ]
    },
    {
      text: '2 · 資料組織與控制',
      collapsed: true,
      items: [
        { text: '章節概覽', link: '/zh-hk/compulsory/module-a/data-organisation/' },
        { text: '2.1 資料層級', link: '/zh-hk/compulsory/module-a/data-organisation/hierarchy' },
        { text: '2.2 順序 vs 直接存取', link: '/zh-hk/compulsory/module-a/data-organisation/access-methods' },
        { text: '2.3 驗證與核實', link: '/zh-hk/compulsory/module-a/data-organisation/data-control' }
      ]
    },
    {
      text: '3 · 資料表示',
      collapsed: true,
      items: [
        { text: '章節概覽', link: '/zh-hk/compulsory/module-a/data-representation/' },
        { text: '3.1 模擬 vs 數位', link: '/zh-hk/compulsory/module-a/data-representation/analog-vs-digital' },
        { text: '3.2 進制系統', link: '/zh-hk/compulsory/module-a/data-representation/number-systems' },
        { text: '3.3 二進制運算與溢出', link: '/zh-hk/compulsory/module-a/data-representation/binary-arithmetic' },
        { text: '3.4 二進制補碼', link: '/zh-hk/compulsory/module-a/data-representation/twos-complement' },
        { text: '3.5 字符編碼', link: '/zh-hk/compulsory/module-a/data-representation/character-encoding' },
        { text: '3.6 多媒體數字化', link: '/zh-hk/compulsory/module-a/data-representation/multimedia-encoding' },
        { text: '3.7 文件格式', link: '/zh-hk/compulsory/module-a/data-representation/file-formats' }
      ]
    },
    {
      text: '4 · 資料操控與分析',
      collapsed: true,
      items: [
        { text: '章節概覽', link: '/zh-hk/compulsory/module-a/data-manipulation/' },
        { text: '4.1 電子表格基礎', link: '/zh-hk/compulsory/module-a/data-manipulation/spreadsheet-basics' },
        { text: '4.2 單元格引用與函式', link: '/zh-hk/compulsory/module-a/data-manipulation/functions-and-formulas' },
        { text: '4.3 透視表與 What-if', link: '/zh-hk/compulsory/module-a/data-manipulation/pivot-tables' },
        { text: '4.4 DBMS 資料庫基礎', link: '/zh-hk/compulsory/module-a/data-manipulation/database-basics' },
        { text: '4.5 讀懂簡單 SQL', link: '/zh-hk/compulsory/module-a/data-manipulation/sql-introduction' }
      ]
    }
  ]
}

const moduleBSidebar = {
  text: '模塊 B · 電腦系統基礎',
  collapsed: false,
  items: [
    { text: '模塊總覽', link: '/zh-hk/compulsory/module-b/' },
    {
      text: '1 · 基本機器組織',
      collapsed: true,
      items: [
        { text: '章節概覽', link: '/zh-hk/compulsory/module-b/machine-organisation/' },
        { text: '1.1 CPU 架構', link: '/zh-hk/compulsory/module-b/machine-organisation/cpu-architecture' },
        { text: '1.2 取指-譯碼-執行', link: '/zh-hk/compulsory/module-b/machine-organisation/fetch-decode-execute' },
        { text: '1.3 內存類型', link: '/zh-hk/compulsory/module-b/machine-organisation/memory-types' },
        { text: '1.4 存儲裝置', link: '/zh-hk/compulsory/module-b/machine-organisation/storage-devices' },
        { text: '1.5 輸入/輸出裝置', link: '/zh-hk/compulsory/module-b/machine-organisation/io-devices' }
      ]
    },
    {
      text: '2 · 系統軟件',
      collapsed: true,
      items: [
        { text: '章節概覽', link: '/zh-hk/compulsory/module-b/system-software/' },
        { text: '2.1 操作系統', link: '/zh-hk/compulsory/module-b/system-software/operating-system' },
        { text: '2.2 實用程序與驅動', link: '/zh-hk/compulsory/module-b/system-software/utilities-drivers' },
        { text: '2.3 運行模式', link: '/zh-hk/compulsory/module-b/system-software/operation-modes' }
      ]
    }
  ]
}

const moduleCSidebar = {
  text: '模塊 C · 互聯網及其應用',
  collapsed: false,
  items: [
    { text: '模塊總覽', link: '/zh-hk/compulsory/module-c/' },
    {
      text: '1 · 網絡與互聯網基礎',
      collapsed: true,
      items: [
        { text: '章節概覽', link: '/zh-hk/compulsory/module-c/networking/' },
        { text: '1.1 LAN vs WAN', link: '/zh-hk/compulsory/module-c/networking/lan-vs-wan' },
        { text: '1.2 IPv4 與 IPv6', link: '/zh-hk/compulsory/module-c/networking/ip-addressing' },
        { text: '1.3 網絡硬件', link: '/zh-hk/compulsory/module-c/networking/network-hardware' },
        { text: '1.4 傳輸介質', link: '/zh-hk/compulsory/module-c/networking/transmission-media' },
        { text: '1.5 TCP/IP 基礎', link: '/zh-hk/compulsory/module-c/networking/tcp-ip' }
      ]
    },
    {
      text: '2 · 互聯網服務與應用',
      collapsed: true,
      items: [
        { text: '章節概覽', link: '/zh-hk/compulsory/module-c/services/' },
        { text: '2.1 URL 與 DNS', link: '/zh-hk/compulsory/module-c/services/url-dns' },
        { text: '2.2 HTTP vs HTTPS', link: '/zh-hk/compulsory/module-c/services/http-vs-https' },
        { text: '2.3 Web 文件格式', link: '/zh-hk/compulsory/module-c/services/web-formats' },
        { text: '2.4 流媒體與雲', link: '/zh-hk/compulsory/module-c/services/streaming' }
      ]
    },
    {
      text: '3 · 網頁編寫基礎',
      collapsed: true,
      items: [
        { text: '章節概覽', link: '/zh-hk/compulsory/module-c/web-authoring/' },
        { text: '3.1 HTML 基礎', link: '/zh-hk/compulsory/module-c/web-authoring/html-basics' },
        { text: '3.2 網頁發佈', link: '/zh-hk/compulsory/module-c/web-authoring/web-publishing' }
      ]
    },
    {
      text: '4 · 威脅與安全',
      collapsed: true,
      items: [
        { text: '章節概覽', link: '/zh-hk/compulsory/module-c/security/' },
        { text: '4.1 威脅清單', link: '/zh-hk/compulsory/module-c/security/threats' },
        { text: '4.2 防禦措施', link: '/zh-hk/compulsory/module-c/security/defences' },
        { text: '4.3 加密基礎', link: '/zh-hk/compulsory/module-c/security/encryption' },
        { text: '4.4 認證與電商', link: '/zh-hk/compulsory/module-c/security/authentication' }
      ]
    }
  ]
}

const moduleDSidebar = {
  text: '模塊 D · 計算思維與編程',
  collapsed: false,
  items: [
    { text: '模塊總覽', link: '/zh-hk/compulsory/module-d/' },
    {
      text: '1 · 問題分析與制定',
      collapsed: true,
      items: [
        { text: '章節概覽', link: '/zh-hk/compulsory/module-d/problem-analysis/' },
        { text: '1.1 定義問題 (IPO)', link: '/zh-hk/compulsory/module-d/problem-analysis/defining-problems' },
        { text: '1.2 分解', link: '/zh-hk/compulsory/module-d/problem-analysis/decomposition' },
        { text: '1.3 模式識別', link: '/zh-hk/compulsory/module-d/problem-analysis/pattern-recognition' }
      ]
    },
    {
      text: '2 · 算法設計',
      collapsed: true,
      items: [
        { text: '章節概覽', link: '/zh-hk/compulsory/module-d/algorithm-design/' },
        { text: '2.1 偽代碼', link: '/zh-hk/compulsory/module-d/algorithm-design/pseudocode' },
        { text: '2.2 流程圖', link: '/zh-hk/compulsory/module-d/algorithm-design/flowcharts' },
        { text: '2.3 資料類型與結構', link: '/zh-hk/compulsory/module-d/algorithm-design/data-types' },
        { text: '2.4 控制結構', link: '/zh-hk/compulsory/module-d/algorithm-design/control-structures' },
        { text: '2.5 追蹤表', link: '/zh-hk/compulsory/module-d/algorithm-design/trace-tables' },
        { text: '2.6 模塊化', link: '/zh-hk/compulsory/module-d/algorithm-design/modularity' }
      ]
    },
    {
      text: '3 · 程序開發 (Python)',
      collapsed: true,
      items: [
        { text: '章節概覽', link: '/zh-hk/compulsory/module-d/programming/' },
        { text: '3.1 Python 安裝', link: '/zh-hk/compulsory/module-d/programming/python-setup' },
        { text: '3.2 變量與運算符', link: '/zh-hk/compulsory/module-d/programming/variables-operators' },
        { text: '3.3 輸入與輸出', link: '/zh-hk/compulsory/module-d/programming/input-output' },
        { text: '3.4 選擇結構', link: '/zh-hk/compulsory/module-d/programming/selection' },
        { text: '3.5 迭代結構', link: '/zh-hk/compulsory/module-d/programming/iteration' },
        { text: '3.6 列表 (一維陣列)', link: '/zh-hk/compulsory/module-d/programming/arrays-lists' },
        { text: '3.7 字符串', link: '/zh-hk/compulsory/module-d/programming/strings' },
        { text: '3.8 標準算法', link: '/zh-hk/compulsory/module-d/programming/standard-algorithms' }
      ]
    },
    {
      text: '4 · 程序測試與調試',
      collapsed: true,
      items: [
        { text: '章節概覽', link: '/zh-hk/compulsory/module-d/testing/' },
        { text: '4.1 設計測試資料', link: '/zh-hk/compulsory/module-d/testing/test-data' },
        { text: '4.2 錯誤類型', link: '/zh-hk/compulsory/module-d/testing/error-types' },
        { text: '4.3 調試技巧', link: '/zh-hk/compulsory/module-d/testing/debugging' }
      ]
    }
  ]
}

const moduleESidebar = {
  text: '模塊 E · 社會影響',
  collapsed: false,
  items: [
    { text: '模塊總覽', link: '/zh-hk/compulsory/module-e/' },
    {
      text: '1 · 技術創新',
      collapsed: true,
      items: [
        { text: '章節概覽', link: '/zh-hk/compulsory/module-e/innovations/' },
        { text: '1.1 AI 與資料科學', link: '/zh-hk/compulsory/module-e/innovations/ai-data-science' },
        { text: '1.2 3D 打印', link: '/zh-hk/compulsory/module-e/innovations/3d-printing' },
        { text: '1.3 AR 與 VR', link: '/zh-hk/compulsory/module-e/innovations/ar-vr' }
      ]
    },
    {
      text: '2 · 健康與倫理',
      collapsed: true,
      items: [
        { text: '章節概覽', link: '/zh-hk/compulsory/module-e/health-ethics/' },
        { text: '2.1 健康危害', link: '/zh-hk/compulsory/module-e/health-ethics/health-hazards' },
        { text: '2.2 人體工學', link: '/zh-hk/compulsory/module-e/health-ethics/ergonomics' },
        { text: '2.3 數字鴻溝', link: '/zh-hk/compulsory/module-e/health-ethics/digital-divide' },
        { text: '2.4 ICT 倫理', link: '/zh-hk/compulsory/module-e/health-ethics/ethics' }
      ]
    },
    {
      text: '3 · 知識產權',
      collapsed: true,
      items: [
        { text: '章節概覽', link: '/zh-hk/compulsory/module-e/intellectual-property/' },
        { text: '3.1 版權基礎', link: '/zh-hk/compulsory/module-e/intellectual-property/copyright' },
        { text: '3.2 許可方式', link: '/zh-hk/compulsory/module-e/intellectual-property/licensing' },
        { text: '3.3 盜版與執法', link: '/zh-hk/compulsory/module-e/intellectual-property/piracy' }
      ]
    }
  ]
}

const elective2ASidebar = {
  text: '選修 2A · 資料庫',
  collapsed: false,
  items: [
    { text: '選修總覽', link: '/zh-hk/elective/2a-databases/' },
    {
      text: '1 · 關係資料庫概念',
      collapsed: true,
      items: [
        { text: '章節概覽', link: '/zh-hk/elective/2a-databases/concepts/' },
        { text: '1.1 表 / 行 / 屬性', link: '/zh-hk/elective/2a-databases/concepts/tables' },
        { text: '1.2 鍵 (主/外/候選)', link: '/zh-hk/elective/2a-databases/concepts/keys' },
        { text: '1.3 完整性規則', link: '/zh-hk/elective/2a-databases/concepts/integrity' },
        { text: '1.4 索引與回滾', link: '/zh-hk/elective/2a-databases/concepts/indexes-rollback' }
      ]
    },
    {
      text: '2 · SQL',
      collapsed: true,
      items: [
        { text: '章節概覽', link: '/zh-hk/elective/2a-databases/sql/' },
        { text: '2.1 CREATE / ALTER / DROP', link: '/zh-hk/elective/2a-databases/sql/ddl' },
        { text: '2.2 INSERT / UPDATE / DELETE', link: '/zh-hk/elective/2a-databases/sql/dml' },
        { text: '2.3 SELECT 與 WHERE', link: '/zh-hk/elective/2a-databases/sql/select' },
        { text: '2.4 運算符與 LIKE/IN', link: '/zh-hk/elective/2a-databases/sql/operators' },
        { text: '2.5 ORDER BY 與 DISTINCT', link: '/zh-hk/elective/2a-databases/sql/ordering' },
        { text: '2.6 GROUP BY 與 HAVING', link: '/zh-hk/elective/2a-databases/sql/group-by' },
        { text: '2.7 聚合與內置函式', link: '/zh-hk/elective/2a-databases/sql/functions' },
        { text: '2.8 JOIN (最多 3 表)', link: '/zh-hk/elective/2a-databases/sql/joins' },
        { text: '2.9 子查詢 (一層)', link: '/zh-hk/elective/2a-databases/sql/subqueries' },
        { text: '2.10 集合運算', link: '/zh-hk/elective/2a-databases/sql/set-ops' },
        { text: '2.11 視圖', link: '/zh-hk/elective/2a-databases/sql/views' }
      ]
    },
    {
      text: '3 · 資料庫設計方法',
      collapsed: true,
      items: [
        { text: '章節概覽', link: '/zh-hk/elective/2a-databases/design/' },
        { text: '3.1 ER 圖', link: '/zh-hk/elective/2a-databases/design/er-diagrams' },
        { text: '3.2 基數與參與', link: '/zh-hk/elective/2a-databases/design/cardinality' },
        { text: '3.3 範式化至 3NF', link: '/zh-hk/elective/2a-databases/design/normalisation' },
        { text: '3.4 反範式化', link: '/zh-hk/elective/2a-databases/design/denormalisation' },
        { text: '3.5 ER → 表', link: '/zh-hk/elective/2a-databases/design/er-to-tables' },
        { text: '3.6 訪問權限與隱私', link: '/zh-hk/elective/2a-databases/design/access-rights' }
      ]
    }
  ]
}

const elective2BSidebar = {
  text: '選修 2B · 網絡應用開發',
  collapsed: false,
  items: [
    { text: '選修總覽', link: '/zh-hk/elective/2b-web/' },
    {
      text: '1 · 網絡服務與實施',
      collapsed: true,
      items: [
        { text: '章節概覽', link: '/zh-hk/elective/2b-web/network/' },
        { text: '1.1 客户端-服務器模型', link: '/zh-hk/elective/2b-web/network/client-server' },
        { text: '1.2 HTTP 請求/響應', link: '/zh-hk/elective/2b-web/network/http-request' },
        { text: '1.3 網絡服務器', link: '/zh-hk/elective/2b-web/network/servers' },
        { text: '1.4 Ethernet/Wi-Fi 設置', link: '/zh-hk/elective/2b-web/network/setup' },
        { text: '1.5 文件共享與權限', link: '/zh-hk/elective/2b-web/network/sharing' }
      ]
    },
    {
      text: '2 · 網頁編寫',
      collapsed: true,
      items: [
        { text: '章節概覽', link: '/zh-hk/elective/2b-web/authoring/' },
        { text: '2.1 HTML 深入', link: '/zh-hk/elective/2b-web/authoring/html-deep' },
        { text: '2.2 CSS 一致樣式', link: '/zh-hk/elective/2b-web/authoring/css' },
        { text: '2.3 發佈選項', link: '/zh-hk/elective/2b-web/authoring/publishing' }
      ]
    },
    {
      text: '3 · 網頁編程與應用',
      collapsed: true,
      items: [
        { text: '章節概覽', link: '/zh-hk/elective/2b-web/programming/' },
        { text: '3.1 客户端 vs 服務器端', link: '/zh-hk/elective/2b-web/programming/client-vs-server' },
        { text: '3.2 JavaScript 基礎', link: '/zh-hk/elective/2b-web/programming/javascript' },
        { text: '3.3 PHP 基礎', link: '/zh-hk/elective/2b-web/programming/php' },
        { text: '3.4 表單與校驗', link: '/zh-hk/elective/2b-web/programming/forms' },
        { text: '3.5 PDO 資料庫', link: '/zh-hk/elective/2b-web/programming/php-database' },
        { text: '3.6 Cookie 與 Session', link: '/zh-hk/elective/2b-web/programming/cookies-sessions' },
        { text: '3.7 構建簡單 Web 應用', link: '/zh-hk/elective/2b-web/programming/simple-app' }
      ]
    }
  ]
}

const elective2CSidebar = {
  text: '選修 2C · 算法與編程',
  collapsed: false,
  items: [
    { text: '選修總覽', link: '/zh-hk/elective/2c-algorithm/' },
    {
      text: '1 · 編程',
      collapsed: true,
      items: [
        { text: '章節概覽', link: '/zh-hk/elective/2c-algorithm/programming/' },
        { text: '1.1 資料類型 (深入)', link: '/zh-hk/elective/2c-algorithm/programming/data-types' },
        { text: '1.2 嵌套循環與二維列表', link: '/zh-hk/elective/2c-algorithm/programming/nested-loops' },
        { text: '1.3 子程序與參數', link: '/zh-hk/elective/2c-algorithm/programming/sub-programs' },
        { text: '1.4 文件處理', link: '/zh-hk/elective/2c-algorithm/programming/file-handling' },
        { text: '1.5 線性與二分查找', link: '/zh-hk/elective/2c-algorithm/programming/searching' },
        { text: '1.6 排序算法', link: '/zh-hk/elective/2c-algorithm/programming/sorting' },
        { text: '1.7 合併與計數', link: '/zh-hk/elective/2c-algorithm/programming/merging' },
        { text: '1.8 堆疊 (Stack)', link: '/zh-hk/elective/2c-algorithm/programming/stack' },
        { text: '1.9 佇列 (Queue)', link: '/zh-hk/elective/2c-algorithm/programming/queue' },
        { text: '1.10 鏈表', link: '/zh-hk/elective/2c-algorithm/programming/linked-list' },
        { text: '1.11 測試與調試', link: '/zh-hk/elective/2c-algorithm/programming/testing-debug' }
      ]
    },
    {
      text: '2 · 實生活編程',
      collapsed: true,
      items: [
        { text: '章節概覽', link: '/zh-hk/elective/2c-algorithm/real-life/' },
        { text: '2.1 傳感器與裝置', link: '/zh-hk/elective/2c-algorithm/real-life/sensors' },
        { text: '2.2 事件驅動編程', link: '/zh-hk/elective/2c-algorithm/real-life/event-driven' },
        { text: '2.3 擴展模塊/庫', link: '/zh-hk/elective/2c-algorithm/real-life/modules' }
      ]
    }
  ]
}

export const zhHkConfig: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link?: string } = {
  label: '繁體中文',
  lang: 'zh-HK',
  description: '香港中學文憑試 ICT 課程的完整學習、複習與校本評核指南。',
  themeConfig: {
    nav: [
      { text: '首頁', link: '/zh-hk/' },
      {
        text: '必修部分 (卷一)',
        items: [
          { text: '總覽', link: '/zh-hk/compulsory/' },
          { text: 'A · 資訊處理', link: '/zh-hk/compulsory/module-a/' },
          { text: 'B · 電腦系統基礎', link: '/zh-hk/compulsory/module-b/' },
          { text: 'C · 互聯網及其應用', link: '/zh-hk/compulsory/module-c/' },
          { text: 'D · 計算思維與編程', link: '/zh-hk/compulsory/module-d/' },
          { text: 'E · 社會影響', link: '/zh-hk/compulsory/module-e/' }
        ]
      },
      {
        text: '選修部分 (卷二)',
        items: [
          { text: '總覽', link: '/zh-hk/elective/' },
          { text: '2A · 資料庫', link: '/zh-hk/elective/2a-databases/' },
          { text: '2B · 網絡應用開發', link: '/zh-hk/elective/2b-web/' },
          { text: '2C · 算法與編程', link: '/zh-hk/elective/2c-algorithm/' }
        ]
      },
      { text: '校本評核', link: '/zh-hk/sba/' },
      { text: '學習路線', link: '/zh-hk/study-plan/' },
      { text: '應試策略', link: '/zh-hk/exam-tips/' },
      { text: '資源', link: '/zh-hk/resources/' }
    ],
    sidebar: {
      '/zh-hk/compulsory/': [
        { text: '必修部分', items: [{ text: '總覽', link: '/zh-hk/compulsory/' }] },
        moduleASidebar, moduleBSidebar, moduleCSidebar, moduleDSidebar, moduleESidebar
      ],
      '/zh-hk/elective/': [
        { text: '卷二選修部分', items: [{ text: '總覽', link: '/zh-hk/elective/' }] },
        elective2ASidebar, elective2BSidebar, elective2CSidebar
      ],
      '/zh-hk/sba/': [
        {
          text: '校本評核',
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
            { text: '術語表', link: '/zh-hk/resources/glossary' }
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
      copyright: 'Copyright © 2024-present HKDSE ICT Hub'
    },
    docFooter: { prev: '上一頁', next: '下一頁' },
    outline: { level: [2, 3], label: '本頁內容' },
    lastUpdated: { text: '最後更新' },
    darkModeSwitchLabel: '主題',
    sidebarMenuLabel: '選單',
    returnToTopLabel: '回到頂部',
    langMenuLabel: '語言'
  }
}
