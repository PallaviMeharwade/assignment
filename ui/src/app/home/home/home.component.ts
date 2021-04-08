import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
   
  ngOnInit() {
  }
index:string
ans:string
submit(){
  var arrayy : string[];
  arrayy=["2","3","10","15","26","35","50","63"]
  console.log(arrayy[this.index])
this.ans=arrayy[this.index]
}

}
