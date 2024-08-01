import { AfterViewInit, Component, ViewChild, OnInit,ChangeDetectionStrategy} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
import { Ticket } from './Interfaz/ticket';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { TicketService } from './Services/ticket.service';
import { MatDialog} from '@angular/material/dialog';
import { DialogAddEditComponent } from './modals/dialog-add-edit/dialog-add-edit.component';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AppComponent implements AfterViewInit,OnInit{
  displayedColumns: string[] = ['id','titulo','fechaRegistro', 'hora', 'detalle', 'responsable', 'solicitante','Acciones'];
  dataSource = new MatTableDataSource<Ticket>();
  //2:29:40
  constructor(
  private _ticketService:TicketService,
  public dialog:MatDialog
  ){

  }
  ngOnInit(): void {
      this.listarTickets();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  listarTickets(){
    this._ticketService.getList().subscribe({
      next:(dataResponse)=>{
        console.log(dataResponse)
        this.dataSource.data = dataResponse;
      },error:(e)=>{

      }
    })
  }//----------------
  dialogoNuevoTicket(){
  this.dialog.open(DialogAddEditComponent,{
    disableClose:true,
  }).afterClosed().subscribe(resultado=>{
    if(resultado === "Creado"){
      this.listarTickets();
    }
  })
}

dialogoEditarTicket(dataSource: Ticket){
  this.dialog.open(DialogAddEditComponent,{
    disableClose:true,
    data:dataSource
  }).afterClosed().subscribe(resultado=>{
    if(resultado === "Editado"){
      this.listarTickets();
    }
  })
}

}
