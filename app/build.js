({
    appDir: "./webroot",
    baseUrl: "./js",
    mainConfigFile: './webroot/js/require-config.js',
    dir: "./webroot/dist",
    optimize: "uglify2",
    optimizeCss: "standard",
    optimizeAllPluginResources: true,
    inlineText: true,
    removeCombined: true,
    findNestedDependencies: true,
    preserveLicenseComments: false,
    stubModules: ['text']
})