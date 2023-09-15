// Data
let post = ''; 
let jsInput: HTMLInputElement; 
let jsDiv: HTMLDivElement | string;
 
export const dataToView = () => { // affect view
    jsInput = document.createElement('input');
    jsDiv = post === 'Will' ? '' : document.createElement('div');  

    jsInput.value = post;
    if (jsDiv instanceof HTMLDivElement) jsDiv.textContent = post;
    jsInput.oninput = handleInput;

    document.body.replaceChildren(jsInput, jsDiv);
};

const handleInput = () => {
    post = jsInput.value;
};

setInterval(dataToView, 15);