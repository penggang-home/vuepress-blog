#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'www.bookbook.cc' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f  https://github.com/penggang-home/penggang-home.gitub.io.git master:gh-pages

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# 请把 penggang-home/blog-two.git 换成你的项目地址
# git push -f git@github.com:penggang-home/blog-two.git master:gh-pages

cd -