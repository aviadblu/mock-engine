import {Component} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-template-loader-main',
  template: `
    <div>
      <select (change)="loadTemplate($event.target.value)">
        <option *ngFor="let tpl of metadata; let i = index;" [value]="i">{{tpl.title}}</option>
      </select>
      <hr>
      <div [innerHtml]="currentTemplate"> Hello</div>
    </div>
  `
})
export class TemplateLoaderMainComponent {
  currentTemplate;
  metadata;

  constructor(private http: Http) {
    this.loadMetaData()
      .subscribe(metadata => {
        this.metadata = metadata;
        this.loadTemplate(0);
      });
  }

  private loadMetaData() {
    return this.http.get('/assets/templates/metadata.json')
      .map((data: any) => {
        return data.json();
      });
  }

  loadTemplate(index) {
    this.http.get(this.metadata[index].path)
      .map((html: any) => {
        this.currentTemplate = html._body;
      })
      .subscribe();
  }

}
