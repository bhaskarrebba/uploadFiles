#!/usr/bin/env sh
set -x
kill $(cat .pidfile)
npm start &
npm run node-server &