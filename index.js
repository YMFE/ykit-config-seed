'use strict';

module.exports = {
    config: {
        // 更改 Webpack 配置
        modifyWebpackConfig: function(config) {
            return config;
        }
    },
    hooks: {}, // 构建钩子，可参考 http://ued.qunar.com/ykit/docs-配置.html#hooks
    commands: [ // 自定义命令，可参考 http://ued.qunar.com/ykit/docs-配置.html#commands
        {
            name: 'test',
            module: require('./commands/test.js')
        }
    ]
}
