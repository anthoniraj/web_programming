# HTML (HyperText Markup Language)
- Author Anthoniraj Amalanathan

## What is HTML?
HTML (HyperText Markup Language) is a markup language that 
- creates content of a web page
- tells web browsers how to structure the web page

## Anatomy of an HTML element
- HTML consists of a series of elements
- An element includes `opening tag` with some `attributes`, enclosed text `content`, and a `closing tag`.

![html](images/anatomy-of-an-html-element.png)

1. **Document Type Declaration (DOCTYPE):**
   - Specifies the version of HTML being used.

   ```html
   <!DOCTYPE html>
   ```

2. **HTML Element:**
   - The root element that wraps all the content on the page.

   ```html
   <html>
      <!-- Content goes here -->
   </html>
   ```

3. **Head Element:**
   - Contains meta-information about the HTML document, such as the title, character set, styles, and scripts.

   ```html
   <head>
      <title>Your Page Title</title>
      <meta charset="UTF-8">
      <meta name="keywords" content="Web development, HTML, CSS, JavaScript">
	  <meta name="description" content="A brief overview of HTML and its elements.">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <meta http-equiv="refresh" content="30">
   </head>
   ```

4. **Body Element:**
   - Contains the actual content of the HTML document, including text, images, links, and other elements.

   ```html
   <body>
      <!-- Content goes here -->
   </body>
   ```

5. **Heading Elements:**
   - Used to define headings of different levels (h1 to h6).

   ```html
   <h1>This is a Heading 1</h1>
   <h2>This is a Heading 2</h2>
   <!-- ... -->
   <h6>This is a Heading 6</h6>
   ```

6. **Paragraph Element:**
   - Represents a paragraph of text.

   ```html
   <p>This is a paragraph of text.</p>
   ```

7. **Anchor Element (Link):**
   - Creates hyperlinks to other pages or resources.

   ```html
   <a href="https://www.example.com">Visit Example.com</a>
   ```

8. **List Elements:**
   - Used for creating ordered (ol) or unordered (ul) lists.

   ```html
   <ul>
      <li>Item 1</li>
      <li>Item 2</li>
   </ul>

   <ol>
      <li>Item 1</li>
      <li>Item 2</li>
   </ol>
   ```

9. **Image Element:**
   - Embeds images into the document.

   ```html
   <img src="image.jpg" alt="Description of the image">
   ```

## Semantic Elements
Semantic elements in HTML are tags that carry meaning about the structure and content of a webpage. 
- They help define the purpose and role of different parts of the document, making it more meaningful for both browsers and developers. 
- Semantic elements improve the accessibility, search engine optimization (SEO), and overall clarity of your HTML code. Here are some commonly used semantic elements:

![semantic](images/noraml_vs_semantic_elements.png)

1. **`<header>`:**
   - Represents the header of a section or a page. Typically contains headings, logos, navigation menus, and other introductory content.

   ```html
   <header>
      <h1>Website Title</h1>
      <nav>
         <!-- Navigation menu goes here -->
      </nav>
   </header>
   ```

2. **`<nav>`:**
   - Defines a navigation menu. It's often used within the `<header>` or `<footer>` elements to structure the navigation of a webpage.

   ```html
   <nav>
      <ul>
         <li><a href="/">Home</a></li>
         <li><a href="/about">About</a></li>
         <li><a href="/contact">Contact</a></li>
      </ul>
   </nav>
   ```

3. **`<main>`:**
   - Represents the main content of the document. It should not include headers, footers, or sidebars that are part of the main template.

   ```html
   <main>
      <!-- Main content goes here -->
   </main>
   ```

4. **`<article>`:**
   - Defines a self-contained piece of content that could be distributed and reused independently, such as a news article or a blog post.

   ```html
   <article>
      <h2>Article Title</h2>
      <!-- Article content goes here -->
   </article>
   ```

