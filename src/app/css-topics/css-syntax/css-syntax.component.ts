import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-css-syntax',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './css-syntax.component.html',
})
export class CssSyntaxComponent {
  cssSyntaxContent = `
# CSS Syntax Guide

Learn the basic structure and syntax rules of CSS.

## Basic Structure

\`\`\`css
selector {
  property: value;
}
\`\`\`

### Example
\`\`\`css
p {
  color: blue;
  font-size: 16px;
}
\`\`\`

## Multiple Selectors

\`\`\`css
/* Applying same styles to multiple selectors */
h1, h2, h3 {
  font-family: Arial;
  color: navy;
}
\`\`\`

## Nested Selectors

\`\`\`css
/* Styles for paragraphs inside div */
div p {
  margin: 10px;
}

/* Styles for direct children */
div > p {
  padding: 5px;
}
\`\`\`

## Comments

\`\`\`css
/* Single line comment */

/*
  Multi-line
  comment
  block
*/
\`\`\`

## Common Value Types

\`\`\`css
.example {
  /* Colors */
  color: red;                  /* Color name */
  background: #FF0000;        /* Hex color */
  border: rgb(255, 0, 0);     /* RGB color */
  
  /* Units */
  width: 100px;               /* Pixels */
  height: 50%;                /* Percentage */
  margin: 1rem;               /* Root EM */
  padding: 1.5em;             /* EM */
  
  /* Multiple Values */
  margin: 10px 20px;          /* Top/Bottom Left/Right */
  padding: 5px 10px 15px 20px;/* Top Right Bottom Left */
}
\`\`\`

## Common Mistakes to Avoid

### 1. Missing Semicolons
\`\`\`css
/* Incorrect */
p {
  color: blue
  font-size: 16px
}

/* Correct */
p {
  color: blue;
  font-size: 16px;
}
\`\`\`

### 2. Incorrect Brackets
\`\`\`css
/* Incorrect */
p {
  color: blue;
  font-size: 16px;
  }
}

/* Correct */
p {
  color: blue;
  font-size: 16px;
}
\`\`\`

## Quick Reference

### Property Groups:
- **Text:** color, font-size, font-family
- **Box:** margin, padding, border
- **Layout:** display, position, float
- **Visual:** background, opacity, box-shadow

### Common Units:
- px - pixels
- % - percentage
- em - relative to element
- rem - relative to root
- vw/vh - viewport width/height
`;
}
