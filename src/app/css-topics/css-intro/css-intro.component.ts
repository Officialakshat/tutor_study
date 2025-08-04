import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-css-intro',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './css-intro.component.html',
})
export class CssIntroComponent {
  cssIntroContent = `
  # CSS Introduction
  
  CSS (Cascading Style Sheets) is the language used to style and layout web pages. Learn the fundamentals of CSS and how to apply styles to HTML elements.
  
  ## What is CSS?
  
  - CSS describes how HTML elements should be displayed
  - Controls layout, formatting, and visual presentation
  - Separates content (HTML) from design (CSS)
  
  ## CSS Syntax
  
  The basic structure of CSS:
  
  \`\`\`css
  selector {
    property: value;
    property: value;
  }
  \`\`\`
  
  Example:
  \`\`\`css
  p {
    color: blue;
    font-size: 16px;
  }
  \`\`\`
  
  ## Three Ways to Insert CSS
  
  ### 1. External CSS
  
  \`\`\`html
  <!-- In HTML file -->
  <head>
    <link rel="stylesheet" href="styles.css">
  </head>
  
  <!-- In styles.css file -->
  body {
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
  }
  \`\`\`
  
  ### 2. Internal CSS
  
  \`\`\`html
  <head>
    <style>
      body {
        background-color: #f0f0f0;
        font-family: Arial, sans-serif;
      }
    </style>
  </head>
  \`\`\`
  
  ### 3. Inline CSS
  
  \`\`\`html
  <p style="color: blue; font-size: 16px;">
    This is a paragraph with inline styles
  </p>
  \`\`\`
  
  ## CSS Selectors
  
  ### Basic Selectors
  
  \`\`\`css
  /* Element Selector */
  p {
    color: red;
  }
  
  /* Class Selector */
  .highlight {
    background-color: yellow;
  }
  
  /* ID Selector */
  #header {
    font-size: 24px;
  }
  
  /* Universal Selector */
  * {
    margin: 0;
    padding: 0;
  }
  \`\`\`
  
  ### Combinators
  
  \`\`\`css
  /* Descendant Selector */
  div p {
    margin: 10px;
  }
  
  /* Child Selector */
  div > p {
    padding: 5px;
  }
  
  /* Adjacent Sibling */
  h1 + p {
    font-weight: bold;
  }
  
  /* General Sibling */
  h1 ~ p {
    color: gray;
  }
  \`\`\`
  
  ## CSS Colors and Values
  
  ### Colors
  
  \`\`\`css
  /* Different ways to specify colors */
  .element {
    color: red;                     /* Color name */
    background-color: #FF0000;      /* Hexadecimal */
    border-color: rgb(255, 0, 0);   /* RGB */
    outline-color: rgba(255, 0, 0, 0.5); /* RGBA with opacity */
  }
  \`\`\`
  
  ### Units
  
  \`\`\`css
  /* Common CSS units */
  .element {
    width: 100px;      /* Pixels */
    height: 50%;       /* Percentage */
    margin: 1rem;      /* Root em */
    padding: 1em;      /* Em */
    font-size: 1.5vw;  /* Viewport width */
  }
  \`\`\`
  
  ## CSS Box Model
  
  \`\`\`css
  .box {
    /* Content */
    width: 200px;
    height: 100px;
    
    /* Padding */
    padding: 20px;
    
    /* Border */
    border: 2px solid black;
    
    /* Margin */
    margin: 10px;
  }
  \`\`\`
  
  ## Common Properties Table
  
  | Property | Description | Example |
  |----------|-------------|---------|
  | color | Text color | \`color: blue;\` |
  | background-color | Background color | \`background-color: #f0f0f0;\` |
  | font-size | Text size | \`font-size: 16px;\` |
  | margin | Outside spacing | \`margin: 10px;\` |
  | padding | Inside spacing | \`padding: 20px;\` |
  | border | Element border | \`border: 1px solid black;\` |
  | display | Display behavior | \`display: flex;\` |
  | position | Positioning method | \`position: relative;\` |
  
  ## CSS Comments
  
  \`\`\`css
  /* Single line comment */
  
  /*
    Multi-line
    comment
    block
  */
  \`\`\`
  
  ## CSS Cascading Rules
  
  The order of precedence (highest to lowest):
  
  1. Inline styles
  2. Internal and external styles
  3. Browser defaults
  
  Within stylesheets, specificity determines which rule applies:
  
  \`\`\`css
  /* Specificity increases from top to bottom */
  p { color: blue; }                    /* Elements */
  .class-name { color: red; }           /* Classes */
  #id-name { color: green; }            /* IDs */
  p.class-name { color: purple; }       /* Combined */
  \`\`\`
  
  ## Best Practices
  
  1. Use external CSS files for maintainability
  2. Follow consistent naming conventions
  3. Organize CSS with comments and sections
  4. Minimize use of inline styles
  5. Use meaningful class and ID names
  6. Keep selectors as simple as possible
  7. Group related styles together
  8. Use CSS reset or normalize
  
  ## Browser Support
  
  - Always check browser compatibility for CSS properties
  - Use vendor prefixes when needed:
  
  \`\`\`css
  .element {
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    transition: all 0.3s;
  }
  \`\`\`
  
  ## CSS Tools and Resources
  
  1. CSS Validators
  2. CSS Preprocessors (Sass, Less)
  3. CSS Frameworks (Bootstrap, Tailwind)
  4. Browser Developer Tools
  5. CSS Reset/Normalize files
  `;
}
