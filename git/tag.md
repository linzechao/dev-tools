#### Git 标签管理

```bash
# 切换要添加标签的分支上
git checkout master

# 标识
git tag v1.0

# 查看所有标签
git tag

# 给历史commit的代码标识
git tag v0.4 e62093

# 查看标签信息
git show v1.0

# 带信息的标签
git tag -a v0.1 -m "version 0.1 released" 239943
```

```bash
# 删除标签
git tag -d v0.1
```

```bash
# 提交标签
git push origin v1.1.0
```
