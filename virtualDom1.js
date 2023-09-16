'use strict';

let name = ''; let jsInput; let jsDiv; let vDom;

const createVDom = () => {
    return [
        ['input', name, handle],
        ['div', `hello ${name}`],
    ];
};

const handle = () => name = jsInput.value;

const updateDom = () => {
    vDom = createVDom();
    jsInput = convert(vDom[0]); // jsInput
    jsDiv = convert(vDom[1]); // jsDiv
    document.body.replaceChildren(jsInput, jsDiv); 
}; 

const convert = (node) => {
    const el = document.createElement(node[0]);
    if (el instanceof HTMLDivElement) {
        el.textContent = node[1];
    } 
    el.value = node[1];
    el.onInput = node[2];
    return el;
};

updateDom();
