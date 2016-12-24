/**
 * @file 入口模块
 * @author sparklewhy@gmail.com
 */

'use strict';

var amdWrapper = require('amd-wrapper');

var amdRequireConfig = null;
function getAMDRequireConfig() {
    if (!amdRequireConfig) {
        amdRequireConfig = fis.getModuleConfig() || {};
    }
    return amdRequireConfig;
}

function amdWrap(content, file, conf) {
    if (file.disableWrap) {
        return content;
    }
    return amdWrapper(content, Object.assign({
        filePath: file.subpath.substr(1),
        requireConfig: getAMDRequireConfig,
        projectRoot: fis.project.getProjectPath(),
        componentDirName: fis.getDepDirName(),
        checkUMD: true
    }, conf || {}));
}

module.exports = exports = amdWrap;
