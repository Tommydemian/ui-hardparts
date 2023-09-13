let post = '';

const jsInput = document.querySelector('input');

const jsDiv = document.querySelector('.down-div');
jsDiv.textContent = post;
console.log(jsDiv); // misrepresentative!

const dataToView = () => {
    jsDiv.textContent = post == '' ? 'Whats up hommie?' : post;
};

const handleClick = () => {
    post = '';
    dataToView();
};

const handleInput = () => {
    // post takes string input value => **post works as a temp variable here**
    post = jsInput.value;
    dataToView();
};

//* .oninput => setter method => set's a handler => to handle user input interaction
jsInput.oninput = handleInput;
jsInput.onclick = handleClick;

dataToView();
