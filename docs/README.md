# [VuePress快速上手](https://v2.vuepress.vuejs.org/zh/guide/getting-started.html)

- 创建并进入一个新目录
```sh
mkdir vuepress-starter
cd vuepress-starter
```
- 初始化项目
```sh
git init
npm init
```
- 安装 VuePress
```sh
# 安装 vuepress
npm install -D vuepress@next
# 安装打包工具和主题
npm install -D @vuepress/bundler-vite@next @vuepress/theme-default@next
```
- 创建 VuePress 配置文件 docs/.vuepress/config.js
```sh
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),
})

```
- 创建你的第一篇文档
```sh
echo '# Hello VuePress' > docs/README.md
```