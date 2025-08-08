#!/bin/sh

echo "window.PUBLIC_IP='${PUBLIC_IP}';" > /usr/share/nginx/html/config.js

exec nginx -g 'daemon off;'