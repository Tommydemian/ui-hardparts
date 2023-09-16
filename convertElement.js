const name = 'Tommy';

const entities = ['div', `Hi, ${name}!`];

const convert = (arr) => {
    const element = document.createElement(arr[0]);
    element.textContent = arr[1];
    return element;
};

console.log(convert(entities));