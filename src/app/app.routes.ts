

import { Routes } from '@angular/router';
import { MainviewComponent } from './mainview/mainview.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CssTutorComponent } from './tutorials/css-tutor/css-tutor.component';
import { JsTutorComponent } from './tutorials/js-tutor/js-tutor.component';
import { PythonTutorComponent } from './tutorials/python-tutor/python-tutor.component';
import { HtmlTutorComponent } from './tutorials/html-tutor/html-tutor.component';
import { IntroHtmlComponent } from './html-topics/intro-html/intro-html.component';
import { ElementHtmlComponent } from './html-topics/element-html/element-html.component';
import { AttributesHtmlComponent } from './html-topics/attributes-html/attributes-html.component';
import { FormsHtmlComponent } from './html-topics/forms-html/forms-html.component';
import { ListHtmlComponent } from './html-topics/list-html/list-html.component';
import { ImageHtmlComponent } from './html-topics/image-html/image-html.component';
import { StyleHtmlComponent } from './html-topics/style-html/style-html.component';
import { LinksHtmlComponent } from './html-topics/links-html/links-html.component';
import { CommentsHtmlComponent } from './html-topics/comments-html/comments-html.component';
import { ColorHtmlComponent } from './html-topics/color-html/color-html.component';
import { TableHtmlComponent } from './html-topics/table-html/table-html.component';
import { DivHtmlComponent } from './html-topics/div-html/div-html.component';
import { LayoutHtmlComponent } from './html-topics/layout-html/layout-html.component';
import { CssIntroComponent } from './css-topics/css-intro/css-intro.component';
import { CssSyntaxComponent } from './css-topics/css-syntax/css-syntax.component';
import { CssCommentsComponent } from './css-topics/css-comments/css-comments.component';
import { CssColorsComponent } from './css-topics/css-colors/css-colors.component';
import { CssBackgroundComponent } from './css-topics/css-background/css-background.component';
import { CssBorderComponent } from './css-topics/css-border/css-border.component';
import { CssMarginsComponent } from './css-topics/css-margins/css-margins.component';
import { CssPaddingComponent } from './css-topics/css-padding/css-padding.component';
import { CssBoxModelComponent } from './css-topics/css-box-model/css-box-model.component';
import { CssOutlineComponent } from './css-topics/css-outline/css-outline.component';
import { CssTextComponent } from './css-topics/css-text/css-text.component';
import { CssLinksComponent } from './css-topics/css-links/css-links.component';
import { CssFontComponent } from './css-topics/css-font/css-font.component';
import { CssIconsComponent } from './css-topics/css-icons/css-icons.component';
import { JsIntroComponent } from './js-topics/js-intro/js-intro.component';
import { JsSyntaxComponent } from './js-topics/js-syntax/js-syntax.component';
import { JsVariableComponent } from './js-topics/js-variable/js-variable.component';
import { JsDatatypeComponent } from './js-topics/js-datatype/js-datatype.component';
import { JsOperatorsComponent } from './js-topics/js-operators/js-operators.component';
import { JsFunctionsComponent } from './js-topics/js-functions/js-functions.component';
import { JsEventsComponent } from './js-topics/js-events/js-events.component';
import { JsArraysComponent } from './js-topics/js-arrays/js-arrays.component';
import { JsLoopsComponent } from './js-topics/js-loops/js-loops.component';
import { JsConditionsComponent } from './js-topics/js-conditions/js-conditions.component';
import { JsManipulationsComponent } from './js-topics/js-manipulations/js-manipulations.component';
import { JsES6Component } from './js-topics/js-es6/js-es6.component';
import { JsJsonComponent } from './js-topics/js-json/js-json.component';
import { JsErrorHandlingComponent } from './js-topics/js-error-handling/js-error-handling.component';
import { JsPromisesComponent } from './js-topics/js-promises/js-promises.component';
import { JsAsyncComponent } from './js-topics/js-async/js-async.component';
import { PyIntroComponent } from './py-topic/py-intro/py-intro.component';
import { LogginComponent } from './loggin/loggin.component';

