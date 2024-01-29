# HTML Form Elements
HTML provides several form elements that allow users to input data, make selections, and submit information to a server. 

CRUD 
- Create 
- Retrieve
- Update 
- Delete

1. **`<form>`:**
   - The root element for creating a form.
   - It encapsulates all the form elements.

    ```html
    <form action="/processPhotoUpload" method="POST">
        <!-- Form elements go here -->
        
    </form>
    ```

2. **`<input>`:**
   - Used to create various types of input fields.
   - Common attributes include `type`, `name`, `id`, `value`, etc.

    ```html
    <input type="text" name="username" placeholder="Username">
    ```

3. **`<textarea>`:**
   - Used for multiline text inputs.
   - Useful for longer text input, such as comments.

    ```html
    <textarea name="message" rows="4" cols="50"></textarea>
    ```

4. **`<select>`:**
   - Creates a dropdown list for selecting options.
   - Contains one or more `<option>` elements.

    ```html
    <select name="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
    </select>
    ```

5. **`<button>`:**
   - Creates a clickable button.
   - Used for triggering form submission or other actions.

    ```html
    <button type="submit">Submit</button>
    ```

6. **`<label>`:**
   - Associates a label with a form element.
   - Improves accessibility and user experience.

    ```html
    <label for="username">Username:</label>
    <input type="text" name="username" id="username">
    ```

7. **`<fieldset>` and `<legend>`:**
   - `<fieldset>` groups related form elements.
   - `<legend>` provides a caption for the `<fieldset>`.

    ```html
    <fieldset>
        <legend>Contact Information</legend>
        <!-- Form elements go here -->
    </fieldset>
    ```

8. **`<input type="radio">` and `<input type="checkbox">`:**
   - Used for radio buttons and checkboxes, respectively.

    ```html
    <input type="radio" name="gender" value="male"> Male
    <input type="radio" name="gender" value="female"> Female
    <input type="checkbox" name="subscribe" id="subscribe"> Subscribe to newsletter
    ```

9. **`<input type="file">`:**
   - Allows users to upload files.

    ```html
    <input type="file" name="fileUpload" id="fileUpload">
    ```

10. **`<input type="submit">` and `<input type="reset">`:**
   - Submit and reset buttons for the form.

    ```html
    <button type="submit" value="Submit">Submit</button>
    <button type="reset" value="Reset">Reset</button>
    ```
   - button: The button is a clickable button
   - submit: The button is a submit button (submits form-data)
   - reset: The button is a reset button (resets the form-data to its initial values)