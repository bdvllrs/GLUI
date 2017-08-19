let path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "css/[name].css"
});

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: 'js/app.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            },
            {
                test: /\.(png|svg|jpg)$/,
                use: [
                    'file-loader?name=[name].[ext]&outputPath=images/'
                ]
            },
            {
                test: /\.(scss|css)$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader",
                        options: {
                            includePaths: [path.resolve(__dirname, 'src/scss')]
                        }
                    }],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader?name=[name].[ext]&publicPath=../fonts/'
                ]
            },
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        extractSass
    ]
};

