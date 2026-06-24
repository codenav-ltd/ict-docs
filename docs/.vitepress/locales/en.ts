import type { LocaleSpecificConfig, DefaultTheme } from 'vitepress'

const moduleASidebar = {
  text: 'Module A · Information Processing',
  collapsed: false,
  items: [
    { text: 'Module overview', link: '/en/compulsory/module-a/' },
    {
      text: '1 · Introduction to Information Processing',
      collapsed: true,
      items: [
        { text: 'Chapter overview', link: '/en/compulsory/module-a/introduction/' },
        { text: '1.1 What is an information system', link: '/en/compulsory/module-a/introduction/information-system' },
        { text: '1.2 Data vs information', link: '/en/compulsory/module-a/introduction/data-vs-information' },
        { text: '1.3 Information processes', link: '/en/compulsory/module-a/introduction/information-processes' },
        { text: '1.4 Information Age & literacy', link: '/en/compulsory/module-a/introduction/information-age' }
      ]
    },
    {
      text: '2 · Data Organisation & Control',
      collapsed: true,
      items: [
        { text: 'Chapter overview', link: '/en/compulsory/module-a/data-organisation/' },
        { text: '2.1 Hierarchy of data', link: '/en/compulsory/module-a/data-organisation/hierarchy' },
        { text: '2.2 Sequential vs direct access', link: '/en/compulsory/module-a/data-organisation/access-methods' },
        { text: '2.3 Data control: validation & verification', link: '/en/compulsory/module-a/data-organisation/data-control' }
      ]
    },
    {
      text: '3 · Data Representation',
      collapsed: true,
      items: [
        { text: 'Chapter overview', link: '/en/compulsory/module-a/data-representation/' },
        { text: '3.1 Analog vs digital', link: '/en/compulsory/module-a/data-representation/analog-vs-digital' },
        { text: '3.2 Number systems (binary, hex)', link: '/en/compulsory/module-a/data-representation/number-systems' },
        { text: '3.3 Binary arithmetic & overflow', link: '/en/compulsory/module-a/data-representation/binary-arithmetic' },
        { text: '3.4 Two\u2019s complement', link: '/en/compulsory/module-a/data-representation/twos-complement' },
        { text: '3.5 Character encoding', link: '/en/compulsory/module-a/data-representation/character-encoding' },
        { text: '3.6 Multimedia digitisation', link: '/en/compulsory/module-a/data-representation/multimedia-encoding' },
        { text: '3.7 File formats', link: '/en/compulsory/module-a/data-representation/file-formats' }
      ]
    },
    {
      text: '4 · Data Manipulation & Analysis',
      collapsed: true,
      items: [
        { text: 'Chapter overview', link: '/en/compulsory/module-a/data-manipulation/' },
        { text: '4.1 Spreadsheet basics', link: '/en/compulsory/module-a/data-manipulation/spreadsheet-basics' },
        { text: '4.2 Cell references & functions', link: '/en/compulsory/module-a/data-manipulation/functions-and-formulas' },
        { text: '4.3 Pivot tables & what-if', link: '/en/compulsory/module-a/data-manipulation/pivot-tables' },
        { text: '4.4 Database basics with a DBMS', link: '/en/compulsory/module-a/data-manipulation/database-basics' },
        { text: '4.5 Reading simple SQL', link: '/en/compulsory/module-a/data-manipulation/sql-introduction' }
      ]
    }
  ]
}

const moduleBSidebar = {
  text: 'Module B · Computer System Fundamentals',
  collapsed: false,
  items: [
    { text: 'Module overview', link: '/en/compulsory/module-b/' },
    {
      text: '1 · Basic Machine Organisation',
      collapsed: true,
      items: [
        { text: 'Chapter overview', link: '/en/compulsory/module-b/machine-organisation/' },
        { text: '1.1 CPU architecture', link: '/en/compulsory/module-b/machine-organisation/cpu-architecture' },
        { text: '1.2 Fetch-decode-execute', link: '/en/compulsory/module-b/machine-organisation/fetch-decode-execute' },
        { text: '1.3 Memory types', link: '/en/compulsory/module-b/machine-organisation/memory-types' },
        { text: '1.4 Storage devices', link: '/en/compulsory/module-b/machine-organisation/storage-devices' },
        { text: '1.5 Input / output devices', link: '/en/compulsory/module-b/machine-organisation/io-devices' }
      ]
    },
    {
      text: '2 · System Software',
      collapsed: true,
      items: [
        { text: 'Chapter overview', link: '/en/compulsory/module-b/system-software/' },
        { text: '2.1 Operating systems', link: '/en/compulsory/module-b/system-software/operating-system' },
        { text: '2.2 Utilities & drivers', link: '/en/compulsory/module-b/system-software/utilities-drivers' },
        { text: '2.3 Modes of operation', link: '/en/compulsory/module-b/system-software/operation-modes' }
      ]
    }
  ]
}

