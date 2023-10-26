import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})

export class TemplateComponent {

  n1: number = 0;
  n2: number = 0;
  n3: number = 0;
  n4: number = 0;
  n5: number = 0;
  n6: number = 0;
  n7: number = 0;
  n8: number = 0;
  n9: number = 0;
  n0: number = 0;

  display: string = '';

  limpar() {
    this.display = '';
  }

  limparRegistro() {
    location.reload();
  }

  num0() {
    this.n0 = 0;

    if (this.display) {
      let numberAsString: string = `${this.n0}`;
      this.display += numberAsString;
    }
  }

  num1() {

    this.n1 = 1;

    if (this.n1) {
      let numberAsString: string = `${this.n1}`;
      this.display += numberAsString;
    }
  }

  num2() {
    this.n2 = 2;
  }
  num3() {
    this.n3 = this.n0 = 3;
  }
  num4() {
    this.n4 = this.n0 = 4;
  }
  num5() {
    this.n5 = this.n0 = 5;
  }
  num6() {
    this.n6 = this.n0 = 6;
  }
  num7() {
    this.n7 = this.n0 = 7;
  }
  num8() {
    this.n8 = this.n0 = 8;
  }
  num9() {
    this.n9 = this.n0 = 9;
  }

  constructor() { }


}
