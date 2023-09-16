# UI, the hard parts
## State, View, JavaScript, Dom & Events

- Two goals in UI engineering:
1. Display content: **state**/data so the user can `view` it.
2. Let them **interact** with it => `modify`state.

- Almost every piece of technology needs a 'visual interface' (UI) => `Visual manifestation of underlying state` => and its not one direction only, from  the state to what you see, as long as you interact with the visual interface you are changing the underlying state.

### 1st approach: reaching HTML
html tags are parsed into a list, `ordered list` and then it will be automatically converted to the screen via a **view/render engine**, 

- what lenaguage is this list going to be stored in, wel... **the one that the web browser is mostly built in**: **c++**

we dont have to worry about the individual pixels, cause ttheres a thousands of different sizes, devices available. 
All we do is:
1. List our individual elements
2. Rely on some sort of engine that figures out the exact pixels and dispays ot on the page.
`we will call it view/render engine`(for the moment and explore more lately)  

### The DOM
- About the *List*:
1. its not actually a list, its actually a object.
2. Its a representation/simplifed version of what you see on screen, thus is known as a **MODEL**, because it models the document page.
3. stored in an object format in C++

**note** a element in the DOM is called a **Node**
**note** a page/view/screen in the web is technically called **document**

> **the DOM is a representation model of the document page stored in an object format in C++.**

### Rendering HTML under the hood
the DOM is simply a list stored as an object in c++ 

with all the items in the list/DOM we proceed to auto-display render them in the web browsers page trough the leyout/render engine.

## WEB-CORE:
### DOM + layout/render engine 
- layout/render engine:
1. layout engine: analize exactly **how to place** the set of elements in our list into this particular web screen view/screen/ device. => position
2. render engine: **determine the pixels** => creates de bit map for the graphic card 

- Webcore:
With the DOM and the `layout/render engine` 

##  CSS - Adding CSSS OM for styling and formatting

- CSS can actually store data: i.e are you seeing or not seeing this element.

 css linking will create whats called a **CSS Object Model** => which is representation of the CSS styles loaded on a page, also built in c++

> the layout engine and the render engine will use both models, analize both of em => DOM and CSSOM, and determine what to display in our pixels/ content in the page/screen.

# Display content ✔️ => HTML & CSS
we saw HTML, browser will use the *HTML parser* in order to create the DOM => object built in c++ whic models the document (technical term/word for page/screen).
with CSS we have a valuable adding => CSS object model => object also build in c++ representation of the CSS styles that will/should be displayed on screen.
And now the introduction of the 2 engines which allow us to render content per se,
1. layout engine: position/place of elements in screen.
2. render engine: form the pixel map which will be send to the graphic card.

Both of this engines will analize the DOM and the CSS OM in order to determine what to display in our pixels/ content on screen.

**note** even tho both engines exist individually, they both form part of a bigger rendering engine who is responsible for the execution 

# GOAL 2: Enable the user to interact with the content they see and change it (presumably change the underlying data - otherwise it would be inconsistent)

## Enable user to change content they see - but *problem*
`mantra: in order to UI to change => some data/state needs to change` 

> As a general rule, if you see something changes,the underlying data wich supports what you see, has to change too.

{
data changes => ui changes 
ui changes => data changes
}

problem is that yet, your data is stored in c++ but you cant run c++ code so basically, theres no way to interact with it. Unless you use JavaScript.

## We have to use JavaScript to:
1. create & save content/data
2. Run code to change it

### Data (and code to change it) is only available in JavaScript

- We have data now - but how do we **display** it? With WebIDL & WebCore

- WebIDL: brige between JS runtime and web features/web APIS (including the DOM). 
WebIDL stands for Interface. Description. Language
Standarized format on how you gonna access other web features from the browser.

```javascript
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
// .oninput => setter method => set handler => for handling users input
jsInput.oninput = handleInput;
```

jsDiv and jsInput are **accesor objects**
 in first case they are naturally objects, and they are not the DOM node value itself, they are objects pointing to the node value, which gives us access to the node element. They point to a space in memory, therefore the identifier value is populated with the data in that space in memory. **In colloquial terms, people/we say jsDiv is a reference to the DOM element** 

## User interaction and DOM updates
DOM API.Event API => **if (user interacts) trigger the handler function**, to run in JS callback queue

