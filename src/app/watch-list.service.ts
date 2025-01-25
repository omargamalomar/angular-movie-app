import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {
  private items: any[] = JSON.parse(localStorage.getItem('watchItem') || '[]'); // استرجاع العناصر من LocalStorage
  private watchListCountSubject = new BehaviorSubject<number>(this.items.length); // تعيين العدد بناءً على العناصر في LocalStorage
  constructor() {}


  // دالة لإضافة فيلم إلى الـ Watch List
add(movie: any) {
  // تحقق إذا كان الفيلم موجودًا بالفعل في القائمة
  const exists = this.items.some(item => item.id === movie.id);
  
  if (!exists) {
    // إذا لم يكن موجودًا، أضفه إلى القائمة
    this.items.push(movie);
    localStorage.setItem('watchItem', JSON.stringify(this.items));
    this.updateWatchListCount(); // تحديث عدد العناصر في الـ Watch List
    Swal.fire({
      title: "Success",
      text: "Movie Adedd successfuly",
      icon: "success"
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Alert",
      text: "This item added before",
    });
  }
}

  // دالة لحذف فيلم من الـ Watch List
  delete(item: any) {
    this.items = this.items.filter((i) => i.id !== item.id); // حذف الفيلم من القائمة
    localStorage.setItem('watchItem', JSON.stringify(this.items)); // حفظ العناصر في LocalStorage
    this.updateWatchListCount(); // تحديث العدد بعد الحذف
  }

  // دالة للحصول على العناصر في الـ Watch List
  getItems() {
    return this.items;
  }

  // دالة للحصول على العدد من الـ Watch List
  getCount() {
    return this.watchListCountSubject.asObservable(); // إرجاع العدد كـ Observable
  }

  // دالة لتحديث عدد الأفلام في الـ Watch List
  private updateWatchListCount() {
    this.watchListCountSubject.next(this.items.length); // تحديث العدد في BehaviorSubject
  }
}
