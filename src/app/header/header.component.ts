import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnDestroy {
  private unsubscribe$ = new Subject<void>();

  constructor(private _AuthService: AuthService) {}

  isLogin: boolean = false;
  userInfo:any = {}
  logOut() {
    this._AuthService.signOut();
    console.log(this._AuthService.signOut());
  }

  ngOnInit() {
    this._AuthService.userData
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.isLogin = this._AuthService.userData.getValue() != null;
        // this.userInfo = this._AuthService.userData
        // console.log(this.userInfo.getValue().frist_name)
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
