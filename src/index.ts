import {NgModule} from "@angular/core";
import {EntComponent, EntOptions} from "./components/ent.component";
import {BranchComponent, Nutriment} from "./components/branch/branch.component";
import {CommonModule} from "@angular/common";

export {
    EntComponent,
    EntOptions,
    Nutriment
};

@NgModule({
    declarations: [EntComponent, BranchComponent],
    exports: [EntComponent],
    imports: [CommonModule]
})
export class EntModule {}

export default EntModule;