/**
 * Created by isam 
 */

var path = require('path');
var webpack = require('webpack');


module.exports = {
    // 入口
    entry: {
        main: './src/main.js',
        vendors: ['vue', 'vue-router',]
    },
    // 输出
    output: {
        path: path.join(__dirname, './dist')
    },
    // 加载器
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style!css!autoprefixer?modules&localIdentName=[name]__[local]-[hash:base64:5]'},
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192'},
            { test: /\.(html|tpl)$/, loader: 'html-loader' },
           
            /*{ test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' },
            { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' },*/
        ]
    },
    // 转es5
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components'),
             'vue': 'vue/dist/vue.js',
            
        }
    },
    
    plugins: [
      
                 
    ],
    
};