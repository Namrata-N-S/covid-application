import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate() {
    const isAdmin = true;
    if (isAdmin) {
      return true;
    } else {
      return false;
    }
  }
}
