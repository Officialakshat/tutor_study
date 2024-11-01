import { Routes } from '@angular/router';
// import { MainviewComponent } from './mainview/mainview.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { AboutComponent } from './pages/about/about.component';
import { MainviewComponent } from './mainview/mainview.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CoursesComponent } from './pages/courses/courses.component';
// import { HtmtTutorComponent } from './tutorials/htmt-tutor/htmt-tutor.component';
import { HtmlTutorComponent } from './tutorials/html-tutor/html-tutor.component';
import { CssTutorComponent } from './tutorials/css-tutor/css-tutor.component';
import { JsTutorComponent } from './tutorials/js-tutor/js-tutor.component';
import { PythonTutorComponent } from './tutorials/python-tutor/python-tutor.component';

export const routes: Routes = [

  {
    path: '',
    component: MainviewComponent
  },
  {
    path: 'app-about',
    component: AboutComponent
  },
  {
    path: 'app-mainview',
    component: MainviewComponent
  },
  {
    path: 'app-testimonial',
    component: TestimonialComponent
  },
  {
    path: 'app-contact',
    component: ContactComponent
  },
  {
    path: 'app-courses',
    component: CoursesComponent
  },
  {
    path: 'app-html-tutor',
    component: HtmlTutorComponent
  },

  {
    path: 'app-css-tutor',
    component: CssTutorComponent
  },

  {
    path: 'app-js-tutor',
    component: JsTutorComponent
  },

  {
    path: 'app-python-tutor',
    component: PythonTutorComponent
  },
];
