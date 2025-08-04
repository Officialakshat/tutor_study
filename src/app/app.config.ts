import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideMarkdown } from 'ngx-markdown';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),  provideAnimations(),  provideMarkdown()]
};
// import { provideAnimations } from '@angular/platform-browser/animations';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes),
//     provideAnimations()  // Add this line
//   ]
// };

// import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { provideMarkdown } from 'ngx-markdown';

// import { routes } from './app.routes';

// export const appConfig: ApplicationConfig = {
//   providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
  
//   [provideZoneChangeDetection({ eventCoalescing: true }),
//      provideRouter(routes),
//      provideMarkdown()]
// };

// import { ApplicationConfig, provideZoneChangeDetection, SecurityContext } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { provideMarkdown, MARKED_OPTIONS } from 'ngx-markdown';
// import { provideHttpClient } from '@angular/common/http';
// import { routes } from './app.routes';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideZoneChangeDetection({ eventCoalescing: true }),
//     provideRouter(routes),
//     provideHttpClient(), // Required for markdown to work
//     provideMarkdown({
//       sanitize: SecurityContext.NONE, // Allow HTML rendering
//       markedOptions: {
//         provide: MARKED_OPTIONS,
//         useValue: {
//           gfm: true,
//           breaks: true,
//           pedantic: false,
//           smartLists: true,
//           smartypants: false,
//         },
//       },
//     })
//   ]
// };

