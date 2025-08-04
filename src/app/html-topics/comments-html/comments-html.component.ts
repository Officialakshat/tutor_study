import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-comments-html',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './comments-html.component.html',
})
export class CommentsHtmlComponent {
  htmlCommentsContent = `
  # HTML Comments
  
  HTML comments are notes that developers can add to their code that won't be visible in the browser. They help in documentation and code organization.
  
  ## Basic Comment Syntax
  
  \`\`\`html
  <!-- This is a basic HTML comment -->
  <p>This text will be visible in the browser.</p>
  \`\`\`
  
  ## Common Uses of Comments
  
  ### 1. Code Documentation
  \`\`\`html
  <!-- Navigation menu start -->
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
    </ul>
  </nav>
  <!-- Navigation menu end -->
  \`\`\`
  
  ### 2. Section Markers
  \`\`\`html
  <!-- Header Section -->
  <header>
    <h1>Website Title</h1>
  </header>
  
  <!-- Main Content Section -->
  <main>
    <p>Content goes here</p>
  </main>
  
  <!-- Footer Section -->
  <footer>
    <p>Copyright 2024</p>
  </footer>
  \`\`\`
  
  ### 3. Todo Notes
  \`\`\`html
  <!-- TODO: Add social media links -->
  <!-- FIXME: Resolve alignment issue in mobile view -->
  <!-- NOTE: Remember to update copyright year -->
  \`\`\`
  
  ### 4. Temporarily Disabling Code
  \`\`\`html
  <!-- Temporarily removed for maintenance
  <div class="feature">
    <h2>New Feature</h2>
    <p>Coming soon!</p>
  </div>
  -->
  \`\`\`
  
  ## Multi-line Comments
  \`\`\`html
  <!--
    This is a multi-line comment
    It can span across several lines
    Useful for longer explanations
    or documentation
  -->
  \`\`\`
  
  ## Best Practices
  
  1. Keep Comments Clear
  \`\`\`html
  <!-- Good comment: Explains navigation structure -->
  <!-- Bad comment: Nav stuff -->
  \`\`\`
  
  2. Use Comments for:
  - Code organization
  - Complex code explanation
  - Browser compatibility notes
  - Developer instructions
  - Temporary code removal
  
  3. Avoid:
  - Obvious comments
  - Outdated comments
  - Commenting out large code blocks long-term
  - Sensitive information in comments
  
  ## Important Notes
  
  1. Comments are visible in page source
  \`\`\`html
  <!-- Don't put sensitive information here! -->
  \`\`\`
  
  2. Comments can't be nested
  \`\`\`html
  <!-- This is <!-- Not Valid --> -->
  \`\`\`
  
  3. Case Insensitive
  \`\`\`html
  <!-- this is valid -->
  <!-- THIS IS ALSO VALID -->
  \`\`\`
  
  4. Space Usage
  \`\`\`html
  <!--This works but is not as readable-->
  <!-- This is more readable with spaces -->
  \`\`\`
  `;
}
