import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-css-comments',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './css-comments.component.html',
})
export class CssCommentsComponent {
  cssCommentsContent = `
# CSS Comments

Comments in CSS help document your code and make it more maintainable. Learn how to use comments effectively in your stylesheets.

## Basic Comment Syntax

\`\`\`css
/* This is a single-line comment */

/*
  This is a
  multi-line comment
*/
\`\`\`

## Common Uses of Comments

### 1. Section Headers
\`\`\`css
/* ================================
   Header Styles
   ================================ */
.header {
  background: #333;
}

/* ================================
   Navigation Styles
   ================================ */
.nav {
  padding: 1rem;
}
\`\`\`

### 2. Documentation
\`\`\`css
/* Fix for IE11 display bug */
.container {
  width: 100%;
  display: flex;
}

/* TODO: Refactor this when nav is updated */
.nav-legacy {
  float: left;
}
\`\`\`

### 3. Debugging
\`\`\`css
.sidebar {
  /* Temporarily disable for testing */
  /* display: none; */
  
  /* Debug border */
  /* border: 1px solid red; */
}
\`\`\`

## Best Practices

1. Use Clear and Concise Comments
\`\`\`css
/* Good - Clear purpose */
/* Primary button styles */
.btn-primary { }

/* Bad - Unhelpful */
/* styles */
.btn { }
\`\`\`

2. Group Related Styles
\`\`\`css
/* Theme Colors */
:root {
  --primary: #007bff;
  --secondary: #6c757d;
  --success: #28a745;
}

/* Typography */
.heading {
  font-family: Arial, sans-serif;
  line-height: 1.5;
}
\`\`\`

3. Comment Structure
\`\`\`css
/*
* Component: Button
* Description: Primary call-to-action button
* Usage: Homepage and forms
*/
.button {
  /* Base styles */
  padding: 10px 20px;
  border: none;
  
  /* Visual styles */
  background: blue;
  color: white;
}
\`\`\`

## Things to Avoid

1. Don't state the obvious
\`\`\`css
/* Bad - Unnecessary */
.title {
  color: blue;  /* Makes the text blue */
}

/* Good - Only comment when needed */
.title {
  color: blue;
}
\`\`\`

2. Avoid commenting out large blocks of code
   - Use version control instead
   - Remove unused code rather than commenting it
`;
}
