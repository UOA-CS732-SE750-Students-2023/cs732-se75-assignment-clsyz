## Outline:
1. Component life cycle
2. Data sharing between components
3. ref reference
4. Case
---

1. Component life cycle: 
    1. Official introduction to the life cycle:
        * URL: https://cn.vuejs.org/guide/essentials/lifecycle.html
        <img src="../../image/lifecycle.png">
    2. When the beforeCreate life cycle function is created, the initialization event and life cycle function have been completed, but the props/data/methods of the component have not been created yet, and they are all in an unavailable state.
    3. When the created life cycle function is created, the props/data/methods of the component have been created and are in a usable state. But the template structure in the component is not yet generated. This function is very useful, we can use it to get data.
    4. The beforeMount life cycle function will render the compiled HTML structure in memory to the browser. There is no DOM structure for the current component in this browser yet.
    5. The mounted lifecycle function has successfully rendered the html structure in memory to the browser. At this point, the browser already contains the DOM structure of the current component.
    6. The beforeUpdate lifecycle function will re-render the template structure of the component according to the latest data after the change.
    7. The updated life cycle function has updated the re-rendering of the component DOM structure.
    8. The beforeDestroy life cycle function will destroy this component, but it has not been destroyed at this time, and the component is still in a normal state
    9. When the life cycle function is destroyed, the component has been destroyed, and the corresponding DOM structure of this component in the browser has been completely removed
    10. Sample code: Lifecycle_testing.vue component of the vue_second project in example07_Vue_05

2. Data sharing between components:
    1. Relationship between components: Common component relationships are divided into the following two types:
        * Father-son relationship
        * Brotherhood
    2. Data sharing between parent and child components:
        * Parent -> Child shared data: need to use custom attribute
        * Child -> parent pass value: need to use custom events
    3. Data sharing between sibling components:
        * In vue2.x, use EventBus to share data between sibling components
        * The usage steps of EventBus:
            + Create eventBus.js module and share a Vue instance object externally
            + On the data sender side, call the bus.$emit('event name', the data to be sent) method to trigger a custom event
            + On the data receiver side, call the bus.$on('event name', event handler) method to register a custom event
    4. Sample code: the first_div1.vue component and the second_div.vue component of the vue_second project in example07_Vue_05

3. ref reference:
    1. What is ref reference?
         * ref is used to assist developers to obtain references to DOM elements or components without relying on jQuery.
         * Each vue component instance contains a $refs object, which stores the reference of the corresponding DOM element or component. By default, a component's $refs points to an empty object.
    2. Use ref to refer to DOM elements:
         Use the ref attribute to add a reference name to the corresponding DOM
    3. Use ref to refer to the component instance:
         Use the ref attribute to add a reference name to the corresponding "component"
    4. Sample code: the ref_div.vue component of the vue_second project in example07_Vue_05
    5. Realize the on-demand display of the text box:
        * We can use a Boolean value: see_input to control the on-demand switching of text boxes and buttons in the component.
        * After the text box is displayed, in general, we need to select it with the mouse to get the focus, but if we want the text box to get the focus immediately when it appears, we can add a ref reference and call the .focus( ) method.
        * The function of the this.$nextTick(cb) method is to postpone the execution of the cb callback until the next DOM update cycle.
            + Example code: App.vue of the vue_second project in example07_Vue_05.
        
---
# vue_second

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
