标签管理(版本标识)
----

#### step 1
``` js
git branch
git checkout master // 切换要添加标签的分支上
git tag v1.0 // 标识
git tag // 查看所有标签

git tag v0.4 e62093 // 给历史commit的代码标识
git show v1.0 // 查看标签信息

git tag -a v0.1 -m "version 0.1 released" 239943 // 带信息的标签
```


#### step 2
``` js
git tag -d v0.1 // 删除标签
```


#### step 3
``` js
git push origin v1.1.0 // 提交标签
```
