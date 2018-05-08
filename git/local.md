#### Git基本操作

```bash
# 放入暂存区
git add filename
git add *
git add .

# 查看暂存区
git status

# 对比暂存区
git diff [filename] --cached
git diff [filename] --staged

# 对比修改
git diff [filename]
git difftool [filename]

# 提交更新
git commit -m message
# 操作前不需 git add .
git commit -a -m message

# 移除文件
git rm filename
# 相当于
rm -rf filename
git add filename

# 移动文件
git mv filename new_filename
# 相当于
mv filename new_filename
git rm filename
git add new_filename
```

```bash
# 查看日志
git log
# 最近 2 条日志
git log -2
# 显示修改内容
git log -p 
# 列出文件修改统计
git log --stat
# 自定义格式
git log --pretty=online
# %h：简短哈希字串；%s：提交说明；%an：作者
git log --pretty=format:"%h %s %an" --graph
```

```bash
# 撤销提交
git commit --amend
# 取消暂存的文件
git reset HEAD filename
# 移除修改的内容
git checkout -- filename
git checkout -- .
```
