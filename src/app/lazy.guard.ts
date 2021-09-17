import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanLoad,
  Route,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class LazyGuard implements CanLoad {
  canLoad() {
    let isLazy = false;
    if (isLazy) {
      return true;
    } else {
      //alert('not permitted');
      return false;
    }
  }
}