5. **`<section>`:**
   - Represents a generic section of a document. It is often used to group related content together and can include headings, paragraphs, and other structural elements.

   ```html
   <section>
      <h2>Section Title</h2>
      <!-- Section content goes here -->
   </section>
   ```

6. **`<aside>`:**
   - Represents content that is tangentially related to the content around it. It is often used for sidebars or content that complements the main content.

   ```html
   <aside>
      <!-- Additional content goes here -->
   </aside>
   ```

7. **`<footer>`:**
   - Represents the footer of a section or a page. Typically contains copyright information, links to related documents, and other concluding content.

   ```html
   <footer>
      <p>&copy; 2024 My Website</p>
      <!-- Additional footer content goes here -->
   </footer>
   ```

###  Inline elements and Block-level elements
In HTML, elements can be categorized into two main types based on their display behavior: inline elements and block-level elements.

1. **Block-level Elements:**
   - Block-level elements typically start on a new line and stretch across the full width of their container. They create "blocks" or "boxes" of content and are often used to structure the main parts of a webpage, such as headings, paragraphs, and div containers.

   Examples of block-level elements:
   - `<div>`
   - `<p>`
   - `<h1>`, `<h2>`, ..., `<h6>`
   - `<ul>`, `<ol>`, `<li>`
   - `<table>`, `<form>`

   ```html
   <div>
      <h2>This is a block-level heading</h2>
      <p>This is a block-level paragraph.</p>
   </div>
   ```

2. **Inline Elements:**
   - Inline elements, on the other hand, do not start on a new line, and they only take up as much width as necessary. They flow within the content and are often used for small pieces of content or to apply styles to specific parts of the text.

   Examples of inline elements:
   - `<span>`
   - `<a>`
   - `<strong>`, `<em>`
   - `<img>`
   - `<br>`

   ```html
   <p>This is an <strong>inline</strong> element within a paragraph.</p>
   ```

   Inline elements can be nested inside block-level elements, and vice versa.

### List of common HTML block-level and inline elements:

### Block-level Elements:

1. `<address>`
2. `<article>`
3. `<aside>`
4. `<blockquote>`
5. `<canvas>`
6. `<dd>` (definition description)
7. `<div>`
8. `<dl>` (definition list)
9. `<dt>` (definition term)
10. `<fieldset>`
11. `<figcaption>`
12. `<figure>`
13. `<footer>`
14. `<form>`
15. `<h1>`, `<h2>`, ..., `<h6>` (headings)
16. `<header>`
17. `<hgroup>`
18. `<hr>` (horizontal rule)
19. `<li>` (list item)
20. `<main>`
21. `<nav>`
22. `<noscript>`
23. `<ol>` (ordered list)
24. `<output>`
25. `<p>` (paragraph)
26. `<pre>` (preformatted text)
27. `<section>`
28. `<table>`
29. `<tfoot>` (table footer)
30. `<ul>` (unordered list)
31. `<video>`

### Inline Elements:

1. `<a>` (anchor)
2. `<abbr>` (abbreviation)
3. `<acronym>` (acronym, deprecated in HTML5)
4. `<b>` (bold)
5. `<bdi>` (bidirectional isolation)
6. `<bdo>` (bidirectional override)
7. `<br>` (line break)
8. `<cite>` (citation)
9. `<code>` (code)
10. `<data>`
11. `<dfn>` (definition)
12. `<em>` (emphasis)
13. `<i>` (italic)
14. `<img>` (image)
15. `<kbd>` (keyboard input)
16. `<label>`
17. `<mark>`
18. `<q>` (inline quotation)
19. `<rp>` (ruby parentheses)
20. `<rt>` (ruby text)
21. `<ruby>`
22. `<s>` (strikethrough)
23. `<samp>` (sample output)
24. `<small>`
25. `<span>`
26. `<strong>` (strong importance)
27. `<sub>` (subscript)
28. `<sup>` (superscript)
29. `<time>`
30. `<u>` (underline)
31. `<var>` (variable)
32. `<wbr>` (word break opportunity)

