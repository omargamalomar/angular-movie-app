import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serch'
})
export class SerchPipe implements PipeTransform {

  transform(trendingMovie: any[], trem: string): any[] {
    return trendingMovie.filter((index) => index.title.toLowerCase().includes(trem.toLowerCase()))
  }
}
