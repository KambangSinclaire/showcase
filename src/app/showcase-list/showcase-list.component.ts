import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase-list',
  templateUrl: './showcase-list.component.html',
  styleUrls: ['./showcase-list.component.scss']
})
export class ShowcaseListComponent {
  isLoggedIn: boolean = true;
  token = "";
}
