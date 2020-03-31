import { Directive, HostListener ,ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[bold]',
})

export class BoldDirective {

    constructor (private element: ElementRef, private renderer: Renderer2) {
        this.renderer.setStyle(this.element.nativeElement, "cursor", "pointer");
    }

    @HostListener ("mouseenter") onMouseEnter() {
        this.setFontWeight("bold", "red");
    }

    @HostListener("mouseleave") onMouseLeave() {
        this.setFontWeight("normal", "black");
    }

    private setFontWeight(val: string, color?: string) {
        this.renderer.setStyle(this.element.nativeElement, "font-weight", val);
        this.renderer.setStyle(this.element.nativeElement, "color", color);
    }
}
