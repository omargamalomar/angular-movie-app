import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {
  private items:any[] = JSON.parse(localStorage.getItem('watchItem') || '[]' )
  constructor() { }
  add(movie:any){
    this.items.push(movie)
    localStorage.setItem('watchItem', JSON.stringify(this.items))
  }
  getItems(){
    return this.items
  }
  delete(item: any) {
    this.items = this.items.filter((i) => i.id !== item.id);
    localStorage.setItem('watchItem', JSON.stringify(this.items))
  }
}
