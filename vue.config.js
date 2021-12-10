module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                // '@' 是 './src' 的别名，vue-cli 默认配置
                'assets': '@/assets',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
                'common': '@/common'
            }
        }
    },
}
