import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css'],
})
export class TvComponent {
  haveImg: string = 'https://image.tmdb.org/t/p/w500';
  getTV: any[] = [];
  pages:number[]= []
  trem :string = ''
  constructor(private _MoviesService: MoviesService) {}
  ngOnInit() {
    this.pages = new Array(10).fill(1).map((x,i)=>i+1)
    this._MoviesService.getTvPaggination(1).subscribe((res) => {
      this.getTV = res.results;
      
    });
  }
  test(pageNumber:number){
    this._MoviesService.getTvPaggination(pageNumber).subscribe((res) => {
      this.getTV = res.results;
    });
  }

  less() {
    this.pages = this.pages.map(page => page - 1);
  }
  
  gray() {
    this.pages = this.pages.map(page => page + 1);
  }
}
