import { Component } from '@angular/core';

// Compoenent Decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  showValFromNavbar: boolean = false;

  passToMain(event: any) {
    this.showValFromNavbar = event;
  }
}
