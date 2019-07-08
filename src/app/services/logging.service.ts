import { Injectable } from '@angular/core';
import { LOGS } from './mock-logs';

// @Injectable({
//   providedIn: 'root'
// })
export class LoggingService {

  constructor() { }

  log(message){
    // pust it to file or logging server
    // post method
    console.log(message);
  }

  getLog(): any[]{
    // get method
    return LOGS;

  }

}
