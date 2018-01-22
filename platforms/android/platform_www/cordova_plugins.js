cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "admob.admob",
    "file": "plugins/admob/www/admob.js",
    "pluginId": "admob",
    "clobbers": [
      "window.admob"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "admob": "5.5.0"
};
// BOTTOM OF METADATA
});