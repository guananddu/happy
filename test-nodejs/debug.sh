#!/usr/bin/env bash

# 启动调试服务
node-inspector & > /dev/null

# 开始调试
~/work/build/node/bin/node-v6.3.1-darwin-x64/bin/node debug ~/work/git/happy/test-nodejs/main.js