import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[bold2]'
})
export class BoldDirective2 {
    // a variable "elementRef" has an access to object "ElementRef" which provides a link to element (by which will apply "BoldDirective" directive)
    // Renderer2 - provides a service which if directive will call will pass a constructor to inside this directive
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
        this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", "bold");
    }
}
