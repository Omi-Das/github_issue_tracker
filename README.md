1.What is the difference between var, let, and const? 

Ans: Difference between var, let and const:

    var: 
         The old way to declare variables in JavaScript . It can be redeclared and updated and it is function-scoped

    let:
        A modern way to declare variable . It can be updated but can not be redeclared in the same scope. It is block-scoped.

    const: 
          Used for variables whose value should not change. It cannot be updated or redeclared and is also block-scoped


          Example:

          var a = 10 ;
          let b = 20 ;
          const c = 30 ;


          -----------------------

 2.What is the spread operator (...)?

   Ans:

   The spread operator is used to expand elements of an array or object into individual items.

   Example :
     const numbers = [1,2,3];
       const newNumbers = [...numbers, 4, 5];

       Result : [1,2,3,4,5];

       --------------------

3.What is the difference between map(), filter(), and forEach()? 

  Ans:
    difference between map(), filter(), and forEach():

    i) map() -> Creates a new array by transforming each element
    ii) filters() -> Create a new array with elements that pass a condition
    iii) forEach() -> Runs a function for each element but does not return new  array

    Example : 
    const numbers = [1,2,3,4];

    numbers.map(n => n*2); //[2,4,6,8]
    numbers.filter(n => n>2); // [3,4]
    numbers.forEach(n => console.log(n)); //prints numbers

       -----------------------

4.What is an arrow function?
 
 Ans:
   
   An arrow function is a shorter way to write a function in JavaScript

   Example :
       
       const add = (a,b) => a + b;

       It is commonly used in Modern Javascript and callback function .

       -----------------------

5.What are template literals? 

  Ans:
    
    Template literals are a way to write strings using backticks().
    
    Dynamic way and also allowing embedding variables inside strings easily.

    Example :

    const name = 'Omi' ;
    const message = `Hello, my name is ${name}`;

    console.log(message);

    Output:

    hello, my name is Omi
       