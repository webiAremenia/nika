import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[appHoverRotate]'
})
export class HoverRotateDirective {
    @Input() bgColor;
    @Input() appHoverRotate;


    @HostListener('mouseenter') onMouseEnter() {
        this.rotate('e');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.rotate('l');
    }

    constructor(private el: ElementRef) {
        // console.log(this.appHoverRotate);
    }

    rotate(e) {
        // console.log(this.el.nativeElement);
        setTimeout(() => {
            // e === 'e' ? this.el.nativeElement.children[0].children[1].children[0].children[0].children[0].style.display = 'none' :
            //     this.el.nativeElement.children[0].children[1].children[0].children[0].children[0].style.display = 'block';
            // e === 'e' ? this.el.nativeElement.children[0].children[1].children[0].children[0].children[1].style.display = 'block' :
            //     this.el.nativeElement.children[0].children[1].children[0].children[0].children[1].style.display = 'none';

        }, 250);


        // this.el.nativeElement.children[0].children[1].children[0].children[0].classList.toggle('show-rotate');
    }

}
