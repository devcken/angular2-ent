import {
    Component, Input, ViewEncapsulation, OnChanges, SimpleChanges, TemplateRef, ViewChild,
    ContentChild
} from "@angular/core";
import {Nutriment} from "./branch/branch.component";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
    selector: 'ent-root',
    template: `
<link rel="stylesheet" [attr.href]="safeStyleUrl">
<div class="ent-root">
    <ent-stalk *ngFor="let nutriment of children" [nutriment]="nutriment" [depth]="0" [togglerTemplate]="togglerTemplate"></ent-stalk>
</div>`,
    encapsulation: ViewEncapsulation.None
})
export class EntComponent implements OnChanges {
    @Input() children: Nutriment[];

    @Input() options: EntOptions;

    private safeStyleUrl: SafeUrl;

    @ContentChild('togglerTemplate') togglerTemplate: TemplateRef<any>;

    constructor(private santinizer: DomSanitizer) {

    }

    ngOnChanges(changes: SimpleChanges): void {
        for (let propertyName in changes) {
            if (propertyName === 'options' && this.options.styleUrl) {
                this.safeStyleUrl = this.santinizer.bypassSecurityTrustResourceUrl(this.options.styleUrl);
            }
        }
    }
}

export interface EntOptions {
    styleUrl?: string
}
