import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listaNumeros';

  numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8,];

  resultadoSumatorio: number = 0;
  resultadoMaximo: number = 0;
  resultadoMinimo: number = 0;

  calcularSumatorio() {
    for (let index = 0; index < this.numeros.length; index++) {
      const element = this.numeros[index];
      this.resultadoSumatorio += this.numeros[index];
    }
    return this.resultadoSumatorio;
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
