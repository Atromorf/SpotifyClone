import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = environment.api;
  constructor(private http: HttpClient) { }

  sendCredentials(email: string, password: string): Observable<any> {
    const body = {
      email,
      password
    }
    return this.http.post(`${this.URL}/auth/login`,body)
/*     .pipe(
      tap((responseOk:any) => {
        const {tokenSession, data} = responseOk;
        this.cookie.set('token_service', tokenSession, 4, '/');
      })
    ) */
    /* console.log('email: ', email, 'password: ', password); */
  }
  suma(a: number, b: number): number {
    return a + b
  }
}