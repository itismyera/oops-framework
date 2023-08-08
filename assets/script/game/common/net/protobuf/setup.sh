#!/bin/bash
pbjs -t static-module -r creator3 -w commonjs --es6 --no-verify --force-number "./protoMsg/*.proto" -o ./dist/compiled.js
pbts -m -o ./dist/compiled.d.ts ./dist/compiled.js