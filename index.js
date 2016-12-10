/**
 * @file 入口模块
 * @author sparklewhy@gmail.com
 */

'use strict';

function amdWrap(content, file, conf) {
    if (file.disableWrap) {
        return content;
    }

    if (!/^\s*define\s*\(\s*/.test(content)) {
        return 'define(function (require, exports, module) {\n'
            + content + '\n});\n';
    }

    return content;
}

module.exports = exports = amdWrap;
