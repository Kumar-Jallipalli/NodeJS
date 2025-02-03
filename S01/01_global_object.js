/**
    How to Write Code using Node JS..?

        1. Using Node REPL
            - REPL → Read, Evaluate, Print & Loop
            - This Node REPL is very Similar to Browser’s Console Window
            - we can go inside Node REPL  mode using `node` command in the Terminal
        2. Using Separate JS File
            - Write the Required Code in the JS file
            - Run it using `node file_name`

    Global Object
    -------------
        - In Browser,
            - The Global Object refers to `window` Object
            - This `window` Object is NOT a V8 Engine’s Object, It is Provided by Browser
            - In Browser, `this`, `self`, `frames` etc.. all point out to same `window` Object
        - In Node,
            - The Global Object refers to `global` Object
            - Similar to Browser, here also this `global` object is NOT a V8 Engine’s Object, It is Provided by Node JS
            - In Node, `this` doesn’t point to `global` Object
            - `this` in Node JS is an Empty Object `{}`
        - In Global,
            - Since, there are multiple Global Objects across all the JS Runtime Environments wrt Browsers, Node etc..
            - Open JS Foundation proposed a Standard Global Object across all the JS Runtime Environments
            - This Standard Global Object is called `globalThis`
            - `globalThis` → refers to Global Object in their Respective JS Runtime Environments
*/

console.log(global);        // refers Global Object in Node
console.log(this);          // refers to Empty Object
console.log(globalThis);    // refers to Global Object in any JS Runtime Environment


