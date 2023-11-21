import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listaNumeros';

  /*propiedades version 1 */
  numeros: number[] = [];
  nuevoNumero: number = 0;
  resultadoSumatoriov1: number = 0;
  resultadoMaximov1: number = 0;
  resultadoMinimov1: number = 0;

  /*propiedades version 2 */
  tamanoMuestra: number = 0;
  muestraGenerada: number[] = [];
  resultadoSumatoriov2: number = 0;
  resultadoMaximov2: number = 0;
  resultadoMinimov2: number = 0;

  /*funciones verion 1 */

  agregarNumero() {
    this.numeros.push(this.nuevoNumero);
    this.nuevoNumero = 0;
  }
  calcularSumatoriov1() {
    let sumatorio: number = 0;
    for (let index = 0; index < this.numeros.length; index++) {

      sumatorio += this.numeros[index];
    }
    this.resultadoSumatoriov1 = sumatorio;
  }
  encontrarMaximov1() {
    this.resultadoMaximov1 = Math.max(...this.numeros);
    return this.resultadoMaximov1;
  }
  encontrarMinimov1() {
    this.resultadoMinimov1 = Math.min(...this.numeros);
    return this.resultadoMinimov1;
  }

  /*funciones verion 2 */

  generarMuestra(): number[] {
    let numeroGenerado: number = 0;
    let maximo: number = 10;
    let minimo: number = 0;
    for (let i = 0; i < this.tamanoMuestra; i++) {
      numeroGenerado = Math.random() * (maximo - minimo) + minimo;

      this.muestraGenerada.push(numeroGenerado);
    }
    return this.muestraGenerada;
  }
  calcularSumatoriov2() {
    let sumatorio: number = 0;
    for (let index = 0; index < this.muestraGenerada.length; index++) {

      sumatorio += this.muestraGenerada[index];
    }
    this.resultadoSumatoriov2 = sumatorio;
  }
  encontrarMaximov2() {
    this.resultadoMaximov2 = Math.max(...this.muestraGenerada);
    return this.resultadoMaximov2;
  }
  encontrarMinimov2() {
    this.resultadoMinimov2 = Math.min(...this.muestraGenerada);
    return this.resultadoMinimov2;
  }
}
