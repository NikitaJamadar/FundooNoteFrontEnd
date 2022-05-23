import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/services/noteService/note.service';
import { ArchiveComponent } from '../archive/archive.component';
import { DisplayComponent } from '../display/display.component';
import { ActivatedRoute } from '@angular/router';
import { TrashComponent } from '../trash/trash.component';
import { GetAllNoteComponent } from '../get-all-note/get-all-note.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {



noteId: any;
data:any;
isArchive:any;
isTrash:any;

@Input() notedata: any;
@Output() archiveEvent = new EventEmitter<string>();
@Output() trashEvent = new EventEmitter<string>();
@Output() deleteEvent = new EventEmitter<string>();

isTrashComponent=false;
isDisplayComponent=false;
isArchieveComponent= false;




constructor(private note: NoteService,private _snackBar: MatSnackBar, public dialog: MatDialog,private route: ActivatedRoute) { }

ngOnInit(): void {
  
  let comp = this.route.snapshot.component;
  if (comp == GetAllNoteComponent) {
    this.isDisplayComponent = true;
  }

  if (comp == TrashComponent) {
    this.isTrashComponent = true;
    
  }
  if (comp == ArchiveComponent) {
    this.isArchieveComponent = true;
    
  }
  
}
archieve(note:any) {
  this.isArchive=false;
  this.note.archieveNote(this.notedata.noteId).subscribe((response: any) => {
    console.log(response);
    this.archiveEvent.emit("Hello")
    this._snackBar.open('Note Archived', '', {
      duration: 3000,
     
    })
    
   
})
  
}


trash(note:any) {
  this.isTrash = !note.isTrash;
  this.note.trashNote(this.notedata.noteId,this.data).subscribe((response: any) => {
    console.log(response);
    this.trashEvent.emit("hello")
    this._snackBar.open('Note trashed successfully..', '', {
        duration: 3000,
        
      })
   }, error=>this._snackBar.open('failed to trash', '', {
    duration: 2000,
   
  })
  )
    
  }
  delete() {
    this.note.deleteNote(this.notedata.noteId).subscribe((response: any) => {
      console.log("Note Deleted Successfully", response);
      this.deleteEvent.emit("Hello");

      this._snackBar.open('Note Deleted Successfully', '', {
        duration: 3000,
      })
    })
  }
}
