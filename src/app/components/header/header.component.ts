import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private titleService: Title,
    private router: Router,
    private activeRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        const child = this.activeRoute.firstChild;
        if (child) {
          if (child.snapshot.data['title']) {
            return child.snapshot.data['title'];
          }
        }
        this.titleService.getTitle();
      })
    ).subscribe((title: string) => {
      this.titleService.setTitle(title);
    });
  }
}
