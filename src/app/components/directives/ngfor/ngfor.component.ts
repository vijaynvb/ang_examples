import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  template: `
    <ul>
      <li *ngFor="let todo of todos; index as i; even as isFirst">
      <span >
      <p [ngStyle]= "{ 'background-color': todo.status== true ? 'red' : 'green' }">
      {{isFirst + " - " + i + " - " +  todo.desc}}
      </p>
      </span>
      </li>
    </ul>

  <div *ngFor="let todo of todos; index as i; first as isFirst">
      {{isFirst + " - " + i + " - " +  todo.desc}}
  </div>



  <table>
    <thead>
    </thead>

    <tbody>
      <tr *ngFor="let todo of todos; index as i; first as isFirst">
      <td> {{todo.id}}      </td>
      <td> {{todo.username}}      </td>
      <td> <button type="submit" > <a href="#">delete</a> </button></td>
      </tr>
    </tbody>

  </table>




  `,
  styles: []
})
export class NgforComponent implements OnInit {

  public todos = [
    {
      id:1,
      username:"root",
      desc:"shopping",
      status: true,
      targetdate: new Date("28/06/2019")
    },
    {
      id:2,
      username:"root",
      desc:"shopping",
      status: false,
      targetdate: new Date("28/06/2019")
    },
    {
      id:3,
      username:"root",
      desc:"shopping",
      status: false,
      targetdate: new Date("28/06/2019")
    },
    {
      id:4,
      username:"root",
      desc:"shopping",
      status: false,
      targetdate: new Date("28/06/2019")
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
