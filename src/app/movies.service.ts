import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HTTPClient:HttpClient) { }
  getAllMovies():Observable<any>{
    return this._HTTPClient.get('https://api.themoviedb.org/3/trending/movie/week?api_key=77073b2d93470504a54348e53a6ea20b');
  }
  getTV():Observable<any>{
    return this._HTTPClient.get('https://api.themoviedb.org/3/trending/tv/week?api_key=77073b2d93470504a54348e53a6ea20b');
  }
  getPeople():Observable<any>{
    return this._HTTPClient.get('https://api.themoviedb.org/3/trending/person/week?api_key=77073b2d93470504a54348e53a6ea20b');
  }
  getMovieDetails(id:string):Observable<any>{
    return this._HTTPClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=77073b2d93470504a54348e53a6ea20b`)
  }
  getTvDetails(id:string):Observable<any>{
    return this._HTTPClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=77073b2d93470504a54348e53a6ea20b`)
  }
  getPaggination(pageNumber:number):Observable<any>{
    return this._HTTPClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=77073b2d93470504a54348e53a6ea20b&page=${pageNumber}`)
  }
  getTvPaggination(pageNumber:number):Observable<any>{
    return this._HTTPClient.get(`https://api.themoviedb.org/3/discover/tv?api_key=77073b2d93470504a54348e53a6ea20b&page=${pageNumber}`)
  }
}
