import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginPageComponent } from './login-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ LoginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deberia retornar invalido el formulario', () => {
/* 
    const mockCredentials = {
      email:'wfwefwefwefwefwef',
      password:'1111111111111111111111111111'
    }

    const emailForm: any = component.formLogin.get('email')
    const passwordForm: any = component.formLogin.get('password')

    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)

    expect(component.formLogin.invalid).toEqual(true); */
  });

  it ('Deberia retornar valido el formulario', () => {
/*     const mockCredentials = {
      email:'nose@xd.com',
      password:'1234567890'
    }

    const emailForm: any = component.formLogin.get('email')
    const passwordForm: any = component.formLogin.get('password')

    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)

    expect(component.formLogin.invalid).toEqual(false); */
  });

  it('El boton deberia tener la palabra "Iniciar sesión"', () => {
/*     const elementRef = fixture.debugElement.query(By.css('.form-action button'))
    const getInnerText = elementRef.nativeElement.innerText

    expect(getInnerText).toEqual('Iniciar sesión') */
  });

  
});
