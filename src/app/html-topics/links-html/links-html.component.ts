import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-links-html',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './links-html.component.html',
})
export class LinksHtmlComponent {
  htmlLinksContent = `
  # HTML Links
  
  HTML links (hyperlinks) allow users to navigate between web pages. They are created using the \`<a>\` (anchor) tag.
  
  ## Basic Link Syntax
  
  \`\`\`html
  <a href="URL">Link Text</a>
  \`\`\`
  
  ## Common Link Types
  
  ### External Links
  \`\`\`html
  <!-- Link to external website -->
  <a href="https://www.example.com">Visit Example</a>
  
  <!-- Open in new tab -->
  <a href="https://www.example.com" target="_blank">Open in New Tab</a>
  \`\`\`
  
  ### Internal Links
  \`\`\`html
  <!-- Link to another page -->
  <a href="/about.html">About Us</a>
  
  <!-- Link to same-page section -->
  <a href="#section1">Go to Section 1</a>
  \`\`\`
  
  ### Special Links
  \`\`\`html
  <!-- Email link -->
  <a href="mailto:contact@example.com">Send Email</a>
  
  <!-- Phone link -->
  <a href="tel:+1234567890">Call Us</a>
  
  <!-- File download -->
  <a href="files/document.pdf" download>Download PDF</a>
  \`\`\`
  
  ## Link Attributes
  
  - \`href\`: URL or destination
  - \`target\`: Where to open the link
  - \`download\`: For downloadable files
  - \`rel\`: Relationship to target
  - \`title\`: Tooltip text
  
  \`\`\`html
  <a href="https://example.com" 
     target="_blank" 
     rel="noopener noreferrer" 
     title="Visit our website">
     Example Site
  </a>
  \`\`\`
  
  ## Image Links
  
  \`\`\`html
  <a href="https://example.com">
    <img src="logo.png" alt="Company Logo">
  </a>
  \`\`\`
  
  ## Button-Style Links
  
  \`\`\`html
  <a href="/signup" class="button">
    Sign Up Now
  </a>
  \`\`\`
  
  ## Navigation Example
  
  \`\`\`html
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
  \`\`\`
  
  ## Best Practices
  
  1. Use descriptive link text
     - Good: "Read our privacy policy"
     - Bad: "Click here"
  
  2. Security considerations
     - Use \`rel="noopener noreferrer"\` for external links
     - Validate URLs
     - Consider HTTPS links
  
  3. Accessibility
     - Make links distinguishable
     - Use clear and meaningful text
     - Consider keyboard navigation
  
  4. User Experience
     - Indicate external links
     - Show download links clearly
     - Use consistent styling
  `;
}
