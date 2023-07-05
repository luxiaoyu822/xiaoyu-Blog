# 搭建个人网站

搭建网站的技术有很多，本文以使用vitepress静态网站生成器为例，介绍从生成网站到发布的过程

## 网站构建

[VitePress](https://vitepress.dev/)是一个静态网站生成器（SSG），专为构建快速、以内容为中心的网站而设计。
简而言之，VitePress 获取您用Markdown编写的源内容，对其应用主题，并生成可以轻松部署到任何地方的静态 HTML 页面。

### 安装vitepress

在安装之前，你需要保证以下条件：

- nodejs的版本要求为16或以上
- 通过命令行接口访问VitePress的终端
- 支持Markdown语法的文本编辑器（官方推荐使用VSCode）

`本文以在linux mint 20操作系统，和以Webstorm为开发环境为例`

在某个目录下新建一个名称为`my-vitepress`文件夹，然后右键在终端中打开，输入 `npm init`，可以根据提示输入名称，
也可以回车到底结束引导。随后会创建一个`package.json`文件，接着在终端中输入`npm install -D vitepress`，作用是将
vitepress安装到开发环境的依赖中。接着在终端中输入`npx vitepress init`，输入后会直接进入vitepress初始引导界面

