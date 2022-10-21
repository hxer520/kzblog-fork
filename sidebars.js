/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  skill: [
    'skill/introduction',
    {
      label: 'Docusaurus2 主题魔改',
      type: 'category',
      link: {
        type: 'doc',
        id: 'skill/docusaurus/docusaurus-guides'
      },
      items: [
        'skill/docusaurus/docusaurus-config',
        'skill/docusaurus/docusaurus-style',
        'skill/docusaurus/docusaurus-component',
        'skill/docusaurus/docusaurus-plugin',
        'skill/docusaurus/docusaurus-search',
        'skill/docusaurus/docusaurus-comment',
      ],
    },
    {
      label: '代码规范',
      type: 'category',
      link: {
        type: 'doc',
        id: 'skill/code-specification/code-specification-guides'
      },
      items: [
        'skill/code-specification/eslint',
        'skill/code-specification/prettier',
        'skill/code-specification/stylelint',
        'skill/code-specification/editorconfig',
        'skill/code-specification/husky',
        'skill/code-specification/npmrc',
      ],
    },
    {
      label: 'Vue',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'skill/vue/vue-reactive-data-object',
        'skill/vue/vue-reactive-data-array',
        'skill/vue/vue-reactive-data-basic-type',
        'skill/vue/pinia',
      ],
    },
    {
      label: 'React',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/react',
        },
      ],
    },
    {
      label: 'Web',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/web',
        },
      ],
    },
    {
      label: 'JavaScript',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/js',
        },
      ],
    },
    {
      label: 'Node',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/node',
        },
      ],
    },
    {
      label: 'Css',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/css',
        },
      ],
    },
    {
      label: 'Java',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/java',
        },
      ],
    },
    {
      label: 'Python',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/python',
        },
      ],
    },
    {
      label: 'Go',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'skill/go/go-environment-install',
        'skill/go/go-json-usage',
        'skill/go/go-send-http-request',
        'skill/go/go-call-js',
        'skill/go/go-concurrent',
        'skill/go/try-gin-framework'
      ],
    },
    {
      label: 'Git',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/git',
        },
      ],
    },
    {
      label: '算法',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/algorithm',
        },
      ],
    },
    {
      label: '逆向',
      type: 'category',
      link: {
        title: '逆向笔记',
        description: 'Web逆向与安卓逆向笔记',
        type: 'generated-index',
        keywords: ['reverse', 'web', 'android', 'frida'],
      },
      items: [
        {
          label: '安卓',
          type: 'category',
          link: {
            type: 'generated-index',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/reverse/android',
            },
          ],
        },
        {
          label: 'Web',
          type: 'category',
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/reverse/web',
            },
          ],
        },
        {
          label: '密码学',
          type: 'category',
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/reverse/crypto',
            },
          ],
        },
      ],
    },
    {
      label: 'Docker',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/docker',
        },
      ],
    },
    {
      label: '数据库',
      type: 'category',
      link: {
        // title: '',
        // description: '',
        type: 'generated-index',
        keywords: ['database', 'mysql', 'mongodb', 'redis', 'elasticsearch'],
      },
      items: [
        {
          label: 'Mysql',
          type: 'category',
          link: {
            type: 'doc',
            id: 'skill/database/mysql/mysql-note',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/database/mysql',
            },
          ],
        },
        {
          label: 'MongoDB',
          type: 'category',
          link: {
            type: 'doc',
            id: 'skill/database/mongo/mongodb-note',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/database/mongo',
            },
          ],
        },
        {
          label: 'Redis',
          type: 'category',
          link: {
            type: 'doc',
            id: 'skill/database/redis/redis-note',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/database/redis',
            },
          ],
        },
        {
          label: 'Elasticsearch',
          type: 'category',
          link: {
            type: 'doc',
            id: 'skill/database/elasticsearch/elasticsearch-note',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/database/elasticsearch',
            },
          ],
        },
      ],
    },
    {
      label: '杂项',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/other',
        },
      ],
    },
  ],
  tools: [
    'tools/introduction',
    'tools/everything-quick-search-local-files',
    'tools/wappalyzer-recognize-technology',
    'tools/windows-custom-right-click-menu',
    'tools/vscode-config',
    'tools/idea-config',
    'tools/vite-plugin',
    'tools/jetbrains-product-activation-method',
  ]
}

module.exports = sidebars
