Git基本操作
----


#### step 1
``` js
git init
```


#### step 2
``` js
git add readme.txt aboutme.txt
git add resume.txt
```


#### step 3
``` js
// 查看修改的内容
git diff
```


#### step 4
``` js
git status
```


#### step 5
``` js
git commit -m "commit all added files"
```


#### step 6
``` js
// 查看版本
git log
git log --pretty=oneline
```


#### step 7
``` js
// 后退历史版本
git reset --hard HEAD^
git reset --hard HEAD~44
```


#### step 8
``` js
// 查看已被覆盖的版本
git reflog
```


#### step 9
``` js
// 指定版本
git reset --hard s4c8z2l6
```


#### step 10
``` js
// 撤销未添加到缓冲区修改的内容
git checkout -- readme.txt
```


#### step 11
``` js
git reset HEAD readme.txt

// 撤销已添加到缓冲区修改的内容
git checkout -- readme.txt
```


#### step 12
``` js
// 删除文件
gir rm readme.txt
```
