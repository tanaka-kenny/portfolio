import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  skills = [
    'Frontend development',
    'Backend development',
    'Angular',
    'Firebase',
    'Ionic',
    'HTML', 
    'CSS',
    'JavaScript',
    'Typescript',
    'Node.js',
    'SQL',
    'MongoDB'
  ];
}
