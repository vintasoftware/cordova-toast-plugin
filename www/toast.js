var obj = {};

obj.show = function(message, successCallback, errorCallback) {
    cordova.exec(
      successCallback, errorCallback,
      "MyToast", "showToast", [message]);
};

module.exports = obj;
