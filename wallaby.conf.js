var wallabyWebpack = require('wallaby-webpack');
const path = require('path');
var AureliaPlugin = require('aurelia-webpack-plugin').AureliaPlugin;
var DefinePlugin = require('webpack').DefinePlugin;
var wallabyPostprocessor = wallabyWebpack({
  entryPatterns: ['test/unit/setup.js', 'test/unit/**/*.spec.js'],
  resolve: {
    alias: {
      // 'kendo-ui/js': 'kendo-ui-core/js',
      'kendo-ui/js/kendo.notification': 'kendo-ui-core/js/kendo.notification.js',
      'kendo-ui': 'kendo-ui-core/js/kendo.core.js',
      'module': 'webpack/lib/Module.js'
    }
  },
  "node": {
    "fs": "empty"
    },

    // module: {
    //   rules: [
    //     {test: /\.html$/i, loader: 'html-loader'},
    //     {test: /\.css$/i, issuer: [{not: [{test: /\.html$/i}]}], use: ['style-loader', 'css-loader']},
    //     {test: /\.css$/i, issuer: [{test: /\.html$/i}], use: 'css-loader'},
    //   ]
    // },

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
      //{ pattern: 'jquery/dist/jquery.js', load: false },
      { pattern: 'src/**/*.{ts, html}', load: false },
      { pattern: 'test/unit/setup.ts', load: false},
      { pattern: 'test/unit/fake-mvc-service.ts', load: false},
      { pattern: 'test/unit/test-configuration.ts', load: false}
    ],

    // modules: [
    //   path.join(wallaby.projectCacheDir, 'src')
    // ],

    //filesWithNoCoverageCalculated: ['src/**/*dal.ts'],

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
