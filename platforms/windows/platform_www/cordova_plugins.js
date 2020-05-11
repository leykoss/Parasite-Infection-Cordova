cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-screen-orientation.screenorientation",
      "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
      "pluginId": "cordova-plugin-screen-orientation",
      "clobbers": [
        "cordova.plugins.screenorientation"
      ]
    },
    {
      "id": "cordova-plugin-screen-orientation.CDVOrientationProxy",
      "file": "plugins/cordova-plugin-screen-orientation/src/windows/CDVOrientationProxy.js",
      "pluginId": "cordova-plugin-screen-orientation",
      "merges": [
        ""
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-screen-orientation": "3.0.2"
  };
});