const moduleCSidebar = {
  text: 'Module C · Internet & its Applications',
  collapsed: false,
  items: [
    { text: 'Module overview', link: '/en/compulsory/module-c/' },
    {
      text: '1 · Networking & Internet Basics',
      collapsed: true,
      items: [
        { text: 'Chapter overview', link: '/en/compulsory/module-c/networking/' },
        { text: '1.1 LAN vs WAN', link: '/en/compulsory/module-c/networking/lan-vs-wan' },
        { text: '1.2 IPv4 & IPv6 addressing', link: '/en/compulsory/module-c/networking/ip-addressing' },
        { text: '1.3 Network hardware', link: '/en/compulsory/module-c/networking/network-hardware' },
        { text: '1.4 Transmission media', link: '/en/compulsory/module-c/networking/transmission-media' },
        { text: '1.5 TCP/IP basics', link: '/en/compulsory/module-c/networking/tcp-ip' }
      ]
    },
    {
      text: '2 · Internet Services & Applications',
      collapsed: true,
      items: [
        { text: 'Chapter overview', link: '/en/compulsory/module-c/services/' },
        { text: '2.1 URL & DNS', link: '/en/compulsory/module-c/services/url-dns' },
        { text: '2.2 HTTP vs HTTPS', link: '/en/compulsory/module-c/services/http-vs-https' },
        { text: '2.3 Web file formats', link: '/en/compulsory/module-c/services/web-formats' },
        { text: '2.4 Streaming & cloud', link: '/en/compulsory/module-c/services/streaming' }
      ]
    },
    {
      text: '3 · Elementary Web Authoring',
      collapsed: true,
      items: [
        { text: 'Chapter overview', link: '/en/compulsory/module-c/web-authoring/' },
        { text: '3.1 HTML basics', link: '/en/compulsory/module-c/web-authoring/html-basics' },
        { text: '3.2 Publishing on the Web', link: '/en/compulsory/module-c/web-authoring/web-publishing' }
      ]
    },
    {
      text: '4 · Threats & Security',
      collapsed: true,
      items: [
        { text: 'Chapter overview', link: '/en/compulsory/module-c/security/' },
        { text: '4.1 Threat catalogue', link: '/en/compulsory/module-c/security/threats' },
        { text: '4.2 Defence measures', link: '/en/compulsory/module-c/security/defences' },
        { text: '4.3 Encryption basics', link: '/en/compulsory/module-c/security/encryption' },
        { text: '4.4 Authentication & e-commerce', link: '/en/compulsory/module-c/security/authentication' }
      ]
    }
  ]
}

