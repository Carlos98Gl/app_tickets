import { Component, Inject, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import moment from 'moment';
import { Ticket } from '../../Interfaz/ticket';
import { Empresa } from '../../Interfaz/empresa';
import { Area } from '../../Interfaz/area';
import { Requerimiento } from '../../Interfaz/requerimiento';
import { Subtipo } from '../../Interfaz/subtipo';
import { TicketService } from '../../Services/ticket.service';
import { EmpresaService } from '../../Services/empresa.service';
import { AreaService } from '../../Services/area.service';
import { RequerimientoService } from '../../Services/requerimiento.service';
import { SubtipoService } from '../../Services/subtipo.service';


// PARA CAMBIAR FORMATO DE FECHA
export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11Label: 'LL',
    monthYearA11Label: 'MMMM YYYY'
  }
}

@Component({
  selector: 'app-dialog-add-edit',
  templateUrl: './dialog-add-edit.component.html',
  styleUrl: './dialog-add-edit.component.css',
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class DialogAddEditComponent implements OnInit {

  formTickets: FormGroup;
  tituloAccion: string = "Nuevo";
  botonAccion: string = "Guardar";
  listEmpresa: Empresa[] = [];
  listArea: Area[] = [];
  listRequerimiento: Requerimiento[] = [];
  listSubtipo: Subtipo[] = [];

  constructor(
    private dialogoReferencia: MatDialogRef<DialogAddEditComponent>,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _empresaService: EmpresaService,
    private _areaService: AreaService,
    private _requerimientoService: RequerimientoService,
    private _subtipoService: SubtipoService,
    private _ticketService: TicketService,
    @Inject(MAT_DIALOG_DATA) public dataTicket: Ticket // recibo la informacion a travez del dialogo

  ) {

    // ES LA RELACION DEL FORMULARIO
    this.formTickets = this.fb.group({
      titulo: [, Validators.required],
      empresa_id: [, Validators.required],
      area_id: [, Validators.required],
      requerimiento_id: [, Validators.required],
      subtipo_id: [, Validators.required],
      fechaRegistro: [, Validators.required],
      hora: [, Validators.required],
      detalle: [, Validators.required],
      responsable: [, Validators.required],
      solicitante: [, Validators.required]
    })

    // LISTA DE EMPRESAS
    this._empresaService.getList().subscribe({
      next: (data) => {
        this.listEmpresa = data;
      }, error: (e) => {
        console.log(e);
      }
    })

    // LISTA DE AREAS
    this._areaService.getList().subscribe({
      next: (data) => {
        this.listArea = data;
      }, error: (e) => {}
    })

    // LISTA DE REQUERIMIENTOS
    this._requerimientoService.getList().subscribe({
      next: (data) => {
        this.listRequerimiento = data;
      }, error: (e) => { }
    })

    // LISTA DE SUBTIPOS
    this._subtipoService.getList().subscribe({
      next: (data) => {
        this.listSubtipo = data;
      }, error: (e) => { }
    })

  }

  //
  mostrarAlerta(msg: string, accion: string) {
    this._snackBar.open(msg, accion, {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 4000
    });
  }

  addEditTicket() {
    console.log(this.formTickets)
    console.log(this.formTickets.value)

    const modelo: Ticket = {
      id: 0,
      titulo: this.formTickets.value.titulo,
      fechaRegistro: this.formTickets.value.fechaRegistro,
      hora: this.formTickets.value.hora,
      detalle: this.formTickets.value.detalle,
      responsable: this.formTickets.value.responsable,
      solicitante: this.formTickets.value.solicitante,
      empresa_id: this.formTickets.value.id,
      area_id: this.formTickets.value.area_id,
      requerimiento_id: this.formTickets.value.requerimiento_id,
      subtipo_id: this.formTickets.value.subtipo_id,
    };

    // Verificar empresa_id antes de enviar
    if (modelo.empresa_id == null) {
      this.mostrarAlerta("Debe seleccionar una EMPRESA", "Error");
      return;
    }

    // Verificar area_id antes de enviar
    if (modelo.area_id == null) {
      this.mostrarAlerta("Debe seleccionar una AREA", "Error");
      return;
    }

    // Verificar requerimiento_id antes de enviar
    if (modelo.requerimiento_id == null) {
      this.mostrarAlerta("Debe seleccionar una REQUERIMIENTO", "Error");
      return;
    }

    // Verificar subtipo_id antes de enviar
    if (modelo.subtipo_id == null) {
      this.mostrarAlerta("Debe seleccionar una SUBTIPO", "Error");
      return;
    }

    if (this.dataTicket == null) {
      this._ticketService.add(modelo).subscribe({
        next: (data) => {
          this.mostrarAlerta("Ticket creado exitosamente", "Listo");
          this.dialogoReferencia.close("Creado");
        }, error: (e) => {
          this.mostrarAlerta("Error al registrar el ticket", "Error");
        }
      })
    } else {

    }

  }
  ngOnInit(): void {

    if (this.dataTicket)
      this.formTickets.patchValue({
        titulo: this.dataTicket.titulo,
        fechaRegistro: this.dataTicket.fechaRegistro,
        hora: this.dataTicket.hora,
        detalle: this.dataTicket.detalle,
        responsable: this.dataTicket.responsable,
        solicitante: this.dataTicket.solicitante,
        empresa_id: this.dataTicket.id,
        area_id: this.dataTicket.id,
        requerimiento_id: this.dataTicket.id,
        subtipo_id: this.dataTicket.id,
      })
    this.tituloAccion = "formulario";
    this.botonAccion = "Guardar";
  }

}





