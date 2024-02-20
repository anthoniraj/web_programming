# Understanding console.log() in JavaScript

**Introduction:**
In JavaScript, `console.log()` is a powerful tool for developers to output information to the browser console. 

1. **Basic Usage:**
- **Syntax:** `console.log(value1, value2, ..., valueN)`
- **Description:** The `console.log()` method accepts one or more arguments, which can be strings, variables, objects, or any other JavaScript values. It outputs these values to the browser console.
- **Example:**
  ```javascript
  let name = "Claudio";
  let age = 20;
  console.log("Name:", name, "Age:", age);
  // Output: Name: Claudio Age: 20
  ```
The `console.log()` method in JavaScript provides various options for formatting the output. These formatting options can make the output more informative and readable. Here are some commonly used formatting options:

2. **String Substitution (%s):** You can use `%s` as a placeholder in the log message string, and provide the corresponding values as additional arguments to `console.log()`. This is particularly useful when logging variables.

   Example:
   ```javascript
   let name = "Claudio";
   console.log("Hello, %s!", name);
   // Output: Hello, Claudio!
   ```
3. **Numeric Substitution (%d):** Similar to `%s`, you can use `%d` as a placeholder for numeric values.
   Example:
   ```javascript
   let age = 20;
   console.log("Age: %d", age);
   // Output: Age: 20
   ```
4. **Object Substitution (%o or %O):** You can use `%o` or `%O` as a placeholder to log an object. `%o` will display the object in a collapsed format, while `%O` will display it in an expanded format.
   Example:
   ```javascript
   let person = { name: "Claudio", age: 20 };
   console.log("Person: %o", person);
   // Output: Person: { name: "Claudio", age: 20 }
   ```
5. **Styling (%c):** You can apply CSS styling to log messages using `%c`. This can be useful for highlighting specific messages or adding emphasis.
   Example:
   ```javascript
   console.log("%cError: Something went wrong!", "color: red; font-weight: bold;");
   // Output: Error: Something went wrong! (in red and bold)
   ```
6. **Grouping (%c):** You can group related log messages together using `console.group()` and `console.groupEnd()`. This helps in organizing the console output, especially for complex debugging scenarios.

   Example:
   ```javascript
   console.group("User Details");
   console.log("Name: Claudio");
   console.log("Age: 20");
   console.groupEnd();
   ```
   Output:
   ```
   User Details
      Name: Claudio
      Age: 20
   ```
