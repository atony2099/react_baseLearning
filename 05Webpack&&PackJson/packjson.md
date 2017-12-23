## packjson

## 干嘛的？
定义了各种依赖， 以及项目的配置信息, 可以理解为ios的cocoapods

## 怎么用

### 常用命令

> `npm install module-name -save`
>
> 安装模块，同时 自动把模块和版本号添加到dependencies部分是我们生产环境中需要的依赖。
>
> 环境。
>
> `spm install module-name -save-dve` 安装模块，自动把模块和版本号添加到devdependencies部分
>
> 比如：grunt-contrib-uglify, 我们用它来混淆js文件，它们不会被部署到生成


### 结构
```
{
	"name": "Hello World",
	"version": "0.0.1",
	"author": "张三",
	"description": "第一个node.js程序",
	"keywords":["node.js","javascript"],
	"repository": {
		"type": "git",
		"url": "https://path/to/url"
	},
	"license":"MIT",
	"engines": {"node": "0.10.x"},
	"bugs":{"url":"http://path/to/bug","email":"bug@example.com"},
	"contributors":[{"name":"李四","email":"lisi@example.com"}],
	"scripts": {
		"start": "node index.js"
	},
	"dependencies": {
		"express": "latest",
		"mongoose": "~3.8.3",
		"handlebars-runtime": "~1.0.12",
		"express3-handlebars": "~0.5.0",
		"MD5": "~1.2.0"
	},
	"devDependencies": {
		"bower": "~1.2.8",
		"grunt": "~0.4.1",
		"grunt-contrib-concat": "~0.3.0",
		"grunt-contrib-jshint": "~0.7.2",
		"grunt-contrib-uglify": "~0.2.7",
		"grunt-contrib-clean": "~0.5.0",
		"browserify": "2.36.1",
		"grunt-browserify": "~1.3.0",
	}
}
```

- scripts : 命令的快捷方式
- dependencies字段指定了项目运行所依赖的模块
- devDependencies指定项目开发所需要的模块。





[package.json文件](http://javascript.ruanyifeng.com/nodejs/packagejson.html)

[package.json文件](http://javascript.ruanyifeng.com/nodejs/packagejson.html)
