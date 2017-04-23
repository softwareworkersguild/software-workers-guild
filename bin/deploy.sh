rm -rf ./build
wintersmith build
cd ./build
git init .
git add .
git commit -m "Deploy";
git push "git@github.com:softwareworkersguild/software-workers-guild.git" master:gh-pages --force
rm -rf .git