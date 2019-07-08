import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databindings',
  template: `
  
    <p>
      works! {{1+1}} {{greeting}} {{sum(4,5)}}<br> 
      <input type="text" [value]=defaultValue/>
     
      <input type="submit" (click)="display();" />

      <img [src] = imageURL alt="no image"/>
    </p>
  `,
  styles: ["p{color:green;}"]
})
export class DatabindingsComponent implements OnInit {

  greeting = "Hello testing";
  defaultValue = "Name";
  imageURL;

  constructor() {
    this.imageURL="";
   }

  ngOnInit() {
  }

  display(){
    this.imageURL = "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg";
    console.log("Invoked from html");
  }

}
