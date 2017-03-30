/**
 * @file 入口模块
 * @author sparklewhy@gmail.com
 */

'use strict';

var amdWrapper = require('amd-wrapper');
var url = require('url');

var amdRequireConfig = null;
function getAMDRequireConfig() {
    if (!amdRequireConfig) {
        amdRequireConfig = fis.getModuleConfig() || {};
    }
    return amdRequireConfig;
}

var requireRegExp = /\s*require\s*\(\s*(['"])([^'"]+)\1\s*\)\s*;?/g;
var styleFileRegExp = /\.(css|styl|sass|less)($|\?)/;

function clearCssRequire(content, file) {
    return content.replace(
        requireRegExp,
        function (match, quot, id) {
            if (!styleFileRegExp.test(id)) {
                return match;
            }

            var styleUrl = url.parse(id);
            var stylePath = styleUrl.pathname;
            var info = fis.project.lookup(stylePath, file);
            if (!info.file && !/^\./.test(stylePath)) {
                var depDir = fis.get('component.installDir');
                stylePath = depDir + '/' + stylePath;
                info = fis.project.lookup(stylePath);
            }

            if (!info.file || !info.file.isCssLike) {
                return match;
            }

            file.addRequire(info.id);
            if (info.file.isFile()) {
                file.addLink(info.file.subpath);
            }

            return '';
        }
    );
}

function amdWrap(content, file, conf) {
    if (file.disableWrap) {
        return content;
    }

    var result = amdWrapper(content, Object.assign({
        filePath: file.subpath.substr(1),
        requireConfig: getAMDRequireConfig,
        projectRoot: fis.project.getProjectPath(),
        componentDirName: fis.getDepDirName(),
        checkUMD: true
    }, conf || {}));

    if (conf.clearCssRequire) {
        result = clearCssRequire(result, file);
    }

    return result;
}

module.exports = exports = amdWrap;
