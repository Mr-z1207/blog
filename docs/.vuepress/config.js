// 配置文件
//--------------------------------默认生成------------------------------------
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
//---------------------------------------------------------------------------


export default defineUserConfig({
  //--------------------------------默认生成------------------------------------
  bundler: viteBundler(),
  theme: defaultTheme(),
  //---------------------------------------------------------------------------

  //-基础配置  配置参考(https://v2.vuepress.vuejs.org/zh/reference/config.html)-
  base:'/blog/',    // 部署站点的基础路径。
  lang: 'zh-CN',
  title: 'Mr1207_songの博客',
  description: '这是我的第一个 VuePress 站点',
  //设置 pagePatterns 来避免某个文件被 VuePress 处理
  //添加['!**/README.md']排除README.md
  pagePatterns:['**/*.md', '!**/README.md', '!.vuepress', '!node_modules']
})
