module.exports = {
    base: '',
    title: 'Mr1207的个人博客',
    description: 'Mr1207的个人博客，随笔、随想、随心',
    markdown: {
        // 显示行号
        lineNumbers: true
    },
    plugins: [
        '@vuepress/back-to-top',              // 返回顶部插件

        '@maginapp/vuepress-plugin-katex',    // 数学公式
        {
          delimiters: 'dollars'
        }
    ],
    head: [
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `./favicon.ico` }]
    ],
    themeConfig: {
        // 导航栏配置
        nav:[
            { text:'简介', link:'/guide/' },
            { text: 'Web', link: '/Web/001' },
            { text: 'Python', link: '/Python/001' },
            { text: 'Java', link: '/Java/001' },
            { text: 'Linux', link: '/Linux/001' },
            { text: '408', items:[
                { text: '数据结构', link: '/408/数据结构/001'},
                { text: '组成原理', link: '/408/组成原理/001'},
                { text: '操作系统', link: '/408/操作系统/001'},
                { text: '网络技术', link: '/408/网络技术/001'},
            ]},
            {text:'生活杂记', link:'/life/001' },
        ],
        // 侧边栏设置
        sidebar: {
            '/Web/': [
                {
                    title: 'Web',
                    collapsable: false,
                    children: [
                        
                    ]
                }
            ],
            '/Python/': [
                {
                    title: 'Python',
                    collapsable: false,
                    children: [
                        
                    ]
                }
            ],
            '/Java/': [
                {
                    title: 'Java',
                    collapsable: false,
                    children: [
                        { title: '初识Java', path: '/Java/001' },
                        { title: '第一个Java程序', path: '/Java/002' },
                    ]
                }
            ],
            '/Linux/': [
                {
                    title: 'Linux',
                    collapsable: false,
                    children: [
                        { title: 'Ubuntu的安装汉化', path: '/Linux/001' },
                        { title: 'ContOS 7 的安装', path: '/Linux/002' },
                    ]
                }
            ],
            '/life/': [
                {
                    title: '生活',
                    collapsable: false,
                    children: [
                        { title: 'Package Control又挂了', path: '/life/001' },
                        { title: 'vcode终端报错', path: '/life/002' },
                    ]
                }
            ],
            '/408/数据结构/': [
                {
                    title: '数据结构',
                    collapsable: false,
                    children: [
                        { title: '第一章 · 绪论', path: '/408/数据结构/001' },
                    ]
                }
            ],
        },
        sidebarDepth: 2,//左侧导航显示的层级
        lastUpdated: 'Last Updated'
    }
}