import { QueryList, TemplateRef, OnChanges, SimpleChanges } from "@angular/core";
export declare class BranchComponent implements OnChanges, Base {
    private parent;
    nutriment: Nutriment;
    /**
     * Lower stalks of this stalk.
     */
    private _children;
    children: QueryList<BranchComponent>;
    depth: number;
    depthRange: number[];
    togglerTemplate: TemplateRef<any>;
    /**
     * Whether is unfolded or folded.
     */
    unfolded: boolean;
    constructor(parent: BranchComponent);
    /**
     * Whether this stalk has children.
     */
    hasChildren(): boolean;
    /**
     * Toggles folding/unfolding children.
     */
    toggle(): void;
    /**
     * Gets previous stalk in the midst of siblings.
     */
    prev(): BranchComponent;
    /**
     * Gets next stalk in the midst of siblings.
     */
    next(): BranchComponent;
    /**
     * Gets first stalk in the midst of children.
     */
    first(): BranchComponent;
    /**
     * Gets x-th stalk in the midst of children.
     * @param xth based zero
     */
    child(xth: number): BranchComponent;
    /**
     * Gets last stalk in the midst of children.
     */
    last(): BranchComponent;
    ngOnChanges(changes: SimpleChanges): void;
}
export interface Nutriment {
    id: any;
    displayName: string;
    data?: any;
    children?: Nutriment[];
}
export declare abstract class Base {
}
