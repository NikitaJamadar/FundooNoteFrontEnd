import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  isShow = false
  Title: any
  desc: any
  @Output() messageEvent = new EventEmitter<string>();
  constructor(private note: NoteService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  show() {
    console.log("insideShow");
    this.isShow = true
  }
  close() {
    this.isShow=false;
    let data = {
      "title": this.Title,
      "description": this.desc,
      "bgColor": "red",
      "isArchive": true,
      "isReminder": true,
      "isPin": true,
      "isTrash": true
    }
    this.note.addNote(data).subscribe((res: any) => { console.log(res);
      this.messageEvent.emit("hello")
      this._snackBar.open('Note added successfully', '', {
        duration:2000,
       });   
     },error=>{
       this._snackBar.open('please enter correct data', '', {
         duration:2000,
        });   
     }
     ); 
   }
  }

  