import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'omar'
})
export class OmarPipe implements PipeTransform {

  transform(value: string, ...args: boolean[]): string {
    if(args[0]){
        return  value.slice(0,50)+"...."
    }
    return value;
  }

}
