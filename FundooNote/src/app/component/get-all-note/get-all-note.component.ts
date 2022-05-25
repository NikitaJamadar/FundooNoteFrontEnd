import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-get-all-note',
  templateUrl: './get-all-note.component.html',
  styleUrls: ['./get-all-note.component.scss']
})
export class GetAllNoteComponent implements OnInit {
  noteList:any;
  constructor(private note:NoteService) { }

  ngOnInit(): void {
   this.GetAllNotes();
  }
  GetAllNotes(){
    this.note.getAllNotes().subscribe((response:any)=>{
      console.log(response);
      this.noteList=response.data;
      this.noteList = this.noteList.filter((object:any)=>{
        return object.isArchive===false && object.isTrash===false
      })
    }
  )}
  receiveMessage(event:any){
     this.GetAllNotes();
  }
}

