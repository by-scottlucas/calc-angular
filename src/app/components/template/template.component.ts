import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})

export class TemplateComponent {

  operacaoAnterior: any = '';
  operacaoAtual: any = '';
  primeiraOperacao = true;


  addDisplay(value: any) {

    if (this.primeiraOperacao) {
      if (value >= 0 || value === ".") {
        this.addDigito(value);
      }
      else {
        this.processaOperacao(value)
      }
    }
    else {
      this.operacaoAnterior = "";
      this.operacaoAtual = "";
      this.primeiraOperacao = true;

      if (value >= 0 || value === ".") {
        this.addDigito(value);
      }
      else {
        this.processaOperacao(value)
      }
    }

  }

  addDigito(digito: any) {
    if (digito === "." && this.operacaoAtual.includes(".")) {
      return
    }
    this.operacaoAtual += digito;
    this.updateDisplay(null, null, null, null);
  }

  processaOperacao(operacao: any) {
    if (this.operacaoAtual === "" && operacao !== "C") {
      if (this.operacaoAnterior !== "") {
        this.alterarOperacao(operacao);
      }
      return;
    }
    let valorOperacao: any;
    let anterior = +this.operacaoAnterior.split("")[0];
    let atual = +this.operacaoAtual;

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
      case "=":
        this.processaOperacaoIgual()
        break;
      case ".":
        this.processaOperacaoPonto()
        break;
      case "DEL":
        this.processaOperacaoDEL()
        break;
    }

  }
  alterarOperacao(operacao: any) {

    const operacaoMat = ["+", "-", "*", "/"];

    if (operacao.includes(operacao)) {
      return;
    }

    this.operacaoAnterior = this.operacaoAnterior.trim().slice(0, -1) + operacao;


  }

  updateDisplay(valorOperacao = null, operacao = null, atual: any, anterior: any) {
    if (valorOperacao !== null) {
      if (anterior === 0) {
        valorOperacao = atual;
      }
      this.operacaoAnterior = `${atual} ${operacao}`;

      if (anterior > 0) {
        this.operacaoAnterior = `${anterior} ${operacao} ${atual} =`
        this.operacaoAtual = valorOperacao;
      } else {
        this.operacaoAtual = "";
      }
    }
  }

  processaOperacaoC() {
    this.operacaoAtual = "";
    this.operacaoAnterior = "";
  }

  processaOperacaoCE() {
    this.operacaoAtual = "";

  }

  processaOperacaoDEL() {
    this.operacaoAtual = this.operacaoAtual.slice(0, -1);
  }

  processaOperacaoIgual() {
    let operacao = this.operacaoAnterior.split(" ")[1];
    this.primeiraOperacao = false;
    this.processaOperacao(operacao);
  }

  processaOperacaoPonto() {
    this.operacaoAtual = ".";
  }




}
