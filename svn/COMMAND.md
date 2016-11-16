# 查看当前分支
```cmd
svn info
```

# 查看某某下面的分支(其实就是目录)
```cmd
svn ls svn://.../branchs --verbose
```



# 新建分支
```cmd
svn cp svn://.../trunk/... svn://.../branchs/... -m "..."
// copy
// -m 一定要带上
```



# 切换分支
```cmd
svn sw svn://.../...
// switch 
```

