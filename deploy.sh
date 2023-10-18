#!/usr/bin/env sh

# Abort on errors
set -e

# Build
npm run build

# Navigate into the build output directory
cd dist

# Place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# If you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# If you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main
git push -f git@github.com:patobottos/patobottos.github.io.git main

# If you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages
# git push -f git@github.com:patobottos/playnimgame.git main:gh-pages

cd -