const moduleDSidebar = {
  text: 'Module D · Computational Thinking & Programming',
  collapsed: false,
  items: [
    { text: 'Module overview', link: '/en/compulsory/module-d/' },
    {
      text: '1 · Problem-Formulation & Analysis',
      collapsed: true,
      items: [
        { text: 'Chapter overview', link: '/en/compulsory/module-d/problem-analysis/' },
        { text: '1.1 Defining a problem (IPO)', link: '/en/compulsory/module-d/problem-analysis/defining-problems' },
        { text: '1.2 Decomposition', link: '/en/compulsory/module-d/problem-analysis/decomposition' },
        { text: '1.3 Pattern recognition', link: '/en/compulsory/module-d/problem-analysis/pattern-recognition' }
      ]
    },
    {
      text: '2 · Algorithm Design',
      collapsed: true,
      items: [
        { text: 'Chapter overview', link: '/en/compulsory/module-d/algorithm-design/' },
        { text: '2.1 Pseudocode', link: '/en/compulsory/module-d/algorithm-design/pseudocode' },
        { text: '2.2 Flowcharts', link: '/en/compulsory/module-d/algorithm-design/flowcharts' },
        { text: '2.3 Data types & structures', link: '/en/compulsory/module-d/algorithm-design/data-types' },
        { text: '2.4 Control structures', link: '/en/compulsory/module-d/algorithm-design/control-structures' },
        { text: '2.5 Trace tables', link: '/en/compulsory/module-d/algorithm-design/trace-tables' },
        { text: '2.6 Modularity', link: '/en/compulsory/module-d/algorithm-design/modularity' }
      ]
    },
    {
      text: '3 · Program Development (Python)',
      collapsed: true,
      items: [
        { text: 'Chapter overview', link: '/en/compulsory/module-d/programming/' },
        { text: '3.1 Python setup', link: '/en/compulsory/module-d/programming/python-setup' },
        { text: '3.2 Variables & operators', link: '/en/compulsory/module-d/programming/variables-operators' },
        { text: '3.3 Input / output', link: '/en/compulsory/module-d/programming/input-output' },
        { text: '3.4 Selection (if / elif / else)', link: '/en/compulsory/module-d/programming/selection' },
        { text: '3.5 Iteration (for, while)', link: '/en/compulsory/module-d/programming/iteration' },
        { text: '3.6 Lists (1D arrays)', link: '/en/compulsory/module-d/programming/arrays-lists' },
        { text: '3.7 Strings', link: '/en/compulsory/module-d/programming/strings' },
        { text: '3.8 Standard algorithms', link: '/en/compulsory/module-d/programming/standard-algorithms' }
      ]
    },
    {
      text: '4 · Program Testing & Debugging',
      collapsed: true,
      items: [
        { text: 'Chapter overview', link: '/en/compulsory/module-d/testing/' },
        { text: '4.1 Designing test data', link: '/en/compulsory/module-d/testing/test-data' },
        { text: '4.2 Types of errors', link: '/en/compulsory/module-d/testing/error-types' },
        { text: '4.3 Debugging techniques', link: '/en/compulsory/module-d/testing/debugging' }
      ]
    }
  ]
}

const moduleESidebar = {
  text: 'Module E · Social Implications',
  collapsed: false,
  items: [
    { text: 'Module overview', link: '/en/compulsory/module-e/' },
    {
      text: '1 · Technological Innovations',
      collapsed: true,
      items: [
        { text: 'Chapter overview', link: '/en/compulsory/module-e/innovations/' },
        { text: '1.1 AI & data science', link: '/en/compulsory/module-e/innovations/ai-data-science' },
        { text: '1.2 3D printing', link: '/en/compulsory/module-e/innovations/3d-printing' },
        { text: '1.3 AR & VR', link: '/en/compulsory/module-e/innovations/ar-vr' }
      ]
    },
    {
      text: '2 · Health & Ethical Issues',
      collapsed: true,
      items: [
        { text: 'Chapter overview', link: '/en/compulsory/module-e/health-ethics/' },
        { text: '2.1 Health hazards', link: '/en/compulsory/module-e/health-ethics/health-hazards' },
        { text: '2.2 Ergonomics', link: '/en/compulsory/module-e/health-ethics/ergonomics' },
        { text: '2.3 Digital divide', link: '/en/compulsory/module-e/health-ethics/digital-divide' },
        { text: '2.4 Ethics in ICT', link: '/en/compulsory/module-e/health-ethics/ethics' }
      ]
    },
    {
      text: '3 · Intellectual Property',
      collapsed: true,
      items: [
        { text: 'Chapter overview', link: '/en/compulsory/module-e/intellectual-property/' },
        { text: '3.1 Copyright basics', link: '/en/compulsory/module-e/intellectual-property/copyright' },
        { text: '3.2 Licensing schemes', link: '/en/compulsory/module-e/intellectual-property/licensing' },
        { text: '3.3 Piracy & enforcement', link: '/en/compulsory/module-e/intellectual-property/piracy' }
      ]
    }
  ]
}

