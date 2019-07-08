import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  template: `
    <div [ngSwitch] = "page">
      <app-ngfor *ngSwitchCase="1" >  </app-ngfor>
      <p *ngSwitchCase="2"> Paragraph 2 </p>
      <p *ngSwitchCase="3"> Paragraph 3 </p>    
    </div>
    <button (click)="page = 1" > Ng For example</button>
    <button (click)="method(2)"> button 2</button>
    <button (click)="method(3)"> button 3</button>
  
  `,
  styles: []
})
export class NgswitchComponent implements OnInit {

  page: number = 1;

  constructor() { }

  ngOnInit() {
  }
  method(val){
    this.page = val;
  }

}
