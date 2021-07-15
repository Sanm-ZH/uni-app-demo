#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

branch=$(git symbolic-ref --short -q HEAD)

git push origin $branch:$branch
echo -e '\033[32m 已推送至 github \n'

git remote set-url origin git@gitee.com:sanm-zh/uni-app-demo.git
git push origin $branch:$branch
echo -e '\033[32m 已推送至 gitee \n'

git remote set-url origin git@github.com:Sanm-ZH/uni-app-demo.git
