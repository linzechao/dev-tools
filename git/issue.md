#### Git 疑难杂症

[win10 git-base 闪退问题](https://blog.csdn.net/liruda/article/details/79382822)
[本地分支失去上游信息(失联)](https://blog.csdn.net/jym_ycc/article/details/73485839)

```bash
# .ssh文件夹
cd ~
mkdir .ssh
cd .ssh
ssh-keygen -t rsa -C "linzechao44@163.com"
```

```bash
# 代理问题
cd ~/.ssh
ssh-agent -s
```

```bash
# 权限问题
cd ~/.ssh
chmod 700 id_rsa
```
