import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tvSerch'
})
export class TvSerchPipe implements PipeTransform {

  transform(trendingMovie: any[], trem: string): any[] {
    return trendingMovie.filter((index) => index.name.toLowerCase().includes(trem.toLowerCase()));
  }
}

