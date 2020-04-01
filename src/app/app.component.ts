import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div>
            <!-- Two ways to describe parameters -->
            <p bold selectedSize="38px" [defaultSize]="'14px'">
            <!-- or the same -->  
            <!-- <p [bold]="'28px'" [defaultSize]="'14px'"> -->
                Hello Angular 9
            </p>
            <p>
                Angular 9 provides a module architecture of app
            </p>
        </div>
    `
})

export class AppComponent { }
