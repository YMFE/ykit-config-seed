'use strict'

exports.usage = '<命令描述>';

exports.setOptions = function(optimist) {
    // 如果需要支持命令参数，写成如下形式
    optimist.alias('f', 'foobar');
    optimist.describe('f', '<配置项描述>');
};

exports.run = function(options) {
    // 当执行 ykit test -f 或 ykit test --foobar 时，foobar 为 true
    var foobar = options.f || options.foobar
    console.log('foobar:', foobar);
    console.log('Finished ykit test.');
};
