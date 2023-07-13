import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  activePage: string = "Homepage";
  username: string = "";
  derivedStyles: string = "color:red;";
  imageUrl: string = "https://google.com/logo";

  proveText: string = '';

  refreshPage() {
    alert("Yaaaay...! I have been clicked !!!")
  }

  updateText(event: any) {
    this.proveText = event.target.value;
  }
}
