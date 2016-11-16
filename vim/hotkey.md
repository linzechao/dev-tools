# 有3大模式
1. 命令模式
2. 编辑模式
3. 末行模式



## 命令 -> 编辑
> a|A = 前面插入光标
> i|I = 后面插入光标
> o = 下一行插入光标
> O = 上一行插入光标

## 编辑 -> 命令
> Esc

## 命令 -> 末行
> :



### 编辑模式
> 与windows操作文本的快捷键基本一致


### 命令模式
> *浏览*
> kjhl = 左上下右
> 0 = 行首
> ^ = 文首
> $ = 文尾
> nG = n行
> G = 页尾
> H = 当前页页头
> M = 当前页页中
> L = 当前页页尾
> {} = 空行上下跳转
> () = 在段落之间移动(包括空行)
> ctrl+e = 单行向下滚屏
> ctrl+u = 半屏向上滚屏
> e = 定位到下个单词结尾
> E = 定位到下个单词结尾(不考虑分隔符：括弧、括号、标点符号)
> w = 定位到下个单词开头
> W = 定位到下个单词开头(不考虑分隔符：括弧、括号、标点符号)
> b = 定位到上个单词开头
> B = 定位到上个单词开头(不考虑分隔符：括弧、括号、标点符号)

> *定位*
> Ctrl+g：显示行号、文档滚动比例

> *搜索*
> gd = 搜索当前单词
> n = 下一次搜索结果
> % = 光标定位在()、{}、[]之间跳转

> *复制*
> yy|Y = 单行
> nyy|nY = 往下n行
> yw = 从光标开始到单词结尾
> ye = 从光标开始到单词结尾，可包括一个空格
> y^ = 到行首
> y0 = 到句首
> y$ = 到行尾
> yG = 当前行至页尾
> ynG= 当前行n行

> *剪切(不粘贴的话，可以当删除操作)*
> dd = 单行
> 与复制一样，举一反三

> *粘贴*
> p = 到下一行
> P = 到上一行

> *删除*
> x = 光标所在字符
> 

> *撤销*
> u = 单个
> U = 整行恢复至原有

> *保存*
> Ctrl+s

> *编辑*
> v = 进入选择模式
> V = 选中当前行
> guu|Vu = 整行小写
> gUU|VU = 整行大写
> g~~ = 小写转大写，大写转小写
> % = 在当前行跳转括号、html标签等收尾

> *替换*
> r = 单个
> cw = 光标开始到单词结尾




### 末行模式
> *打开文件*
> :file.ext = 横向
> :vsplit|vsp file.ext = 纵向

> *内置窗口*
> :Exp = 文件夹列表
> :Sex = 分割浏览器并打开文件夹列表
> :args = 查看打开的所有文件
> :ls = 显示缓冲区
> :cd = 显示当前文件夹

> *退出*
> :w = 保存
> :w! = 强制保存
> :q = 不保存退出
> :q! = 强制不保存退出
> :wq = 保存退出
> :wq! = 强制保存退出

> *linux*
> :! = 执行shell(dos)
> :r ! = 将shell(dos)执行至当前

> *跳转*
> :n = 跳转至n行

> *搜索*
> :/txt = 查找txt
```gvim
n # 下一个
N # 上一个
```
> :?txt = 逆向查找

> *替换*
> :s/old/new/g # 当前行的old替换成new、/g=全文
> :100,200s/old/new # 100到200行替换
> :%s/old/new/g # 整文替换
> :%s/old/new/gc # c代表参数
```gvim
y # 替换
n # 下一个
a # 全部
q # 修改
l # 替换后退出
```

### 切换窗口
> ctrl+w+w|ctrl+tab
