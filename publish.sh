#!/usr/bin/env bash

git add -A;
read -p "提交内容:" msg
git commit -m $msg

echo "npm version <newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease"
read -p "版本号：" version
npm version $version

read -p "发布版本标签（latest）" tag
npm publish --tag $tag || latest
