'use strict';

let text = ''; let jsInput;

const createVDom = () => {
    return [
        ['input', text, handle],
        ['div', `hello ${name}`],
        ['div', 'Great job'],
    ];
};

const handle = () => text = jsInput.value;

const entities = createVDom();

const convert = (node) => {
    const el = document.createElement(node[0]);
    if (el instanceof HTMLDivElement) {
        el.textContent = node[1];
    } 
    el.value = node[1];
    if (typeof node[2] === 'function') {
        el.oninput = node[2];
    }
    return el;
};

// mapping over vDOM content
const domElements = entities.map(el => {
    const element = convert(el);
    return element;
});

document.body.replaceChildren(...domElements);



// const updateDom = () => {
//     vDom = createVDom();
//     jsInput = convert(vDom[0]); // jsInput
//     jsDiv = convert(vDom[1]); // jsDiv
//     document.body.replaceChildren(jsInput, jsDiv); 
// }; 


