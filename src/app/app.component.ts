import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div>
            <p bold>
                Usage of HostListener
            </p>
            <hr>
            <p bold2>
                Usage of HostListener + HostBinding
            </p>
            <hr>
            <p bold3>
                Usage of property "host"
            </p>
        </div>
    `
})

export class AppComponent { }