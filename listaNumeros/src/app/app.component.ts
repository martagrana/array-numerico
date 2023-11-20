import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listaNumeros';

  numeros: number[] = [];
  nuevoNumero: number = 0;


  resultadoSumatorio: number = 0;
  resultadoMaximo: number = 0;
  resultadoMinimo: number = 0;

  agregarNumero() {
    this.numeros.push(this.nuevoNumero);
    this.nuevoNumero = 0;
  }

  calcularSumatorio() {
    let sumatorio: number = 0;
    for (let index = 0; index < this.numeros.length; index++) {

      sumatorio += this.numeros[index];
    }
    this.resultadoSumatorio = sumatorio;
  }
  encontrarMaximo() {
    this.resultadoMaximo = Math.max(...this.numeros);
    return this.resultadoMaximo;
  }
  encontrarMinimo() {
    this.resultadoMinimo = Math.min(...this.numeros);
    return this.resultadoMinimo;
  }

}
