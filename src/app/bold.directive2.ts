import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[bold2]',
})
export class BoldDirective2 {

    private fontWeight = "normal";
    // private contentColor = 'green';
    private contentColor;

    @HostBinding("style.fontWeight") get getFontWeight() {
        return this.fontWeight;
    }

    @HostBinding("style.cursor") get getCursor() {
        return "pointer";
    }

    @HostBinding("style.color") get getColor() {
        return this.contentColor;
    }

    @HostListener("mouseenter") onMouseEnter() {
        this.fontWeight = "bold";
        this.contentColor = 'green';
    }

    @HostListener("mouseleave") onMouseLeave() {
        this.fontWeight = "normal";
        this.contentColor = 'black';
    }
}
