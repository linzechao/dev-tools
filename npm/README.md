### 版本控制
> 1、2.0.2 主版本号.次版本号.修复BUG版本
>
> 2、"^4.2.0"，限定主版本号，非严格模式
>
> 3、"~6.3.8"，限定次版本号，严格模式


### Yoeman
> 1、yo webapp 生成器generators
>
> 2、这是搭建一个网站空盒子，比如新建各种各样的文件夹
>
> 3、引入必要的框架、插件
>
> 4、快速便捷
>
> 5、俗称现代web网站的脚手架


### Bower
> 1、bower install jquery --save | --save-dev
>
> 2、bower install 会安装bower.json下所有引入的插件
>
> 3、bower init 初始化bower
>
> 4、web的包管理器
>
> 5、一个自动帮我们下载插件、框架的工具
>
> 6、可以使用bower注册名、github官网短写(或全写)、插件URL来进行安装
>
> 7、下载保存在bower_components
``` js
{
	"directory": "bower_components", // 存放目录
	// 代理
	"proxy": "http://proxy.tencent.com:8080",
	"https-proxy": "https://proxy.tencent.com:8080",
	"timeout": 60000 // 默认延迟1分钟
}
```


### Grunt
> 1、grunt name:alias 任务名:单个功能
>
> 2、项目自动化任务（压缩、编译、语法检测等……）
>
> 3、一大堆js插件
``` js
// 以下以copy为实例，演示几种源文件与目标文件格式操作：
"copy": {
	// 第一种方式
	// 如果为只读方式的，只需要src属性
	"dist1": {
		"src": "<%= config.app %>/index.html", // 源文件
		"dest": "<%= config.dist %>/index.html" // 目标文件
	},
	// 第二种
	"dist2": {
		"src": ["<%= config.app %>/index.html", "<%= config.app %>/js/index.js"]
	},
	// 第三种
	"dist3": {
		"files": [
			{
				"src": "<%= config.app %>/index.html",
				"dest": "<%= config.dist %>/index.html"
			},
			{
				"src": "<%= config.app %>/js/index.js",
				"dest": "<%= config.dist %>/js/index.js"
			}
		]
	},
	// 第四种
	// key代表源文件、value代表目标文件
	"dist4": {
		"files": {
			"<%= config.app %>/index.html": "<%= config.dist %>/index.html",
			"<%= config.app %>/js/index.js", "<%= config.dist %>/js/index.js"
		}
	},
	// 第五种
	"dist5": {
		"files": [
			{
				"expand": true,
				"cwd": "<%= config.app %>/",
				"src": "*.html",
				"dest": "<%= config.dist %>/",
				"ext": ".min.html", // 后缀名
				"extDot": "first", // 或者last，以源文件的文件名点分隔前后来生成目标文件
				"flatten": true, // 去除中间所有目录
				// 完成修改名字后被调用的方法
				"rename": function(dest, src) {
					return dest + 'js' + src;
				}
			}
		]
	}
},
```
> 4、演示清除文件
``` js
// **: 匹配任意数量的任意字符
// *: 匹配任意数量的任意字符，但不匹配“/”
// ?: 匹配任意一个字符，但不匹配“/”
// {}: 匹配花括号当中由逗号隔开的字符
// !: 取反
"clean": {
	"dist": {
		"src": "<%= config.dist %>/**/*"
	},
	/*
		过滤
		node的fs模块中Stats属性的方法
		stats.isFile()
		stats.isDirectory()
		stats.isBlockDevice()
		stats.isCharacterDevice()
		stats.isSymbolicLink() (only valid with fs.lstat())
		stats.isFIFO()
		stats.isSocket()
	*/
	"filter": "isFile",
	"filter": function(filename) {
		retrun !grunt.file.isDir(filename);
	},
	// 以下默认都是false
	"nonull": true, // 用于调试
	"dot": true, // 匹配点开头的文件
	"matchBase": true, // 严格模式，匹配最后一个目录是否为true
	"expand": true, // 处理动态的匹配目录，根据源文件映射到目标文件中
}
```


#### gulp
