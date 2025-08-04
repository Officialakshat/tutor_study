import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-element-html',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './element-html.component.html',
})
export class ElementHtmlComponent {
  htmlElementsContent = `
  # HTML Elements
  
  HTML elements are the building blocks of web pages. Here's a quick guide to the most commonly used elements.
  
  ## Essential Elements
  
  ### Text Elements
  - \`<h1>\` to \`<h6>\`: Headings (h1 is most important, h6 is least)
  - \`<p>\`: Paragraphs
  - \`<strong>\`: Bold text
  - \`<em>\`: Italic text
  
  Example:
  \`\`\`html
  <h1>Main Title</h1>
  <p>This is a <strong>bold</strong> and <em>italic</em> text.</p>
  \`\`\`
  
  ### Lists
  \`\`\`html
  <!-- Unordered List -->
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
  
  <!-- Ordered List -->
  <ol>
    <li>First</li>
    <li>Second</li>
  </ol>
  \`\`\`
  
  ### Links & Images
  \`\`\`html
  <a href="https://example.com">Click here</a>
  <img src="image.jpg" alt="Description">
  \`\`\`
  
  ### Container Elements
  \`\`\`html
  <div>Block container</div>
  <span>Inline container</span>
  \`\`\`
  
  ### Semantic Elements
  \`\`\`html
  <header>Header content</header>
  <nav>Navigation menu</nav>
  <main>Main content</main>
  <footer>Footer content</footer>
  \`\`\`
  
  ### Basic Form
  \`\`\`html
  <form>
    <input type="text" placeholder="Enter text">
    <button type="submit">Submit</button>
  </form>
  \`\`\`
  
  ## Best Practices
  1. Use semantic elements
  2. Include alt text for images
  3. Maintain proper heading hierarchy
  4. Keep code clean and organized
  `;
}
