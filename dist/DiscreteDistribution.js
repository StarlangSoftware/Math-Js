(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DiscreteDistribution = void 0;
    class DiscreteDistribution extends Map {
        /**
         * A constructor of {@link DiscreteDistribution} class which calls its super class.
         */
        constructor() {
            super();
            this.sum = 0;
        }
        /**
         * The addItem method takes a String item as an input and if this map contains a mapping for the item it puts the item
         * with given value + 1, else it puts item with value of 1.
         *
         * @param item String input.
         */
        addItem(item) {
            if (this.has(item)) {
                this.set(item, this.get(item) + 1);
            }
            else {
                this.set(item, 1);
            }
            this.sum++;
        }
        /**
         * The removeItem method takes a String item as an input and if this map contains a mapping for the item it puts the item
         * with given value - 1, and if its value is 0, it removes the item.
         *
         * @param item String input.
         */
        removeItem(item) {
            if (this.has(item)) {
                this.set(item, this.get(item) - 1);
                if (this.get(item) == 0) {
                    this.delete(item);
                }
                this.sum--;
            }
        }
        /**
         * The addDistribution method takes a {@link DiscreteDistribution} as an input and loops through the entries in this distribution
         * and if this map contains a mapping for the entry it puts the entry with its value + entry, else it puts entry with its value.
         * It also accumulates the values of entries and assigns to the sum variable.
         *
         * @param distribution {@link DiscreteDistribution} type input.
         */
        addDistribution(distribution) {
            for (const [key, value] of distribution.entries()) {
                if (this.has(key)) {
                    this.set(key, this.get(key) + value);
                }
                else {
                    this.set(key, value);
                }
                this.sum += value;
            }
        }
        /**
         * The removeDistribution method takes a {@link DiscreteDistribution} as an input and loops through the entries in this distribution
         * and if this map contains a mapping for the entry it puts the entry with its key - value, else it removes the entry.
         * It also decrements the value of entry from sum and assigns to the sum variable.
         *
         * @param distribution {@link DiscreteDistribution} type input.
         */
        removeDistribution(distribution) {
            for (const [key, value] of distribution.entries()) {
                if (this.get(key) - value != 0) {
                    this.set(key, this.get(key) - value);
                }
                else {
                    this.delete(key);
                }
                this.sum -= value;
            }
        }
        /**
         * The getter for sum variable.
         *
         * @return sum.
         */
        getSum() {
            return this.sum;
        }
        /**
         * The getIndex method takes an item as an input and returns the index of given item.
         *
         * @param item to search for index.
         * @return index of given item.
         */
        getIndex(item) {
            let index = 0;
            for (const key of this.keys()) {
                if (key == item) {
                    return index;
                }
                index++;
            }
            return -1;
        }
        /**
         * The containsItem method takes an item as an input and returns true if this map contains a mapping for the
         * given item.
         *
         * @param item to check.
         * @return true if this map contains a mapping for the given item.
         */
        containsItem(item) {
            return this.has(item);
        }
        /**
         * The getItem method takes an index as an input and returns the item at given index.
         *
         * @param index is used for searching the item.
         * @return the item at given index.
         */
        getItem(index) {
            let i = 0;
            for (const key of this.keys()) {
                if (i == index) {
                    return key;
                }
                i++;
            }
        }
        /**
         * The getValue method takes an index as an input and returns the value at given index.
         *
         * @param index is used for searching the value.
         * @return the value at given index.
         */
        getValue(index) {
            let i = 0;
            for (const value of this.values()) {
                if (i == index) {
                    return value;
                }
                i++;
            }
        }
        /**
         * The getCount method takes an item as an input returns the value to which the specified item is mapped, or {@code null}
         * if this map contains no mapping for the key.
         *
         * @param item is used to search for value.
         * @return the value to which the specified item is mapped
         */
        getCount(item) {
            return this.get(item);
        }
        /**
         * The getMaxItem method loops through the entries and gets the entry with maximum value.
         *
         * @return the entry with maximum value.
         */
        getMaxItem(includeTheseOnly = undefined) {
            let max = -1;
            let maxItem = undefined;
            if (includeTheseOnly == undefined) {
                for (const [key, value] of this.entries()) {
                    if (value > max) {
                        max = value;
                        maxItem = key;
                    }
                }
            }
            else {
                for (const item of includeTheseOnly) {
                    if (this.has(item)) {
                        if (this.get(item) > max) {
                            max = this.get(item);
                            maxItem = item;
                        }
                    }
                }
            }
            return maxItem;
        }
        /**
         * The getProbability method takes an item as an input returns the value to which the specified item is mapped over sum,
         * or 0.0 if this map contains no mapping for the key.
         *
         * @param item is used to search for probability.
         * @return the probability to which the specified item is mapped.
         */
        getProbability(item) {
            if (this.has(item)) {
                return this.get(item) / this.sum;
            }
            else {
                return 0.0;
            }
        }
        /**
         * Returns the distribution as a probability distribution
         * @return Probability distribution
         */
        getProbabilityDistribution() {
            const result = new Map();
            for (const item of this.keys()) {
                result.set(item, this.getProbability(item));
            }
            return result;
        }
        /**
         * The getProbabilityLaplaceSmoothing method takes an item as an input returns the smoothed value to which the specified
         * item is mapped over sum, or 1.0 over sum if this map contains no mapping for the key.
         *
         * @param item is used to search for probability.
         * @return the smoothed probability to which the specified item is mapped.
         */
        getProbabilityLaplaceSmoothing(item) {
            if (this.has(item)) {
                return (this.get(item) + 1) / (this.sum + this.size + 1);
            }
            else {
                return 1.0 / (this.sum + this.size + 1);
            }
        }
        /**
         * The entropy method loops through the values and calculates the entropy of these values.
         *
         * @return entropy value.
         */
        entropy() {
            let total = 0.0;
            for (const count of this.values()) {
                let probability = count / this.sum;
                total += -probability * (Math.log(probability) / Math.log(2));
            }
            return total;
        }
    }
    exports.DiscreteDistribution = DiscreteDistribution;
});
//# sourceMappingURL=DiscreteDistribution.js.map