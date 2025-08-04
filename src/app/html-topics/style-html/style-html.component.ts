import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-style-html',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './style-html.component.html',
})
export class StyleHtmlComponent {
  htmlStylesContent = `
**# HTML Styles**

There are three ways to add styles to HTML elements: inline styles, internal CSS, and external CSS.

## 1. **Inline Styles**
Using the style attribute directly in HTML elements.

\`\`\`html
<p style="color: blue; font-size: 16px;">Blue colored text</p>
<div style="background-color: yellow; padding: 10px;">Yellow background</div>
\`\`\`

## 2. **Internal CSS**
Using the style tag in the HTML document head.

\`\`\`html
<head>
  <style>
    /* Element Selector */
    p {
      color: red;
      font-size: 18px;
    }

    /* Class Selector */
    .highlight {
      background-color: yellow;
      padding: 10px;
    }

    /* ID Selector */
    #header {
      background-color: black;
      color: white;
    }
  </style>
</head>
\`\`\`

## **3. External CSS**
Linking an external CSS file.

\`\`\`html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
\`\`\`

## Common CSS Properties

### Text Styling
\`\`\`css
.text-styles {
  color: #333333;
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  line-height: 1.5;
}
\`\`\`

### Box Model
\`\`\`css
.box-model {
  margin: 10px;
  padding: 15px;
  border: 1px solid black;
  width: 200px;
  height: 100px;
}
\`\`\`

### Background
\`\`\`css
.background {
  background-color: #f0f0f0;
  background-image: url('image.jpg');
  background-size: cover;
  background-position: center;
}
\`\`\`

### Display & Position
\`\`\`css
.layout {
  display: flex;
  position: relative;
  float: left;
  z-index: 1;
}
\`\`\`

## Responsive Design

### Media Queries
\`\`\`css
/* Mobile devices */
@media screen and (max-width: 768px) {
  .responsive {
    width: 100%;
    font-size: 14px;
  }
}
\`\`\`

## CSS Flexbox Example
\`\`\`css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item {
  flex: 1;
  margin: 10px;
}
\`\`\`

## CSS Grid Example
\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.grid-item {
  padding: 20px;
  text-align: center;
}
\`\`\`

## Best Practices

1. Use External CSS for larger projects
2. Follow consistent naming conventions
3. Organize CSS properties logically
4. Use CSS classes for reusable styles
5. Implement responsive design principles
6. Minimize use of inline styles
7. Comment your CSS code

## Example Page Structure
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
  <style>
    /* Internal styles here */
  </style>
</head>
<body>
  <div class="container">
    <header id="header">
      <h1>Website Title</h1>
    </header>
    
    <nav class="navigation">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
    
    <main class="content">
      <h2 class="title">Welcome</h2>
      <p class="text">Content goes here...</p>
    </main>
  </div>
</body>
</html>
\`\`\`
`;
}
