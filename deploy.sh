#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

echo 'blog.mr1207.cn' > CNAME

git init
git add -A
git commit -m 'deploy'

# 防止版本冲突
git pull

# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
git push -f git@github.com:Mr-z1207/blog.git master:gh-pages


cd -