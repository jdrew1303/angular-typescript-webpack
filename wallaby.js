// This file is to be used with wallaby.js test runner. It allows 
// you to run your tests in realtime as you type. I've inclued 
// this for developers who want to purchase their own version. 
// Its main advantage is that there is little to no feedback loop 
// timing. You can if you wish use the trail version of it but be 
// warned that it shuts off every now and then and you may have to 
// restart your IDE each time.
var babel = require('babel-core');
var wallabyWebpack = require('wallaby-webpack');
var webpack = require('webpack');

var webpackPostprocessor = wallabyWebpack({
    module: {
        loaders: [
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'raw'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }
        ]
    }
});

module.exports = function () {
    return {
        files: [
            {pattern: 'src/**/*.html', load: false},
            {pattern: 'src/**/*.scss', load: false},
            {pattern: 'src/**/*.css', load: false},
            {pattern: 'src/**/*.ts', load: false},
            {pattern: 'src/**/*.spec.ts', ignore: true},
            {pattern: 'node_modules/**/*.js', ignore: true}
        ],

        tests: [
            {pattern: 'src/**/*.spec.ts', load: false},
            {pattern: 'node_modules/**/*.js', ignore: true}
        ],

        preprocessors: {
            '**/*.js': file => babel.transform(file.content, {sourceMap: true})
        },
        "testFramework": "jasmine",
        postprocessor: webpackPostprocessor,
        bootstrap: function () {
            window.__moduleBundler.loadTests();
        }
    };
};
