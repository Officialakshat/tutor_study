import { Component } from '@angular/core';

// interface Tab {
//   id: string;
//   title: string;
// }

// interface TabContent {
//   title: string;
//   content: string;
// }

@Component({
  selector: 'app-html-tutor',
  standalone: true,
  imports: [],
  templateUrl: './html-tutor.component.html',
  styleUrl: './html-tutor.component.css'
})
export class HtmlTutorComponent {
  // activeTab: string = 'tab1'


  // tabs: Tab[] = [
  //   { id: 'tab1', title: 'HTML Introduction' },
  //   { id: 'tab2', title: 'HTML Elements' },
  //   { id: 'tab3', title: 'HTML Attributes' },
  //   { id: 'tab4', title: 'HTML Forms' },
  //   { id: 'tab5', title: 'HTML Lists' },
  //   { id: 'tab6', title: 'HTML Image' },
  //   { id: 'tab7', title: 'HTML Styles' },
  //   { id: 'tab8', title: 'HTML Links' },
  //   { id: 'tab9', title: 'HTML Comments' },
  //   { id: 'tab10', title: 'HTML Colors' },
  //   { id: 'tab11', title: 'HTML Tables' },
  //   { id: 'tab12', title: 'HTML Div' },
  //   { id: 'tab13', title: 'HTML Layout' }
  // ];

  // content: Record<string, TabContent> = {
  //   tab1: {
  //     title: 'HTML Introduction',
  //     content: `HTML stands for HyperText Markup Language. It is the standard language for creating web pages and web applications.
  //               HTML describes the structure of a webpage, and elements are represented by tags. For example, <p> is a paragraph element, and <a> is an anchor element for links.`
  //   },
  //   tab2: {
  //     title: 'HTML Elements',
  //     content: `HTML elements are the building blocks of HTML pages. They are represented by tags, and they can have content, attributes, and be nested within other elements.
  //               <pre>
  //               &lt;h1&gt;This is a heading&lt;/h1&gt;
  //               &lt;p&gt;This is a paragraph.&lt;/p&gt;
  //               &lt;a href="https://www.example.com"&gt;This is a link&lt;/a&gt;
  //               </pre>`
  //   },
  //   tab3: {
  //     title: 'HTML Attributes',
  //     content: `Attributes provide additional information about HTML elements. They are always included in the opening tag, and they usually come in name/value pairs like name="value".
  //               <pre>
  //               &lt;a href="https://www.example.com" target="_blank"&gt;Visit Example&lt;/a&gt;
  //               </pre>`
  //   }
  //   // Add more content for other tabs as needed
  // };

  // setActiveTab(tabId: string): void {
  //   this.activeTab = tabId;
  // }

  // getActiveContent(): TabContent | undefined {
  //   return this.content[this.activeTab];
  // }
}
