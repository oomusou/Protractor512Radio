import { Component } from '@angular/core';
import { Cloud } from './cloud';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedId = '0';
  clouds: Cloud[] = [
    {id: '0', name: 'AWS', checked: true},
    {id: '1', name: 'Azure', checked: false},
    {id: '2', name: 'GCP', checked: false}
  ];

  onChange(element: HTMLInputElement) {
    this.selectedId = element.value;
  }
}
