import { Component } from '@angular/core';

@Component({
    selector: 'my-app2',
    template: `
        <div [ngClass]="{invisible: visibility}"> <!-- or <div [class.invisible]="visibility"> or <div [style.display]="visibility==true?'none':'block'"> (w/o "styles" below)  --> 
            <h1>
                Angular 9 can change classes and styles dynamically
            </h1>
            <p>
                Angular 9 provides a module architecture of app
            </p>
        </div>
        <button (click)="toggle()">
            A toggle for elements hiding
        </button>
    `,
    styles: [`
        .invisible {
            display: none;
        }
    `]
})

export class AppComponent2 {
    visibility: boolean = true;
    // switch the variable
    toggle() {
        this.visibility = !this.visibility;
    }
}
