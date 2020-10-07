#!/usr/bin/env sh
kill $(cat .pidfile)
npm start &
npm run node-server &
