import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assgn3',
  templateUrl: './assgn3.component.html',
  styleUrls: ['./assgn3.component.css']
})
export class Assgn3Component implements OnInit {
 
  values = [];
  constructor() { }

  ngOnInit() {
  }
  removevalue(i){
    this.values.splice(i,1);
  }

  addvalue(){
    this.values.push({value: ""});
  }
}
