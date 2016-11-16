克隆远程库的“热身”准备
----


#### step 1
``` js
// 在git安装的【.ssh文件夹】下运行命令
// 没有的话，则用cmd窗口使用【mkdir .ssh】新建文件夹
ssh-keygen -t rsa -C "linzechao44@163.com"
```


#### step 2
``` js
// 在C盘用户下.ssh文件夹下运行命令
ssh-agent -s
```


#### step 3
``` js
// 推送数据到远程库做准备
git remote add origin git@github.com:linzechao/note.git

// 推送数据到远程库
git push -u origin master
```


#### step 4
``` js
// 以后不需要加上-u
git push origin master
```


#### step 5
``` js
// 克隆远程库
git clone git@github.com:linzechao44/StudyGit.git

// 克隆远程库的一个分支
git clone -b super git@github.com:linzechao44/StudyGit.git

// 修改远程库
git remote set-url origin git@github.com:linzechao44/StudyGit.git

// 删除远程库
```



#### Question
> IP address
>
> > cd ~/.ssh
>
> > chmod 700 id_rsa
