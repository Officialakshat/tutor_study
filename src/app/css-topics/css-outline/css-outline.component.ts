import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-css-outline',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './css-outline.component.html',
})
export class CssOutlineComponent {
  cssOutlineContent = `
  # CSS Outlines
  
  Outlines are similar to borders, but they sit outside the element's box model, providing a visual emphasis without affecting the layout.
  
  ## Basic Outline Properties
  
  ### Outline Style
  Defines the type of outline:
  
  \`\`\`css
  div {
    outline-style: solid; /* Solid line */
    outline-style: dashed; /* Dashed line */
    outline-style: dotted; /* Dotted line */
    outline-style: double; /* Double line */
  }
  \`\`\`
  
  ### Outline Width
  Sets the width of the outline:
  
  \`\`\`css
  div {
    outline-width: 2px; /* 2 pixels wide */
  }
  \`\`\`
  
  ### Outline Color
  Specifies the color of the outline:
  
  \`\`\`css
  div {
    outline-color: blue; /* Blue outline */
  }
  \`\`\`
  
  ## Shorthand Property
  
  Combine all outline properties into one:
  
  \`\`\`css
  div {
    outline: 2px solid blue; /* 2px wide, solid blue outline */
  }
  \`\`\`
  
  ## Offset Property
  
  The \`outline-offset\` property controls the distance between the outline and the element's edge:
  
  \`\`\`css
  div {
    outline: 2px solid blue;
    outline-offset: 5px; /* 5px offset */
  }
  \`\`\`
  
  ## Common Use Cases
  
  ### Focusing on Elements
  \`\`\`css
  input:focus {
    outline: 2px solid blue;
  }
  \`\`\`
  
  ### Creating a Box-Shadow Effect
  \`\`\`css
  div {
    outline: 1px solid black;
    outline-offset: -5px;
  }
  \`\`\`
  
  ## Best Practices
  
  1. Use outlines sparingly to avoid clutter
  2. Consider accessibility implications of outlines
  3. Test outlines across different browsers and devices
  4. Use appropriate CSS selectors to target specific elements
  5. Consider using CSS frameworks for pre-built outline styles
  `;
}
