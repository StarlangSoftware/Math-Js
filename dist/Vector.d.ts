export declare class Vector {
    private _size;
    private values;
    constructor1(): void;
    constructor2(values: number[]): void;
    constructor3(size: number, initial: number): void;
    constructor4(size: number, initial: number, index: number): void;
    constructor(valuesOrSize?: any, initial?: any, index?: any);
    /**
     * The biased method creates a {@link Vector} result, add adds each item of values {@link Array} into the result Vector.
     * Then, insert 1.0 to 0th position and return result {@link Vector}.
     *
     * @return result {@link Vector}.
     */
    biased(): Vector;
    /**
     * The add method adds given input to the values {@link Array} and increments the size variable by one.
     *
     * @param x double input to add values {@link Array}.
     */
    add(x: number): void;
    /**
     * The insert method puts given input to the given index of values {@link Array} and increments the size variable by one.
     *
     * @param pos index to insert input.
     * @param x   input to insert to given index of values {@link Array}.
     */
    insert(pos: number, x: number): void;
    /**
     * The remove method deletes the item at given input position of values {@link Array} and decrements the size variable by one.
     *
     * @param pos index to remove from values {@link Array}.
     */
    remove(pos: number): void;
    /**
     * The clear method sets all the elements of values {@link Array} to 0.0.
     */
    clear(): void;
    /**
     * The sumOfElements method sums up all elements in the vector.
     *
     * @return Sum of all elements in the vector.
     */
    sumOfElements(): number;
    /**
     * The maxIndex method gets the first item of values {@link Array} as maximum item, then it loops through the indices
     * and if a greater value than the current maximum item comes, it updates the maximum item and returns the final
     * maximum item's index.
     *
     * @return final maximum item's index.
     */
    maxIndex(): number;
    /**
     * The sigmoid method loops through the values {@link Array} and sets each ith item with sigmoid function, i.e
     * 1 / (1 + Math.exp(-values.get(i))), i ranges from 0 to size.
     */
    sigmoid(): void;
    /**
     * The tanh method loops through the values {@link Array} and sets each ith item with tanh function.
     */
    tanh(): void;
    /**
     * The relu method loops through the values {@link Array} and sets each ith item with relu function.
     */
    relu(): void;
    /**
     * The reluDerivative method loops through the values {@link Array} and sets each ith item with the derivative of
     * relu function.
     */
    reluDerivative(): void;
    /**
     * The skipVector method takes a mod and a value as inputs. It creates a new result Vector, and assigns given input value to i.
     * While i is less than the size, it adds the ith item of values {@link Array} to the result and increments i by given mod input.
     *
     * @param mod   integer input.
     * @param value integer input.
     * @return result Vector.
     */
    skipVector(mod: number, value: number): Vector;
    /**
     * The add method takes a {@link Vector} v as an input. It sums up the corresponding elements of both given vector's
     * values {@link Array} and values {@link Array} and puts result back to the values {@link Array}.
     * If their sizes do not match, it throws a VectorSizeMismatch exception.
     *
     * @param v Vector to add.
     */
    addVector(v: Vector): void;
    /**
     * The subtract method takes a {@link Vector} v as an input. It subtracts the corresponding elements of given vector's
     * values {@link Array} from values {@link Array} and puts result back to the values {@link Array}.
     * If their sizes do not match, it throws a VectorSizeMismatch exception.
     *
     * @param v Vector to subtract from values {@link Array}.
     */
    subtract(v: Vector): void;
    /**
     * The difference method takes a {@link Vector} v as an input. It creates a new double {@link Array} result, then
     * subtracts the corresponding elements of given vector's values {@link Array} from values {@link Array} and puts
     * result back to the result {@link Array}. If their sizes do not match, it throws a VectorSizeMismatch exception.
     *
     * @param v Vector to find difference from values {@link Array}.
     * @return new {@link Vector} with result {@link Array}.
     */
    difference(v: Vector): Vector;
    /**
     * The dotProduct method takes a {@link Vector} v as an input. It creates a new double variable result, then
     * multiplies the corresponding elements of given vector's values {@link Array} with values {@link Array} and assigns
     * the multiplication to the result. If their sizes do not match, it throws a VectorSizeMismatch exception.
     *
     * @param v Vector to find dot product.
     * @return double result.
     */
    dotProduct(v: Vector): number;
    /**
     * The dotProduct method creates a new double variable result, then squares the elements of values {@link Array}
     * and assigns the accumulation to the result.
     *
     * @return double result.
     */
    dotProductWithItself(): number;
    /**
     * The elementProduct method takes a {@link Vector} v as an input. It creates a new double {@link Array} result, then
     * multiplies the corresponding elements of given vector's values {@link Array} with values {@link Array} and assigns
     * the multiplication to the result {@link Array}. If their sizes do not match, it throws a VectorSizeMismatch exception.
     *
     * @param v Vector to find dot product.
     * @return Vector with result {@link Array}.
     */
    elementProduct(v: Vector): Vector;
    /**
     * The divide method takes a double value as an input and divides each item of values {@link Array} with given value.
     *
     * @param value is used to divide items of values {@link Array}.
     */
    divide(value: number): void;
    /**
     * The multiply method takes a double value as an input and multiplies each item of values {@link Array} with given value.
     *
     * @param value is used to multiply items of values {@link Array}.
     */
    multiplyWithValue(value: number): void;
    /**
     * The product method takes a double value as an input and creates a new result {@link Vector}, then multiplies each
     * item of values {@link Array} with given value and adds to the result {@link Vector}.
     *
     * @param value is used to multiply items of values {@link Array}.
     * @return Vector result.
     */
    product(value: number): Vector;
    /**
     * The l1Normalize method is used to apply Least Absolute Errors, it accumulates items of values {@link Array} and sets
     * each item by dividing it by the summation value.
     */
    l1Normalize(): void;
    /**
     * The l2Norm method is used to apply Least Squares, it accumulates second power of each items of values {@link Array}
     * and returns the square root of this summation.
     *
     * @return square root of this summation.
     */
    l2Norm(): number;
    /**
     * The cosineSimilarity method takes a {@link Vector} v as an input and returns the result of dotProduct(v) / l2Norm() / v.l2Norm().
     *
     * @param v Vector input.
     * @return dotProduct(v) / l2Norm() / v.l2Norm().
     */
    cosineSimilarity(v: Vector): number;
    /**
     * The size method returns the size of the values {@link Array}.
     *
     * @return size of the values {@link Array}.
     */
    size(): number;
    /**
     * Getter for the item at given index of values {@link Array}.
     *
     * @param index used to get an item.
     * @return the item at given index.
     */
    getValue(index: number): number;
    /**
     * Setter for the setting the value at given index of values {@link Array}.
     *
     * @param index to set.
     * @param value is used to set the given index
     */
    setValue(index: number, value: number): void;
    /**
     * The addValue method adds the given value to the item at given index of values {@link Array}.
     *
     * @param index to add the given value.
     * @param value value to add to given index.
     */
    addValue(index: number, value: number): void;
}
