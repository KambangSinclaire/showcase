import { AfterContentInit, AfterViewChecked, Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  value: string = "";
  ngOnInit(): void {
    this.value = "This is the value passed during onInit";
  }

}
