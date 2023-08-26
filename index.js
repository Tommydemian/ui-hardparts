let post = '';

const jsInput = document.querySelector('input');

const jsDiv = document.querySelector('.down-div');
jsDiv.textContent = post;
console.log(jsDiv); // misrepresentative!

const handleInput = () => {
    // post takes string input value => **post works as a temp variable here**
    post = jsInput.value;
    // div takes string value from post
    jsDiv.textContent = post;
};

//* .oninput => setter method => set's a handler => to handle user input interaction
jsInput.oninput = handleInput;