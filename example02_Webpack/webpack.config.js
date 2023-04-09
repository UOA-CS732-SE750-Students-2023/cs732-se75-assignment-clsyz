const path = require('path')

//1.Import the html plugin and get a constructor.
const HtmlPlugin = require('html-webpack-plugin')
//2.Creates a solid column object for the HTML plugin
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',  // Specifies the location of the original file
    filename: './index.html',   // Specifies the path to the generated file
})



module.exports = {
    mode : "development", //mode specifies the mode of the construct, development is the development environment, and production is the production environment.
    
    devtool: 'eval-source-map',  

    //entry: Specifies the file to process
    entry:path.join(__dirname, './src/index.js'),

    //output: Output file Settings
    output:{
        path: path.join(__dirname, './dist'),  //The path to the output file
        filename: 'output.js' // The output filename
    },
    //Using plugins
    plugins:[htmlPlugin],

    devServer: {
        open: true,  //When the initial packaging is complete, the browser will open automatically
        host: '127.0.0.1',  //Host address to use for real-time packaging
        port: 80,     //Port number to use for real-time packaging
    },

    module: { //
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.jpg|png|gift$/, use: 'url-loader?limit-22229'},
            //Note: You must use exclude to specify an exclusion. Third-party packages in the node_modules directory don't need to be packaged
            {test: /\.js$/, use: 'babel-loader', exclude: '/node_modules/'}
        ]
    }
}

