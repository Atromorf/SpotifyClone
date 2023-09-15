import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement
    console.log('Esta Imagen no Funciona', this.elHost);
    elNative.src = '../../../assets/images/23573038.jpg'
  }

  constructor(private elHost: ElementRef) {
    console.log(this.elHost);
  }

}
