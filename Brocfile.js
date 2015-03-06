var pickFiles = require('broccoli-static-compiler');
var babelTranspiler = require('broccoli-babel-transpiler');
var fastBrowserify = require('broccoli-fast-browserify');
var mergeTrees = require('broccoli-merge-trees');
var compileLess = require('broccoli-less-single');

var srcTree = pickFiles('app/src', {
    files: ['**/*.js'],
    srcDir: '.',
    destDir: './src'
});

var vendorTree = pickFiles('bower_components', {
    srcDir: '.',
    destDir: './vendor',
    files: [
        'lodash/lodash.js'
    ]
});

var babelTree = babelTranspiler(srcTree, {
    sourceMap: 'inline'
});

var browserifyTree = fastBrowserify(mergeTrees([babelTree, vendorTree]), {
    bundles: {
        'app.js': {
            entryPoints: ['./src/app.js']
        },
        'vendor.js': {
            entryPoints: ['./vendor/**/*.js']
        }
    },
    browserify: {
        debug: true
    }
});

var html = pickFiles('app', {
    srcDir: '/',
    destDir: '/',
    files: ['index.html']
});

var styles = compileLess(['app/styles'], 'app.less', 'app.css', {});

module.exports = mergeTrees([html, styles, browserifyTree]);
