var wallabyWebpack = require('wallaby-webpack');
var AureliaPlugin = require('aurelia-webpack-plugin').AureliaPlugin;
var DefinePlugin = require('webpack').DefinePlugin;

var wallabyPostprocessor = wallabyWebpack({
  entryPatterns: ['test/unit/setup.js', 'test/unit/**/*.spec.js'],
  resolve: {
    alias: {
      'kendo-ui/js': '@progress/kendo-ui/js',
      'kendo-ui': '@progress/kendo-ui/js/kendo.core.js'
    }
  },
  plugins: [
    new DefinePlugin({AURELIA_WEBPACK_2_0: undefined}),
    new AureliaPlugin({
      aureliaApp: undefined
    })
  ]
});

module.exports = function () {
  return {
    files: [
      { pattern: 'src/**/*.ts', load: false },
      { pattern: 'test/unit/setup.ts', load: false}
    ],

    tests: [{
      pattern: 'test/unit/**/*.spec.ts', load: false
    }],

    env: {
      kind: 'chrome'
    },

    postprocessor: wallabyPostprocessor,

    setup: function () {
      window.__moduleBundler.loadTests();
    },

    debug: true
  };
};

