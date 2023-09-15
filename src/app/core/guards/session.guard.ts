import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor(private cookieService: CookieService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookieSession();
  }

  checkCookieSession(): boolean{
    try{

      const token:boolean = this.cookieService.check('token')
      if(!token){
        this.router.navigate(['/', 'auth'])
      }
      return token
      //return this.cookieService.check('token')

    }catch(e){
      Swal.fire({
        icon: 'error',
        title: 'Usuario incorrecto',
        text: 'Acceso denegado',
      });
      console.log('Error al obtener la cookie', e);
      return false;
    }
  }
  
}
