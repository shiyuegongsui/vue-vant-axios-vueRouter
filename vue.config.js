const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}


module.exports = {
    // publicPath:"/pages/check/",
    // outputDir: 'dist/pages/check',
    devServer: {
        port: 8088,     // 端口
    },
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    configureWebpack: {
        resolve: {
            alias: {
                '@assets': '@/assets',
                // '@components': '@/components',
                '@components': resolve('/src/components/'),
                '@views': '@/views',
                '@styles': '@/styles',
                '@plugins': '@/plugins'
            }
        }
    },
    chainWebpack: config => {
        // 移除 prefetch 插件
        config.plugins.delete('prefetch')
        // 移除 preload 插件
        config.plugins.delete('preload');
    },
    lintOnSave: true,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-px2rem-exclude')({
                        remUnit: 50,
                        exclude: /node_modules|styles/i
                    }),
                ]
            }
        }
    },
}