import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'

// PARA TRABAJAR CON FORMULARIOS REACTIVOS
import { ReactiveFormsModule } from '@angular/forms';

// PARA TRABAJAR CON PETICIONES HTTP
import { HttpClientModule } from '@angular/common/http';

// PARA TRABAJAR CON TABLAS
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';

import {MatToolbarModule} from '@angular/material/toolbar';

// PARA TRABAJAR CON FORMULARIOS
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input'; // inputs
import { MatSelectModule} from '@angular/material/select'; // selects
import { MatButtonModule} from '@angular/material/button'; // botones
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MomentDateModule } from '@angular/material-moment-adapter'; // MODIFICAR FORMATO DE FECHA


// PARA TRABAJAR CON ALERTAS
import {MatSnackBarModule} from '@angular/material/snack-bar';

// PARA TRABAJAR CON ICONOS
import {MatIconModule} from '@angular/material/icon';

// PARA TRABAJAR CON MODALS
import {MatDialogModule} from '@angular/material/dialog';

// PARA TRABAJAR CON CUADRILLAS
import {MatGridListModule} from '@angular/material/grid-list';
import { DialogAddEditComponent } from './modals/dialog-add-edit/dialog-add-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogAddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    MatToolbarModule,
    MatGridListModule,
    MatPaginatorModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MomentDateModule,
    MatDialogModule,
    MatSnackBarModule
    
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
