## JavaScript Operators
The basic operators in JavaScript allow you to perform operations on variables and values. 

1. **Arithmetic Operators:**
   - `+` Addition
   - `-` Subtraction
   - `*` Multiplication
   - `/` Division
   - `%` Modulus (remainder of division)

   Example:
   ```javascript
   let result = 10 + 5; // Addition
   let difference = 10 - 5; // Subtraction
   let product = 10 * 5; // Multiplication
   let quotient = 10 / 5; // Division
   let remainder = 10 % 3; // Modulus (remainder of 10 divided by 3)
   ```

2. **Assignment Operators:**
   - `=` Assigns a value to a variable
   - `+=` Adds a value to a variable and assigns the result
   - `-=` Subtracts a value from a variable and assigns the result
   - `*=` Multiplies a variable by a value and assigns the result
   - `/=` Divides a variable by a value and assigns the result

   Example:
   ```javascript
   let x = 5; // Assignment
   x += 3; // x is now 8 (add 3 to x)
   x -= 2; // x is now 6 (subtract 2 from x)
   x *= 4; // x is now 24 (multiply x by 4)
   x /= 3; // x is now 8 (divide x by 3)
   ```

3. **Comparison Operators:**
   - `==` Equal to
   - `!=` Not equal to
   - `>` Greater than
   - `<` Less than
   - `>=` Greater than or equal to
   - `<=` Less than or equal to

   Example:
   ```javascript
   let a = 5;
   let b = 10;
   console.log(a == b); // Outputs: false
   console.log(a != b); // Outputs: true
   console.log(a > b); // Outputs: false
   console.log(a < b); // Outputs: true
   console.log(a >= b); // Outputs: false
   console.log(a <= b); // Outputs: true
   ```

4. **Logical Operators:**
   - `&&` Logical AND
   - `||` Logical OR
   - `!` Logical NOT

   Example:
   ```javascript
   let x = 5;
   let y = 10;
   console.log(x < 10 && y > 5); // Outputs: true (both conditions are true)
   console.log(x < 10 || y < 5); // Outputs: true (at least one condition is true)
   console.log(!(x < 10)); // Outputs: false (negates the result of the condition)
   ```

5. **Unary Operators:**
   - `++` Increment
   - `--` Decrement

   Example:
   ```javascript
   let count = 5;
   count++; // Increment count by 1
   console.log(count); // Outputs: 6
   count--; // Decrement count by 1
   console.log(count); // Outputs: 5
   ```
