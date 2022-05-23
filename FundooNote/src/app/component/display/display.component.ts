
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  note:any
  @Input()recievedNoteList:any;
  @Output() updateEvent = new EventEmitter<any>();
  @Output() archiveEvent = new EventEmitter<string>();
  @Output() trashEvent = new EventEmitter<string>();
  @Output() deleteEvent = new EventEmitter<string>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    
  }
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '500px',
      data:note,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      this.updateEvent.emit("hello")
    });
  }
  receivedMessage(event:any){
    console.log(event);
    this.updateEvent.emit("hello")
  }
  archiveMessage(event:any){
    this.archiveEvent.emit("Hello")
  }
  trashMessage(event:any){
    this.trashEvent.emit("Hello")
  }
  deleteMessage(event:any){
    this.deleteEvent.emit("Hello")
  }
}




