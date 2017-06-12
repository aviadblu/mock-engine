import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateLoaderMainComponent } from './template-loader-main/template-loader-main.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TemplateLoaderMainComponent],
  exports: [TemplateLoaderMainComponent]
})
export class TemplateLoaderModule { }