export const routes: Routes = [

  // {
  //   path: '',
  //   component: LogginComponent
  // },


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
    component: HtmlTutorComponent,
    children: [
      {
        path: '',
        component: IntroHtmlComponent
      },
      {
        path: 'intro',
        component: IntroHtmlComponent
      },
      {
        path: 'element',
        component: ElementHtmlComponent
      },
      

      {
        path: 'attribute',
        component: AttributesHtmlComponent
      },
      {
        path: 'forms',
        component: FormsHtmlComponent
      },
      {
        path: 'list',
        component: ListHtmlComponent
      },
      {
        path: 'image',
        component: ImageHtmlComponent
      },
      {
        path: 'style',
        component: StyleHtmlComponent
      },
      {
        path: 'link',
        component: LinksHtmlComponent
      },
      {
        path: 'comment',
        component: CommentsHtmlComponent
      },
      {
        path: 'color',
        component: ColorHtmlComponent
      },
      {
        path: 'table',
        component: TableHtmlComponent
      },
      {
        path: 'div',
        component: DivHtmlComponent
      },
      {
        path: 'layout',
        component: LayoutHtmlComponent
      },

    ]
  }, 

  // ------------------------------------------------------ CSS -------------------------------------------------
  
  {
    path: 'app-css-tutor',
    component: CssTutorComponent,
    children: [
      {
        path: '',
        component: CssIntroComponent,
      },
      {
        path: 'app-css-tutor',
        component: CssIntroComponent,
      },
     
      {
        path: 'css-syntax',
        component: CssSyntaxComponent
      },
      {
        path: 'css-comments',
        component: CssCommentsComponent
      },
      {
        path: 'css-colors',
        component: CssColorsComponent
      },
      {
        path: 'css-backgrounds',
        component: CssBackgroundComponent
      },
      {
        path: 'css-border',
        component: CssBorderComponent
      },
      {
        path: 'css-margins',
        component: CssMarginsComponent
      },
      {
        path: 'css-padding',
        component: CssPaddingComponent
      },
      {
        path: 'css-box-model',
        component: CssBoxModelComponent
      },
      {
        path: 'css-outline',
        component: CssOutlineComponent
      },
      {
        path: 'css-text',
        component: CssTextComponent
      },
      {
        path: 'css-fonts',
        component: CssFontComponent
      },
      {
        path: 'css-icons',
        component: CssIconsComponent
      },
      {
        path: 'css-links',
        component: CssLinksComponent
      },
    ]
  },
  // ----------------------------------------- Python ----------------------------------------------------//
  {
    path: 'app-python-tutor',
    component: PythonTutorComponent
  },

  {
    path: 'app-js-tutor',
    component: JsTutorComponent,
    children : [
      {
        path: '',
        component: JsIntroComponent
      },
      {
        path: 'js-intro',
        component: JsIntroComponent
      },
      {
        path: 'js-syntax',
        component: JsSyntaxComponent
      },
      {
        path: 'js-variables',
        component: JsVariableComponent
      },
      {
        path: 'js-data-types',
        component: JsDatatypeComponent
      },
      {
        path: 'js-operator',
        component: JsOperatorsComponent
      },
      {
        path: 'js-functions',
        component: JsFunctionsComponent
      },
      {
        path: 'js-events',
        component: JsEventsComponent
      },

      {
        path: 'js-arrays',
        component: JsArraysComponent
      },
      {
        path: 'js-loops',
        component: JsLoopsComponent
      },
      {
        path: 'js-conditions',
        component: JsConditionsComponent
      },

      {
        path: 'js-manipulation',
        component: JsManipulationsComponent
      },
      {
        path: 'js-ES6',
        component: JsES6Component
      },
      {
        path: 'js-JSON',
        component: JsJsonComponent
      },

      {
        path: 'js-error',
        component: JsErrorHandlingComponent
      },
      {
        path: 'js-promises',
        component: JsPromisesComponent
      },
      {
        path: 'js-async',
        component: JsAsyncComponent
      },
    ]
  },
 
  {
    path: 'app-py-tutor',
    component: PythonTutorComponent,
    children : [
      {
        path: '',
        component: PyIntroComponent
      },
      {
        path: 'py-intro',
        component: PyIntroComponent
      },
    ]
  }

];