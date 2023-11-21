import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listaNumeros';

  /*propiedades */

  nuevoNumero: number = 0;
  resultadoSumatorio: number = 0;
  resultadoMaximo: number = 0;
  resultadoMinimo: number = 0;

  /*propiedades version 2 */
  tamanoMuestra: number = 0;

  /*array definitivo*/
  muestra: number[] = [];

  /*funciones para generar muestras */

  agregarNumero() {
    this.muestra.push(this.nuevoNumero);
    this.nuevoNumero = 0;
  }
  generarMuestra(): number[] {
    let numeroGenerado: number = 0;
    let maximo: number = 10;
    let minimo: number = 0;
    for (let i = 0; i < this.tamanoMuestra; i++) {
      numeroGenerado = Math.random() * (maximo - minimo) + minimo;

      this.muestra.push(numeroGenerado);
    }
    return this.muestra;
  }

  /*funciones para calcular resultados */
  calcularSumatorio() {
    let sumatorio: number = 0;
    for (let index = 0; index < this.muestra.length; index++) {

      sumatorio += this.muestra[index];
    }
    this.resultadoSumatorio = sumatorio;
  }
  encontrarMaximo() {
    this.resultadoMaximo = Math.max(...this.muestra);
    return this.resultadoMaximo;
  }
  encontrarMinimo() {
    this.resultadoMinimo = Math.min(...this.muestra);
    return this.resultadoMinimo;
  }

}
