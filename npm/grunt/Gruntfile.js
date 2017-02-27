module.exports = function (grunt) {
	'use strict';

	// 加载插件
	grunt.loadNpmTasks('grunt-contrib-htmlmin'); // 压缩html
	grunt.loadNpmTasks('grunt-contrib-cssmin'); // 压缩css
	grunt.loadNpmTasks('grunt-contrib-jshint'); // 检测js语法
	grunt.loadNpmTasks('grunt-contrib-uglify'); // 压缩js
	grunt.loadNpmTasks('grunt-contrib-imagemin'); // 压缩图片
	grunt.loadNpmTasks('grunt-contrib-clean'); // 清除文件(夹)
	grunt.loadNpmTasks('grunt-contrib-watch'); // 文件监听
	grunt.loadNpmTasks('grunt-contrib-less'); // less编译
	grunt.loadNpmTasks('grunt-contrib-sass'); // sass编译
	grunt.loadNpmTasks('grunt-contrib-compass'); // sass编译
	grunt.loadNpmTasks('grunt-contrib-copy'); // 复制文件(夹)
	grunt.loadNpmTasks('grunt-contrib-concat'); // 文件合并
	grunt.loadNpmTasks('grunt-contrib-connect'); // 连接服务器
	grunt.loadNpmTasks('grunt-contrib-csslint'); // 连接服务器
	grunt.loadNpmTasks('grunt-autoprefixer'); // 自动加上浏览器支持前缀

	// 项目配置
	grunt.initConfig({
		// 指定package.json文件
		// pkg: grunt.file.readJSON('package.json'),

		// 压缩html(暂错)
		htmlmin: {
			options: {
				collapseWhitespace: true, // 删除空行
				removeComments: true, // 删除注释
				minifyCSS: true, // css也压缩
				minifyJS: true, // js也压缩
				collapseBooleanAttributes: true, // 布尔值简写
				useShortDoctype: true, // 使用html5声明文档
				removeScriptTypeAttributes: true, // 删除默认的script的类型
				removeStyleLinkTypeAttributes: true, // 删除默认的link css的类型
				
				processScripts: ['text/template'] // 模板也压缩
			},
			htmlMin: {
				files: {
					'public/page/libs/alert.html': 'fp/page/libs/alert.html',
					'public/page/libs/header.html': 'fp/page/libs/header.html', // <{$seller}>报错
					'public/page/libs/loading.html': 'fp/page/libs/loading.html',
					'public/page/libs/nav.html': 'fp/page/libs/nav.html',
					// 'public/page/account.html': 'fp/page/account.html',
					// 'public/page/goods.html': 'fp/page/goods.html',
					// 'public/page/index.html': 'fp/page/index.html',
					// 'public/page/login.html': 'fp/page/login.html',
					// 'public/page/post.html': 'fp/page/post.html',
					'public/page/register.html': 'fp/page/register.html'
					// 'public/page/template.html': 'fp/page/template.html'
				}
			}
		},

		// 压缩css
		cssmin: {
			options: {
				// report: 'gzip', // 可能是压缩，测试不出来
				// sourceMap: true, // 生成map文件
				shorthandCompacting: false, // 不简写压缩
				roundingPrecision: -1 // 精确度
			},
			cssMin: {
				files: [{
					expand: true,
					cwd: 'fp/',
					src: ['**/*.css'],
					dest: 'public/',
					ext: '.css',
					extDot: 'frist'
				}]
			}
			/*{
				'public/css/libs/common.css': 'fp/css/libs/common.css',
				'public/tool/keditor/themes/default/default.css': 'fp/tool/keditor/themes/default/default.css',
				'public/tool/keditor/themes/qq/qq.css': 'fp/tool/keditor/themes/qq/qq.css',
				'public/tool/keditor/themes/simple/simple.css': 'fp/tool/keditor/themes/simple/simple.css'
			}*/
		},

		// 自动加上浏览器支持前缀
		autoprefixer: {
			// 不建议使用这种老式写法
			// 不支持多个目标任务
			'public/css/libs/common.css': 'fp/css/libs/common.css'
			/*dist: {
				files: {
					'public/css/libs/common.css': 'fp/css/libs/common.css'
				}
			},*/
		},

		// 检测js语法
		jshint: {
			options: {
				eqnull: true, // 等于null
				eqeqeq: true, // 使用全等
				undef: true, // 未定义
			   	browser: true, // 运行在浏览器上，location等为全局
				globals: { // 全局对象
					$: true, // 平台模板管理的jq
					define: true, // 使用sea.js的define
					sID: true // 平台模板管理的用户ID
				}
			},
			jsTest: [
				// 简化
				'fp/js/**/*.js'
				// 原始
				/*'fp/js/libs/common.js',
				'fp/js/libs/config.js',
				'fp/js/libs/cookie.js',
				'fp/js/libs/state.js',
				'fp/js/libs/uploadify.js',

				'fp/js/account.js',
				'fp/js/goods.js',
				'fp/js/index.js',
				'fp/js/login.js',
				'fp/js/post.js',
				'fp/js/register.js',
				'fp/js/template.js'*/
			]
		},
		// ['fp/js/**/*.js'], // 不能使用字符串，最简为数组

		// 压缩js
		uglify: {
			options: {
				// mangle: false, // 不使用变量混搅
				mangle: {
					except: ['require', 'exports', 'module'] // 指定不混搅的变量名
				},
				quoteStyle: 3 // 保留原始引号
			},
			jsMin: {
				files: [{
					expand: true,
					cwd: 'fp/js/',
					src: ['**/*.js'],
					dest: 'public/js',
					ext: '.js',
					extDot: 'first'
				}]
				/*{
					'public/js/libs/common.js': 'fp/js/libs/common.js',
					'public/js/libs/config.js': 'fp/js/libs/config.js',
					'public/js/libs/cookie.js': 'fp/js/libs/cookie.js',
					'public/js/libs/state.js': 'fp/js/libs/state.js',
					'public/js/libs/uploadify.js': 'fp/js/libs/uploadify.js',

					'public/js/account.js': 'fp/js/account.js',
					'public/js/goods.js': 'fp/js/goods.js',
					'public/js/index.js': 'fp/js/index.js',
					'public/js/login.js': 'fp/js/login.js',
					'public/js/post.js': 'fp/js/post.js',
					'public/js/register.js': 'fp/js/register.js',
					'public/js/template.js': 'fp/js/template.js'
				}*/
			}
		},

		// 压缩图片
		imagemin: {
			options: {
				optimizationLevel: 2 // 压缩水平
			},
			imgMin: {
				files: [{
					expand: true,
					cwd: 'fp/img/',
					src: ['**/*.{png,jpg,gif,ico}'],
					dest: 'public/img/'
				}]
					// 原有
					// {
					// 	expand: true,
					// 	cwd: 'fp/img/',
					// 	src: ['**/*.png'],
					// 	dest: 'public/img/',
					// 	ext: '.png',
					// 	extDot: 'first'
					// },
					// {
					// 	expand: true,
					// 	cwd: 'fp/img/',
					// 	src: ['**/*.gif'],
					// 	dest: 'public/img/',
					// 	ext: '.gif',
					// 	extDot: 'first'
					// },
					// {
					// 	expand: true,
					// 	cwd: 'fp/img/',
					// 	src: ['**/*.jpg'],
					// 	dest: 'public/img/',
					// 	ext: '.jpg',
					// 	extDot: 'first'
					// },
					// {
					// 	expand: true,
					// 	cwd: 'fp/img/',
					// 	src: ['**/*.ico'],
					// 	dest: 'public/img/',
					// 	ext: '.ico',
					// 	extDot: 'first'
					// }
				/*{
					'public/img/platform/100.png': 'fp/img/platform/100.png',
					'public/img/platform/101.png': 'fp/img/platform/101.png',
					'public/img/platform/102.png': 'fp/img/platform/102.png',
					'public/img/platform/104.png': 'fp/img/platform/104.png',
					'public/img/platform/aliexpress.png': 'fp/img/platform/aliexpress.png',
					'public/img/platform/amazon.png': 'fp/img/platform/amazon.png',
					'public/img/platform/barbie.png': 'fp/img/platform/barbie.png',
					'public/img/platform/crocs.png': 'fp/img/platform/crocs.png',
					'public/img/platform/ebags.png': 'fp/img/platform/ebags.png',
					'public/img/platform/lenox.png': 'fp/img/platform/lenox.png',
					'public/img/platform/office-depot.png': 'fp/img/platform/office-depot.png',
					'public/img/platform/Saks-Fifth-Avenue.png': 'fp/img/platform/Saks-Fifth-Avenue.png',
					'public/img/platform/Under-Armour.png': 'fp/img/platform/Under-Armour.png',
					'public/img/platform/Victoria-s-Secret.png': 'fp/img/platform/Victoria-s-Secret.png',
					'public/img/platform/wish.png': 'fp/img/platform/wish.png',

					'public/img/site/1.png': 'fp/img/site/1.png',
					'public/img/site/2.png': 'fp/img/site/2.png',
					'public/img/site/3.png': 'fp/img/site/3.png',
					'public/img/site/4.png': 'fp/img/site/4.png',
					'public/img/site/AU.png': 'fp/img/site/AU.png',
					'public/img/site/DE.png': 'fp/img/site/DE.png',
					'public/img/site/UK.png': 'fp/img/site/UK.png',
					'public/img/site/US.png': 'fp/img/site/US.png',

					'public/img/case.png': 'fp/img/case.png',
					'public/img/favicon.ico': 'fp/img/favicon.ico',
					'public/img/loading.gif': 'fp/img/loading.gif',
					'public/img/login.jpg': 'fp/img/login.jpg',
					'public/img/logo-dark.png': 'fp/img/logo-dark.png',
					'public/img/logo-white.png': 'fp/img/logo-white.png'
				}*/
			}
		},

		// 清除文件(夹)
		clean: ['public/**'], // 清除public下的所有清除文件(夹)

		// 文件监听
		watch: {
			watchSass: { // 监听sass文件变动
				options: {
					// spawn: false // ...
					// event: ['added', 'deleted'], // 新增、删除
					// reload: true // 重新加载
				},
				tasks: ['sass', 'compass'],
				files: ['fp/sass/**/*.scss', 'fp/css/sass/**/*.scss']
			},

			watchLess: { // 监听less文件变动
				options: {
					spawn: false
				},
				tasks: ['less'],
				files: ['fp/css/less/**/*.less']
			},

			watchServer: { // 监听服务器
				options: {
					livereload: true // 与connect的端口一直
				},
				files: [ // 刷新指定文件
					'fp/index.html',
					'fp/js/**/*.js',
					'fp/css/**/*.css',
					'fp/img/**/*.{png,jpg,gif,ico}'
				]
			}
		},

		// sass编译
		sass: {
			// 使用前得安装Ruby
			// 启动Ruby的cmd
			// 安装sass(需要翻墙)
			
			// 可能安装源不稳定，需要多试试
			// gem sources --remove
			// gem sources -a https://rubygems.org/
			// gem sources -a http://rubygems.org/

			// gem install sass

			options: {
				sourcemap: 'none', //不生成map文件
				style: 'expanded' // 编辑样式，值为compressed时等于压缩
			},
			'fp/css/index.css': 'fp/sass/index.scss'
		},

		compass: {
			dev: {
				options: {
					sassDir: 'sass',
			        cssDir: 'css',
			        environment: 'production'
				}
			}
		},                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

		// less编译
		less: {
			'public/css/less.css': 'fp/css/less/less.less'
			/*dist: {
				files: {
					'public/css/index.css': 'fp/css/less/index.less'
				}
			}*/
		},

		// 复制文件(夹)
		copy: {
			ctrl_c: {
				files: [{
					expand: true,
					cwd: 'fp/',
					src: ['**'],
					dest: 'public/'
				}]
			}
		},

		// 文件合并
		concat: {
			options: {
				separator: ';' // 使用分号来做连接符
			},
			merge: {
				src: 'fp/js/**/*.js',
				dest: 'public/main.js'
			}
		},

		// 连接服务器
		// 需要与watch配合后同时启动
		connect: {
			options: {
				port: 8090,
				hostname: '*', //默认
				livereload: 35729
			},
			server: {
				options: {
					open: true, // 自动打开
					base: ['fp/index.html'] // 主目录
				}
			}
		},

		// 验证css语法
		csslint: {
			options: {},
			cssTest: ['public/css/**/*.css']
		},

		// 个人测试
		tTaskName: {
			targetName: [2, 4, 6, 8],
			targetName2: 'xiao ming!',
			targetName3: true
		}
	});

	// 默认任务
	grunt.registerTask('default', ['watch']);

	// 自定义任务
	grunt.registerTask('custom', 'test custom task description.', function () {
		grunt.log.write('let go ...').ok();
		// 执行其他任务
		// grunt.task.run(['jshint']); // 参数与call跟apply的用法一样
		// 使用异步
		var done = this.async();
		setTimeout(function () {
			grunt.log.writeln('run the task here.');
			grunt.task.run(['clean']);
			done();
		});
		// 检查任务是否已经执行，并没有失败
		grunt.config.requires('clean');
	});

	// 注册多任务
	grunt.registerMultiTask('tTaskName', 'register task BPR.', function () {
		// target为任务目标
		// data为目标的数据
		grunt.log.writeln(this.target + ': ' + this.data);
	});

	// 个人测试
	// 适用于动态指定运行任务
	grunt.registerTask('t', 'this is my test task.', function (args1, args2) {
		if (arguments.length === 0) {
			// name: 任务名，即t
			// 参数为任务目标target
			grunt.log.writeln(this.name + ', no args');
		} else {
			grunt.log.writeln(this.name + ', ' + args1 + ' ' + args2);
		}
	});
};
