'use strict';
exports.__esModule = true;
exports.dataToView = void 0;
// Data
var post = '';
var jsInput;
var jsDiv;
var dataToView = function () {
    jsInput = document.createElement('input');
    jsDiv = post === 'Will' ? '' : document.createElement('div');
    jsInput.value = post;
    if (jsDiv instanceof HTMLDivElement)
        jsDiv.textContent = post;
    jsInput.oninput = handleInput;
    document.body.replaceChildren(jsInput, jsDiv);
};
exports.dataToView = dataToView;
var handleInput = function () {
    post = jsInput.value;
};
setInterval(exports.dataToView, 15);
