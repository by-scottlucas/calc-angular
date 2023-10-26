import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})

export class TemplateComponent {

  num1: any = '';
  num2: any = '';
  firstNumber = true;


  addDisplay(value: any) {

    if (this.firstNumber) {
      if (value >= 0 || value === ".") {
        this.addDigito(value);
      }
      else {
        this.processaOperacao(value)
      }
    }
    else {
      this.num1 = "";
      this.num2 = "";
      this.firstNumber = true;

      if (value >= 0 || value === ".") {
        this.addDigito(value);
      }
      else {
        this.processaOperacao(value)
      }
    }

  }

  addDigito(digito: any) {
    if (digito === "." && this.num2.includes(".")) {
      return
    }
    this.num2 += digito;
    this.updateDisplay(null, null, null, null);
  }

  processaOperacao(operacao: any) {
    if (this.num2 === "" && operacao !== "C") {
      if (this.num1 !== "") {
        this.alterarOperacao(operacao);
      }
      return;
    }
    let valorOperacao: any;
    let anterior = +this.num1.split(" ")[0];
    let atual = +this.num2;

    switch (operacao) {
      case "+":
        valorOperacao = anterior + atual;
        this.updateDisplay(valorOperacao, operacao, atual, anterior)
        break;

      case "-":
        valorOperacao = anterior - atual;
        this.updateDisplay(valorOperacao, operacao, atual, anterior)
        break;

      case "*":
        valorOperacao = anterior * atual;
        this.updateDisplay(valorOperacao, operacao, atual, anterior)
        break;

      case "potencia":
        this.processaOperacaoPotencia()
        break;

      case "/":
        valorOperacao = anterior / atual;
        this.updateDisplay(valorOperacao, operacao, atual, anterior)
        break;

      case "C":
        this.processaOperacaoC()
        break;

      case "CE":
        this.processaOperacaoCE()
        break;

      case "DEL":
        this.processaOperacaoDEL()
        break;

      case "=":
        this.processaOperacaoIgual()
        break;
        
      case ".":
        this.processaOperacaoPonto()
        break;
    }

  }
  
  alterarOperacao(operacao: any) {

    const operacaoMat = ["+", "-", "*", "**", "/"];

    if (operacao.includes(operacao)) {
      return;
    }

    this.num1 = this.num1.trim().slice(0, -1) + operacao;

  }

  updateDisplay(valorOperacao = null, operacao = null, atual: any, anterior: any) {
    if (valorOperacao !== null) {
      
      if (anterior === 0) {
        valorOperacao = atual;
      }
      this.num1 = `${atual} ${operacao}`;

      if (anterior > 0) {
        this.num1 = `${anterior} ${operacao} ${atual} =`
        this.num2 = valorOperacao;
      } else {
        this.num2 = "";
      }
    }
  }

  processaOperacaoC() {
    this.num2 = "";
    this.num1 = "";
  }

  processaOperacaoCE() {
    this.num2 = "";
  }

  processaOperacaoDEL() {
    this.num2 = this.num2.slice(0, -1);
  }

  processaOperacaoPotencia() {
    this.num2 = this.num2 * this.num2;
  }

  processaOperacaoIgual() {
    let operacao = this.num1.split(" ")[1];
    this.firstNumber = false;
    this.processaOperacao(operacao);
  }

  processaOperacaoPonto() {
    this.num2 = ".";
  }

  processaOperacaoVirgula() {
    this.num2 = ",";
  }

}
