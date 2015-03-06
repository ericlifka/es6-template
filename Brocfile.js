var babel = require('broccoli-babel-transpiler');
var pickFiles = require('broccoli-static-compiler');

var tree = pickFiles('src', {
    srcDir: '/',
    destDir: 'lib'
});

module.exports = babel(tree, {});
