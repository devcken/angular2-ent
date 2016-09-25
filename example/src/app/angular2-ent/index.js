"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ent_component_1 = require("./components/ent.component");
exports.EntComponent = ent_component_1.EntComponent;
var branch_component_1 = require("./components/branch/branch.component");
var common_1 = require("@angular/common");
var EntModule = (function () {
    function EntModule() {
    }
    EntModule = __decorate([
        core_1.NgModule({
            declarations: [ent_component_1.EntComponent, branch_component_1.BranchComponent],
            exports: [ent_component_1.EntComponent],
            imports: [common_1.CommonModule]
        }), 
        __metadata('design:paramtypes', [])
    ], EntModule);
    return EntModule;
}());
exports.EntModule = EntModule;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EntModule;
//# sourceMappingURL=index.js.map