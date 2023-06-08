# 常用命令分享

## git 常用命令

- `git branch -M xxx` 强制重新命名当前分支

- `git remote add origin xxxx` 将本地仓库与远程仓库关联

- `git clone` 克隆远程仓库

- `git fetch` 更新远程分支信息

- `git branch` 查看当前分支

- `git pull` 拉取远程仓库的代码合并带本地分支（更新代码）

- `git checkout -b newbranchname` 创建新分支并切换到新分支

- `git add .` 将所有文件上传到暂存区

- `git commit -m 'commit message'` 添加提交信息

- `git push` 推送到远程分支

- `git push --set-upstream origin branchname` 远程分支不存在时推送到远程分支并创建新远程分支

- `git stash` 将文件添加到暂存区

- `git log` 查看提交日志信息

- `git status` 查看当前分支的状态

- `git reset` 将当前分支回退到指定的提交版本上，并将本地文件状态重置为回退后的提交版本状态

- `git reset --soft HEAD^` 将当前分支回退到本次 commit 之前的状态

- `git config --list` 查看当前仓库的所有配置信息

## npm 常用命令

- `npm config ls` 查看配置信息

- `npm config set registry xxxx` 设置下载地址

- `npm install xx --force` 强制安装

- `npm init` 初始化npm仓库。

- `npm install` 安装所有依赖项。

- `npm install <package>` 安装特定的包。

- `npm install -g <package>` 全局安装特定的包。

- `npm install -D <package>` 将包安装到开发环境依赖

- `npm uninstall <package>` 卸载特定的包。

- `npm update` 更新所有依赖项。

- `npm update <package>` 更新特定的包。

- `npm outdated` 查看过时的依赖项。

- `npm ls` 显示所有已安装的包。

- `npm ls <package>` 显示指定包的详细信息。

- `npm search <query>` 搜索包。

- `npm run <script>` 运行脚本。
