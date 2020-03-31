import { Component } from '@angular/core';

@Component({
    selector: 'my-app2',
    template: `
        <div [ngClass]="currentClasses"> <!-- it allows to apply two classes right away-->
            <h1>Angular 9 ngClass </h1>
            <p>
                Angular 9 provides a module architecture of app
            </p>
        </div>
    `,
    styles: [`
        .verdanaFont {
            font-size: 13px;
            font-family: Verdana;
        }
        .navyColor {
            color: navy;
        }
    `]
})
export class AppComponent2 {

    isVerdana = true;
    isNavy = true;

    currentClasses = {
        verdanaFont: this.isVerdana,
        navyColor: this.isNavy
    }
}