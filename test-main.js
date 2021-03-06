var testPaths = {
    // Controllers
    'helloWorldControllerTest': '../test/controllers/helloWorldControllerTest',
    // Services
    // Directives
},  tests = Object.keys(window.__karma__.files).filter(function(file) {
    return (/(spec|Test)\.js$/i.test(file));
}).map(function(test) {
    var returnVal = false;
    Object.keys(testPaths).map(function(path){
        if (testPaths[path] === test.replace('/base', '..').replace('.js', '')) {
            returnVal = path;
        }
    });
    return returnVal;
}),
    paths = {
    'd3': '../scripts/d3',
    'jquery': '../scripts/jquery',
    'angular': '../scripts/angular',
    'angularMocks': '../scripts/angular-mocks',

    // Modules
    'servicesModule': './services/module',
    'directivesModule': './directives/module',
    'controllersModule': './controllers/module',

    // Controllers
    'testController': './controllers/testController',
    'ordersController': './controllers/ordersController',
    'helloWorldController': './controllers/helloWorldController',
    'allordersController': './controllers/allordersController',
    'customersController': './controllers/customersController',

    // Directives
    'barsChartDirective': './directives/barsChartDirective',
    'blueBarChartDirective': './directives/blueBarsChartDirective',
    'chartDirective': './directives/chartDirective',
    'svDirectiveTools': './directives/svDirectiveTools',
    'customTableDirective': './directives/customTableDirective',
    'helloWorldDirective': './directives/helloWorldDirective',

    // Templates
    'templateTools': './directives/templates/templateTools',
    'barChartTemplate': './directives/templates/barChart',

    // Services
    'testService': './services/testService',
    'routeResolver': './services/routeResolver',
    'helloWorldService': './services/helloWorldService',

    // Mocks
    'serviceModuleMock': '../test/mocks/servicesModuleMock',
    'controllerModuleMock': '../test/mocks/controllersModuleMock',
    'directivesModuleMock': '../test/mocks/directivesModuleMock',
    'helloWorldServiceMock': '../test/mocks/helloWorldServiceMock',
};

// We're extending the paths object with the elements in testPaths
Object.keys(testPaths).forEach(function(key) {
    paths[key] = testPaths[key];
});

require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base/app',
    paths: paths,
    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
        },
        'angularRoute': ['angular'],
        'angularAnimate': ['angular'],
        'angularMocks': ['angular'],
        'd3': {
            exports: 'd3'
        }
    },
    // dynamically load all test files
    deps: tests,
    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});

console.log(tests);