const elective2ASidebar = {
  text: 'Elective 2A · Databases',
  collapsed: false,
  items: [
    { text: 'Elective overview', link: '/en/elective/2a-databases/' },
    {
      text: '1 · Relational Database Concepts',
      collapsed: true,
      items: [
        { text: 'Chapter overview', link: '/en/elective/2a-databases/concepts/' },
        { text: '1.1 Tables, rows, attributes', link: '/en/elective/2a-databases/concepts/tables' },
        { text: '1.2 Keys (primary, foreign, candidate)', link: '/en/elective/2a-databases/concepts/keys' },
        { text: '1.3 Integrity rules', link: '/en/elective/2a-databases/concepts/integrity' },
        { text: '1.4 Indexes & rollback', link: '/en/elective/2a-databases/concepts/indexes-rollback' }
      ]
    },
    {
      text: '2 · SQL',
      collapsed: true,
      items: [
        { text: 'Chapter overview', link: '/en/elective/2a-databases/sql/' },
        { text: '2.1 CREATE, ALTER, DROP', link: '/en/elective/2a-databases/sql/ddl' },
        { text: '2.2 INSERT, UPDATE, DELETE', link: '/en/elective/2a-databases/sql/dml' },
        { text: '2.3 SELECT & WHERE', link: '/en/elective/2a-databases/sql/select' },
        { text: '2.4 Operators & LIKE / IN', link: '/en/elective/2a-databases/sql/operators' },
        { text: '2.5 ORDER BY & DISTINCT', link: '/en/elective/2a-databases/sql/ordering' },
        { text: '2.6 GROUP BY & HAVING', link: '/en/elective/2a-databases/sql/group-by' },
        { text: '2.7 Aggregates & built-in functions', link: '/en/elective/2a-databases/sql/functions' },
        { text: '2.8 JOIN (up to 3 tables)', link: '/en/elective/2a-databases/sql/joins' },
        { text: '2.9 Sub-queries (1 level)', link: '/en/elective/2a-databases/sql/subqueries' },
        { text: '2.10 Set operations (UNION etc.)', link: '/en/elective/2a-databases/sql/set-ops' },
        { text: '2.11 Views', link: '/en/elective/2a-databases/sql/views' }
      ]
    },
    {
      text: '3 · Database Design Methodology',
      collapsed: true,
      items: [
        { text: 'Chapter overview', link: '/en/elective/2a-databases/design/' },
        { text: '3.1 ER diagrams', link: '/en/elective/2a-databases/design/er-diagrams' },
        { text: '3.2 Cardinality & participation', link: '/en/elective/2a-databases/design/cardinality' },
        { text: '3.3 Normalisation to 3NF', link: '/en/elective/2a-databases/design/normalisation' },
        { text: '3.4 Denormalisation', link: '/en/elective/2a-databases/design/denormalisation' },
        { text: '3.5 ER → tables', link: '/en/elective/2a-databases/design/er-to-tables' },
        { text: '3.6 Access rights & privacy', link: '/en/elective/2a-databases/design/access-rights' }
      ]
    }
  ]
}

const elective2BSidebar = {
  text: 'Elective 2B · Web Application Development',
  collapsed: false,
  items: [
    { text: 'Elective overview', link: '/en/elective/2b-web/' },
    {
      text: '1 · Network Services & Implementation',
      collapsed: true,
      items: [
        { text: 'Chapter overview', link: '/en/elective/2b-web/network/' },
        { text: '1.1 Client–server model', link: '/en/elective/2b-web/network/client-server' },
        { text: '1.2 HTTP request / response', link: '/en/elective/2b-web/network/http-request' },
        { text: '1.3 Network servers in practice', link: '/en/elective/2b-web/network/servers' },
        { text: '1.4 Setting up Ethernet / Wi-Fi', link: '/en/elective/2b-web/network/setup' },
        { text: '1.5 File sharing & permissions', link: '/en/elective/2b-web/network/sharing' }
      ]
    },
    {
      text: '2 · Web Authoring',
      collapsed: true,
      items: [
        { text: 'Chapter overview', link: '/en/elective/2b-web/authoring/' },
        { text: '2.1 HTML deep dive', link: '/en/elective/2b-web/authoring/html-deep' },
        { text: '2.2 CSS for consistent style', link: '/en/elective/2b-web/authoring/css' },
        { text: '2.3 Publishing options', link: '/en/elective/2b-web/authoring/publishing' }
      ]
    },
    {
      text: '3 · Web Programming & Applications',
      collapsed: true,
      items: [
        { text: 'Chapter overview', link: '/en/elective/2b-web/programming/' },
        { text: '3.1 Client-side vs server-side', link: '/en/elective/2b-web/programming/client-vs-server' },
        { text: '3.2 JavaScript essentials', link: '/en/elective/2b-web/programming/javascript' },
        { text: '3.3 PHP essentials', link: '/en/elective/2b-web/programming/php' },
        { text: '3.4 Form handling & validation', link: '/en/elective/2b-web/programming/forms' },
        { text: '3.5 Database from PHP (PDO)', link: '/en/elective/2b-web/programming/php-database' },
        { text: '3.6 Cookies & sessions', link: '/en/elective/2b-web/programming/cookies-sessions' },
        { text: '3.7 Building a simple web app', link: '/en/elective/2b-web/programming/simple-app' }
      ]
    }
  ]
}

