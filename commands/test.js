'use strict'

var path = require('path');
var fs = require('fs-extra');

exports.usage = '初始化项目环境';

exports.setOptions = function(optimist) {
    // 如果需要支持命令参数，写成如下形式
    optimist.alias('t', 'test');
    optimist.describe('t', '<配置项描述>');
};

exports.run = function(options) {
    // let testParam = options.t || options.test
    // 当执行 ykit <命令> -t 或 ykit <命令> --test 时，testParam 为 true，后续可根据参数执行更多操作

    // 初始化脚手架
    var cwd = process.cwd();
    var boilerplatePath = path.join(__dirname, '../boilerplate/');

    fs.copySync(path.join(boilerplatePath + '/src/'), path.join(cwd + '/src/'));
    fs.copySync(path.join(boilerplatePath + '/index.html'), path.join(cwd + '/index.html'));
    fs.copySync(path.join(boilerplatePath + '/ykit.seed.js'), path.join(cwd + '/ykit.seed.js'));

    console.log('setup finished.');
};
