import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-css-box-model',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './css-box-model.component.html',
})
export class CssBoxModelComponent {
  cssBoxModelContent = `
# CSS Box Model

The CSS Box Model is a fundamental concept in CSS that explains how elements are structured and styled on a web page. It consists of four main components:

## The Four Main Parts of a CSS Box Model

1. **Content:** The content of the box, such as text, images, or other elements.
2. **Padding:** The space between the content and the border.
3. **Border:** The border that surrounds the padding and content.
4. **Margin:** The space outside the border, separating the box from other elements.

[Image of CSS Box Model]

## Controlling the Box Model

### Padding
Adds space inside the border:

\`\`\`css
div {
  padding: 20px; /* All sides */
  padding-top: 10px; /* Top only */
  padding-right: 15px; /* Right only */
  padding-bottom: 25px; /* Bottom only */
  padding-left: 30px; /* Left only */
}
\`\`\`

### Border
Defines the border style, width, and color:

\`\`\`css
div {
  border: 2px solid black;
}
\`\`\`

### Margin
Adds space outside the border:

\`\`\`css
div {
  margin: 20px; /* All sides */
  margin-top: 10px; /* Top only */
  margin-right: 15px; /* Right only */
  margin-bottom: 25px; /* Bottom only */
  margin-left: 30px; /* Left only */
}
\`\`\`

## Box-Sizing Property

The *box-sizing* property controls how the width and height of an element are calculated:

\`\`\`css
/* Default behavior */
div {
  box-sizing: content-box;
}

/* Include padding and border in width/height */
div {
  box-sizing: border-box;
}
\`\`\`

## Practical Use Cases

### Creating Card-like Elements
\`\`\`css
.card {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
}
\`\`\`

### Layouting Elements
\`\`\`css
.container {
  width: 80%;
  margin: 0 auto;
}
\`\`\`

## Best Practices

1. Use consistent padding and margin values
2. Consider browser compatibility and different screen sizes
3. Use clear and concise CSS code
4. Test your layouts in different browsers and devices
5. Use CSS frameworks for pre-built layout components
`;
}
