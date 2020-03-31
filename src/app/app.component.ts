import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div [ngStyle]="{'font-size':'13px', 'font-family':'Verdana'}"> <!-- Styles binging using "ngStyle" directive -->
            <h1>Angular 9 "ngStyle" directive </h1>
            <p [style.font-size]="'14px'" [style.font-family]="'Segoe Print'"> <!-- Styles binding using properties of "style" object -->
                Angular 9 provides a module architecture of app
            </p>
        </div>
    `,
})

export class AppComponent { }
