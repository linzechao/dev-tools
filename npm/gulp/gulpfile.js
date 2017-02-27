var gulp = require('gulp'),
	htmlmin = require('gulp-htmlmin'), // 压缩html
	jshint = require('gulp-jshint'), // js语法检测
	del = require('del'); // 删除文件(夹)

// 压缩html
gulp.task('minify', function () {
	// 无参数
	// return gulp.src(['fp/page/*.html', 'fp/page/libs/*.html'])
	var src = ['fp/page/libs/alert.html'],
		dest = 'public/page/libs';
	return gulp.src(src)
		.pipe(htmlmin({
			collapseWhitespace: true, // 删除空格
			removeComments: true, // 删除html注释
			processScripts: ['text/template'], // 压缩模板
			minifyJS: true, // 压缩js
			minifyCSS: true // 压缩css
		}))
		.pipe(gulp.dest(dest));
});

// js语法检测
gulp.task('jshint', function () {
	return gulp.src(['fp/scripts/*.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('YOUR_REPORTER_HERE'));
});

// 删除操作
gulp.task('clean', function (cb) {
	del(['public/**'], cb);
});

// 默认操作，gulp不带任何任务
gulp.task('default', ['clean:all'], function() {
	console.log('default...');
});
