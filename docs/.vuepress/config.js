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
            {text:'简介', link:'/guide/' },
            {text:'生活杂记', link:'/life/01_网盘搜索' },
            { text: '学习',
                items: [
                    { text: 'Java', link: '/study/Java/001' },
                    // { text: '英语', link: '/study/english/english_01' },
                ]
            },
        ],
        // 侧边栏设置
        sidebar: {
            '/life/': [
                {
                    title: '生活',
                    collapsable: false,
                    children: [
                        { title: '网盘搜索', path: '/life/01_网盘搜索' },
                        { title: 'Package Control又挂了', path: '/life/02_PackageControl' },
                        { title: 'vcode终端报错', path: '/life/03_vcode终端报错' },
                    ]
                }
            ],
            '/study/Java/': [
                {
                    title: 'Java',
                    collapsable: false,
                    children: [
                        { title: '初识Java', path: '/study/Java/001' },
                        { title: '第一个Java程序', path: '/study/Java/002' },
                    ]
                }
            ],
        },
        sidebarDepth: 2,//左侧导航显示的层级
        lastUpdated: 'Last Updated'
    }
}