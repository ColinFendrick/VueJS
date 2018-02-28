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
- `v-on:[arg]` listens to an argument to listen to DOM events (click, mouseenter, hover, etc)

#### Don't use the v-html directive unless the source is sanitary. Cross-site scripting attacks

We can access DOM information inside of the Vue instance itself (essentially sending information from DOM back to the Vue instance via DOM listeners)
- This idea is further enhanced with the `$event` variable present in method calls in our HTML which can send event object down to the methods


#### Modifiers
- Called after `v:on[arg].modifier`
- `.stop` is important to prevent propogation (is the same as `stopPropogation()` from event object)
- also `.prevent` is `preventDefault()`

Here’s the full list of key modifier aliases:

- .enter
- .tab
- .delete (captures both “Delete” and “Backspace” keys)
- .esc
- .space
- .up
- .down
- .left
- .right

### Two-way Binding
Use `v-model` syntax to bind data both ways

### Computed object
Use the computed output to get calculated data.
- Computed is used like a data object (not an invoked function)
- Computed properties analyzes code and only recalculates as needed