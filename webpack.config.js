
module.exports = {
    // context: __dirname + "/webpack-dev-server --host 0.0.0.0 --port 80",
    devtool: 'inline-source-map',
    entry: ['babel-polyfill', './src/index'],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-0'],
                },
            },
            {
                test: /\.(gif|png)$/,
                loader: 'url?limit=1000',
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules',
            },
            {
                test: /\.html$/,
                loader: 'raw',
            },
        ],
    },
    externals: {
        "jquery": "jQuery"
    },
    watch: true,
    quiet: true
};
