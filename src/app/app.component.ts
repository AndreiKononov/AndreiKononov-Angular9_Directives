import { Component } from '@angular/core';

@Component({
    selector: 'ngIF',
    template: `
        <p>Using *ngIF only</p>
        <p *ngIf="condition">
            Hello Andrei!
        </p>
        <p *ngIf="!condition">
            Bye-bye Andrei(
        </p>
        <hr>
        <p>The same, using *ngIF "ng-template" directive</p>
        <p *ngIf="condition; else unset">
            Hello Andrei!
        </p>
        <ng-template #unset>
            <p>Bye-Bye Andrei(</p>
        </ng-template>
        <hr>
        <p>The same, using *ngIF "ng-template" directive and then/else blocks</p>
        <div *ngIf="condition; then thenBlock else elseBlock"></div>
        <ng-template #thenBlock>
            <p>Hello Andrei!</p>
        </ng-template>
        <ng-template #elseBlock>
            <p>Bye-Bye Andrei</p>
        </ng-template>
        <button (click)="toggle()">Toggle</button>
    `
})

export class AppComponent {

    condition: boolean = true;

    toggle() {
        this.condition = !this.condition;
    }
}
