## Why Vue as opposed to React/Angular?

- Smaller than other frameworks
- Better runtime performance

## Vue instances control their own template of code that they then output to the screen

- `el` controls which html element is selected
- `data` has custom data object which can be accessed in the controlled html
- `this` is scoped magically to the top of the data

## Commands
- passed to elements for when they are instantiated through the `method` attribute of the new Vue object

VueJS creates a template based on HTML code, stores it locally, then renders DOM. So template syntax, etc., is acceptable, and gets transpiled through VueJS.

## Interacting with the DOM
- We can use methods and data objects in VueJS from our HTML code itself
- Can access properties inside of the Vue object through `this` keyword

### Directives:
- Directives are instructions are to do something lol.
- For example, `vbind:[arg]` will bind the arg of the html element to the Vue instance data, so we can send dynamic data to HTML elements

#### Don't use the v-html directive unless the source is sanitary. Cross-site scripting attacks