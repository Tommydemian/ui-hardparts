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

### The DOM:
- About the *List*:
1. its not actually a list, its actually a object.
2. Its a representation/simplifed version of what you see on screen, thus is known as a **MODEL**, because it models the document page.
3. stored in an object format in C++

``` the DOM is a representation model of the document page stored in an object format in C++.
```
