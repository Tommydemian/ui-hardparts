'use strict';

let text = ''; let jsInput; let vDom; let entities;

const createVDom = () => {
    return [
        ['input', text, handle],
        ['div', `hello ${name}`],
        ['div', 'Great job!'],
    ];
};

const handle = () => text = jsInput.value;

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

const updateDom = () => {
    vDom = createVDom();
    // map vDom elements and store them in a gloabl Array: var entities
    entities = vDom.map(el => convert(el));
    // include elements into the DOM 
    document.body.replaceChildren(...entities);
    
};

updateDom();

