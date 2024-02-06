# CSS Positioning 
CSS (Cascading Style Sheets) positioning is a crucial aspect of web development that allows you to control the layout and placement of HTML elements on a webpage. There are several CSS positioning properties that help you achieve different layouts. Here are the main ones:

1. **Static Positioning:**
   - Default positioning for all elements.
   - Elements are positioned according to the normal flow of the document.

    ```css
    .example {
        position: static;
    }
    ```

2. **Relative Positioning:**
   - Positioned relative to its normal position.
   - Can be moved left, right, up, or down, without affecting the normal flow.

    ```css
    .example {
        position: relative;
        top: 10px;
        left: 20px;
    }
    ```

3. **Absolute Positioning:**
   - Positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
   - The element is removed from the normal flow of the document.

    ```css
    .example {
        position: absolute;
        top: 30px;
        left: 40px;
    }
    ```

4. **Fixed Positioning:**
   - Positioned relative to the viewport.
   - The element stays in the same place even if the page is scrolled.

    ```css
    .example {
        position: fixed;
        top: 50px;
        left: 60px;
    }
    ```

5. **Sticky Positioning:**
   - Acts like a relative position until an element crosses a specified point during scrolling.
   - Then, it becomes fixed.

    ```css
    .example {
        position: sticky;
        top: 70px;
    }
    ```

6. **Z-Index:**
   - Specifies the stack order of an element.
   - Elements with a higher z-index value are displayed in front of elements with a lower z-index value.

    ```css
    .example {
        z-index: 2;
    }
    ```