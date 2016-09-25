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
var platform_browser_1 = require("@angular/platform-browser");
var EntComponent = (function () {
    function EntComponent(santinizer) {
        this.santinizer = santinizer;
    }
    EntComponent.prototype.ngOnChanges = function (changes) {
        for (var propertyName in changes) {
            if (propertyName === 'options' && this.options.styleUrl) {
                this.safeStyleUrl = this.santinizer.bypassSecurityTrustResourceUrl(this.options.styleUrl);
            }
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], EntComponent.prototype, "children", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EntComponent.prototype, "options", void 0);
    __decorate([
        core_1.ContentChild('togglerTemplate'), 
        __metadata('design:type', core_1.TemplateRef)
    ], EntComponent.prototype, "togglerTemplate", void 0);
    EntComponent = __decorate([
        core_1.Component({
            selector: 'ent-root',
            template: "\n<link rel=\"stylesheet\" [attr.href]=\"safeStyleUrl\">\n<div class=\"ent-root\">\n    <ent-stalk *ngFor=\"let nutriment of children\" [nutriment]=\"nutriment\" [depth]=\"0\" [togglerTemplate]=\"togglerTemplate\"></ent-stalk>\n</div>",
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizer])
    ], EntComponent);
    return EntComponent;
}());
exports.EntComponent = EntComponent;
//# sourceMappingURL=ent.component.js.map