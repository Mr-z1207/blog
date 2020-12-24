module.exports = {
    base: '',
    title: 'Mr-z1207的个人博客',
    description: 'Mr-z1207的个人博客，随笔、随想、随心',
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
            { text: '408', item:[
                { '数据结构': '/408/数据结构/001'},
                { '组成原理': '/408/组成原理/001'},
                { '操作系统': '/408/操作系统/001'},
                { '网络技术': '/408/网络技术/001'},
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
                        { title: '网盘搜索', path: '/life/001' },
                        { title: 'Package Control又挂了', path: '/life/002' },
                        { title: 'vcode终端报错', path: '/life/003' },
                    ]
                }
            ],
        },
        sidebarDepth: 2,//左侧导航显示的层级
        lastUpdated: 'Last Updated'
    }
}