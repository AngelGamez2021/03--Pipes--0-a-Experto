import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//idioma local
 import {registerLocaleData} from '@angular/common'
 import localEs from '@angular/common/locales/es' 
 import localFr from '@angular/common/locales/fr'

 registerLocaleData(localEs);
 registerLocaleData(localFr);


import { AppComponent } from './app.component';
import { PersonalizadoPipe } from './pipes/personalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena/contrasena.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PersonalizadoPipe,
    DomseguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: LOCALE_ID,
      useValue:'es'
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
