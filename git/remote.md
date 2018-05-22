#### Git 远程仓库

```bash
# 克隆
git clone git@github.com:username/project.git

# 克隆分支
git clone -b super git@github.com:username/project.git

# 添加，“git remote add <shortname> <url>”
git remote add origin git@github.com:active/item.git

# 修改
git remote set-url origin git@github.com:new/now.git

# 查看
git remote -v
```

```bash
# 拉取
git fetch origin master

# 拉取并合并
git pull origin master

# 提交到远程
git push origin master
git push -u origin master

# 查看远程
git remote show origin

# 重命名
git remote rename origin super

# 删除
git remote rm super
```
