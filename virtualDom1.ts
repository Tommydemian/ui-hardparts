'use strict';

type NodeDraft = [string, string, (() => void)?]

let text = ''; let jsInput: HTMLElement; let jsDiv: HTMLElement; let vDom:NodeDraft[];

const createVDom = (): NodeDraft[] => {
    return [
        ['input', text, handle],
        ['div', `hello ${name}`],
    ];
};

const handle = () => text = (jsInput as HTMLInputElement).value;

const updateDom = () => {
    vDom = createVDom();
    jsInput = convert(vDom[0]); // jsInput
    jsDiv = convert(vDom[1]); // jsDiv
    document.body.replaceChildren(jsInput, jsDiv); 
}; 

const convert = (node: NodeDraft): HTMLElement => {
    const el = document.createElement(node[0]);
    if (el instanceof HTMLDivElement) {
        el.textContent = node[1];
    } 
    (el as HTMLInputElement).value = node[1];
    if (typeof node[2] === 'function') {
        el.oninput = node[2] as (ev: Event) => void;
    }
    return el;
};

updateDom();


// React:
// const [vDomContent, setVDomContent] = useState(Array<NodeDraft>);

// const createVDom = () => {
//     setVDomContent([
//         ['input', name, handle],
//         ['div', `hello ${name}`],
//     ]);
// };

// Vue:
// const vDomContent = ref<Array<NodeDraft>>([]);

// const createVDom = () => {
//     vDomContent.value([
//         ['input', name, handle],
//         ['div', `hello ${name}`],
//     ]);
// };