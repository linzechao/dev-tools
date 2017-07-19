Branch(分支管理)
----

#### step 1
``` js
git branch dev // 创建新分支dev
git checkout dev // 切换分支到dev
git checkout -b dev // 合并以上2个操作
```

#### step 2
----
``` js
// 查看所有分支与当前使用的分支
git branch

// 查看远程分支
git branch -a
```


#### step 3
``` js
git checkout master // 切换到主分支
git merge dev // 合并dev分支到主分支
git branch -d dev // 删除dev分支

// 如果要丢失一个没有合并过的分支，可以使用强行删除
git branch -D "sub-dev"
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
