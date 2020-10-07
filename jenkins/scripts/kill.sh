#!/usr/bin/env sh
kill $(cat .pidfile)
npm start 
sleep 3
echo $! > .pidfile
npm run node-server &
