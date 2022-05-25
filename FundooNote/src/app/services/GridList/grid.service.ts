import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  private info = new Subject<any>();
  public store = this.info.asObservable();

   private infoforPipe = new Subject<any>();
   public storeForpipe = this.infoforPipe.asObservable();

  constructor() { }
  nextDataUpdate(text:any){
    this.info.next(text);
  }

   dataPipe(text:any)
   {
     this.infoforPipe.next(text);
   }
}