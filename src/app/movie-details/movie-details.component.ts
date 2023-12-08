import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  details: any;
  peopleDetails: any;
  movieId: string = '';
  show: boolean = true;
  haveImg: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private _ActivatedRoute: ActivatedRoute, private _MoviesService: MoviesService) {}

  ngOnInit() {
    this.movieId = this._ActivatedRoute.snapshot.params['id'];
    let media = this._ActivatedRoute.snapshot.params['media_type'];
    if (media === 'movie') {
      this._MoviesService.getMovieDetails(this.movieId).subscribe((res) => {
        this.details = res;
      });
    } else if (media === 'tv') {
      this._MoviesService.getTvDetails(this.movieId).subscribe((res) => {
        this.details = res;
        console.log(res);
      });
    } else {
      this._MoviesService.getPaggination(1).subscribe((res) => {
        this.details = res;
        console.log(res);
      });
    }
  }
  

  showMore() {
    this.show = !this.show;
  }
}
