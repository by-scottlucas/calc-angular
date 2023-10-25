import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})

export class TemplateComponent {


  zero : number = 0;

  n1 : number = 1;
  n2 : number = 0;
  n3 : number = 0;
  n4 : number = 0;
  n5 : number = 0;
  n6 : number = 0;
  n7 : number = 0;
  n8 : number = 0;
  n9 : number = 0;
  n0 : number = 0;

  num0(){
    this.n0 = 0;
  }
  num1(){
    this.n0 = 1;
  }
  num2(){
    this.n2 = this.n0 = 2;
  }
  num3(){
    this.n3 = this.n0 = 3;
  }
  num4(){
    this.n4 = this.n0 = 4;
  }
  num5(){
    this.n5 = this.n0 = 5;
  }
  num6(){
    this.n6 = this.n0 = 6;
  }
  num7(){
    this.n7 = this.n0 = 7;
  }
  num8(){
    this.n8 = this.n0 = 8;
  }
  num9(){
    this.n9 = this.n0 = 9;
  }

  constructor() {}


}
