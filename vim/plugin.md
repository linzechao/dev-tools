## 参考文献、文摘
* [前端](https://github.com/ruanyl/bigvim)
* [常用](http://blog.csdn.net/namecyf/article/details/7787523)
* [配色](http://vimcolors.com/)




#### [配色ColorsBox](https://github.com/mkarmona/colorsbox)
```vim
" 配色
colorscheme colorsbox-stblue
```


#### [透明度](http://www.vim.org/scripts/download_script.php?src_id=2103)
```vim
" 透明度
autocmd guienter * call libcallnr("vimtweak", "SetAlpha", 204)
```


#### [使用Vim-Plug插件来管理](https://github.com/junegunn/vim-plug)
```.bat
# 可能需要关闭Git的SSL证书验证
git config --global http.sslVerify false
```


#### [Emmet](https://github.com/mattn/emmet-vim)
```vim
" 修改快捷键
let g:user_emmet_expandabbr_key = '<Tab>'
```


#### [文件目录、变量、函数菜单(包含taglist)](http://www.vim.org/scripts/download_script.php?src_id=754)
[*参考*](http://www.cnblogs.com/xia520pi/p/3659270.html)
```vim
let g:winManagerWindowLayout='FileExplorer|TagList'
nmap wm :WMToggle<cr>
```


#### [代码(变量、方法)菜单](http://www.vim.org/scripts/download_script.php?src_id=7701)
```vim
" vimrc配置
let Tlist_Show_One_File=1
let Tlist_Exit_OnlyWindow=1

" gvim命令
:Tlist
```
> 需要[ctags.exe](http://prdownloads.sourceforge.net/ctags/ec57w32.zip)支持
```.bat
# 将其放置可直接调用的path路径中，在根目录或项目目录中使用命令生成tag文件
ctags -R
```


#### [搜索目录、文件](https://github.com/kien/ctrlp.vim)
```vim
" 默认快捷键
<Ctrl+p>

" 切换搜索
<Ctrl+d>
<Ctrl+f>

" 刷新
<F5>
```


#### [多文件编辑](http://www.vim.org/scripts/download_script.php?src_id=3640)
> *可能与文件菜单界面冲突，切换时用wm关闭文件菜单即可！*
```vim
" vimrc配置
let g:miniBufExplMapCTabSwitchBufs=1
let g:miniBufExplMapWindowsNavVim=1
let g:miniBufExplMapWindowNavArrows=1
" 快捷键
ctrl+tab " 前一个
ctrl+shift+tab " 后一个
ctrl+箭头
ctrl+hjkl
```


#### [快速查找](http://www.vim.org/scripts/download_script.php?src_id=7645)
```vim
nnoremap <silent> <F3> :Grep<CR>
```


