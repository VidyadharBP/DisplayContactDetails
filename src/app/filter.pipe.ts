import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, dataSearch:any): any {
    if(!value){
      return value;
    }
      return value.filter((serach:any)=>{
        return serach.name.first.toLowerCase().indexOf(dataSearch.toLowerCase())>-1
      });
  }

}
