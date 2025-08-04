import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-forms-html',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './forms-html.component.html',
})
export class FormsHtmlComponent {
  htmlFormsContent = `
  # HTML Forms
  
  HTML forms are used to collect user input. Learn about different form elements and their usage.
  
  ## Basic Form Structure
  
  \`\`\`html
  <form action="/submit" method="post">
    <!-- Form elements go here -->
    <button type="submit">Submit</button>
  </form>
  \`\`\`
  
  ## Common Form Elements
  
  ### Text Input Fields
  \`\`\`html
  <!-- Simple text input -->
  <input type="text" name="username" placeholder="Enter username">
  
  <!-- Email input -->
  <input type="email" name="email" placeholder="Enter email">
  
  <!-- Password input -->
  <input type="password" name="password" placeholder="Enter password">
  
  <!-- Text area -->
  <textarea name="message" rows="4" placeholder="Enter message"></textarea>
  \`\`\`
  
  ### Selection Elements
  \`\`\`html
  <!-- Dropdown menu -->
  <select name="country">
    <option value="">Select country</option>
    <option value="us">USA</option>
    <option value="uk">UK</option>
  </select>
  
  <!-- Radio buttons -->
  <input type="radio" name="gender" value="male"> Male
  <input type="radio" name="gender" value="female"> Female
  
  <!-- Checkboxes -->
  <input type="checkbox" name="terms"> Accept terms
  \`\`\`
  
  ### Number and Date Inputs
  \`\`\`html
  <!-- Number input -->
  <input type="number" name="age" min="0" max="120">
  
  <!-- Date input -->
  <input type="date" name="birthdate">
  \`\`\`
  
  ## Form Example with Labels
  \`\`\`html
  <form>
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
    </div>
  
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
    </div>
  
    <div>
      <label for="subject">Subject:</label>
      <select id="subject" name="subject">
        <option value="general">General Inquiry</option>
        <option value="support">Support</option>
      </select>
    </div>
  
    <div>
      <label for="message">Message:</label>
      <textarea id="message" name="message"></textarea>
    </div>
  
    <button type="submit">Send Message</button>
  </form>
  \`\`\`
  
  ## Best Practices
  
  1. Always use labels with form inputs
  2. Include proper validation attributes (required, min, max, etc.)
  3. Use appropriate input types (email, number, tel, etc.)
  4. Group related fields using fieldset
  5. Add placeholder text for guidance
  6. Include clear submit buttons
  
  ## Form Attributes
  
  - \`action\`: URL where form data is sent
  - \`method\`: HTTP method (get/post)
  - \`required\`: Makes field mandatory
  - \`placeholder\`: Shows hint text
  - \`disabled\`: Disables input
  - \`readonly\`: Makes input read-only
  `;
  
}
