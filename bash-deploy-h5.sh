#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

echo -e '运行前，确保打包相应版本'
echo -e '当前版本 \033[32m H5'

branch=$(git symbolic-ref --short -q HEAD)
buidlDir=$(pwd)/unpackage/dist/build/h5

git push origin $branch:$branch
pnpx gh-pages -d $buidlDir
echo -e '\033[32m 已部署成功至sanm-zh.github.io \n'

git remote set-url origin git@gitee.com:sanm-zh/uni-app-demo.git
git push origin $branch:$branch
pnpx gh-pages -d $buidlDir
echo -e '\033[32m 已部署成功至sanm-zh.gitee.io'
echo -e '\033[32m 如果不是gitee pro用户请手动更新gitee pages服务 \n'

git remote set-url origin git@github.com:Sanm-ZH/uni-app-demo.git
