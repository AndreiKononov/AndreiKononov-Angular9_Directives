import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[bold]'
})

export class BoldDirective {
    // a variable "elementRef" has an access to object "ElementRef" which provides a link to element (by which will apply "BoldDirective" directive)
    constructor (private elementRef: ElementRef) {
        this.elementRef.nativeElement.style.fontWeight = "bold";
    }
}
