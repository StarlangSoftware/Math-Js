(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Vector"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Eigenvector = void 0;
    const Vector_1 = require("./Vector");
    class Eigenvector extends Vector_1.Vector {
        /**
         * A constructor of {@link Eigenvector} which takes a double eigenValue and an {@link Array} values as inputs.
         * It calls its super class {@link Vector} with values {@link Array} and initializes eigenValue variable with its
         * eigenValue input.
         *
         * @param eigenValue double input.
         * @param values     {@link ArrayList} input.
         */
        constructor(eigenValue, values) {
            super(values);
            this.eigenValue = eigenValue;
        }
        /**
         * The eigenValue method which returns the eigenValue variable.
         *
         * @return eigenValue variable.
         */
        getEigenValue() {
            return this.eigenValue;
        }
    }
    exports.Eigenvector = Eigenvector;
});
//# sourceMappingURL=Eigenvector.js.map