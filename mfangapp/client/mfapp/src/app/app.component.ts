import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  onClicked:boolean = false;

  onClickMe(){
    this.onClicked = true;
    
  }

  onResetInput(){
    this.onClicked = false;
  }
}
