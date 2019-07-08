import { Component, OnInit } from '@angular/core';
import { ExamplehttpService } from 'src/app/services/examplehttp.service';

@Component({
  selector: 'app-httpbin',
  template: `
    <p>
      httpbin works!
    </p>

    <button (click)="method()">Get Data</button>

    {{data?.url}}

  `,
  styles: []
})
export class HttpbinComponent implements OnInit {

  data:any;
  
  constructor(private httpBinService: ExamplehttpService) { }

  ngOnInit() {
  }

  method(){
    this.httpBinService.getData().subscribe(val => {this.data = val; console.log(this.data);});
  }

}
