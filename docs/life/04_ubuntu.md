# Ubuntu踩坑记录

[[TOC]]

## Ubuntu安装

## Ubuntu更换为清华源

Ubuntu系统自带的镜像源速度特别慢，并且有些包无法下载，会显示超时。所以我们在汉化之前最好先将Ubuntu更换为清华源，避免出现下载失败的情况。

1. 首先打开我们的终端，进入到`/etc/apt/`路径，找到镜像源的存放文件`sources.list`,并备份。

    ```shell
    cd /etc/apt
    sudo cp sources.list  sources.list.bak
    ```

    图13
    > 使用管理员身份`sudo`备份源文件可能会需要输入密码。

2. 修改配置，打开文件：

    ```shell
    sudo gedit sources.list
    ```

     图14

     将以下内容粘贴到开文件的**最前面**，全部粘贴过去，**保存**，并关闭。

     ```shell
    # ubuntu18.04
    # 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
    deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse
    # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse
    deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
    # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
    deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
    # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
    deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
    # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse

    # 预发布软件源，不建议启用
    # deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
    # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
    ```

    图15

    :::tip 重要提示
    如果如果你对上面的地址有疑惑，或者你的Ubuntu系统不是18.04，可以打开下面的地址，选择你的Ubuntu版本，复制里面的链接到文本中。
    <https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/>
    :::

3. 执行更新

    更新源: `sudo apt-get update`
    更新软件: `sudo apt-get upgrade`

    >**注意：一个坑来了**
    >在执行完**更新源**以后，**更新软件**竟然会报错
    >图16
    >可能是上次安装时没正常完成，而导致出现此状况。 因此，我们只要将原先的apt-get进程杀死，从新激活新的apt-get进程，就可以让软件管理器正常工作了！
    >解决方案：
    >`ps`查看进程没有和apt有关的进程,如果有的话，直接`kill`掉pid号就好
    >没有的话，直接删掉这两个文件即可
    >
    >```shell
    >rm /var/cache/apt/archives/lock
    >rm /var/lib/dpkg/lock
    >```
    >
    >成功解决

## Ubuntu汉化（中文语言包）

