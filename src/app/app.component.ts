import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titles: any[] = ['Variable', 'Pipes','Salida'];
  
  nombre: string = 'Capitan America';

  arrayNumber = [1,2,3,4,5,6,7,8,9,10];

  PI: number = Math.PI;

  porcentaje: number = 0.234;

  salario: number = 1234.5;

  
  valorPromesa = new Promise<string>((resolve)=>{
  
    setTimeout(()=>{
        resolve('LLegó la data')
    },4500)

  })

  fecha: Date = new Date();







  heroe = {
    nombre: 'Gokú',
    clave: 'Sayayin',
    edad: 41,
    direccion: {
      calle: 'Montaña Pao',
      casa: 1
    }
  }




 
}
