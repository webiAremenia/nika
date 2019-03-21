import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[appHoverOpacity]'
})
export class HoverOpacityDirective {

    @Input() bgColor;

    @HostListener('mouseenter') onMouseEnter() {
        this.opacity('yellow');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.opacity(null);
    }
    hederDisplay = true;

    constructor(private el: ElementRef) {
        // console.log(el.nativeElement.children, el.nativeElement.style.backgroundColor)
    }

    opacity(color) {
        setTimeout( () => {
            // this.el.nativeElement.children[0].children[0].style.display = this.hederDisplay ? 'block' : 'none'
            this.hederDisplay = ! this.hederDisplay;
            }
            ,0);
        this.el.nativeElement.children[0].classList.toggle('show-opacity'), this.bgColor;
    }
}
