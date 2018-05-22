#### Git 全局配置

step 1
```bash
# 让命令加上颜色
git config --global color.ui true
```

step 2
> 新建.gitignore文件，用来忽略不需要提交的文件
>
> 内容如下：
1. \# Windows:
2. Thumbs.db
3. ethumbs.db
4. Desktop.ini
5. .idea

step 3
```bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.ci commit
git config --global alias.br branch
git config --global alias.re remote
```
