'use strict';
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

var handleInput = function () {
    post = jsInput.value;
};

document.addEventListener('DOMContentLoaded', () => {
    jsInput.focus();
    console.log('dom fully loaded and parsed');
});

dataToView();

// setInterval(dataToView, 15);

    

