
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataService } from 'src/app/services/Data/data.service';
import { GridService } from 'src/app/services/GridList/grid.service';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  note:any
  FilterMsg:string=""
  gridList: any;
  @Input()recievedNoteList:any;
  @Output() refreshEvent= new EventEmitter<any>();
  

  constructor(public dialog: MatDialog,private Data:DataService) { }

  ngOnInit(): void {
    this.Data.currentMessage.subscribe(message=>{
      console.log(message)
      this.FilterMsg=message
    })
    
  }
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '400px',
      data:note,
      panelClass:'my-custom-dialog-class'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      this.note=result
      this.refreshEvent.emit("hello")
    });
  }
  receivedMessage(event:any){
    console.log(event);
    this.refreshEvent.emit("hello")
  }
 
}




