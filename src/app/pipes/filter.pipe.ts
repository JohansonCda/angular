import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultUsers = [];
    if(arg == '') return value;
    for(const usuario of value){
      if(usuario.first_name.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
        usuario.last_name.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
        usuario.email.toLowerCase().indexOf(arg.toLowerCase()) > -1){

          resultUsers.push(usuario)

      };
    };
    return resultUsers;
  }

}
