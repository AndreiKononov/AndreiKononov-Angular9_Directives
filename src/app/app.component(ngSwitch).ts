import { Component } from '@angular/core';

@Component({
    selector: 'ng-switch-comp',
    template: `
        <hr>
        <div [ngSwitch]="count">
            <ng-template ngSwitchCase="1">{{count * 10}}</ng-template>
            <ng-template ngSwitchCase="2">{{count * 100}}</ng-template>
            <ng-template ngSwitchDefault>{{count * 1000}}</ng-template>
        </div>
    `
})

export class AppComponentNgSwitch {
    count: number = 5;
}
