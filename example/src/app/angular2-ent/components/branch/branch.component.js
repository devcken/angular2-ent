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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var BranchComponent = (function () {
    function BranchComponent(parent) {
        this.parent = parent;
    }
    Object.defineProperty(BranchComponent.prototype, "children", {
        get: function () {
            return this._children;
        },
        set: function (children) {
            var _this = this;
            setTimeout(function () { return _this._children = children; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * Whether this stalk has children.
     */
    BranchComponent.prototype.hasChildren = function () {
        return this.children !== undefined && this.children.length > 0;
    };
    /**
     * Toggles folding/unfolding children.
     */
    BranchComponent.prototype.toggle = function () {
        this.unfolded = !this.unfolded;
    };
    /**
     * Gets previous stalk in the midst of siblings.
     */
    BranchComponent.prototype.prev = function () {
        // TODO ROOT는 어쩌나?
        var childrenArray = this.parent.children.toArray();
        var thisIndex = childrenArray.indexOf(this);
        if (thisIndex == 0)
            return null;
        return this.parent.children[thisIndex];
    };
    /**
     * Gets next stalk in the midst of siblings.
     */
    BranchComponent.prototype.next = function () {
        // TODO ROOT는 어쩌나?
        var childrenArray = this.parent.children.toArray();
        var thisIndex = childrenArray.indexOf(this);
        return this.parent.children[thisIndex];
    };
    /**
     * Gets first stalk in the midst of children.
     */
    BranchComponent.prototype.first = function () {
        return this.children.first;
    };
    /**
     * Gets x-th stalk in the midst of children.
     * @param xth based zero
     */
    BranchComponent.prototype.child = function (xth) {
        if (!this.children || this.children.length < xth)
            return null;
        return this.children.toArray()[xth - 1];
    };
    /**
     * Gets last stalk in the midst of children.
     */
    BranchComponent.prototype.last = function () {
        return this.children.last;
    };
    BranchComponent.prototype.ngOnChanges = function (changes) {
        for (var propertyName in changes) {
            if (propertyName === 'depth') {
                var change = changes[propertyName];
                this.depthRange = Array(change.currentValue).fill(0).map(function (x, i) { return i; });
            }
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BranchComponent.prototype, "nutriment", void 0);
    __decorate([
        core_1.ViewChildren(BranchComponent), 
        __metadata('design:type', core_1.QueryList), 
        __metadata('design:paramtypes', [core_1.QueryList])
    ], BranchComponent.prototype, "children", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], BranchComponent.prototype, "depth", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', core_1.TemplateRef)
    ], BranchComponent.prototype, "togglerTemplate", void 0);
    BranchComponent = __decorate([
        core_1.Component({
            selector: 'ent-stalk',
            template: "\n<div class=\"ent-stalk\">\n    <span (click)=\"toggle()\" class=\"ent-stalk__toggler\">\n        <span *ngIf=\"!togglerTemplate && hasChildren()\" [textContent]=\"unfolded ? '-' : '+'\"></span>\n        <template [ngTemplateOutlet]=\"togglerTemplate\" [ngOutletContext]=\"{ 'depth': depth, 'depthRange': depthRange, 'unfolded': unfolded, 'hasChildren': children?.length > 0 }\"></template>\n    </span>\n    <span class=\"ent-stalk__label\">{{nutriment.displayName}}</span>\n    <div class=\"ent-stalk__children\" [style.display]=\"(children?.length > 0 && unfolded) ? 'block' : 'none'\">\n        <ent-stalk *ngFor=\"let nutriment of nutriment.children\" [nutriment]=\"nutriment\" [depth]=\"depth + 1\" [togglerTemplate]=\"togglerTemplate\"></ent-stalk>\n    </div>\n</div>",
            providers: [{ provide: Base, useExisting: core_1.forwardRef(function () { return BranchComponent; }) }]
        }),
        __param(0, core_1.SkipSelf()),
        __param(0, core_1.Optional()), 
        __metadata('design:paramtypes', [BranchComponent])
    ], BranchComponent);
    return BranchComponent;
}());
exports.BranchComponent = BranchComponent;
var Base = (function () {
    function Base() {
    }
    return Base;
}());
exports.Base = Base;
//# sourceMappingURL=branch.component.js.map