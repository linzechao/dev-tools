#### Git 分支管理

```bash
# 创建
git branch branch-name

# 切换分支
git checkout branch-name

# 快捷方式
git checkout -b branch-name
```

```bash
# 查看
git branch

# 查看远程分支
git branch -a
```

```bash
# 将分支合并到当前分支
git merge branch-name

# 删除
git branch -d branch-name

# 如果要丢失一个没有合并过的分支，可以使用强行删除
git branch -D branch-name
```

```bash
// 查看分支合并情况
git log --graph --pretty=oneline --abbrev-commit
```


```bash
# 查看分支合并情况
git branch --merged
git branch --no-merged
```

```bash
# 把没commit的更改数据存到一个stash中
git stash

# 查看stash信息
git stash list

# 先开启stash，再删除stash
git stash apply
git stash drop

# 或者直接开启并且删除stash
git stash pop

# 指定stash
git stash apply stash@{0}
```
