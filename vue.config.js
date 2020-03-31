module.exports = {
    devServer: {
        open: true,
        port: 8090,
        proxy: {
            '/': {
                target: 'http://localhost:5000/',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/': '/'
                }
            }
            
        }
    }
    configureWebpack:{
        externals:{
            'vue':'Vue',
            'vue-router':'VueRouter',
            'axios':'axios',
            'highlight.js':'hljs',
            'marked':'marked',
            'nprogress':'NProgress',
            'element-ui':'ELEMENT'
        }
    }
}