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
       