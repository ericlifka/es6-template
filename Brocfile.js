var babel = require('broccoli-babel-transpiler');
var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');
var compileLess = require('broccoli-less-single');

var js = babel(pickFiles('app', {
    srcDir: '/src',
    destDir: '/'
}), {});

var html = pickFiles('app', {
    srcDir: '/',
    destDir: '/',
    files: ['index.html']
});

var css = compileLess(['app/styles'], 'app.less', 'app.css', {});

module.exports = mergeTrees([js, html, css]);
