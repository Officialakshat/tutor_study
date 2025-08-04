import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-css-margins',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './css-margins.component.html',
})
export class CssMarginsComponent {
  cssMarginsContent = `
  # CSS Margins
  
  Learn how to control the space around elements using CSS margin properties.
  
  ## Basic Margin Properties
  
  ### Margin-top
  Sets the top margin:
  
  \`\`\`css
  div {
    margin-top: 20px;
  }
  \`\`\`
  
  ### Margin-right
  Sets the right margin:
  
  \`\`\`css
  div {
    margin-right: 10px;
  }
  \`\`\`
  
  ### Margin-bottom
  Sets the bottom margin:
  
  \`\`\`css
  div {
    margin-bottom: 30px;
  }
  \`\`\`
  
  ### Margin-left
  Sets the left margin:
  
  \`\`\`css
  div {
    margin-left: 40px;
  }
  \`\`\`
  
  ## Shorthand Property
  
  Combine all margin properties into one:
  
  \`\`\`css
  div {
    margin: 10px; /* All sides */
    margin: 10px 20px; /* Top/bottom, right/left */
    margin: 10px 20px 30px; /* Top, right/left, bottom */
    margin: 10px 20px 30px 40px; /* Top, right, bottom, left   
   */
  }
  \`\`\`
  
  ## Auto Margins
  
  ### Margin: auto
  Automatically center an element:
  
  \`\`\`css
  .centered-div {
    margin: 0 auto;
    width: 200px;
  }
  \`\`\`
  
  ## Negative Margins
  
  Create overlapping effects:
  
  \`\`\`css
  .overlapping-div {
    margin-left: -20px;
  }
  \`\`\`
  
  ## Common Use Cases
  
  ### Creating Spacing Between Elements
  \`\`\`css
  .spaced-divs {
    margin-bottom: 20px;
  }
  \`\`\`
  
  ### Centering Elements
  \`\`\`css
  .centered-element {
    margin: 0 auto;
  }
  \`\`\`
  
  ### Creating Layouts
  \`\`\`css
  .layout-container {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 960px;
  }
  \`\`\`
  
  ## Best Practices
  
  1. Use consistent margins to maintain a clean design
  2. Be mindful of margin collapse, which can affect spacing between elements
  3. Consider using CSS frameworks for pre-defined margin classes
  4. Test your margins across different browsers and devices
  5. Use relative units (like *em or rem*) for responsive designs
  `;
}
