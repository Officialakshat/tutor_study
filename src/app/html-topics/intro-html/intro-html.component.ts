import { Component } from '@angular/core';
import { MarkdownModule,  } from 'ngx-markdown';

@Component({
  selector: 'app-intro-html',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './intro-html.component.html',
  styleUrls: ['./intro-html.component.css']
})
export class IntroHtmlComponent {
  introHtmlContent = `
# Introduction to HTML

HTML, or Hypertext Markup Language, is the standard markup language used to create and structure web pages. It provides the building blocks for the content and layout of a webpage, allowing developers to create headings, paragraphs, lists, links, images, and more.

## What is HTML?

HTML is a markup language, which means it uses tags to define the structure and semantics of web page content. These tags are enclosed in angle brackets, like \`<html>\` or \`<p>\`, and they tell the web browser how to display the content.

The basic structure of an HTML document consists of the following elements:

- \`<html>\`: The root element that encloses the entire document.
- \`<head>\`: Contains metadata about the page, such as the title, character encoding, and links to CSS files.
- \`<body>\`: Holds the visible content of the webpage.

Here's an example of a basic HTML document:

\`\`\`html
<!DOCTYPE html>
<html>
  <head>
    <title>My Web Page</title>
  </head>
  <body>
    <h1>Welcome to My Web Page</h1>
    <p>This is a paragraph of text.</p>
  </body>
</html>
\`\`\`

## HTML Elements and Tags

HTML uses various elements and tags to structure and format the content of a web page. Some common examples include:

- Headings: \`<h1>\`, \`<h2>\`, \`<h3>\`, \`<h4>\`, \`<h5>\`, \`<h6>\`
- Paragraphs: \`<p>\`
- Lists: \`<ul>\` (unordered), \`<ol>\` (ordered), \`<li>\` (list item)
- Links: \`<a href="URL">Link Text</a>\`
- Images: \`<img src="image.jpg" alt="Image Description">\`
- Divisions: \`<div>\` (used for grouping content)
- Spans: \`<span>\` (used for inline styling)

Each HTML tag has specific semantic meaning and is used to convey the purpose or structure of the content it encloses. Using the appropriate tags helps search engines and assistive technologies better understand the content of your web pages.

## HTML Attributes

In addition to tags, HTML elements can also have attributes that provide additional information or modify the behavior of the element. Attributes are placed inside the opening tag and are typically in the format \`attribute="value"\`.

Some common HTML attributes include:

- \`src\`: Specifies the URL of an image or other media resource
- \`href\`: Specifies the URL of a hyperlink
- \`alt\`: Provides an alternative text description for an image
- \`class\`: Assigns a class name to an element for CSS styling
- \`id\`: Assigns a unique identifier to an element

Understanding HTML elements, tags, and attributes is essential for creating well-structured and semantic web pages.

## Conclusion

In this introduction, we've covered the basics of HTML, including its structure, common elements and tags, and the use of attributes. HTML provides the foundation for building web pages and is a crucial skill for any web developer to master. With this knowledge, you can start creating your own HTML documents and building engaging and accessible web experiences.
`;
}