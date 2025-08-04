import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-image-html',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './image-html.component.html',
})
export class ImageHtmlComponent {
  htmlImagesContent = `
  # HTML Images
  
  Images make web pages visually appealing and help convey information effectively. Learn how to use images in HTML.
  
  ## Basic Image Syntax
  
  \`\`\`html
  <img src="image.jpg" alt="Description of the image">
  \`\`\`
  
  ## Essential Attributes
  
  - \`src\`: Source path of the image (required)
  - \`alt\`: Alternative text description (required for accessibility)
  - \`width\`: Image width in pixels
  - \`height\`: Image height in pixels
  
  Example:
  \`\`\`html
  <img 
    src="profile.jpg" 
    alt="Profile photo" 
    width="300" 
    height="200"
  >
  \`\`\`
  
  ## Image Paths
  
  ### Local Images
  \`\`\`html
  <!-- Same folder -->
  <img src="cat.jpg" alt="Cat">
  
  <!-- Subfolder -->
  <img src="images/cat.jpg" alt="Cat">
  
  <!-- Parent folder -->
  <img src="../cat.jpg" alt="Cat">
  \`\`\`
  
  ### Online Images
  \`\`\`html
  <img src="https://example.com/image.jpg" alt="Online image">
  \`\`\`
  
  ## Responsive Images
  
  ### Using max-width
  \`\`\`html
  <img 
    src="large-image.jpg" 
    alt="Responsive image" 
    style="max-width: 100%; height: auto;"
  >
  \`\`\`
  
  ### Picture Element
  \`\`\`html
  <picture>
    <source media="(min-width: 800px)" srcset="large.jpg">
    <source media="(min-width: 400px)" srcset="medium.jpg">
    <img src="small.jpg" alt="Responsive image">
  </picture>
  \`\`\`
  
  ## Image Formats
  
  Common web image formats:
  - JPG: Photos and complex images
  - PNG: Graphics with transparency
  - GIF: Animated images
  - SVG: Scalable vector graphics
  - WebP: Modern format with better compression
  
  Example:
  \`\`\`html
  <!-- JPG for photos -->
  <img src="photo.jpg" alt="Photography">
  
  <!-- PNG for logos -->
  <img src="logo.png" alt="Company logo">
  
  <!-- SVG for icons -->
  <img src="icon.svg" alt="Menu icon">
  \`\`\`
  
  ## Images in Links
  
  \`\`\`html
  <a href="https://example.com">
    <img src="click-me.jpg" alt="Click here">
  </a>
  \`\`\`
  
  ## Best Practices
  
  1. Always include alt text
     \`\`\`html
     <!-- Good -->
     <img src="cat.jpg" alt="Orange cat playing with yarn">
     
     <!-- Decorative image -->
     <img src="divider.png" alt="">
     \`\`\`
  
  2. Specify dimensions
     - Helps prevent layout shifts
     - Improves page load experience
     \`\`\`html
     <img 
       src="profile.jpg" 
       alt="Profile photo"
       width="200" 
       height="200"
     >
     \`\`\`
  
  3. Optimize images
     - Use appropriate format
     - Compress images
     - Consider responsive images
     - Use modern formats like WebP
  
  4. Loading optimization
     \`\`\`html
     <!-- Lazy loading -->
     <img 
       src="large-image.jpg" 
       alt="Lazy loaded image"
       loading="lazy"
     >
     \`\`\`
  `;
}
