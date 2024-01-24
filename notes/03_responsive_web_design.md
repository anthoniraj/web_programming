# Responsive Web Design (RWD) 
- Responsive Web Design is about creating web pages that look good on all devices
- Media queries are used in web development to apply different styles for achieving this RWD
```css
/* Styles for screens smaller than 600 pixels (typical for mobile phones) */
@media only screen and (max-width: 600px) {
  body {
    font-size: 14px;
  }
}
```
- Media Queries for ALL Devices
```css
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {...}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {...}
```

- You can also combime min and max width
```css
/* Styles for screens between 600px and 1200px */
@media only screen and (min-width: 600px) and (max-width: 1200px) {
  body {
    font-size: 16px;
  }
  /* Additional styles for screens between 600px and 1200px */
}
```
- When creating a media query specifically for printing, you can use the print media type. This allows you to define styles that will be applied when a user prints a web page. Here's an example of a media query for printing:
```css
@media print {
  /* Your styles for printing go here */
  body {
    font-size: 12pt; /* Adjust font size for print */
  }
  
  /* Additional styles for printing */
}

```