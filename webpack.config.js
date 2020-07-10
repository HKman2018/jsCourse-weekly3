const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    resolve: {
        extensions: ['.vue', '.mjs', '.js', '.json'],
        alias: {
            vue$: 'vue/dist/vue.js', // 相比於 vue.esm.js 小 30% 左右
        },
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',

            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        // 創建實例 (第三步)
        new VueLoaderPlugin(),
    ],
}