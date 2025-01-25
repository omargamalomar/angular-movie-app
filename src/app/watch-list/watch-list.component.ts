import { Component, OnInit } from '@angular/core';
import { WatchListService } from '../watch-list.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css'],
})
export class WatchListComponent implements OnInit {
  haveImg: string = 'https://image.tmdb.org/t/p/w500';
  watchListItems: any[] = [];

  constructor(public watchList: WatchListService) {}

  ngOnInit() {
    // استرجاع العناصر من الخدمة عند تحميل الـ Component
    this.watchListItems = this.watchList.getItems();
  }

  deleteFromCart(item: any) {
    // حذف الفيلم من الخدمة
    this.watchList.delete(item);

    // تحديث قائمة watchList بعد الحذف
    this.watchListItems = this.watchList.getItems();
  }
}
