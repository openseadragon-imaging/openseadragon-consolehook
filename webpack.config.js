const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/consolehook.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'openseadragon-consolehook.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
			{
                enforce: 'pre',
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
                use: {
                    loader: 'string-replace-loader',
                    options: {
						multiple: [
							{
								search: '<%= pkg.name %>',
								replace: process.env.npm_package_name,
								flags: 'g'
							},
							{
								search: '<%= pkg.version %>',
								replace: process.env.npm_package_version,
								flags: 'g'
							}
						]
					}
                }
			},
			{
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'eslint-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
};
