import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-css-background',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './css-background.component.html',
})
export class CssBackgroundComponent {
  cssBackgroundsContent = `
# CSS Backgrounds

Learn how to style element backgrounds using CSS background properties.

## Background Color

Set solid colors for elements:

\`\`\`css
/* Basic color */
div {
  background-color: blue;
}

/* Using transparency */
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
}
\`\`\`

## Background Image

Add images as backgrounds:

\`\`\`css
.hero {
  background-image: url('image.jpg');
  background-size: cover;
  background-position: center;
}
\`\`\`

## Background Properties

### Background Repeat
Control how images repeat:

\`\`\`css
.pattern {
  background-image: url('pattern.png');
  background-repeat: repeat;      /* Default */
  /* Other values */
  background-repeat: no-repeat;
  background-repeat: repeat-x;    /* Horizontal only */
  background-repeat: repeat-y;    /* Vertical only */
}
\`\`\`

### Background Position
Position your background image:

\`\`\`css
.banner {
  background-position: center center;  /* Center */
  /* Other common values */
  background-position: top right;
  background-position: bottom left;
  background-position: 50% 50%;        /* Using percentages */
}
\`\`\`

### Background Size
Control image sizing:

\`\`\`css
.container {
  background-size: cover;     /* Cover entire container */
  /* Other options */
  background-size: contain;   /* Fit within container */
  background-size: 100% 100%; /* Stretch to fit */
  background-size: 300px auto; /* Fixed width, auto height */
}
\`\`\`

## Shorthand Syntax

Combine multiple properties:

\`\`\`css
.element {
  /* Order: color image repeat position/size */
  background: #f0f0f0 url('bg.jpg') no-repeat center/cover;
}
\`\`\`

## Common Use Cases

### Hero Section
\`\`\`css
.hero {
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
              url('hero.jpg') center/cover no-repeat;
  height: 400px;
}
\`\`\`

### Pattern Background
\`\`\`css
.pattern-bg {
  background: url('pattern.png') repeat;
  background-size: 100px 100px;
}
\`\`\`

### Multiple Backgrounds
\`\`\`css
.layered {
  background: 
    url('overlay.png') center/cover no-repeat,
    url('main-bg.jpg') center/cover no-repeat;
}
\`\`\`

## Best Practices

1. Optimize background images for web use
2. Use relative URLs for background images
3. Provide fallback background colors
4. Consider mobile responsiveness
5. Use appropriate image formats (JPG for photos, PNG for transparency)
`;
}
