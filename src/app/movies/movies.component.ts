import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { WatchListService } from '../watch-list.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  haveImg: string = 'https://image.tmdb.org/t/p/w500';
  getMovies: any[] = [];
  pages:number[]= []
  trem :string = ''
  constructor(private _MoviesService: MoviesService, private _watchList:WatchListService) {}
  ngOnInit() {
    this.pages = new Array(10).fill(1).map((x,i)=>i+1)
    this._MoviesService.getPaggination(1).subscribe((res) => {
      this.getMovies = res.results;
      
    });
  }
  test(pageNumber:number){
    this._MoviesService.getPaggination(pageNumber).subscribe((res) => {
      this.getMovies = res.results;
    });
  }

  less() {
    this.pages = this.pages.map(page => page - 1);
  }
  
  gray() {
    this.pages = this.pages.map(page => page + 1);
  }
  add(movie:any){
    this._watchList.add(movie)
  }
}
