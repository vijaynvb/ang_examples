import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngpipe',
  template: `
    <p>
      ngpipe works! {{name | uppercase | lowercase | titlecase }} <br>

      DOB : {{dates | date: 'short'}}
      <br>
      Exponetial:  {{num | exponetialStrenth : 5}}
    </p>
  `,
  styles: []
})
export class NgpipeComponent implements OnInit {

  name:string="vijay";
  dates=new Date("04/22/2019");

  num:number=5;

  constructor() { }

  ngOnInit() {
  }

}
