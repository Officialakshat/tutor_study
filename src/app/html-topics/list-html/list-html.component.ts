import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-list-html',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './list-html.component.html',
})
export class ListHtmlComponent {
  htmlListsContent = `
  # HTML Lists
  
  HTML provides three types of lists to organize content: unordered lists, ordered lists, and description lists.
  
  ## Unordered Lists (\`<ul>\`)
  Used for items where order doesn't matter.
  
  \`\`\`html
  <ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ul>
  \`\`\`
  
  Renders as:
  - Coffee
  - Tea
  - Milk
  
  ## Ordered Lists (\`<ol>\`)
  Used when items need to be in a specific order.
  
  \`\`\`html
  <ol>
    <li>First step</li>
    <li>Second step</li>
    <li>Third step</li>
  </ol>
  \`\`\`
  
  Renders as:
  1. First step
  2. Second step
  3. Third step
  
  ## Description Lists (\`<dl>\`)
  Used for term-definition pairs.
  
  \`\`\`html
  <dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
  </dl>
  \`\`\`
  
  ## Nested Lists
  Lists can be nested inside other lists.
  
  \`\`\`html
  <ul>
    <li>Fruits
      <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Oranges</li>
      </ul>
    </li>
    <li>Vegetables
      <ul>
        <li>Carrots</li>
        <li>Broccoli</li>
        <li>Spinach</li>
      </ul>
    </li>
  </ul>
  \`\`\`
  
  ## Custom List Styles
  
  ### Ordered List Types
  \`\`\`html
  <!-- Numbers (default) -->
  <ol type="1">
    <li>Item</li>
  </ol>
  
  <!-- Letters -->
  <ol type="A">
    <li>Item</li>
  </ol>
  
  <!-- Roman numerals -->
  <ol type="I">
    <li>Item</li>
  </ol>
  \`\`\`
  
  ### Starting Value
  \`\`\`html
  <ol start="5">
    <li>Starts from 5</li>
    <li>Continues from 6</li>
  </ol>
  \`\`\`
  
  ## Best Practices
  
  1. Use semantic meaning:
     - \`<ul>\` for unrelated items
     - \`<ol>\` for sequential items
     - \`<dl>\` for term definitions
  
  2. Keep list structures clean:
     - Avoid deep nesting
     - Use consistent formatting
     - Each \`<li>\` should contain complete thoughts
  
  3. Style considerations:
     - Can be styled with CSS
     - Maintain visual hierarchy
     - Consider mobile responsiveness
  `;
}
