module.exports = {
    base: '/blog/',
    title: 'Mr-z1207的个人博客',
    description: 'Mr-z1207的个人博客，随笔、随想、随心',
    themeConfig: {
        // 导航栏配置
        nav:[
            {text:'简介', link:'/guide/' },
            {text:'生活', link:'/life/01_网盘搜索' },
            // { text: '学习',
            //     items: [
            //         { text: '数学', link: '/study/math/math_01' },
            //         { text: '英语', link: '/study/english/english_01' },
            //     ]
            // },
        ],
        // 侧边栏设置
        sidebar: {
            '/life/': [
                {
                    title: '生活',
                    collapsable: false,
                    children: [
                        { title: '网盘搜索', path: '/life/01_网盘搜索' },
                    ]
                }
            ],
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