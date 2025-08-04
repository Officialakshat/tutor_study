import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-attributes-html',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './attributes-html.component.html',
})
export class AttributesHtmlComponent {
  htmlAttributesContent = `
# HTML Attributes

HTML attributes provide additional information and functionality to HTML elements. Here's a guide to commonly used attributes.

## Global Attributes
These attributes can be used with any HTML element:

\`\`\`html
<!-- Class and ID -->
<div class="container" id="main">Content</div>

<!-- Style and Title -->
<p style="color: blue;" title="Tooltip text">Blue text with tooltip</p>

<!-- Data Attributes -->
<div data-user="john" data-role="admin">Custom data</div>
\`\`\`

## Essential Element-Specific Attributes

### Images
\`\`\`html
<img 
  src="image.jpg" 
  alt="Description"
  width="300"
  height="200"
>
\`\`\`

### Links
\`\`\`html
<a 
  href="https://example.com"
  target="_blank"
  rel="noopener"
>
  Open in new tab
</a>
\`\`\`

### Forms
\`\`\`html
<input 
  type="text"
  name="username"
  placeholder="Enter username"
  required
  disabled
>

<button 
  type="submit"
  disabled
>
  Submit
</button>
\`\`\`

## Common Attributes Table

| Attribute | Purpose | Example |
|-----------|---------|---------|
| class | CSS styling | \`class="btn primary"\` |
| id | Unique identifier | \`id="header"\` |
| src | Resource URL | \`src="image.jpg"\` |
| href | Hyperlink URL | \`href="page.html"\` |
| type | Element type | \`type="email"\` |
| required | Required field | \`required\` |
| disabled | Disable element | \`disabled\` |
| placeholder | Input hint | \`placeholder="Email"\` |

## ARIA Attributes
Essential for accessibility:

\`\`\`html
<button 
  aria-label="Close"
  aria-expanded="false"
  role="button"
>
  ×
</button>
\`\`\`

## Best Practices

1. Always include \`alt\` for images
2. Use \`aria-label\` for accessibility
3. Keep attribute values in quotes
4. Use meaningful ID and class names
5. Don't repeat ID values (they must be unique)
`;
}
