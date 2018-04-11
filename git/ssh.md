[win10 git-base 闪退](https://blog.csdn.net/liruda/article/details/79382822)

# 克隆远程库的“热身”准备


## step 1
```bash
# 在git安装的【.ssh文件夹】下运行命令
# 没有的话，则用cmd窗口使用【mkdir .ssh】新建文件夹
ssh-keygen -t rsa -C "linzechao44@163.com"
```


## step 2
```bash
# 在C盘用户下.ssh文件夹下运行命令
ssh-agent -s
```


## step 3
```bash
# 推送数据到远程库做准备
git remote add origin git@github.com:linzechao/note.git
# git remote add home git@mrsuper.com:linzechao/note.git

# 推送数据到远程库
git push -u origin master

# 拉取
git fetch [origin branch]
# 拉取并尝试合并
git pull [origin branch]
```


## step 4
```bash
# 以后不需要加上-u
git push origin master
```


## step 5
```bash
# 克隆远程库
git clone git@github.com:linzechao44/StudyGit.git

# 克隆远程库的一个分支
git clone -b super git@github.com:linzechao44/StudyGit.git

# 修改远程库
git remote set-url origin git@github.com:linzechao44/StudyGit.git

# 修改远程库名
git remote rename origin yuanchengku

# 删除远程库
git remote rm yuanchengku

# 删除远程分支
git push origin :dev-super
```




### Question
> IP address
>
> > cd ~/.ssh
>
> > chmod 700 id_rsa

