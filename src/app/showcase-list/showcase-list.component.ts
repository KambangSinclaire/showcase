import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-showcase-list',
  templateUrl: './showcase-list.component.html',
  styleUrls: ['./showcase-list.component.scss']
})
export class ShowcaseListComponent {
  @Input() showAboutShowCase: boolean = false;
  showShowCaseList: boolean = true;

  users = [
    {
      username: 'kambang',
      age: 21,
      gender: 'MALE',
      proffesion: 'Eng'
    },
    {
      username: 'Prince',
      age: 20,
      gender: 'MALE',
      proffesion: 'Teacher'
    },
    {
      username: 'Joseph',
      age: 30,
      gender: 'MALE',
      proffesion: 'Mechanic'
    }
  ]
}
