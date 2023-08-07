const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭语法检查

  //第一种：开启代理服务器
  //这种方式不能控制什么时候走代理，如果8080代理服务器本身就有需要请求的文件名，则不会转发给后端服务器，而直接返回自身的文件
  //也不能配置多个代理
  /* devServer: {
      proxy: 'http://localhost:5000'

      //devServer.proxy指向后端开发环境 API 服务器的字符串
  } */

  //第一种：开启代理服务器
  devServer: {
    proxy: {
      //想走代理就在请求地址的前缀（紧跟端口号）加api
      '/api': {
        //url:后端开发环境 API 服务器
        target: 'http://localhost:5000',
        //重要配置,路径重写,转发到后端服务器时把/api匹配成''
        pathRewrite:{'^/api':''},
        ws: true,  //websocket
        changeOrigin: true //true 后端端口号是什么，代理服务器就是什么，用于控制请求头中的host值
      },
      '/demo': {
        //url:后端开发环境 API 服务器
        target: 'http://localhost:5001',
        //重要配置,路径重写,转发到后端服务器时把/api匹配成''
        pathRewrite:{'^/demo':''},
        ws: true,  //websocket
        changeOrigin: true //true 后端端口号是什么，代理服务器就是什么，用于控制请求头中的host值
      },

      //精简版
      /* '/foo': {
        target: '<other_url>'
      } */
    }
  }
  
  
})
