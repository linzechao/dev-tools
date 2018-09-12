source $VIMRUNTIME/vimrc_example.vim

set encoding=utf-8    " 编码
set nu                " 显示行号
set cursorline        " 突出当前行

set tabstop=2         " 设置默认为 2 个空格
set sts=2             " 设置 softtabstop 为 2 个空格，使用 tab 缩进后，删除也是整个 tab 删掉
set expandtab         " 使用空格代替 Tab 键
set shiftwidth=2      " 设置自动缩进 2 个空格（回车缩进 2 个空格）

set nobackup          " 不生成备份文件
set noswapfile        " 不缓存 *.swp 文件
set noundofile        " 不缓存 *.un~ 文件

set foldenable        " 开始折叠
set foldmethod=indent " 设置语法折叠
set foldcolumn=0      " 设置折叠区域的宽度为 0
setlocal foldlevel=1  " 设置折叠层数为 1
set foldlevelstart=99 " 打开文件是默认不折叠代码

" 修改突出当前行样式
highlight cursorline cterm=NONE ctermbg=black ctermfg=green guibg=NONE guifg=NONE
" 插入模式时，光标细化
if has("autocmd")
  au VimEnter,InsertLeave * silent execute '!echo -ne "\e[1 q"' | redraw!
  au InsertEnter,InsertChange *
    \ if v:insertmode == 'i' |
    \   silent execute '!echo -ne "\e[5 q"' | redraw! |
    \ elseif v:insertmode == 'r' |
    \   silent execute '!echo -ne "\e[3 q"' | redraw! |
    \ endif
  au VimLeave * silent execute '!echo -ne "\e[ q"' | redraw!
endif

" 用空格键来开关折叠
nnoremap <space> @=((foldclosed(line('.')) < 0) ? 'zc' : 'zo')<CR>

" 窗口切换
nmap <C-h> <C-w><C-h><CR>
nmap <C-j> <C-w><C-j><CR>
nmap <C-k> <C-w><C-k><CR>
nmap <C-l> <C-w><C-l><CR>

" 文件预览器
let mapleader=","
nmap <silent><leader>t :NERDTreeToggle<CR>
autocmd bufenter * if (winnr('$') == 1 && exists('b:NERDTree') && b:NERDTree.isTabTree()) | q | endif

" js 文档
nmap <silent><leader>d <Plug>(jsdoc)

" ---------------- 插件 ----------------
filetype off
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
  " 文件菜单
  Plugin 'scrooloose/nerdtree'

  " 文件搜索
  Plugin 'kien/ctrlp.vim'

  " 标签补全
  Plugin 'mattn/emmet-vim'

  " 自动补全各种括号、单双引号
  Plugin 'Raimondi/delimitMate'

  " js 文档
  Plugin 'heavenshell/vim-jsdoc'

  " 代码对其
  Plugin 'godlygeek/tabular'

  " js 高亮
  Plugin 'pangloss/vim-javascript'

  " es6 高亮
  Plugin 'isRuslan/vim-es6'

  " markdown 高亮
  Plugin 'tpope/vim-markdown'

  " vue 高亮
  Plugin 'posva/vim-vue'

  " react 高亮
  Plugin 'mxw/vim-jsx'

  " CSS 高亮
  Plugin 'gko/vim-coloresque'

  " CSS3 高亮
  Plugin 'hail2u/vim-css3-syntax'

  " typescript 高亮
  Plugin 'leafgarland/typescript-vim'
  Plugin 'HerringtonDarkholme/yats.vim'
call vundle#end()
filetype plugin indent on
