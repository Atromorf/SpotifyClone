import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  
  formLogin: FormGroup = new FormGroup({});
  
  constructor(private authService:AuthService, private cookie:CookieService,
    private router: Router) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('',[
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ])
      }
    )
  }
  sendLogin(): void{
    const { email, password } = this.formLogin.value;
    this.authService.sendCredentials(email, password)
    .subscribe(responseOk => {
      Swal.fire({
        icon: 'success',
        title: 'Usuario correcto',
        text: 'Bienvenido a la aplicación',
      });
      console.log('Sesion iniciada correctamente',responseOk);
      const { tokenSession, data } = responseOk;
      this.cookie.set('token', tokenSession, 1, '/');
      this.router.navigate(['/', 'tracks']);
    },
    err => {
      Swal.fire({
        icon: 'error',
        title: 'Error de usuario',
        text: 'Tus credenciales son incorrectas',
      });
    })
  }

}
