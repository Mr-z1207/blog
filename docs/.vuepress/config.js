// 配置文件
//--------------------------------默认生成------------------------------------
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
//--------------------------------导入插件------------------------------------
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { copyCodePlugin } from '@vuepress/plugin-copy-code'
//---------------------------------------------------------------------------


export default defineUserConfig({
  bundler: viteBundler(),
  //--------------------------------导入插件------------------------------------
  plugins: [backToTopPlugin(), copyCodePlugin({})],
  //---------------------------------------------------------------------------

  //-基础配置  配置参考(https://v2.vuepress.vuejs.org/zh/reference/config.html)-
  base: '/blog/', // 部署站点的基础路径。
  lang: 'zh-CN',
  title: 'Mr1207_songの博客',
  description: '这是我的第一个 VuePress 站点',
  //设置 pagePatterns 来避免某个文件被 VuePress 处理
  //添加['!**/README.md']排除README.md
  pagePatterns: ['**/*.md', '!**/README.md', '!.vuepress', '!node_modules'],


  // 默认主题
  theme: defaultTheme({
    // 添加主题配置
    navbar: [
      {
        text:'首页',
        link:'/'
      },
      {
        text:'简介',
        link:'/guide/'
      },
      {
        text:'技术笔记',
        children:[
          {
            text: 'Web',
            link: '/Web/001',
            activeMatch: '^/Web/',
          },
          {
            text: 'Python',
            link: '/Python/001',
            activeMatch: '^/Python/',
          },{
            text: 'Java',
            link: '/Java/001',
            activeMatch: '^/Java/',
          },{
            text: 'Linux',
            link: '/Linux/001',
            activeMatch: '^/Linux/',
          },
        ]
      },
      {
        text: '学习杂记',
        children:[
          {
            text: '考研日语203',
            link: '/Study/Japanese/001',
            activeMatch: '^/Study/Japanese/',
          },
          {
            text: '材科基',
            link: '/Study/Materials/001',
            activeMatch: '^/Study/Materials/',
          },
          {
            text: '数学必背公式',
            link: '/Study/Math/001',
            activeMatch: '^/Study/Math/',
          },
          {
            text: '408',
            children:[
              {text: '数据结构', link: '/Study/408/数据结构/001',activeMatch: '^/Study/408/数据结构/'},
              {text: '组成原理', link: '/Study/408/组成原理/001',activeMatch: '^/Study/408/组成原理/'},
              {text: '操作系统', link: '/Study/408/操作系统/001',activeMatch: '^/Study/408/操作系统/'},
              {text: '网络技术', link: '/Study/408/网络技术/001',activeMatch: '^/Study/408/网络技术/'},
            ]
          }
        ]
      },
      {
        text:'生活杂记',
        link:'/life/001'
      },
    ],

    // 侧边栏数组
    sidebar: {
      '/guide/': 'heading',
      '/Web/': [{
        text: 'Web',
        collapsible: false,
        children: [
          {text: '暂无', link: '/Web/001'}, 
        ]
      }],
      '/Python/': [{
        text: 'Python',
        collapsible: false,
        children: [
          {text: '暂无', link: '/Web/001'},
        ]
      }],
      '/Java/': [{
        text: 'Java',
        collapsible: false,
        children: [
          {text: '初识Java', link: '/Java/001'},
          {text: '第一个Java程序', link: '/Java/002'},
        ]
      }],
      '/Linux/': [{
        text: 'Linux',
        collapsible: false,
        children: [
          {text: 'Ubuntu的安装汉化', link: '/Linux/001'},
          {text: 'ContOS 7 的安装', link: '/Linux/002'},
        ]
      }],
      '/Study/': [
        {
          text: '考研日语203',
          collapsible: true,
          children: [
            {text: '一 · 五十音图', link: '/Study/Japanese/001'},
            {text: '二、一 · 名词判断句', link: '/Study/Japanese/002'},
            {text: '二、二 · 存在句', link: '/Study/Japanese/003'},
            {text: '三、一 · 动词的分类及变形', link: '/Study/Japanese/004'},
            {text: '三、二 · 形容词1类', link: '/Study/Japanese/005'},
            {text: '三、三 · 形容词2类', link: '/Study/Japanese/006'},
            {text: '四、一 · 动词的「ます」形', link: '/Study/Japanese/007'},
            {text: '四、二 · 动词的「て」形', link: '/Study/Japanese/008'},
            {text: '四、三 · 动词的意志形', link: '/Study/Japanese/009'},
            {text: '四、四 · 动词的可能形', link: '/Study/Japanese/010'},
            {text: '四、五 · 动词的假定形', link: '/Study/Japanese/011'},
            {text: '四、六 · 动词的被动型', link: '/Study/Japanese/012'},
            {text: '四、七 · 动词的使役形', link: '/Study/Japanese/013'},
            {text: '四、八 · 动词的使役被动形', link: '/Study/Japanese/014'},
            {text: '四、九 · 敬体与简体', link: '/Study/Japanese/015'},
          ]
        },
        {
          text: '材科基',
          collapsible: true,
          children: [
            {text: '第一章 · 引言', link: '/Study/Materials/001'},
            {text: '第二章 · 晶体结构', link: '/Study/Materials/002'},
            {text: '第三章 · 晶体结构缺陷', link: '/Study/Materials/003'},
            {text: '第四章 · 非晶态结构与性质', link: '/Study/Materials/004'},
            {text: '第五章 · 表面结构与性质', link: '/Study/Materials/005'},
            {text: '第六章 · 相平衡和相图', link: '/Study/Materials/006'},
            {text: '第七章 · 扩散', link: '/Study/Materials/007'},
            {text: '第八章 · 材料中的相变', link: '/Study/Materials/008'},
            {text: '第九章 · 材料制备中的固态反应', link: '/Study/Materials/009'},
            {text: '第十章 · 烧结', link: '/Study/Materials/010'},
            {text: '第十一章 · 腐蚀与氧化', link: '/Study/Materials/011'},
            {text: '第十二章 · 疲劳与断裂', link: '/Study/Materials/012'},
          ]
        },
        {
          text: '考研数学必背公式',
          collapsible: true,
          children: [
            {text: '常用中学公式', link: '/Study/Math/001'},
            {text: '极限', link: '/Study/Math/002'},
            {text: '微分', link: '/Study/Math/003'},
            {text: '积分', link: '/Study/Math/004'},
          ]
        },
        {
          text: '数据结构',
          collapsible: true,
          children: [
            {text: '第一章 · 绪论', link: '/Study/408/数据结构/001'},
            {text: '第二章 · 线性表', link: '/Study/408/数据结构/002'},
            {text: '第三章 · 栈和队列', link: '/Study/408/数据结构/003'},
          ]
        },
      ],
      '/life/': [{
        text: '生活',
        collapsible: false,
        children: [
          {text: 'Package Control又挂了', link: '/life/001'},
          {text: 'vcode终端报错', link: '/life/002'},
          {text: 'u盘文件或目录损坏且无法读取', link: '/life/003'},
        ]
      }],
    },
    sidebarDepth: 1,
  }),
})