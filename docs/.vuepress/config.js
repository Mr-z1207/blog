module.exports = {
    base: '',
    title: 'Mr1207的个人博客',
    description: 'Mr1207的个人博客，随笔、随想、随心',
    markdown: {
        // 显示行号
        lineNumbers: true
    },
    plugins: [
        // 返回顶部插件
        '@vuepress/back-to-top',
        // katex数学公式插件
        '@maginapp/vuepress-plugin-katex',
        {
          delimiters: 'dollars'  // 格式符号 $
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
            {text: '学习杂记', items: [
                { text: '材科基', link: '/Study/Materials/001' },
                { text: '数学必背公式', link: '/Study/Math/001' },
                { text: '408', items: [
                    { text: '数据结构', link: '/Study/408/数据结构/001'},
                    { text: '组成原理', link: '/Study/408/组成原理/001'},
                    { text: '操作系统', link: '/Study/408/操作系统/001'},
                    { text: '网络技术', link: '/Study/408/网络技术/001'},
                ]}
            ] },
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
            '/Study/Materials/': [
                {
                    title: '材科基',
                    collapsable: false,
                    children: [
                        // { title: '考点总结', path: '/Study/Materials/000' },
                        { title: '第一章 · 引言', path: '/Study/Materials/001' },
                        { title: '第二章 · 晶体结构', path: '/Study/Materials/002' },
                        { title: '第三章 · 晶体结构缺陷', path: '/Study/Materials/003' },
                        { title: '第四章 · 非晶态结构与性质', path: '/Study/Materials/004' },
                        { title: '第五章 · 表面结构与性质', path: '/Study/Materials/005' },
                        { title: '第六章 · 相平衡和相图', path: '/Study/Materials/006' },
                        { title: '第七章 · 扩散', path: '/Study/Materials/007' },
                        { title: '第八章 · 材料中的相变', path: '/Study/Materials/008' },
                        { title: '第九章 · 材料制备中的固态反应', path: '/Study/Materials/009' },
                        { title: '第十章 · 烧结', path: '/Study/Materials/010' },
                        { title: '第十一章 · 腐蚀与氧化', path: '/Study/Materials/011' },
                        { title: '第十二章 · 疲劳与断裂', path: '/Study/Materials/012' },
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
                        { title: 'u盘文件或目录损坏且无法读取', path: '/life/003' },
                    ]
                }
            ],
            '/Study/408/数据结构/': [
                {
                    title: '数据结构',
                    collapsable: false,
                    children: [
                        { title: '第一章 · 绪论', path: '/Study/408/数据结构/001' },
                        { title: '第二章 · 线性表', path: '/Study/408/数据结构/002' },
                        { title: '第三章 · 栈和队列', path: '/Study/408/数据结构/003' }
                    ]
                }
            ],
            '/Study/Math/': [
                {
                    title: '考研数学必背公式',
                    collapsable: false,
                    children: [
                        { title: '常用中学公式', path: '/Study/Math/001' },
                        { title: '极限', path: '/Study/Math/002' },
                        { title: '微分', path: '/Study/Math/003' },
                        { title: '积分', path: '/Study/Math/004' },
                    ]
                }
            ],
        },
        sidebarDepth: 2,//左侧导航显示的层级
        lastUpdated: 'Last Updated', //最后编辑时间

        // 仓库链接
        repo: 'Mr-z1207/blog',
        repoLabel: '查看源码',

        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '如有错误请帮助我们改善此页面！'
    }
}