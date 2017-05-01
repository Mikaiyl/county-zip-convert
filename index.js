#!/usr/bin/env node
'use strict';

const fs  = require('fs');
const input = Array.from(fs.readFileSync('./var/range.txt','utf-8').split('\n'));

const reduce = require('./lib/range');

input.map(reduce);
