const path = require('path');
const VueRouteWebpackPlugin = require('@xiyun/vue-route-webpack-plugin');

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/template/' : '/',
    devServer: {
        port: 3000, // 端口
        overlay: {
            warnings: true,
            errors: true
          }
    },
    pluginOptions: {
        'style-resources-loader': {
          preProcessor: 'less',
          patterns: [path.resolve(__dirname, "src/assets/css/public.less")] // 引入全局样式变量
        }
    },
    // lintOnSave: false // 取消 eslint 验证
    configureWebpack: {
        plugins: [
            new VueRouteWebpackPlugin({
                // 文件扩展名，默认只查询 .vue 类型的文件，根据实际需要可以进行扩展
                // extension: ['vue', 'js', 'jsx'],
                prefix: './',
                // 插件扫描的项目目录，默认会扫描 'src/views' 目录
                directory: 'src/views',
                // 生成的路由文件存放地址，默认存放到 'src/router/children.js'
                routeFilePath: 'src/router.js',
            })
        ]
    }
}