# CSS (Cascading Style Sheets)
It allows you to control the layout, design, and appearance of web pages (written in HTML), making them visually appealing and user-friendly. A CSS rule typically includes a selector and a declaration block. Here's the basic syntax:

```css
selector {
    property: value;
    /* Additional properties and values */
}
```

There are three main types of CSS style sheets:

1. **Inline Styles:**
   - **Usage:** Inline styles are applied directly to individual HTML elements within the "style" attribute.
   - **Example:**
     ```html
     <p style="color: blue; font-size: 16px;">This is a paragraph with inline styles.</p>
     ```

2. **Internal Styles (or Embedded Styles):**
   - **Usage:** Internal styles are defined within the HTML document, typically in the `<head>` section, using the `<style>` tag.
   - **Example:**
     ```html
     <head>
         <style>
             p {
                 color: green;
                 font-size: 18px;
             }
         </style>
     </head>
     <body>
         <p>This is a paragraph with internal styles.</p>
     </body>
     ```

3. **External Styles:**
   - **Usage:** External styles are defined in a separate CSS file and linked to the HTML document using the `<link>` tag.
   - **Example:**
     ```html
     <!-- In the HTML document -->
     <head>
         <link rel="stylesheet" type="text/css" href="styles.css">
     </head>
     ```
     ```css
     /* In the external CSS file (styles.css) */
     p {
         color: red;
         font-size: 20px;
     }
     ```
   - **Note:** External styles provide a more modular and maintainable approach, as the styles can be reused across multiple HTML pages.

## Selectors
**Selectors** are patterns used to select and style HTML elements. They define which elements in an HTML document should be affected by the styles you specify. There are various types of selectors:

1. **Element Selector:** Selects all instances of a particular HTML element. For example:
    ```css
    p {
        color: blue;
    }
    ```

2. **Class Selector:** Selects elements with a specific class attribute. Classes are denoted by a period (.) followed by the class name. For example:
    ```css
    .highlight {
        background-color: yellow;
    }
    ```

3. **ID Selector:** Selects a single element with a specific id attribute. IDs are denoted by a hash (#) followed by the id name. For example:
    ```css
    #content {
        font-size: 24px;
    }
    ```

4. **Descendant Selector:** Selects an element that is a descendant of another specified element. For example:
    ```css
    div p {
        font-style: italic;
    }
    ```

5. **Attribute Selector:** Selects elements based on their attribute values. For example:
    ```css
    input[type="text"] {
        border: 1px solid #ccc;
    }
    ```

## Box Model:

The **box model** is a fundamental concept in CSS that defines the layout and rendering of elements on a web page. Each HTML element is treated as a rectangular box with the following components:

1. **Content:** The actual content of the box.
2. **Padding:** Clears an area around the content inside the box. It is transparent and typically has a background color.
3. **Border:** A border surrounding the padding (if any). It separates the padding from the margin.
4. **Margin:** Clears an area outside the border. It is transparent and does not have a background color.

Here's a simple example of the box model in CSS:

```css
.box {
    width: 200px;
    height: 100px;
    padding: 20px;
    border: 2px solid #333;
    margin: 10px;
}
```

This CSS code applies a box model to an element with the class "box," setting its width, height, padding, border, and margin.
