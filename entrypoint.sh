#!/bin/sh
set -ea    

echo "Build magazine..."

yarn build

echo "Starting your app..."

exec "$@"