const elective2CSidebar = {
  text: 'Elective 2C · Algorithm & Programming',
  collapsed: false,
  items: [
    { text: 'Elective overview', link: '/en/elective/2c-algorithm/' },
    {
      text: '1 · Programming',
      collapsed: true,
      items: [
        { text: 'Chapter overview', link: '/en/elective/2c-algorithm/programming/' },
        { text: '1.1 Data types beyond Module D', link: '/en/elective/2c-algorithm/programming/data-types' },
        { text: '1.2 Nested loops & 2D lists', link: '/en/elective/2c-algorithm/programming/nested-loops' },
        { text: '1.3 Sub-programs & parameters', link: '/en/elective/2c-algorithm/programming/sub-programs' },
        { text: '1.4 File handling', link: '/en/elective/2c-algorithm/programming/file-handling' },
        { text: '1.5 Linear & binary search', link: '/en/elective/2c-algorithm/programming/searching' },
        { text: '1.6 Sorting algorithms', link: '/en/elective/2c-algorithm/programming/sorting' },
        { text: '1.7 Merging & counting', link: '/en/elective/2c-algorithm/programming/merging' },
        { text: '1.8 Stack', link: '/en/elective/2c-algorithm/programming/stack' },
        { text: '1.9 Queue', link: '/en/elective/2c-algorithm/programming/queue' },
        { text: '1.10 Linked list', link: '/en/elective/2c-algorithm/programming/linked-list' },
        { text: '1.11 Testing & debugging', link: '/en/elective/2c-algorithm/programming/testing-debug' }
      ]
    },
    {
      text: '2 · Programming in Real Life',
      collapsed: true,
      items: [
        { text: 'Chapter overview', link: '/en/elective/2c-algorithm/real-life/' },
        { text: '2.1 Sensors & devices', link: '/en/elective/2c-algorithm/real-life/sensors' },
        { text: '2.2 Event-driven programs', link: '/en/elective/2c-algorithm/real-life/event-driven' },
        { text: '2.3 Extended modules', link: '/en/elective/2c-algorithm/real-life/modules' }
      ]
    }
  ]
}

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link?: string } = {
  label: 'English',
  lang: 'en-US',
  description: 'The complete HKDSE Information and Communication Technology guide for students and teachers.',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Compulsory (Paper 1)',
        items: [
          { text: 'Overview', link: '/en/compulsory/' },
          { text: 'A · Information Processing', link: '/en/compulsory/module-a/' },
          { text: 'B · Computer System Fundamentals', link: '/en/compulsory/module-b/' },
          { text: 'C · Internet & its Applications', link: '/en/compulsory/module-c/' },
          { text: 'D · Computational Thinking & Programming', link: '/en/compulsory/module-d/' },
          { text: 'E · Social Implications', link: '/en/compulsory/module-e/' }
        ]
      },
      {
        text: 'Electives (Paper 2)',
        items: [
          { text: 'Overview', link: '/en/elective/' },
          { text: '2A · Databases', link: '/en/elective/2a-databases/' },
          { text: '2B · Web Application Development', link: '/en/elective/2b-web/' },
          { text: '2C · Algorithm & Programming', link: '/en/elective/2c-algorithm/' }
        ]
      },
      { text: 'SBA', link: '/en/sba/' },
      { text: 'Study Plan', link: '/en/study-plan/' },
      { text: 'Exam Tips', link: '/en/exam-tips/' },
      { text: 'Resources', link: '/en/resources/' }
    ],
    sidebar: {
      '/en/compulsory/': [
        { text: 'Compulsory Part', items: [{ text: 'Overview', link: '/en/compulsory/' }] },
        moduleASidebar, moduleBSidebar, moduleCSidebar, moduleDSidebar, moduleESidebar
      ],
      '/en/elective/': [
        { text: 'Paper 2 Electives', items: [{ text: 'Overview', link: '/en/elective/' }] },
        elective2ASidebar, elective2BSidebar, elective2CSidebar
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
