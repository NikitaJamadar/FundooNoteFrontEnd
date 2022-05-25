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

@Input() notedata: any;
@Output() refresh = new EventEmitter<string>();
archieveMessage="refresh archieve"

isTrashComponent=false;
isDisplayComponent=false;
isArchieveComponent= false;

colorsArr = [{Colorcode:"pink"},{Colorcode:"yellow"},{Colorcode:"orange"},{Colorcode:"rgb(255,99,71)"},{Colorcode:"rgb(152,251,152)"},{Colorcode:"Teal"},{Colorcode:"rgb(106,90,205)"},{Colorcode:"rgb(240,230,140)"},{Colorcode:"rgb(238,130,238)"},{Colorcode:"rgb(255,160,122)"}];
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
archieve() {
  
  this.note.archieveNote(this.notedata.noteId).subscribe((response: any) => {
    console.log(response);
    this.refresh.emit("Hello")
    this._snackBar.open('Note Archived', '', {
      duration: 3000,
     
    })  
})  
}
Unarchieve() {
  
  this.note.archieveNote(this.notedata.noteId).subscribe((response: any) => {
    console.log(response);
    this.refresh.emit("Hello")
    this._snackBar.open('Note unArchived', '', {
      duration: 3000,
     
    })  
})  
}



trash(note:any) {
  
  this.note.trashNote(this.notedata.noteId).subscribe((response: any) => {
    console.log(response);
    this.refresh.emit("hello")
    this._snackBar.open('Note trashed successfully..', '', {
        duration: 3000,
        
      })
   }, error=>this._snackBar.open('failed to trash', '', {
    duration: 2000,
   
  })
  )
    
  }
  restore(note:any) {
  
    this.note.trashNote(this.notedata.noteId).subscribe((response: any) => {
      console.log(response);
      this.refresh.emit("hello")
      this._snackBar.open('Note restored successfully..', '', {
          duration: 3000,
          
        })
     }, error=>this._snackBar.open('failed to restored', '', {
      duration: 2000,
     
    })
    )
      
    }
  delete() {
    this.note.deleteNote(this.notedata.noteId).subscribe((response: any) => {
      console.log("Note Deleted Successfully", response);
      this.refresh.emit("Hello");

      this._snackBar.open('Note Deleted Successfully', '', {
        duration: 3000,
      })
    }, error=>this._snackBar.open('failed to delete', '', {
      duration: 2000,
     
    })
    )   
    }
    changeColor(color:any)
  {
    
    console.log(color);
    this.note.colorPallete(this.notedata.noteId,color).subscribe((res:any)=>{
      console.log(res);
      this.refresh.emit("hello");
      this._snackBar.open('color changes Successfully', '', {
        duration: 3000,
      })
    })
  }
}

