var pickFiles = require('broccoli-static-compiler');
var babelTranspiler = require('broccoli-babel-transpiler');
var fastBrowserify = require('broccoli-fast-browserify');
var mergeTrees = require('broccoli-merge-trees');
var compileLess = require('broccoli-less-single');

var libTree = pickFiles('app/src', {
    files: ['**/*.js'],
    srcDir: '.',
    destDir: '.'
});

var babelTree = babelTranspiler(libTree, {
    sourceMap: 'inline'
});

var browserifyTree = fastBrowserify(babelTree, {
    bundles: {
        'app.js': {
            entryPoints: ['./app.js']
        }
    },
    browserify: {
        debug: true
    }
});

var vendor = pickFiles('bower_components', {
    srcDir: '.',
    destDir: '.',
    files: [
        'lodash/lodash.js'
    ]
});

var html = pickFiles('app', {
    srcDir: '/',
    destDir: '/',
    files: ['index.html']
});

var styles = compileLess(['app/styles'], 'app.less', 'app.css', {});

module.exports = mergeTrees([html, styles, browserifyTree, vendor]);
