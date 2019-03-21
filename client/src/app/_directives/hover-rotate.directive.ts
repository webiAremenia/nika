import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoverRotate]'
})
export class HoverRotateDirective {
  @Input() bgColor;

  @HostListener('mouseenter') onMouseEnter() {
    this.opacity();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.opacity();
  }

  constructor(private el: ElementRef) {

  }

  opacity() {
    console.log( this.el.nativeElement.children[1].children[0].classList.toggle('show-rotate'));
    // this.el.nativeElement.children[0].classList.toggle('show-opacity');
  }

}
