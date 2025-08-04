import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-table-html',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './table-html.component.html',
})
export class TableHtmlComponent {
  htmlTablesContent = `
# HTML Tables

Tables in HTML are used to display data in rows and columns. Learn how to create and style tables effectively.

## Basic Table Structure

### Simple Table Example

\`\`\`html
<table>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </tbody>
</table>
\`\`\`

## Table Elements

### Main Table Tags

\`\`\`html
<table>
  <!-- Table Head -->
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
    </tr>
  </thead>

  <!-- Table Body -->
  <tbody>
    <tr>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
    </tr>
  </tbody>

  <!-- Table Footer -->
  <tfoot>
    <tr>
      <td>Footer 1</td>
      <td>Footer 2</td>
    </tr>
  </tfoot>
</table>
\`\`\`

## Table Attributes

### Common Table Attributes

\`\`\`html
<table border="1" cellspacing="0" cellpadding="10">
  <!-- Table content -->
</table>
\`\`\`

### Cell Spanning

\`\`\`html
<!-- Column Span -->
<tr>
  <td colspan="2">This cell spans 2 columns</td>
</tr>

<!-- Row Span -->
<tr>
  <td rowspan="2">This cell spans 2 rows</td>
  <td>Regular cell</td>
</tr>
\`\`\`

## Styling Tables

### Basic CSS Styling

\`\`\`html
<style>
  table {
    border-collapse: collapse;
    width: 100%;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }
  
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  tr:hover {
    background-color: #f5f5f5;
  }
</style>
\`\`\`

## Complex Table Example

\`\`\`html
<table>
  <caption>Employee Information</caption>
  <thead>
    <tr>
      <th rowspan="2">Name</th>
      <th colspan="2">Contact Info</th>
      <th rowspan="2">Position</th>
    </tr>
    <tr>
      <th>Email</th>
      <th>Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td>555-0123</td>
      <td>Developer</td>
    </tr>
    <tr>
      <td>Jane Smith</td>
      <td>jane@example.com</td>
      <td>555-0124</td>
      <td>Designer</td>
    </tr>
  </tbody>
</table>
\`\`\`

## Responsive Tables

### Making Tables Responsive

\`\`\`html
<style>
  .table-responsive {
    overflow-x: auto;
  }
</style>

<div class="table-responsive">
  <table>
    <!-- Table content -->
  </table>
</div>
\`\`\`

## Semantic Table Elements

| Element | Purpose | Example |
|---------|---------|---------|
| \`<caption>\` | Table title | \`<caption>Monthly Sales</caption>\` |
| \`<thead>\` | Header content | Contains header rows |
| \`<tbody>\` | Main content | Contains data rows |
| \`<tfoot>\` | Footer content | Contains summary rows |
| \`<th>\` | Header cell | Column/row headers |
| \`<tr>\` | Table row | Groups cells horizontally |
| \`<td>\` | Table data | Individual data cells |

## Best Practices

1. Use \`<thead>\`, \`<tbody>\`, and \`<tfoot>\` for better organization
2. Include proper table headers with \`<th>\`
3. Use \`<caption>\` for table titles
4. Keep tables responsive for mobile devices
5. Use appropriate cell spacing and padding
6. Add hover effects for better user experience
7. Use semantic markup for accessibility
8. Consider zebra striping for better readability

## Accessibility Features

### Making Tables Accessible

\`\`\`html
<table>
  <caption>Monthly Budget</caption>
  <thead>
    <tr>
      <th scope="col">Category</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Rent</th>
      <td>$1000</td>
    </tr>
    <tr>
      <th scope="row">Utilities</th>
      <td>$200</td>
    </tr>
  </tbody>
</table>
\`\`\`

## Common Table Use Cases

1. Data presentation
2. Pricing tables
3. Schedule/timetables
4. Comparison charts
5. Financial reports
6. Product specifications
7. Contact information
8. Statistical data

## Advanced Features

### Column Groups

\`\`\`html
<table>
  <colgroup>
    <col style="background-color: #f2f2f2">
    <col span="2" style="background-color: #e6e6e6">
  </colgroup>
  <tr>
    <th>Column 1</th>
    <th>Column 2</th>
    <th>Column 3</th>
  </tr>
  <!-- Table content -->
</table>
\`\`\`
`;
}
