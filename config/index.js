const fs = require('fs-extra');
const path = require('path');
const config = require('./config')
const overrideConfigFile = "loggerConfig.js";
const overrideConfigFilePath = path.join(process.cwd(), overrideConfigFile);

try {
    const customConfig = require(overrideConfigFilePath);
    config = Object.assign(config, customConfig);
} catch (ex) {
    console.log('To override default config create loggerConfig.js at root of project and paste following configs:');
    console.log(config);
}

module.exports = config;