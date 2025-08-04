import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-css-padding',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './css-padding.component.html',
})
export class CssPaddingComponent {
  cssPaddingContent = `
  # CSS Padding
  
  Learn how to add space around the content of an element using CSS padding properties.
  
  ## Basic Padding Properties
  
  ### Padding-Top
  Adds space at the top of an element:
  
  \`\`\`css
  div {
    padding-top: 20px;
  }
  \`\`\`
  
  ### Padding-Right
  Adds space at the right of an element:
  
  \`\`\`css
  div {
    padding-right: 20px;
  }
  \`\`\`
  
  ### Padding-Bottom
  Adds space at the bottom of an element:
  
  \`\`\`css
  div {
    padding-bottom: 20px;
  }
  \`\`\`
  
  ### Padding-Left
  Adds space at the left of an element:
  
  \`\`\`css
  div {
    padding-left: 20px;
  }
  \`\`\`
  
  ## Shorthand Property
  
  Combine all padding properties into one:
  
  \`\`\`css
  div {
    padding: 20px; /* Top, right, bottom, left */
    padding: 10px 20px; /* Top/bottom, right/left */
    padding: 10px 20px 30px; /* Top, right/left, bottom */
  }
  \`\`\`
  
  ## Common Use Cases
  
  ### Creating Space Around Content
  \`\`\`css
  p {
    padding: 10px;
  }
  \`\`\`
  
  ### Creating Card-like Elements
  \`\`\`css
  .card {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
  }
  \`\`\`
  
  ### Spacing Table Cells
  \`\`\`css
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
    padding: 5px;
  }
  \`\`\`
  
  ## Best Practices
  
  1. Use consistent padding values for a clean design
  2. Consider responsive design to adjust padding for different screen sizes
  3. Use padding judiciously to avoid excessive whitespace
  4. Test your padding styles across different browsers and devices
  5. Combine padding with margins to create complex layouts
  `;
}
