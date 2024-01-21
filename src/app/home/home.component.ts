import { Component, Inject } from '@angular/core';
import { MoviesService } from '../movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { WatchListService } from '../watch-list.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  haveImg: string = 'https://image.tmdb.org/t/p/w500';
  getMovies: any[] = [];
  getPeople: any[] = [];
  getTV: any[] = [];
  show: boolean = true;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 5,
      },
      740: {
        items: 8,
      },
      940: {
        items: 8 ,
      },
    },
    nav: true,
  };
  constructor(private _MoviesService: MoviesService, private _watchList:WatchListService) {}
  ngOnInit() {
    this._MoviesService.getAllMovies().subscribe((res) => {
      this.getMovies = res.results.slice(0, 10);
    });
    this._MoviesService.getPeople().subscribe((res) => {
      for (let i = 0; i < res.results.length; i++) {
        if (res.results[i].profile_path == null) {
          res.results[i].profile_path = '../../assets/images/ava.png';
        } else {
          res.results[i].profile_path =
            this.haveImg + res.results[i].profile_path;
        }
      }
      this.getPeople = res.results.slice(0, 10);
    });
    this._MoviesService.getTV().subscribe((res) => {
      this.getTV = res.results.slice(0, 10);
    });
  }
  showMore() {
    this.show = !this.show;
  }
  add(movie:any){
    this._watchList.add(movie)
  }
}
