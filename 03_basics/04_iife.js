// Immediately Invoked Function Expressions (IIFE)
//An IIFE creates a private scope:
//problem name collsion , accidently overwrites. solved by iife

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

