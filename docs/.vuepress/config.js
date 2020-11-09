module.exports = {
    base: '/blog/',
    title: 'Mr-z1207的个人博客',
    description: '随笔、随想、随心',
    themeConfig: {
        // 导航栏配置
        nav:[
            {text:'指南', link:'/guide/introduce' },
            // {text:'生活', link:'/life/life1' },
            // { text: '学习',
            //     items: [
            //         { text: '数学', link: '/study/math/math_01' },
            //         { text: '英语', link: '/study/english/english_01' },
            //     ]
            // },
        ],
        // 侧边栏设置
        sidebar: {
            '/guide/': [
                {
                    title: '指南',
                    collapsable: false,
                    children: [
                        { title: '介绍', path: '/guide/introduce' },
                    ]
                }
            ],
            // '/life/': [
            //     {
            //         title: '生活',
            //         collapsable: false,
            //         children: [
            //             { title: '生活测试01', path: '/life/life1' },
            //             { title: '生活测试02', path: '/life/life2' },
            //         ]
            //     }
            // ],
            // '/study/english/': [
            //     {
            //         title: '英语',
            //         collapsable: false,
            //         children: [
            //             { title: '第一节', path: '/study/english/english_01' },
            //             { title: '第二节', path: '/study/english/english_02' },
            //         ]
            //     }
            // ],
            // '/study/math/': [
            //     {
            //         title: '数学',
            //         collapsable: false,
            //         children: [
            //             { title: '第一节', path: '/study/math/math_01' },
            //             { title: '第二节', path: '/study/math/math_02' },
            //         ]
            //     }
            // ],
        },
        sidebarDepth: 2,//左侧导航显示的层级
        lastUpdated: 'Last Updated'
    }
}