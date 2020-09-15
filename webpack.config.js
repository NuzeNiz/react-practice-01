const path = require('path')

const client = {
    resolve:{
        extensions:['.js','.jsx']
    },
    entry:'./client/index',
    output:{
        filename:'index.js',
        path:path.join(__dirname, 'build', 'public')
    },
    devtool:'eval-source-map',
    target:'web',
    devServer:{
        contentBase:path.join(__dirname, 'build', 'public'),
        port:8000
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env','@babel/preset-react']
                    }
                }
            }
        ]
    }
}

const server = {
    resolve:{
        extensions:['.js']
    },
    entry:'./server/index',
    output:{
        filename:'index.js',
        path:path.join(__dirname, 'build')
    },
    target:'node',
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            }
        ]
    }
}

module.exports = [client, server]