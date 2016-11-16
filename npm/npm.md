Yeoman
====
# 现代Web App的脚手架工具
# 立项阶段(代码校验、测试、压缩)
1、npm install -g yo
2、yo -v

使用说明
----
1、^0.4.2最高0.9.9版本
2、~0.4.2最高0.4.9版本

#### 命令
npm install -g generator-angular
npm install -g generator-webapp
yo --help

#### 资料
http://yeoman.io/ 搜索要点
http://blog.fens.me/nodejs-yeoman-intro/

Bower
====
# Web的包管理器
# 开发阶段(跟踪项目)
1、npm install -g bower
2、bower -v

使用说明
----
~/……/xx bower install jquery //使用注册名
~/……/xx bower install jquery/jquery //使用GitHub短写
~/……/xx bower install https://github.com/twbs/jquery/jquery //使用GitHub全地址
~/……/xx bower install https//www.jquery.com/jq.js //使用全写URL

http://bower.io/ 搜索要点
jquery owner:jquery
http://blog.fens.me/nodejs-bower-intro/


Grunt(Build tool)
====
# JavaScript自动化工具
# 完成阶段(压缩、编译、单元测试、代码校验)
1、npm install -g grunt-cli
2、grunt

grunt <label> --force // 强制执行

#### 资料
http://blog.fens.me/nodejs-grunt-intro/
grunt-contrib-uglify：压缩js代码
grunt-contrib-concat：合并js文件
grunt-contrib-qunit：单元测试
grunt-contrib-jshint：js代码检查
grunt-contrib-watch：监控文件修改并重新执行注册的任务


#### Express
1、npm install -g express-generator
2、express -V


#### Node
奇数版本号的Node.js被认为是不稳定的开发版。
http://blog.fens.me/nodejs-express3/


#### Npm
**大坑：**切勿私自将npm安装到全局环境下


#### 查看本机安装的generator
```cmd
npm ls -g --depth=1 2>/dev/null | grep generator-
```

```cmd
// 查看本地全局安装路径
npm root -g
```
