import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  haveImg: string = 'https://image.tmdb.org/t/p/w500'
  getPeople:any[] = []
constructor(private _MoviesService:MoviesService){}
ngOnInit(){
  this._MoviesService.getPeople().subscribe((res)=>{
    for(let i = 0 ; i<res.results.length; i++){
      if(res.results[i].profile_path == null){
        res.results[i].profile_path = '../../assets/images/ava.png'
      }else{
        res.results[i].profile_path = this.haveImg+ res.results[i].profile_path
      }
    }
    this.getPeople = res.results
  })
}
}
