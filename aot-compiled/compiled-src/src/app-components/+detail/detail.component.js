"use strict";
var core_1 = require('@angular/core');
/*
 * Shared Utilities
 */
var utility_service_1 = require('../services/utility.service');
var forceChangeDetection_1 = require('../common/forceChangeDetection');
/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable so-called "Lazy Loading" CSS/SCSS files "on demand"
 * as the app views need them. Do NOT add styles the "Angular2 Way"
 * in the @Component decorator ("styles" and "styleUrls" properties)
 */
require('./detail.style.scss');
var DetailComponent = (function () {
    function DetailComponent() {
        // TODO: This is a hack. Find a better solution for getting change detection to work when the final Angular2 RTM
        // gets released
        forceChangeDetection_1.constructorForceChangeDetection();
    }
    DetailComponent.prototype.ngOnInit = function () {
        if (utility_service_1.Logging.isEnabled.light) {
            console.log('%c Hello \"Detail\" component!', utility_service_1.Logging.normal.lime);
        }
    };
    DetailComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'detail',
                    templateUrl: './detail.template.html',
                },] },
    ];
    /** @nocollapse */
    DetailComponent.ctorParameters = [];
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=detail.component.js.map