// load the jest utilities
// ask the jest to map with all ES 6 modules
// and transpile them, manage the module dependencies and module
// mapping used in Test files
const { pathsToModuleNameMapper } = require('ts-jest/utils');
// load all settings from the TypeScript configuration
const { compilerOptions } = require('./tsconfig.app.json');
module.exports  =   {  
    preset:   'jest-preset-angular', // load the adapater
    roots:  ['<rootDir>/src/'], // start searching for filoes from root
    testMatch:  ['**/+(*.)+(spec).+(ts|js)'], // test file extensions
    setupFilesAfterEnv:  ['<rootDir>/src/test.ts'], // setup env file
    collectCoverage:  true, // code coverage
    coverageReporters:  ['html'], // generate the report in HTML
    coverageDirectory:   'coverage/my-app', // folder for coverage
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, { prefix: '<rootDir>/' })
};