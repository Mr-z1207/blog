# Ubuntu的安装汉化

[[TOC]]

## 一、Ubuntu安装

> 多图预警！图片已经很详细了，我就简单的说一下，按照图片一步步来就好了。

1. 打开VM虚拟机，创建一个新的虚拟机
![1](http://picgo.mr1207.cn/img/Ubuntu1.png)
2. 简单使用，选择典型安装即可 
![2](http://picgo.mr1207.cn/img/Ubuntu2.png)
3. 点击浏览，找到下载好要安装的光盘镜像文件`ubantu.ios`
![3](http://picgo.mr1207.cn/img/Ubuntu3.png)
4. 输入指定的信息
![4](http://picgo.mr1207.cn/img/Ubuntu4.png)
    - 全名：用于注册客户机操作系统的名称（如果需要注册）。Workstation Pro 使用名字创建虚拟机的主机名。
    - 用户名：您的用户名。您可以使用小写字母、数字和破折号，但不要在用户名中以破折号作为起始字符。请勿使用 root 作为名称。某些操作系统会为该用户设置 sudo 访问权限，另一些操作系统则要求该用户使用<kbd>su</kbd>来获得 root 用户权限。
    - 密码：**用户名**和`root`用户的密码。
5. 给虚拟机起个名字，选择一个安装的位置
![5](http://picgo.mr1207.cn/img/Ubuntu5.png)
6. 指定磁盘大小
![6](http://picgo.mr1207.cn/img/Ubuntu6.png)
7. 可以选择自定义硬件更改配置（我用的都是默认）
![7](http://picgo.mr1207.cn/img/Ubuntu7.png)
![8](http://picgo.mr1207.cn/img/Ubuntu8.png)
8. 完成后就开始安装了，注意要联网安装open-vm-tools（后面会说到）
*这个过程相当漫长，一直等着，可能因计算机配置和网络环境有关吧，反正我安装的时候慢到我吃了个饭打还了局王者*
![9](http://picgo.mr1207.cn/img/Ubuntu9.png)
![10](http://picgo.mr1207.cn/img/Ubuntu10.png)
9. 终于安装完成，输入密码就可以用了
![11](http://picgo.mr1207.cn/img/Ubuntu11.png)
![12](http://picgo.mr1207.cn/img/Ubuntu12.png)

## 二、Ubuntu更换为清华源

Ubuntu系统自带的镜像源速度特别慢，并且有些包无法下载，会显示超时。所以我们在汉化之前最好先将Ubuntu更换为清华源，避免出现下载失败的情况。

1. 找到镜像源的存放文件并备份
首先打开我们的终端，进入到`/etc/apt/`路径，找到镜像源的存放文件`sources.list`,并备份。
终端打开快捷键 <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd>

    ```shell
    cd /etc/apt
    sudo cp sources.list  sources.list.bak
    ```

    ![13](http://picgo.mr1207.cn/img/Ubuntu13.png)

    > 使用管理员身份`sudo`备份源文件可能会需要输入密码。

2. 修改配置，打开文件

    ```shell
    sudo gedit sources.list
    ```

    ![14](http://picgo.mr1207.cn/img/Ubuntu14.png)

    将以下内容粘贴到开文件的**最前面**，全部粘贴过去，**保存**，并关闭。

    ```shell
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

    ![15](http://picgo.mr1207.cn/img/Ubuntu15.png)

    :::tip 重要提示
    如果如果你对上面的地址有疑惑，或者你的Ubuntu系统不是18.04，可以打开下面的地址，选择你的Ubuntu版本，复制里面的链接到文本中。
    <https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/>
    :::

3. 执行更新
更新源: `sudo apt-get update`
更新软件: `sudo apt-get upgrade`

4. 注意：一个坑来了
在执行完**更新源**以后，**更新软件**竟然会报错
![16](http://picgo.mr1207.cn/img/Ubuntu16.png)
可能是上次安装时没正常完成，而导致出现此状况。 因此，我们只要将原先的apt-get进程杀死，从新激活新的apt-get进程，就可以让软件管理器正常工作了！
解决方案：
`ps`查看进程没有和apt有关的进程,如果有的话，直接`kill`掉pid号就好
没有的话，直接删掉这两个文件即可

    ```shell
    rm /var/cache/apt/archives/lock
    rm /var/lib/dpkg/lock
    ```

    成功解决

## 三、Ubuntu汉化（中文语言包）

1. 点击右上角小三角，选择`settings`打开设置
![17](http://picgo.mr1207.cn/img/Ubuntu17.png)
2. 选择语言，打开管理安装语言
![18](http://picgo.mr1207.cn/img/Ubuntu18.png)
3. 安装/移除语言 
![19](http://picgo.mr1207.cn/img/Ubuntu19.png)
4. 勾选中文（简体），apply应用
![20](http://picgo.mr1207.cn/img/Ubuntu20.png)
5. 关键性的一步，**拖动**汉语到最上面
![21](http://picgo.mr1207.cn/img/Ubuntu21.png)
6. 点击语言选择汉语，重启生效
![22](http://picgo.mr1207.cn/img/Ubuntu22.png)
7. 重启后询问是否将标准文件更新到新名称
这里推荐选择否，勾选不再提醒
![23](http://picgo.mr1207.cn/img/Ubuntu23.png)

## 四、无法全屏(安装open-vm-tools)

:::tip 无法全屏
如果在安装Ubuntu的时候全程联网（第一、8处），`open-vm-tools`会自动安装，打开就是全屏的则跳过以下内容，无法全屏的小伙伴接着往下看
:::

1. 安装成功之后发现无法全屏，就中间一个小方块
![24](http://picgo.mr1207.cn/img/Ubuntu24.png)
2. 查找解决方法
其实最一开始的想法是缺少`Vmware Tools`工具，然后到官网去查找安装，发现这么一条较高的版本要安装`open-vm-tools`，而不是`Vmware Tools`了
![25](http://picgo.mr1207.cn/img/Ubuntu25.png)
于是决定搜索安装`open-vm-tools`的方法。
3. 安装`open-vm-tools`

    - 打开终端，安装依赖，这一步很关键，必不可少

        ```shell
        sudo apt-get install open-vm*
        ```

    - 安装`open-vm-tools`

        ```shell
        sudo apt-get install open-vm-tools
        ```

    - 重启生效

        ```shell
        reboot
        ```

    ![26](http://picgo.mr1207.cn/img/Ubuntu26.png)

完结撒花*★,°*:.☆(￣▽￣)/$:*.°★* 。第一次写这么长的，真不容易。