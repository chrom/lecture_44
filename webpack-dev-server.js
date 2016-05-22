var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var compiler = webpack(
    require('./webpack.config')
);


var server = new WebpackDevServer(compiler, {
    contentBase: __dirname + '/dist'

});

server.listen(8080, "localhost", function () {
  console.log('Listening on port 8080');
});
