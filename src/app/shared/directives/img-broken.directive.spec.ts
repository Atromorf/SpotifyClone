import { Component, ElementRef } from '@angular/core';
import { ImgBrokenDirective } from './img-broken.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: '<img class="testing-directive" appImgBroken [src]="srckMock">'
})

class TestComponent {
  public srckMock:any = null
}

describe('ImgBrokenDirective', () => {
  
  let component: TestComponent
  let fixture: ComponentFixture<TestComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent, 
        ImgBrokenDirective
      ]
    })

    fixture = TestBed.createComponent(TestComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })
  
  it('should create an instance', () => {
    const mockElement = new ElementRef('')
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });

  it('TestComponent debe instanciarce correctamente', () => {
    expect(component).toBeTruthy()
  })

/*   it('Directiva debe de cambiar la imagen por base64', (done:DoneFn) => {
    const beforeImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement
    const beforeImgSrc = beforeImgElement.src
    component.srckMock = undefined

    setTimeout(() => {
      const afterImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement
      const afterImgSrc = afterImgElement.src

      expect(afterImgSrc).toMatch(/\bassets\/23573038.jpg\b/)
      done()
    }, 3000)
  }) */
});
