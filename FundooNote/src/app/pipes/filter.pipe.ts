import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  item: any
  transform(items: any, FilterMsg: string) {
    if (items && items.length)
     {
      return items.filter((item: { title: string }) => 
      {
        if (FilterMsg && item.title.toLowerCase().indexOf(FilterMsg.toLowerCase()) === -1)
         {
          return false
        }
        return true
      })
     }
  }
}
