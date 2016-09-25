import {
    Component, Input, QueryList, ViewChildren, forwardRef, SkipSelf, Optional, TemplateRef,
    OnChanges, SimpleChanges
} from "@angular/core";

@Component({
    selector: 'ent-stalk',
    template: `
<div class="ent-stalk">
    <span (click)="toggle()" class="ent-stalk__toggler">
        <span *ngIf="!togglerTemplate && hasChildren()" [textContent]="unfolded ? '-' : '+'"></span>
        <template [ngTemplateOutlet]="togglerTemplate" [ngOutletContext]="{ 'depth': depth, 'depthRange': depthRange, 'unfolded': unfolded, 'hasChildren': children?.length > 0 }"></template>
    </span>
    <span class="ent-stalk__label">{{nutriment.displayName}}</span>
    <div class="ent-stalk__children" [style.display]="(children?.length > 0 && unfolded) ? 'block' : 'none'">
        <ent-stalk *ngFor="let nutriment of nutriment.children" [nutriment]="nutriment" [depth]="depth + 1" [togglerTemplate]="togglerTemplate"></ent-stalk>
    </div>
</div>`,
    providers: [{ provide: Base, useExisting: forwardRef(() => BranchComponent)}]
})
export class BranchComponent implements OnChanges, Base {
    @Input() nutriment: Nutriment;

    /**
     * Lower stalks of this stalk.
     */
    private _children: QueryList<BranchComponent>;
    @ViewChildren(BranchComponent) set children(children: QueryList<BranchComponent>) {
        setTimeout(() => this._children = children, 0);
    };
    get children() {
        return this._children;
    }

    @Input() depth: number;
    depthRange: number[];

    @Input() togglerTemplate: TemplateRef<any>;

    /**
     * Whether is unfolded or folded.
     */
    unfolded: boolean;

    constructor(@SkipSelf() @Optional() private parent: BranchComponent) {

    }

    /**
     * Whether this stalk has children.
     */
    hasChildren(): boolean {
        return this.children !== undefined && this.children.length > 0;
    }

    /**
     * Toggles folding/unfolding children.
     */
    toggle() {
        this.unfolded = !this.unfolded;
    }

    /**
     * Gets previous stalk in the midst of siblings.
     */
    prev(): BranchComponent {
        // TODO ROOT는 어쩌나?

        let childrenArray = this.parent.children.toArray();

        let thisIndex = childrenArray.indexOf(this);

        if (thisIndex == 0) return null;

        return this.parent.children[thisIndex];
    }

    /**
     * Gets next stalk in the midst of siblings.
     */
    next(): BranchComponent {
        // TODO ROOT는 어쩌나?

        let childrenArray = this.parent.children.toArray();

        let thisIndex = childrenArray.indexOf(this);

        return this.parent.children[thisIndex];
    }

    /**
     * Gets first stalk in the midst of children.
     */
    first(): BranchComponent {
        return this.children.first;
    }

    /**
     * Gets x-th stalk in the midst of children.
     * @param xth based zero
     */
    child(xth: number): BranchComponent {
        if (!this.children || this.children.length < xth) return null;

        return this.children.toArray()[xth - 1];
    }

    /**
     * Gets last stalk in the midst of children.
     */
    last(): BranchComponent {
        return this.children.last;
    }

    ngOnChanges(changes: SimpleChanges): void {
        for (let propertyName in changes) {
            if (propertyName === 'depth') {
                let change = changes[propertyName];

                this.depthRange = Array(change.currentValue).fill(0).map((x, i) => i);
            }
        }
    }
}

export interface Nutriment {
    id: any;

    displayName: string;

    data?: any;

    children?: Nutriment[];
}

export abstract class Base {

}