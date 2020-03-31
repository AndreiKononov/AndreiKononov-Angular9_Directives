import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[bold3]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    },
})
export class BoldDirective3 {

    constructor(private element: ElementRef, private renderer: Renderer2) {
        this.renderer.setStyle(this.element.nativeElement, "cursor", "pointer");
    }

    onMouseEnter() {
        this.setFontWeight("bold", "blue");
    }
    onMouseLeave() {
        this.setFontWeight("normal");
    }
    private setFontWeight(val: string, color: string = 'black') {
        this.renderer.setStyle(this.element.nativeElement, "font-weight", val);
        this.renderer.setStyle(this.element.nativeElement, "color", color);
    }
}
