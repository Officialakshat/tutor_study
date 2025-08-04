import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-div-html',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './div-html.component.html',
})
export class DivHtmlComponent {
  htmlDivContent = `
# HTML Div Element

The \`<div>\` element is one of the most commonly used HTML containers for grouping and structuring content. Learn how to effectively use div elements in your web pages.

## Basic Syntax

\`\`\`html
<div>
  <!-- Content goes here -->
  <p>This is a paragraph inside a div</p>
  <span>This is a span inside the same div</span>
</div>
\`\`\`

## Div with Attributes

### Classes and IDs

\`\`\`html
<div class="container" id="main-content">
  <h2>Welcome to my website</h2>
  <p>This div has both a class and an ID</p>
</div>
\`\`\`

### Styling with CSS

\`\`\`html
<div style="
  background-color: #f0f0f0;
  padding: 20px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
">
  <p>This div has inline styles</p>
</div>
\`\`\`

## Common Use Cases

### Layout Structure

\`\`\`html
<div class="page-layout">
  <div class="header">
    <h1>Website Header</h1>
  </div>
  
  <div class="content">
    <div class="sidebar">
      <!-- Sidebar content -->
    </div>
    <div class="main-content">
      <!-- Main content -->
    </div>
  </div>
  
  <div class="footer">
    <!-- Footer content -->
  </div>
</div>
\`\`\`

### Content Grouping

\`\`\`html
<div class="product-card">
  <div class="product-image">
    <img src="product.jpg" alt="Product">
  </div>
  <div class="product-info">
    <h3>Product Name</h3>
    <p>Product description goes here</p>
  </div>
  <div class="product-actions">
    <button>Add to Cart</button>
  </div>
</div>
\`\`\`

## Flexbox Container

\`\`\`html
<div style="
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
\`\`\`

## Grid Container

\`\`\`html
<div style="
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
">
  <div>Grid Item 1</div>
  <div>Grid Item 2</div>
  <div>Grid Item 3</div>
</div>
\`\`\`

## Nested Divs

\`\`\`html
<div class="outer-container">
  <div class="inner-section">
    <div class="content-box">
      <h3>Nested Structure</h3>
      <p>This shows how divs can be nested within each other</p>
    </div>
  </div>
</div>
\`\`\`

## Semantic Alternatives

Sometimes it's better to use semantic elements instead of divs:

\`\`\`html
<!-- Instead of -->
<div class="header">...</div>
<div class="navigation">...</div>
<div class="footer">...</div>

<!-- Use semantic elements -->
<header>...</header>
<nav>...</nav>
<footer>...</footer>
\`\`\`

## Best Practices

1. Use semantic HTML elements when appropriate
2. Avoid excessive nesting of divs
3. Keep class names meaningful and descriptive
4. Use CSS Grid or Flexbox for layout instead of floating divs
5. Consider mobile responsiveness when structuring divs

## Common Div Properties

| Property | Purpose | Example |
|----------|---------|---------|
| display | Controls how element is displayed | \`display: flex;\` |
| position | Sets positioning method | \`position: relative;\` |
| width/height | Sets dimensions | \`width: 100%;\` |
| margin/padding | Sets spacing | \`margin: 10px;\` |
| background | Sets background | \`background: #f0f0f0;\` |
| border | Sets border properties | \`border: 1px solid black;\` |

## Accessibility Considerations

\`\`\`html
<!-- Add ARIA roles when semantic elements aren't suitable -->
<div role="banner">
  <h1>Website Header</h1>
</div>

<div role="main" aria-label="Main content">
  <!-- Main content here -->
</div>
\`\`\`

## Responsive Div Examples

### Mobile-First Approach

\`\`\`html
<div style="
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
">
  <div style="
    display: flex;
    flex-direction: column;
    gap: 20px;
  ">
    <div>Content Box 1</div>
    <div>Content Box 2</div>
    <div>Content Box 3</div>
  </div>
</div>
\`\`\`

### Interactive Elements

\`\`\`html
<div class="card" 
     onclick="handleClick()" 
     style="
       cursor: pointer;
       transition: transform 0.3s;
     "
     onmouseover="this.style.transform='scale(1.05)'"
     onmouseout="this.style.transform='scale(1)'">
  <h3>Interactive Card</h3>
  <p>This div responds to user interactions</p>
</div>
\`\`\`
`;
}
