import { Component } from '@angular/core';

@Component({
    selector: 'ng-for-comp',
    template: `
        <hr>
        <ul>
            <li *ngFor="let item of items">{{item}}</li>
        </ul>
        <hr>
        <div>
            <p *ngFor="let item of items; let i = index">{{i+1}}.{{item}}</p>
        </div>
    `
})

export class AppComponentNgFor {
    items = ["Tom", "Bob", "Sam", "Bill"];
}
