# sliu822 235113319
---
# Vue learning
---

1. I have learned the knowledge of Vue framework development, my homework includes my process of learning Vue framework and an example, the example contains most of the knowledge points I have learned.

2. I use Vue and Webpack in my assignment


3. Each folder corresponds to a different knowledge point, and each folder has a text analysis.
---  
# What to learn:
1. Related concepts of front-end engineering
2. Common usage of Webpack
3. Package release
4. Source Map
5. Basic usage steps of Vue
6. Commands commonly used in Vue
7. Vue-devtools debugging tool
8. Filters and Listeners
9. Computed property usage
10. Basic usage of axios
11. vue-cli installation and use
12. Registration and use of components
13. Component props custom attributes
14. Resolve component style conflicts
15. Component life cycle
16. Communication between components (data sharing)
17. Use ref to refer to DOM elements and component instances
18. Basic use of $nextTick
19. Use of dynamic components
20. Use of slots (default slots, named slots, scoped slots)
21. Custom directives
22. Use of Eslint
23. Basic configuration and use of Vue-router
24. Routing Redirection
25. Nested routing, dynamic routing
26. Programmatic navigation, routed navigation guard
---
## The difference and advantages and disadvantages of vue and react:

1. Vue and React have a lot in common:
    * Data Driven View：
        + In the era of jQuery, developers need to frequently operate the DOM to achieve page effects and interactions; both Vue and React solve this problem, and both use data-driven view methods to hide the frequent operations of DOM operations.
    * Componentization
        + Both React and Vue follow the idea of componentization, divide the page into some components, and the combination and nesting of components form the final web interface.
    * Virtual DOM
        + Both Vue and React use the Virtual DOM + Diff algorithm.

2. The difference between Vue and React:
    * Different core ideas:
        + Because the positioning of vue development is to reduce the difficulty of front-end development as much as possible, so the main features of vue: flexible and easy-to-use progressive framework, data interception/proxy, it is more sensitive and accurate to detect changes in data.

        + React's positioning from the beginning is to propose new ideas for UI development, and what React wants to do is to subvert the front-end development method in a better way. So React advocates functional programming (pure components), immutable data and one-way data flow.

    * Differences in component writing:
        + React’s recommended approach is JSX + inline style, that is, writing all HTML and CSS into javascript, that is, all in js. The method recommended by Vue is the single-file component format of template (simple and easy to understand, easy to understand from the traditional front-end), that is, html, css, and js are written in the same file (vue also supports JSX writing). This difference is partly due to the different core ideas of the two.

    * The diff algorithm is different:
        + The core Diff algorithm of Vue2 adopts the algorithm of double-end comparison, and compares from both ends of the old and new children at the same time, and uses the key value to find reusable nodes, and then performs related operations. Compared with React's Diff algorithm, it can reduce the number of moving nodes in the same situation, reduce unnecessary performance loss, and is more elegant.

    * Responsive principles are different:
        + Vue: Vue relies on collection, automatic optimization, and variable data. Vue recursively listens to all attributes of data and modifies them directly. When the data changes, automatically find the referenced component and re-render.

        + React: React is based on a state machine, manually optimized, and the data is immutable. It needs setState to drive the new state to replace the old state.

    * Other differences:
        + The difference between the APIs of the two is also quite large. In order to make it easier to use, Vue introduces concepts such as instructions and filters, such as watch and computed. React has fewer APIs.

---
## Matters need attention:
---
###  In the later study, I used Vue-cli, starting from example06_Vue_04. I have deleted the node_modules folder and package-lock.json file when uploading, so the dependencies need to be reinstalled before running.

1. Go to the project directory and open the terminal.

2. First run:
   ```
   npm install
   ```
3. Then run the following code:
   ```
   $env:NODE_OPTIONS="--openssl-legacy-provider"
   ```
4. Finally run:
   ```
   npm run serve
   ```
5. Notice:
    * If it is found to be a problem with the npm cache, we can clear the npm cache：
     ```
     npm clean cache -f
     ```
    * If there is no router dependency, you can use the following code:
    ```
    npm i vue-router@3.5.2 -S
    ```