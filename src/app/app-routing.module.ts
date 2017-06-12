import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TemplateLoaderMainComponent} from "./template-loader/template-loader-main/template-loader-main.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'template-loader',
        component: TemplateLoaderMainComponent
      },
      {
        path: '',
        redirectTo: '/template-loader',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
