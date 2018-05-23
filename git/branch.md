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

#### step 4
``` js
// 查看分支合并情况
git log --graph --pretty=oneline --abbrev-commit
```


#### step 5
``` js
// 禁用Fast forward模式删除dev分支并生成commit
git merge --no-ff -m "merge with no-ff" dev
```


#### step 6
``` js
git stash // 把没commit的更改数据存到一个stash中
git stash list // 查看stash信息

// 先开启stash，再删除stash
git stash apply
git stash drop

// 或者直接开启并且删除stash
git stash pop

// 指定stash
git stash apply stash@{0}
```


#### step 7
``` js
git remote // 查看远程库
git remote -v // 远程库详细信息
```


#### step 8
``` js
// 推送到远程库
git push origin master
git push origin dev
```
      

#### step 9
``` js
// 删除远程分支
git push origin :dev

// 删除远程标签
git push origin --delete <branchName>

// 删除远程分支
git push origin :<branchName>
```
