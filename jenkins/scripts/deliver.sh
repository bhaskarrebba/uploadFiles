#!/usr/bin/env sh

npm run build
set -x
npm start &
sleep 1
echo $! > .pidfile
set +x

