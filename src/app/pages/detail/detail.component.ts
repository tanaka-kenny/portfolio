import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PROJECTS } from 'src/app/utils/data';
import { Project } from '../projects/projects.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  project: Project;

  constructor(private activeRoute: ActivatedRoute) {
    const id = this.activeRoute.snapshot.paramMap.get('projectId');
    this.project = PROJECTS.filter(project => project.id === id)[0];
  };
}
