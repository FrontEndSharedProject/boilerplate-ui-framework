(function () {
  var u = navigator.userAgent;
  if (/MSIE \d|Trident.*rv:/.test(u)) {
    var polyfillScript = document.createElement("script");
    polyfillScript.type = "text/javaScript";
    polyfillScript.src =
      "https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.12.1/polyfill.min.js";
    document.getElementsByTagName("head")[0].appendChild(polyfillScript);
  }
})();
