export declare class DiscreteDistribution extends Map<string, number> {
    private sum;
    /**
     * A constructor of {@link DiscreteDistribution} class which calls its super class.
     */
    constructor();
    /**
     * The addItem method takes a String item as an input and if this map contains a mapping for the item it puts the item
     * with given value + 1, else it puts item with value of 1.
     *
     * @param item String input.
     */
    addItem(item: string): void;
    /**
     * The removeItem method takes a String item as an input and if this map contains a mapping for the item it puts the item
     * with given value - 1, and if its value is 0, it removes the item.
     *
     * @param item String input.
     */
    removeItem(item: string): void;
    /**
     * The addDistribution method takes a {@link DiscreteDistribution} as an input and loops through the entries in this distribution
     * and if this map contains a mapping for the entry it puts the entry with its value + entry, else it puts entry with its value.
     * It also accumulates the values of entries and assigns to the sum variable.
     *
     * @param distribution {@link DiscreteDistribution} type input.
     */
    addDistribution(distribution: DiscreteDistribution): void;
    /**
     * The removeDistribution method takes a {@link DiscreteDistribution} as an input and loops through the entries in this distribution
     * and if this map contains a mapping for the entry it puts the entry with its key - value, else it removes the entry.
     * It also decrements the value of entry from sum and assigns to the sum variable.
     *
     * @param distribution {@link DiscreteDistribution} type input.
     */
    removeDistribution(distribution: DiscreteDistribution): void;
    /**
     * The getter for sum variable.
     *
     * @return sum.
     */
    getSum(): number;
    /**
     * The getIndex method takes an item as an input and returns the index of given item.
     *
     * @param item to search for index.
     * @return index of given item.
     */
    getIndex(item: string): number;
    /**
     * The containsItem method takes an item as an input and returns true if this map contains a mapping for the
     * given item.
     *
     * @param item to check.
     * @return true if this map contains a mapping for the given item.
     */
    containsItem(item: string): boolean;
    /**
     * The getItem method takes an index as an input and returns the item at given index.
     *
     * @param index is used for searching the item.
     * @return the item at given index.
     */
    getItem(index: number): string;
    /**
     * The getValue method takes an index as an input and returns the value at given index.
     *
     * @param index is used for searching the value.
     * @return the value at given index.
     */
    getValue(index: number): number;
    /**
     * The getCount method takes an item as an input returns the value to which the specified item is mapped, or {@code null}
     * if this map contains no mapping for the key.
     *
     * @param item is used to search for value.
     * @return the value to which the specified item is mapped
     */
    getCount(item: string): number;
    /**
     * The getMaxItem method loops through the entries and gets the entry with maximum value.
     *
     * @return the entry with maximum value.
     */
    getMaxItem(includeTheseOnly?: Array<string>): string;
    /**
     * The getProbability method takes an item as an input returns the value to which the specified item is mapped over sum,
     * or 0.0 if this map contains no mapping for the key.
     *
     * @param item is used to search for probability.
     * @return the probability to which the specified item is mapped.
     */
    getProbability(item: string): number;
    /**
     * Returns the distribution as a probability distribution
     * @return Probability distribution
     */
    getProbabilityDistribution(): Map<string, number>;
    /**
     * The getProbabilityLaplaceSmoothing method takes an item as an input returns the smoothed value to which the specified
     * item is mapped over sum, or 1.0 over sum if this map contains no mapping for the key.
     *
     * @param item is used to search for probability.
     * @return the smoothed probability to which the specified item is mapped.
     */
    getProbabilityLaplaceSmoothing(item: string): number;
    /**
     * The entropy method loops through the values and calculates the entropy of these values.
     *
     * @return entropy value.
     */
    entropy(): number;
}
