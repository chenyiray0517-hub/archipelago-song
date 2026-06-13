#!/bin/bash
# 部署網頁版到 GitHub Pages:build 後把 dist 強推到 gh-pages 分支
# 用法:bash scripts/deploy.sh
set -e
cd "$(dirname "$0")/.."
npm run build
cd dist
rm -rf .git
git init -b gh-pages
git -c user.name="deploy" -c user.email="deploy@local" add -A
git -c user.name="deploy" -c user.email="deploy@local" commit -m "deploy $(date +%Y-%m-%d_%H:%M)"
git push -f https://github.com/chenyiray0517-hub/archipelago-song.git gh-pages
rm -rf .git
echo "✅ 已部署:https://chenyiray0517-hub.github.io/archipelago-song/"
