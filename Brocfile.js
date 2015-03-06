var babel = require('broccoli-babel-transpiler');
var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');

var js = babel(pickFiles('app', {
    srcDir: '/src',
    destDir: '/'
}), {});

var html = pickFiles('app', {
    srcDir: '/',
    destDir: '/',
    files: ['index.html']
});

module.exports = mergeTrees([js, html]);
