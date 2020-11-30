# Package Control 让人又爱又恨!(解决办法)

[[TOC]]

## 起因

为什么要选择Sublime Text3？

首先啊，Sublime Text 是一款跨平台代码编辑器，然后他还有很多优点，

- Sublime Text3 自动保存，打开图片
- 跨平台启动快!!!!多行游标，太好用。
- 插件，简直选不过来。
- 代码片段
- VIM兼容模式

:::tip
这些都是网上抄的，哈哈哈，反正各种帖子说他就是好用
:::

## Package Control无法安装？？

说到Sublime Text3不得不提的就是他神奇好用的，各种各样的插件了！但是，，，

![安装失败？？](http://picgo.mr1207.cn/img/packgeControl1.png)

没事没事，遇到问题先不要慌~打开百度see yi see，原来是`channel_v3.json`东西找不到，大部分都是因为目标域名被墙而无法正常访问导致的

## 解决方案

:::tip 提示
以下内容并非原创，写这篇的目的是为了保存记录、学习分享。
来源：www.miaoqiyuan.cn
:::

使用方法如下（以原作者已经部署好的地址为例，如果不放心，可以在页面底部下载原作者的源码自行部署）：

### 1.打开 packgeControl Settings

打开`Sublime Text`，选择 `Preferences` --> `Package Setting` --> `Package Control` --> `Settings`

![打开packgeControl Settings](http://picgo.mr1207.cn/img/packgeControl2.jpg)

### 2.输入配置信息 打开配置文件后，输入 channels 信息

请参考页面顶部路径说明 ，以线上地址为例

```json
"channels": [
    "http://hk.miaoqiyuan.cn/products/proxy/channel_v3.json"
],
```

![输入 channels 信息](http://picgo.mr1207.cn/img/packgeControl3.png)

### 3.保存后，Package Control 已经可以正常使用了

嘿嘿嘿

![可以正常使用](http://picgo.mr1207.cn/img/packgeControl4.png)

## sublime好用插件推荐

待续。。。
