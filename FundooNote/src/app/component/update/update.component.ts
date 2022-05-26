import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  
  title: any
  description: any
  bgColor: any
  isArchive: any
  isPin: any
  isTrash: any
  noteId: any
@Output()  refreshEvent = new EventEmitter<string>();

  constructor( private _snackBar: MatSnackBar,public note:NoteService,public dialogRef: MatDialogRef<UpdateComponent>,@Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.title = this.data.title
    this.description = this.data.description
   this.bgColor=this.data.bgColor
  }
  onNoClick(): void {
   
    let data=
    {
      title: this.title,
      description:this.description,
      bgColor: "string",
      "isArchive": false,
      "isReminder": false,
      "isPin": false,
      "isTrash": false
    }
    this.note.updateNote(data,this.data.noteId).subscribe((res:any)=>
    {
      console.log("update response=",res);
     
      this.dialogRef.close(res);
      this._snackBar.open('Note updated successfully', '', {
        duration: 2000,
        
      })
    },error=>{
      this._snackBar.open('Failed to update', '', {
      duration: 2000,  });
    })
    }
    receivedMessage(event:any){
    this.onNoClick()
    
  }
}