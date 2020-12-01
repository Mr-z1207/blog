# vcode终端报错,"因为在此系统上禁用了运行脚本"

[[TOC]]

## 起因

在学习Vue的时候，发现使用`Vue Cli3`命令时报错。

![Vscode终端报错](http://picgo.mr1207.cn/img/vscode终端报错1.png)

## 解决方案

由于我英文太差，先翻译一下...

![Vscode终端报错翻译](http://picgo.mr1207.cn/img/vscode终端报错2.png)

说什么系统上禁用了运行脚本，大致搜了一下是因为PowerShell执行策略的问题，解决方法：

1. 使用管理员身份运行vscode；
2. 使用`get-ExecutionPolicy`可以查看当前执行策略；显示`Restricted`，表示状态是禁止的;
![Restricted](http://picgo.mr1207.cn/img/vscode终端报错3.png)
3. 执行：`set-ExecutionPolicy RemoteSigned`改为允许的
![RemoteSigned](http://picgo.mr1207.cn/img/vscode终端报错4.png)

:::tip 提示
1. 必须以管理员身份运行vscode，否则`set-ExecutionPolicy`无法执行；
2. 举一反三，有时其他编辑器(`HBuilderX`)也会出现相同问题，相同方法即可解决
:::