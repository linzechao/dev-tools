## npm

node package manager

``` bash
# 安装
npm install --save jquery
npm i -S jquery

# 卸载
npm uninstall jquery
npm un jquery
```

## nrm

npm registry manager

``` bash
# 安装
npm install -g nrm
# yarn global add nrm

# 查看所有注册源
nrm list

# 当前使用源
nrm current

# 切换
nrm use taobao
```

## nvm

node version manager

* [window 安装](https://github.com/coreybutler/nvm-windows/releases)
* `linux 安装1(curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash)`
* `linux 安装2(wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash)`

``` bash
# 查看远程版本
nvm ls-remote --lts

# 查看本地安装版本
nvm list

# 安装版本
nvm install v10.14.2

# 使用版本（重启终端后恢复原有版本）
nvm use v10.14.2

# 设置默认版本（重启终端后起效，永久）
nvm alias default v10.14.2
```

## nodemon

node mon

``` bash
# 安装
npm install --save-dev nodemon
```

配置文件 nodemon.json
``` json
{
  "verbose": true,
  "ignore": ["./*.*"],
  "watch": ["./src/**/*.*"]
}
```

## pm2

``` bash
# 安装
yarn add --dev pm2

# 启动网站
pm2 start app.js

# 重启网站
pm2 restart app.js

# 查看运行站点
pm2 list

# 停机
pm2 stop $id

# 查看启动日志
pm2 describe $id

# 查看运行日志
pm2 logs $id

# 监控
pm2 monit
pm2 web
```