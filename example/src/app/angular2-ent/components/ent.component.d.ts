import { OnChanges, SimpleChanges, TemplateRef } from "@angular/core";
import { Nutriment } from "./branch/branch.component";
import { DomSanitizer } from "@angular/platform-browser";
export declare class EntComponent implements OnChanges {
    private santinizer;
    children: Nutriment[];
    options: EntOptions;
    private safeStyleUrl;
    togglerTemplate: TemplateRef<any>;
    constructor(santinizer: DomSanitizer);
    ngOnChanges(changes: SimpleChanges): void;
}
export interface EntOptions {
    styleUrl?: string;
}
