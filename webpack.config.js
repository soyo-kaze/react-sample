
var Htmlplug = require('html-webpack-plugin');
module.exports = {
    entry: "./App.js",
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    output:{
        filename: "build.js",
        path:__dirname+ "/Build"
        
    },
    plugins:[new Htmlplug(
            {
                template:'./App.html'
            }
        )
    ]
};
