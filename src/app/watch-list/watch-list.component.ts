import { Component } from '@angular/core';
import { WatchListService } from '../watch-list.service';
@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css'],
})
export class WatchListComponent {
  haveImg: string = 'https://image.tmdb.org/t/p/w500';
  constructor( public watchList:WatchListService ){}
  ngOnInit(){
  }
  deleteFromCart(item: any) {
    this.watchList.delete(item);
  }
}
