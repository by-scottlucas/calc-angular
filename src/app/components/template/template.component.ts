import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})

export class TemplateComponent {

  display : string = '';

  adicao : string = ''
  // subtracao : string = ''
  // multipli : string = ''
  // divisao : string = ''
  // resultado : string = ''
  // porcent : string = ''
  // model : string = ''
  // virgula : string = ''

  // Números

  n1 = 0;
  n2 = 0;
  n3 = 0;
  n4 = 0;
  n5 = 0;
  n6 = 0;
  n7 = 0;
  n8 = 0;
  n9 = 0;
  n0 = 0;

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

    if (this.n2) {
      let numberAsString: string = `${this.n2}`;
      this.display += numberAsString;
    }
  }

  num3() {

    this.n3 = 3;

    if (this.n3) {
      let numberAsString: string = `${this.n3}`;
      this.display += numberAsString;
    }
  }

  num4() {

    this.n4 = 4;

    if (this.n4) {
      let numberAsString: string = `${this.n4}`;
      this.display += numberAsString;
    }
  }

  num5() {

    this.n5 = 5;

    if (this.n5) {
      let numberAsString: string = `${this.n5}`;
      this.display += numberAsString;
    }
  }

  num6() {

    this.n6 = 6;

    if (this.n6) {
      let numberAsString: string = `${this.n6}`;
      this.display += numberAsString;
    }
  }

  num7() {

    this.n7 = 7;

    if (this.n7) {
      let numberAsString: string = `${this.n7}`;
      this.display += numberAsString;
    }
  }

  num8() {

    this.n8 = 8;

    if (this.n8) {
      let numberAsString: string = `${this.n8}`;
      this.display += numberAsString;
    }
  }

  num9() {

    this.n9 = 9;

    if (this.n9) {
      let numberAsString: string = `${this.n9}`;
      this.display += numberAsString;
    }
  }


  // Operadores, Simbolos e Funções

  limpar() {
    this.display = '';
  }

  limparRegistro() {
    location.reload();
  }


  soma(){
    this.display += "+";
    

  }

  subtracao(){

  }

  multipli(){

  }

  divisao(){

  }

  porcent(){


  }

  model() {

  }

  virgula() {

  }

  resultado() {
    

  }



  constructor() { }


}
