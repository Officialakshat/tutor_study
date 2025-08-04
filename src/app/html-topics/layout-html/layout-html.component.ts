import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-layout-html',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './layout-html.component.html',
})
export class LayoutHtmlComponent {
  htmlLayoutContent = `
# HTML Layout

Learn how to structure web pages using semantic HTML elements and layout techniques.

## Semantic Layout Elements

HTML5 provides semantic elements that clearly describe their meaning to both browsers and developers:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>Semantic Layout Example</title>
</head>
<body>
    <header>
        <h1>Website Title</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <article>
            <h2>Main Article</h2>
            <p>Main content goes here...</p>
        </article>

        <aside>
            <h3>Sidebar</h3>
            <p>Supplementary content...</p>
        </aside>
    </main>

    <footer>
        <p>&copy; 2024 Your Website</p>
    </footer>
</body>
</html>
\`\`\`

## Common Layout Elements

### Header Element
\`\`\`html
<header>
    <!-- Used for introductory content or navigation -->
    <h1>Website Title</h1>
    <nav>
        <!-- Navigation menu -->
    </nav>
</header>
\`\`\`

### Navigation Element
\`\`\`html
<nav>
    <!-- Main navigation menu -->
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>
\`\`\`

### Main Content Section
\`\`\`html
<main>
    <!-- Main content of the document -->
    <article>
        <h2>Article Title</h2>
        <p>Article content...</p>
    </article>
    
    <section>
        <h2>Section Title</h2>
        <p>Section content...</p>
    </section>
</main>
\`\`\`

### Sidebar Content
\`\`\`html
<aside>
    <!-- Sidebar content -->
    <h3>Related Links</h3>
    <ul>
        <li><a href="#link1">Link 1</a></li>
        <li><a href="#link2">Link 2</a></li>
    </ul>
</aside>
\`\`\`

### Footer Element
\`\`\`html
<footer>
    <!-- Footer content -->
    <p>&copy; 2024 Your Website</p>
    <nav>
        <!-- Footer navigation -->
    </nav>
</footer>
\`\`\`

## Layout Containers

### Division Element
\`\`\`html
<div class="container">
    <!-- Generic container for styling and layout -->
    <div class="row">
        <div class="column">Column 1</div>
        <div class="column">Column 2</div>
    </div>
</div>
\`\`\`

### Section Element
\`\`\`html
<section>
    <!-- Thematic grouping of content -->
    <h2>Section Title</h2>
    <p>Related content goes here...</p>
</section>
\`\`\`

## Common Layout Patterns

### Two-Column Layout
\`\`\`html
<style>
.container {
    display: flex;
}
.main-content {
    flex: 70%;
}
.sidebar {
    flex: 30%;
}
</style>

<div class="container">
    <div class="main-content">
        <h2>Main Content</h2>
        <p>Primary content area...</p>
    </div>
    <div class="sidebar">
        <h3>Sidebar</h3>
        <p>Secondary content...</p>
    </div>
</div>
\`\`\`

### Three-Column Layout
\`\`\`html
<style>
.three-column {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 20px;
}
</style>

<div class="three-column">
    <div class="left-sidebar">Left Sidebar</div>
    <main class="main-content">Main Content</main>
    <div class="right-sidebar">Right Sidebar</div>
</div>
\`\`\`

## Layout Best Practices

1. Use semantic HTML elements appropriately
2. Ensure layouts are responsive
3. Consider mobile-first design
4. Maintain proper heading hierarchy
5. Use appropriate spacing and padding
6. Keep layout consistent across pages
7. Test across different screen sizes

## Common Layout Techniques

### Flexbox Layout
\`\`\`html
<style>
.flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>

<div class="flex-container">
    <div>Flex Item 1</div>
    <div>Flex Item 2</div>
    <div>Flex Item 3</div>
</div>
\`\`\`

### Grid Layout
\`\`\`html
<style>
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
</style>

<div class="grid-container">
    <div>Grid Item 1</div>
    <div>Grid Item 2</div>
    <div>Grid Item 3</div>
</div>
\`\`\`

## Responsive Layout

### Media Queries
\`\`\`html
<style>
/* Mobile first approach */
.container {
    width: 100%;
    padding: 15px;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        width: 750px;
        margin: 0 auto;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        width: 970px;
    }
}
</style>
\`\`\`

## Accessibility Considerations

1. Use proper heading hierarchy (h1-h6)
2. Implement skip navigation links
3. Ensure proper focus order
4. Use ARIA landmarks when necessary
5. Maintain readable line lengths
6. Provide sufficient color contrast

## Example of Complete Page Layout
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Complete Layout Example</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
        }
        header {
            background: #f8f9fa;
            padding: 1rem 0;
        }
        nav {
            margin: 1rem 0;
        }
        main {
            display: grid;
            grid-template-columns: 3fr 1fr;
            gap: 20px;
            margin: 2rem 0;
        }
        footer {
            background: #f8f9fa;
            padding: 1rem 0;
            margin-top: 2rem;
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>Website Title</h1>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <div class="container">
        <main>
            <article>
                <h2>Main Content</h2>
                <p>Your primary content goes here...</p>
            </article>
            
            <aside>
                <h3>Sidebar</h3>
                <p>Supplementary content...</p>
            </aside>
        </main>
    </div>

    <footer>
        <div class="container">
            <p>&copy; 2024 Your Website. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>
\`\`\`
`;
}
