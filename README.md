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