**IMPORTANT**:
1. every single change of data is going to require this back & forth between JavaScript and the DOM =>*C++ Object* 
2. There's no permanent bond between data here (JavaScript) and data here (DOM =>*C++ Object*)
3. Every change requires a *.getter* or a *.setter*

-------- Goal2 resolved => let users change what they see
# Data binding in the UI
## One way data binding
As we continue to expand and refine our UI, thousands of user interactions with the UI are possible. So how can we maintain control over the flow? 
- Why would we?
Well, we need to provide the better UX possible, and that's only possible if we have control over what's happening. We need predicatabiliy. nuclear point of our approach will be: `**In order for the UI to change, underlying data needs to change**`
                            (i) if no data changes, no UI change.
                            (ii) if UI changes, data changes. 

Every UI (element) change relays on underlying {data change} => data-binding , 

**Note** If what we see depends strictly on data state, you can imagine we gon relay heavy on ternarys.
  `if (data looks A) display A / if (data looks B) display B / if (data looks C) display C / etc..`

## Separating Data & View updates

This golden rule, which is indeed a resctriction used to predict render, data.
 Can be thought as a design pattern
 
## Understanding the dataToView function

```javascript
let post = undefined; // Data

const jsInput = document.querySelector('input');

const jsDiv = document.querySelector('.down-div');
jsDiv.textContent = post;
console.log(jsDiv); // misrepresentative!

const dataToView = () => { // affect view!
    jsDiv.textContent = post == undefined ? "What's up?" : post;
};

const handleClick = () => {
    post = ''; // Update data
    dataToView(); // Convert data to view
};

const handleInput = () => {
    post = jsInput.value; // Update Data
    dataToView(); // Convert data to view
};

//* .oninput => setter method => set's a handler => to handle user input interaction
jsInput.oninput = handleInput;
jsInput.onclick = handleClick;

dataToView();
```
Everything being display runs from DATA & *conditionals* over that data to determine what's going to be rendered


>Don't get it twisted by the daily usage of the mental model. This is a super efficient restrictive and competent design pattern to render pixels and have underlaying data which represent those pixels state.


## Virtual DOM
- **Most misunderstood concept in UI development**.
- Enables us to have a more visual (or declarative) experience of coding UIs with JavaScript.
- Requires significant optimizations (*diffing*, *reconciliation*) to be performative.  

Let's see this code:

```javascript
// vars
let post = ''; // Data

const jsInput = document.querySelector('input');
const jsDiv = document.querySelector('.down-div');

const dataToView = () => { // Affect view
    jsDiv.textContent = post; 
    jsInput.value = post; 
};

const handleInput = () => {
    post = jsInput.value;
    if (post == 'Will') jsDiv.remove(); // View

};

jsInput.oninput = handleInput;

setInterval(dataToView, 15);
```

There's was a time in UI development where evaluating empty val on data as a condition to show or not content on screen not heard of, but with this shift of paradigm in wich everything **you see o not** is the consecuence of the state of underlying data. 
- A div not showing up is still data / presentational causing view or in this case is `no data causing no view, but still dependent on underlying data`

In this way we reach what's called PRESENTATIONAL components => their only job is to render data

UI component: Function that associates, describes, captures in full the relationship between underlying data in JavaScript and what the users see and how the user can act on that data. `description in whole of the content, what the users sees, how it depends on underlying data and how the user is able to act on wht they see and change data, thus change content`


### String interpolation gives as "visual" code:
```javascript
let name = 'Jo';

// Imperative way:
let textToDisplay = 'Hello, ';
textToDisplay.concat(name);
textToDisplay.concat('!');
// Hello, Jo!

// Alternative with template literals / Declarative way:
textToDisplay = `Hello, ${name}!`;
// Hello, Jo!
```

As we can see in the example above, we have a imperative way, step by step to tell the machine what to do, but.. let's be honest, I'ts in any way possible that looking like the final output? Well, the honest answer is NO. And that's why *string interpolation* comes to help us in a declarative paradigm. We can almost see the end result. **That's why we make continuous remark on this aspect of reaching a semi-visual representation of the actual DOM**
`Are we reaching the virtual DOM concept?` 

> The closer our code can be to 'visual' **(mirroring what the visual/graphic output will look)** the easier for us as developers.
Could we do something similar to this with our main code creating visual elements?
 