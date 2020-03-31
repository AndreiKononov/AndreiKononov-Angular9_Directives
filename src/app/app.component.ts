import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `        
        <div [ngClass]="{verdanaFont:true}"> <!-- hardcoded value "true"-->            
            <h1 [class.red]="true">Angular 9 ngClass Directives</h1>  <!-- -->
            <p [ngClass]="{segoePrintFont:isSegoe}"> <!-- bind to expression "isSegoe" -->
                Angular 9 provides a module architecture of app
            </p>
        </div>
    `,
    styles: [`
        .red {
            color: red;
        }
        .verdanaFont {
            font-size: 13px;
            font-family: Verdana;
        }
        .segoePrintFont {
            font-size: 14px;
            font-family: "Segoe Print";
        }
    `]
})
export class AppComponent {
    isSegoe: boolean = true;
}
