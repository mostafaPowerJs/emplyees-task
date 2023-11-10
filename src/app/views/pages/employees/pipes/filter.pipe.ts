import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(value: any[], filterString: string, propName: string): any[] {
  //   const result: any = [];
  //   if (!value || filterString === '' || propName === '') {
  //     return value;
  //   }
  //   value.forEach((a: any) => {
  //     if(a[propName].trim().toLowerCase().includes(filterString.toLowerCase())) {
  //       result.push(a)
  //     }
  //   })
  //     return result;
  // }
  transform(value: any[], searchKeys: string[], searchText: string): any[] {
    const result: any = [];
    if (!value || searchKeys.length === 0 || searchText === '') {
      return value;
    }


    value.forEach((a: any) => {
      // console.log(searchKeys[0]);
      // console.log(searchText);
      // console.log(value);
      if (
        a[searchKeys[0]].trim().toLowerCase().includes(searchText.toLowerCase())
        || a[searchKeys[1]].trim().toLowerCase().includes(searchText.toLowerCase())
      ) {
        result.push(a)
      }
    })
    return result;
  }


  // transform(items: any[], searchKeys: string[], searchText: string): any[] {
  //   if (!items || !searchText || !Array.isArray(searchKeys)) {
  //     return items;
  //   }

  //   searchText = searchText.toLowerCase();

  //   return items.filter(item => {
  //     return searchKeys.some(key => {
  //       const value = item[key] ? item[key].toString().toLowerCase() : '';
  //       return value.includes(searchText);
  //     });
  //   });
  // }

  /** */
}
