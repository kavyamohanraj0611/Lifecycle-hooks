import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lifecycle';
  value:string='Kavya';
  show:boolean=false;
  showOrHide():void{
    this.show=!this.show;
  }
}
