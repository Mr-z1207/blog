# Learn-VuePress

如果你只是想随便用下`VuePress'，你可以在全局安装它：

## 全局安装

```node
yarn global add vuepress # 或 npm install -g vuepress
```

## 创建一个 markdown 文件

```node
echo '# Hello VuePress' > README.md
```

## 开始编写文档

```node
vuepress dev
```

## 构建

```node
vuepress build
```

## 配置

项目结构可能长这样

```node
.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ package.json
```

## 自定义容器

代码：

```node
::: tip 提示
this is a tip
:::

::: warning 注意
this is a tip
:::

::: danger 警告
this is a tip
:::
```
