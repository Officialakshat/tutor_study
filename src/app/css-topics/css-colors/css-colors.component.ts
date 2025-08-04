import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-css-colors',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './css-colors.component.html',
})
export class CssColorsComponent {
  cssColorsContent = `
  # CSS Colors
  
  Learn how to style colors in CSS to enhance your web designs.
  
  ## Color Keywords
  Use predefined color names:
  
  \`\`\`css
  p {
    color: red;
    background-color: blue;
  }
  \`\`\`
  
  ## RGB Color Model
  Specify colors using red, green, and blue values:
  
  \`\`\`css
  div {
    color: rgb(255, 0, 0); /* Red */
    background-color: rgb(0, 128, 0); /* Green */
  }
  \`\`\`
  
  ## RGBA Color Model
  Add alpha (transparency) to RGB colors:
  
  \`\`\`css
  .transparent-div {
    background-color: rgba(0, 0, 0, 0.5); /* Black with 50% opacity */
  }
  \`\`\`
  
  ## Hexadecimal Color Codes
  Use hexadecimal values for colors:
  
  \`\`\`css
  h1 {
    color: #FF0000; /* Red */
    background-color: #00FF00; /* Green */
  }
  \`\`\`
  
  ## HSL Color Model
  Specify colors using hue, saturation, and lightness:
  
  \`\`\`css
  span {
    color: hsl(0, 100%, 50%); /* Red */
    background-color: hsl(120, 100%, 50%); /* Green */
  }
  \`\`\`
  
  ## HSLA Color Model
  Add alpha (transparency) to HSL colors:
  
  \`\`\`css
  .semi-transparent-span {
    color: hsla(0, 100%, 50%, 0.7); /* Red with 70% opacity */
  }
  \`\`\`
  
  ## Color Functions
  
  ### Color Functions
  Use functions to manipulate colors:
  
  \`\`\`css
  .darker-blue {
    color: darken(blue, 20%);
  }
  
  .lighter-red {
    color: lighten(red, 30%);
  }
  \`\`\`
  
  ## Best Practices
  
  1. Use a consistent color palette
  2. Consider color accessibility for users with visual impairments
  3. Test your color choices on different devices and screen sizes
  4. Use a color picker tool to help you choose colors
  5. Use CSS variables to manage color themes
  `;
}
