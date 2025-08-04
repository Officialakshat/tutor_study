import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-color-html',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './color-html.component.html',
})
export class ColorHtmlComponent {
//   htmlColorsContent = `
//   # HTML Colors

// Colors are one of the most important aspects of web design, affecting the aesthetic appeal, user experience, and overall usability of a website. HTML allows you to apply colors to various elements like text, backgrounds, borders, and more. Understanding how to specify and use colors effectively in HTML can greatly enhance the look and feel of your website.

// In this tutorial, we'll explore the different ways to define colors in HTML, including color names, hexadecimal codes, RGB, RGBA, HSL, HSLA, and more. We'll also touch on color theory, accessibility considerations, and best practices for color usage on the web.

// ## Color Methods in HTML

// There are several ways to define colors in HTML, each offering different advantages and use cases. The most common methods are color names, hexadecimal values, RGB, RGBA, HSL, and HSLA.

// ### 1. Color Names

// HTML provides a set of predefined color names that can be used directly in CSS. These color names are easy to remember and are supported across all modern browsers. Some of the most common color names include `red`, `blue`, `green`, `yellow`, `black`, and `white`. 

// #### Common Color Names
// - **Primary colors**: `red`, `blue`, `green`
// - **Secondary colors**: `yellow`, `purple`, `cyan`
// - **Neutrals**: `black`, `white`, `gray`, `silver`
// - **Other colors**: `pink`, `orange`, `brown`, `indigo`, `violet`

// #### Example:
// ```html
// <p style="color: red;">This text is red.</p>
// <p style="color: green;">This text is green.</p>
// <p style="color: blue;">This text is blue.</p>
// <p style="color: yellow;">This text is yellow.</p>
// <p style="color: black;">This text is black.</p>
// <p style="color: white; background-color: black;">This text is white on a black background.</p> ` 
// }
htmlColorsContent = `
# HTML Colors

Learn how to specify colors in HTML using different formats and techniques.

## Color Formats

### Color Names
HTML supports 140+ standard color names:

\`\`\`html
<p style="color: red;">Red Text</p>
<div style="background-color: skyblue;">Sky Blue Background</div>
<span style="border: 2px solid green;">Green Border</span>
\`\`\`

### Hexadecimal Colors
Six-digit codes representing RGB values:

\`\`\`html
<!-- Format: #RRGGBB -->
<p style="color: #FF0000;">Red</p>
<p style="color: #00FF00;">Green</p>
<p style="color: #0000FF;">Blue</p>
<p style="color: #FF00FF;">Magenta</p>
\`\`\`

### RGB and RGBA
RGB for color, RGBA for color with opacity:

\`\`\`html
<!-- RGB Format -->
<div style="color: rgb(255, 0, 0);">Red</div>
<div style="color: rgb(0, 255, 0);">Green</div>

<!-- RGBA Format (with opacity) -->
<div style="background-color: rgba(0, 0, 255, 0.5);">
  Semi-transparent blue background
</div>
\`\`\`

### HSL and HSLA
Hue, Saturation, and Lightness format:

\`\`\`html
<!-- HSL Format -->
<div style="color: hsl(0, 100%, 50%);">Red</div>
<div style="color: hsl(120, 100%, 50%);">Green</div>

<!-- HSLA Format (with opacity) -->
<div style="background-color: hsla(240, 100%, 50%, 0.5);">
  Semi-transparent blue background
</div>
\`\`\`

## Common Color Values Table

| Color | Hex | RGB | HSL |
|-------|-----|-----|-----|
| Red | #FF0000 | rgb(255, 0, 0) | hsl(0, 100%, 50%) |
| Green | #00FF00 | rgb(0, 255, 0) | hsl(120, 100%, 50%) |
| Blue | #0000FF | rgb(0, 0, 255) | hsl(240, 100%, 50%) |
| Black | #000000 | rgb(0, 0, 0) | hsl(0, 0%, 0%) |
| White | #FFFFFF | rgb(255, 255, 255) | hsl(0, 0%, 100%) |

## Applying Colors in HTML

### Text Colors

\`\`\`html
<!-- Using color property -->
<p style="color: #FF0000;">Red text</p>
<p style="color: rgb(0, 255, 0);">Green text</p>
<p style="color: hsl(240, 100%, 50%);">Blue text</p>
\`\`\`

### Background Colors

\`\`\`html
<!-- Using background-color property -->
<div style="background-color: #FF0000;">Red background</div>
<div style="background-color: rgb(0, 255, 0);">Green background</div>
<div style="background-color: hsl(240, 100%, 50%);">Blue background</div>
\`\`\`

### Border Colors

\`\`\`html
<!-- Using border-color property -->
<div style="border: 2px solid #FF0000;">Red border</div>
<div style="border: 2px solid rgb(0, 255, 0);">Green border</div>
<div style="border: 2px solid hsl(240, 100%, 50%);">Blue border</div>
\`\`\`

## Best Practices

1. Use consistent color format throughout your project
2. Consider color contrast for accessibility
3. Use CSS variables for maintaining color schemes
4. Test colors across different browsers
5. Consider color-blind users when choosing color combinations

## Modern Color Features

### CSS Variables (Custom Properties)

\`\`\`html
<style>
  :root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
  }
</style>

<div style="color: var(--primary-color);">
  Using primary color
</div>
\`\`\`

### Current Color Keyword

\`\`\`html
<div style="color: blue; border: 1px solid currentColor;">
  Border will match text color
</div>
\`\`\`
`;
}
