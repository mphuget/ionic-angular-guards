import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {

  }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {

      const isLogged = await Storage.get({key: "logged"});      
      if (isLogged && (isLogged.value === 'true')) {
        return true;
      } 
      else {
        this.router.navigateByUrl('/', { replaceUrl:true });
        return false;
      }
    }
  
}
