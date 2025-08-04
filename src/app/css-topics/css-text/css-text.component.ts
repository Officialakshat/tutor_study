import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-css-text',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './css-text.component.html',
})
export class CssTextComponent {
  cssTextContent = `
# CSS Text

Learn how to style text using CSS text properties.

## Basic Text Properties

### Font Family
Specifies the font family:

\`\`\`css
p {
  font-family: Arial, sans-serif;
}
\`\`\`

### Font Size
Sets the font size:

\`\`\`css
h1 {
  font-size: 36px;
}
\`\`\`

### Font Weight
Controls font thickness:

\`\`\`css
p {
  font-weight: bold; /* Bold text */
  font-weight: lighter; /* Lighter text */
}
\`\`\`

### Font Style
Sets font style:

\`\`\`css
em {
  font-style: italic; /* Italic text */
}
\`\`\`

## Text Alignment
Aligns text within an element:

\`\`\`css
p {
  text-align: center; /* Center-aligned text */
  text-align: right; /* Right-aligned text */
}
\`\`\`

## Text Decoration
Adds decorations to text:

\`\`\`css
a {
  text-decoration: underline; /* Underline */
  text-decoration: line-through; /* Strikethrough */
}
\`\`\`

## Text Transform
Changes text case:

\`\`\`css
h1 {
  text-transform: uppercase; /* Uppercase */
  text-transform: lowercase; /* Lowercase */
  text-transform: capitalize; /* Capitalize first letter of each word */
}
\`\`\`

## Text Shadow
Adds a shadow effect to text:

\`\`\`css
h1 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
\`\`\`

## Line Height
Sets the line height:

\`\`\`css
p {
  line-height: 1.5;
}
\`\`\`

## Letter Spacing
Adjusts the spacing between letters:

\`\`\`css
p {
  letter-spacing: 2px;
}
\`\`\`

## Word Spacing
Adjusts the spacing between words:

\`\`\`css
p {
  word-spacing: 5px;
}
\`\`\`

## Text Overflow
Handles text that overflows its container:

\`\`\`css
p {
  white-space: nowrap; /* Prevent wrapping */
  text-overflow: ellipsis; /* Add ellipsis for overflow */
}
\`\`\`

## Best Practices

1. Use clear and concise font choices
2. Ensure readability with appropriate font sizes and line heights
3. Test your text styles across different browsers and devices
4. Use CSS selectors to target specific text elements
5. Consider using a CSS framework for pre-built text styles
`;
}
