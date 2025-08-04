import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-css-border',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './css-border.component.html',
})
export class CssBorderComponent {
  cssBordersContent = `
# CSS Borders

Learn how to style element borders using CSS border properties.

## Basic Border Properties

### Border Style
Defines the type of border:

\`\`\`css
/* Common styles */
div {
  border-style: solid; /* Solid line */
  border-style: dashed; /* Dashed line */
  border-style: dotted; /* Dotted line */
  border-style: double; /* Double line */
}
\`\`\`

### Border Width
Sets the width of the border:

\`\`\`css
div {
  border-width: 2px; /* 2 pixels wide */
}
\`\`\`

### Border Color
Specifies the color of the border:

\`\`\`css
div {
  border-color: blue; /* Blue border */
}
\`\`\`

## Shorthand Property

Combine all border properties into one:

\`\`\`css
div {
  border: 2px solid blue; /* 2px wide, solid blue border */
}
\`\`\`

## Individual Side Borders

Style specific sides:

\`\`\`css
div {
  border-top: 2px solid red;
  border-right: 1px dashed green;
  border-bottom: 3px dotted blue;
  border-left: 4px double black;
}
\`\`\`

## Advanced Border Techniques

### Rounded Corners
Create rounded borders:

\`\`\`css
div {
  border-radius: 10px; /* All corners rounded */
  border-top-left-radius: 20px; /* Top-left corner only */
}
\`\`\`

### Border Images
Use images as borders:

\`\`\`css
div {
  border-image: url('border-image.png') 30 30 round;
}
\`\`\`

## Common Use Cases

### Card-like Elements
\`\`\`css
.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
}
\`\`\`

### Table Borders
\`\`\`css
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
\`\`\`

## Best Practices

1. Use consistent border styles and widths
2. Consider accessibility for users with visual impairments
3. Test your borders across different browsers and devices
4. Use appropriate CSS selectors to target specific elements
5. Consider using CSS frameworks for pre-built border styles
`;
}
