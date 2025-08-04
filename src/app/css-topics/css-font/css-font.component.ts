import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-css-font',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './css-font.component.html',
})
export class CssFontComponent {
  cssFontsContent = `
  # CSS Fonts
  
  Learn how to style text using CSS font properties.
  
  ## Font Family
  Specifies the font family for text:
  
  \`\`\`css
  p {
    font-family: Arial, sans-serif;
  }
  \`\`\`
  
  ## Font Size
  Sets the size of the font:
  
  \`\`\`css
  h1 {
    font-size: 36px;
  }
  
  p {
    font-size: 16px;
  }
  \`\`\`
  
  ## Font Weight
  Controls the thickness of the font:
  
  \`\`\`css
  h1 {
    font-weight: bold;
  }
  
  p {
    font-weight: normal;
  }
  \`\`\`
  
  ## Font Style
  Defines the font style (italic or normal):
  
  \`\`\`css
  em {
    font-style: italic;
  }
  \`\`\`
  
  ## Font Variant
  Specifies the font variant (small-caps or normal):
  
  \`\`\`css
  p {
    font-variant: small-caps;
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
  
  ## Text Transform
  Controls the capitalization of text:
  
  \`\`\`css
  h1 {
    text-transform: uppercase;
  }
  
  p {
    text-transform: lowercase;
  }
  \`\`\`
  
  ## Text Decoration
  Adds decorations like underlines or strikethrough:
  
  \`\`\`css
  a {
    text-decoration: underline;
  }
  
  s {
    text-decoration: line-through;
  }
  \`\`\`
  
  ## Font Shorthand Property
  
  Combine multiple font properties:
  
  \`\`\`css
  p {
    font: 16px/1.5 Arial, sans-serif;
  }
  \`\`\`
  
  ## Best Practices
  
  1. Use a mix of system fonts and web fonts
  2. Consider font loading performance
  3. Test your fonts across different browsers and devices
  4. Use appropriate font sizes and line heights for readability
  5. Be mindful of font weight and style choices
  6. Use text transformation and decoration sparingly
  `;
}
