import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hiding',
  template: `
    <div [hidden]="divStatus" >
      Content in div
    </div>
    <input type="text" value="value"/><br>
    <input type="submit" (click)="method()" /> <br>
  `,
  styles: []
})
export class HidingComponent implements OnInit {

  divStatus:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  method(){
    this.divStatus= !this.divStatus;  
  }

}
