import { Vector } from "./Vector";
import { Eigenvector } from "./Eigenvector";
import { Random } from "nlptoolkit-util/dist/Random";
export declare class Matrix {
    private readonly row;
    private readonly col;
    private values;
    constructor(row: any, col?: any, minValue?: any, maxValue?: any, random?: Random);
    initZeros(): void;
    /**
     * The getter for the index at given rowNo and colNo of values {@link Array}.
     *
     * @param rowNo integer input for row number.
     * @param colNo integer input for column number.
     * @return item at given index of values {@link Array}.
     */
    getValue(rowNo: number, colNo: number): number;
    /**
     * The setter for the value at given index of values {@link Array}.
     *
     * @param rowNo integer input for row number.
     * @param colNo integer input for column number.
     * @param value is used to set at given index.
     */
    setValue(rowNo: number, colNo: number, value: number): void;
    /**
     * The addValue method adds the given value to the item at given index of values {@link Array}.
     *
     * @param rowNo integer input for row number.
     * @param colNo integer input for column number.
     * @param value is used to add to given item at given index.
     */
    addValue(rowNo: number, colNo: number, value: number): void;
    /**
     * The increment method adds 1 to the item at given index of values {@link Array}.
     *
     * @param rowNo integer input for row number.
     * @param colNo integer input for column number.
     */
    increment(rowNo: number, colNo: number): void;
    /**
     * The getter for the row variable.
     *
     * @return row number.
     */
    getRow(): number;
    /**
     * The getter for the row variable.
     *
     * @return row number.
     */
    getRowVector(row: number): Vector;
    /**
     * The getColumn method creates an {@link Array} and adds items at given column number of values {@link Array}
     * to the {@link Array}.
     *
     * @return Array of given column number.
     */
    getColumn(): number;
    /**
     * The getColumn method creates an {@link Array} and adds items at given column number of values {@link Array}
     * to the {@link Array}.
     *
     * @param column integer input for column number.
     * @return Array of given column number.
     */
    getColumnVector(column: number): Array<number>;
    /**
     * The columnWiseNormalize method, first accumulates items column by column then divides items by the summation.
     */
    columnWiseNormalize(): void;
    /**
     * The multiplyWithConstant method takes a constant as an input and multiplies each item of values {@link Array}
     * with given constant.
     *
     * @param constant value to multiply items of values {@link Array}.
     */
    multiplyWithConstant(constant: number): void;
    /**
     * The divideByConstant method takes a constant as an input and divides each item of values {@link Array}
     * with given constant.
     *
     * @param constant value to divide items of values {@link Array}.
     */
    divideByConstant(constant: number): void;
    /**
     * The add method takes a {@link Matrix} as an input and accumulates values {@link Array} with the
     * corresponding items of given Matrix.
     *
     * @param m Matrix type input.
     * @param v Vector type input.
     */
    add(m: Matrix | number, v?: any): void;
    /**
     * The subtract method takes a {@link Matrix} as an input and subtracts from values {@link Array} the
     * corresponding items of given Matrix.
     *
     * @param m Matrix type input.
     */
    subtract(m: Matrix): void;
    /**
     * The multiplyWithVectorFromLeft method takes a Vector as an input and creates a result {@link Array}.
     * Then, multiplies values of input Vector starting from the left side with the values {@link Array},
     * accumulates the multiplication, and assigns to the result {@link Array}.
     *
     * @param v {@link Vector} type input.
     * @return Vector that holds the result.
     */
    multiplyWithVectorFromLeft(v: Vector): Vector;
    /**
     * The multiplyWithVectorFromRight method takes a Vector as an input and creates a result {@link Array}.
     * Then, multiplies values of input Vector starting from the right side with the values {@link Array},
     * accumulates the multiplication, and assigns to the result {@link Array}.
     *
     * @param v {@link Vector} type input.
     * @return Vector that holds the result.
     */
    multiplyWithVectorFromRight(v: Vector): Vector;
    /**
     * The columnSum method takes a column number as an input and accumulates items at given column number of values
     * {@link Array}.
     *
     * @param columnNo Column number input.
     * @return summation of given column of values {@link Array}.
     */
    columnSum(columnNo: number): number;
    /**
     * The sumOfRows method creates a mew result {@link Vector} and adds the result of columnDum method's corresponding
     * index to the newly created result {@link Vector}.
     *
     * @return Vector that holds column sum.
     */
    sumOfRows(): Vector;
    /**
     * The rowSum method takes a row number as an input and accumulates items at given row number of values
     * {@link Array}.
     *
     * @param rowNo Row number input.
     * @return summation of given row of values {@link Array}.
     */
    rowSum(rowNo: number): number;
    /**
     * The multiply method takes a {@link Matrix} as an input. First it creates a result {@link Matrix} and puts the
     * accumulated multiplication of values {@link Array} and given {@link Matrix} into result
     * {@link Matrix}.
     *
     * @param m Matrix type input.
     * @return result {@link Matrix}.
     */
    multiply(m: Matrix): Matrix;
    /**
     * The elementProduct method takes a {@link Matrix} as an input and performs element wise multiplication. Puts result
     * to the newly created Matrix.
     *
     * @param m Matrix type input.
     * @return result {@link Matrix}.
     */
    elementProduct(m: Matrix | Vector): Matrix;
    /**
     * The sumOfElements method accumulates all the items in values {@link Array} and
     * returns this summation.
     *
     * @return sum of the items of values {@link Array}.
     */
    sumOfElements(): number;
    /**
     * The trace method accumulates items of values {@link Array} at the diagonal.
     *
     * @return sum of items at diagonal.
     */
    trace(): number;
    /**
     * The transpose method creates a new {@link Matrix}, then takes the transpose of values {@link Array}
     * and puts transposition to the {@link Matrix}.
     *
     * @return Matrix type output.
     */
    transpose(): Matrix;
    /**
     * The partial method takes 4 integer inputs; rowStart, rowEnd, colStart, colEnd and creates a {@link Matrix} size of
     * rowEnd - rowStart + 1 x colEnd - colStart + 1. Then, puts corresponding items of values {@link Array}
     * to the new result {@link Matrix}.
     *
     * @param rowStart integer input for defining starting index of row.
     * @param rowEnd   integer input for defining ending index of row.
     * @param colStart integer input for defining starting index of column.
     * @param colEnd   integer input for defining ending index of column.
     * @return result Matrix.
     */
    partial(rowStart: number, rowEnd: number, colStart: number, colEnd: number): Matrix;
    /**
     * The isSymmetric method compares each item of values {@link Array} at positions (i, j) with (j, i)
     * and returns true if they are equal, false otherwise.
     *
     * @return true if items are equal, false otherwise.
     */
    isSymmetric(): boolean;
    /**
     * The overridden clone method creates new Matrix and copies the content of values {@link Array} into new matrix.
     *
     * @return Matrix which is the copy of values {@link Array}.
     */
    clone(): Matrix;
    /**
     * The determinant method first creates a new {@link Array}, and copies the items of  values
     * {@link Array} into new {@link Array}. Then, calculates the determinant of this
     * new {@link Array}.
     *
     * @return determinant of values {@link Array}.
     */
    determinant(): number;
    /**
     * The inverse method finds the inverse of values {@link Array}.
     *
     */
    inverse(): void;
    /**
     * The choleskyDecomposition method creates a new {@link Matrix} and puts the Cholesky Decomposition of values Array
     * into this {@link Matrix}.
     *
     * @return Matrix type output.
     */
    choleskyDecomposition(): Matrix;
    /**
     * The rotate method rotates values {@link Array} according to given inputs.
     *
     * @param s   double input.
     * @param tau double input.
     * @param i   integer input.
     * @param j   integer input.
     * @param k   integer input.
     * @param l   integer input.
     */
    private rotate;
    /**
     * The characteristics method finds and returns a sorted {@link Array} of {@link Eigenvector}s.
     *
     * @return a sorted {@link Array} of {@link Eigenvector}s.
     */
    characteristics(): Array<Eigenvector>;
}
