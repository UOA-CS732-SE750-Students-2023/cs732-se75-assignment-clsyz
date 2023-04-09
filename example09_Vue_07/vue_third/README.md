## Outline:
1. Dynamic components
2. Slot
3. Custom Instructions
---
1. Dynamic components：
    1. Concept: A dynamic component is a component that dynamically switches between showing and hiding
    2. Vue provides a built-in component specifically for dynamic component rendering.
    3. Use keep-alive to maintain the state, because we found that the counter will be reloaded when the component is changed, that is, the component will be killed, so we use keep-alive to maintain the state.
         * include attribute: used to specify that only components with matching names will be cached. Multiple component names are separated by English commas

2. Slots:
    1. Slot (Slot) allows developers to define uncertain parts that are expected to be specified by users as slots when packaging components.
    2. When packaging components, developers can define slots through the <slot> element, thereby reserving content placeholders for users.
    3. v-slot:
        * You can fill the content into the slot with the specified name, we use v-slot. Where v-slot: followed by the name of the slot
        * But we need to pay attention that the v-slot directive cannot be used directly on the element, we need to use it on the template tag.
        * You can use # instead of v-slot:
   4. Scoped slots:
        1. The scope slot is actually a slot with data, that is, a slot with parameters. Simply put, it is the parameter provided by the child component to the parent component. This parameter is only used in the slot, and the parent component can be used according to the child component The passed slot data is used to display and fill the slot content in different ways.

3. Custom directive:
    1. Vue allows developers to customize instructions
    2. Two categories, namely:
        *  Private custom directive:
            *  In each vue component, private custom directives can be declared under the directives node, the sample code is as follows:
              ```
                directives: {
                    //Customize the instruction name
                    color: {
                    //Fixed notation
                    //The el element in the parameter represents the DOM element to which the instruction is bound.
                        bind(el) {
                        el.style.color= 'greenyellow'
                                }
                    }
                }
            ```
            * When using custom commands, you need to add v- prefix, for example: v-color
            * When declaring a custom command, you can receive the parameter value of the command through the second parameter in the formal parameter, and when using the custom command in the template structure, you can pass the equal sign (=) to the current command Dynamically bind parameter values
            * update function: Because the bind function can only be called when the directive is bound to the element for the first time, the bind function will not be triggered when the DOM is updated. The update function will be called every time the DOM is updated.
            * Function abbreviation: If the logic in the bind and update functions is exactly the same, the custom instruction can be written in the form of function abbreviation
        * Global custom directive
            * Global custom directives should be declared in the main.js file.
            * The sample code is as follows:
            ```
                Vue.directive('wholecolor', {
                    bind(el, binding) {
                        el.style.color = binding.value
                    },
                    update(el, binding) {
                        el.style.color = binding.value
                    }
                })
            ```
---
# vue_third

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
