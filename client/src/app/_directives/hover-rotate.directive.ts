import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[appHoverRotate]'
})
export class HoverRotateDirective {
    @Input() bgColor;

    @HostListener('mouseenter') onMouseEnter() {
        this.opacity('e');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.opacity('l');
    }

    constructor(private el: ElementRef) {

    }

    opacity(e) {
        setTimeout(() => {
            e == 'e' ? this.el.nativeElement.children[1].children[0].children[0].children[0].style.display = 'none' : this.el.nativeElement.children[1].children[0].children[0].children[0].style.display = 'block'
            e == 'e' ? this.el.nativeElement.children[1].children[0].children[0].children[1].style.display = 'block': this.el.nativeElement.children[1].children[0].children[0].children[1].style.display = 'none';

        }, 250)


        this.el.nativeElement.children[1].children[0].children[0].classList.toggle('show-rotate');
    }

}
