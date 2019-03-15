#!/usr/bin/env bash

git add -A;
read -p "提交内容：" msg
git commit -m $msg

read -p "分支名称：" branch
git push origin $branch

echo "npm version <newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease"
read -p "版本号：" version
npm version $version
git add -A
git commit -m 'version update'

read -p "发布版本标签（latest）：" tag
if [ $tag ];then
  npm publish --tag $tag
else
  npm publish
fi
cnpm sync npm-dyq-test
