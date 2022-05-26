import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  item: any
  transform(value: any, args?: any) {
  //   if (items && items.length)
  //    {
  //     return items.filter((item: { title: string }) => 
  //     {
  //       if (FilterMsg && item.title.toLowerCase().indexOf(FilterMsg.toLowerCase()) === -1)
  //        {
  //         return false
  //       }
  //       return true
  //     })
  //    }
  // }
  if(args =="default message"){
      return value;
    }else{
      args=args.toLocaleLowerCase();
    }
    

    // console.log("value in pipe",value);
    // console.log("argument", args, typeof args);
    
    return value.filter((note:any) =>{
      return note.title.toLocaleLowerCase().includes(args) | note.description.toLocaleLowerCase().includes(args);
      
    })
}}
