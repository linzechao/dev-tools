document.write('It works!!!');
document.write(require('./module.js'));


// require('!style-loader!css-loader!./style.css');
// 使用webpack.config.js配置之后简化，如下
require('./style.css');


