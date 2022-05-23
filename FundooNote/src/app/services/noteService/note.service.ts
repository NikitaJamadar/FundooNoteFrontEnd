import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  base=environment.baseUrl;
  token:any;
  noteId: any;

  constructor(private httpService:HttpService) {
    this.token=localStorage.getItem('token');
   }
  addNote(data:any){
    console.log(data,this.token)
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':"Bearer "+this.token
      })
    }
    return this.httpService.postService(this.base+'/Note/AddNote', data ,true,header)
}
getAllNotes(){
    
  let header={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+this.token 
    })
  }
  return this.httpService.getService(this.base+'/Note/GetAllNotes',true,header)
}
updateNote(data: any, noteId: any) {

  console.log("token", this.token)

  let header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    })
  }
  return this.httpService.putService(this.base + `/Note/UpdateNote/${noteId}`, data, true, header)
}

archieveNote( noteId: any) {

  console.log("token", this.token)

  let header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    })
  }
  return this.httpService.putService(this.base + `/Note/ArchieveNote/${noteId}`,{}, true, header)
}
deleteNote( noteId: any) {

  console.log("token", this.token)

  let header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    })
  }
  return this.httpService.deleteService(this.base + `/Note/DeleteNote/${noteId}`, true, header)
}

trashNote( noteId: any, data:any) {

  console.log("token", this.token)

  let header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    })
  }
  return this.httpService.putService(this.base + `/Note/IsTrash${noteId}`,data, true, header)
}

}