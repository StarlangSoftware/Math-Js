import {Vector} from "./Vector";
import {Eigenvector} from "./Eigenvector";
import {Random} from "nlptoolkit-util/dist/Random";

export class Matrix{

    private readonly row: number
    private readonly col: number
    private values: Array<Array<number>>

    /**
     * Another constructor of Matrix class which takes row, column, minimum and maximum values as inputs.
     * First it creates new values array with given row and column numbers. Then fills in the
     * positions with random numbers using minimum and maximum inputs.
     *
     * @param row is used to create matrix.
     * @param col is used to create matrix.
     * @param minValue minimum value.
     * @param maxValue maximum value.
     * @param random random function to set the random values in the matrix.
     */
    constructor(row: any, col?: any, minValue?: any, maxValue?: any, random?: Random) {
        if (typeof row == 'number'){
            this.row = row
            if (col != undefined){
                this.col = col
                if (minValue == undefined){
                    this.initZeros()
                } else {
                    if (maxValue == undefined){
                        this.initZeros()
                        for (let i = 0; i < this.row; i++){
                            this.values[i][i] = minValue
                        }
                    } else {
                        this.values = new Array<Array<number>>();
                        for (let i = 0; i < this.row; i++){
                            this.values.push(new Array<number>())
                            for (let j = 0; j < this.col; j++){
                                if (random != undefined){
                                    this.values[i].push(random.nextDouble(minValue, maxValue));
                                } else {
                                    this.values[i].push(minValue + (maxValue - minValue) * Math.random());
                                }
                            }
                        }
                    }
                }
            } else {
                this.col = row
                this.initZeros()
                for (let i = 0; i < this.row; i++){
                    this.values[i][i] = 1.0
                }
            }
        } else {
            if (row instanceof Vector && col instanceof Vector){
                this.row = row.size()
                this.col = col.size()
                this.initZeros()
                for (let i = 0; i < this.row; i++){
                    for (let j = 0; j < this.col; j++){
                        this.values[i][j] = row.getValue(i) * col.getValue(j)
                    }
                }
            }
        }
    }

    /**
     * Initializes the values of the matrix to 0.
     */
    initZeros(){
        this.values = new Array<Array<number>>();
        for (let i = 0; i < this.row; i++){
            this.values.push(new Array<number>())
            for (let j = 0; j < this.col; j++){
                this.values[i].push(0);
            }
        }
    }

    /**
     * The getter for the index at given rowNo and colNo of values {@link Array}.
     *
     * @param rowNo integer input for row number.
     * @param colNo integer input for column number.
     * @return item at given index of values {@link Array}.
     */
    getValue(rowNo: number, colNo: number): number{
        return this.values[rowNo][colNo]
    }

    /**
     * The setter for the value at given index of values {@link Array}.
     *
     * @param rowNo integer input for row number.
     * @param colNo integer input for column number.
     * @param value is used to set at given index.
     */
    setValue(rowNo: number, colNo: number, value: number){
        this.values[rowNo][colNo] = value
    }

    /**
     * The addValue method adds the given value to the item at given index of values {@link Array}.
     *
     * @param rowNo integer input for row number.
     * @param colNo integer input for column number.
     * @param value is used to add to given item at given index.
     */
    addValue(rowNo: number, colNo: number, value: number){
        this.values[rowNo][colNo] += value
    }

    /**
     * The increment method adds 1 to the item at given index of values {@link Array}.
     *
     * @param rowNo integer input for row number.
     * @param colNo integer input for column number.
     */
    increment(rowNo: number, colNo: number){
        this.values[rowNo][colNo]++
    }

    /**
     * The getter for the row variable.
     *
     * @return row number.
     */
    getRow(): number{
        return this.row
    }

    /**
     * The getter for the row variable.
     *
     * @return row number.
     */
    getRowVector(row: number): Vector{
        return new Vector(this.values[row])
    }

    /**
     * The getColumn method creates an {@link Array} and adds items at given column number of values {@link Array}
     * to the {@link Array}.
     *
     * @return Array of given column number.
     */
    getColumn(): number{
        return this.col
    }

    /**
     * The getColumn method creates an {@link Array} and adds items at given column number of values {@link Array}
     * to the {@link Array}.
     *
     * @param column integer input for column number.
     * @return Array of given column number.
     */
    getColumnVector(column: number): Array<number>{
        const vector: Array<number> = [];
        for (let i = 0; i < this.row; i++) {
            vector.push(this.values[i][column])
        }
        return vector
    }

    /**
     * The columnWiseNormalize method, first accumulates items column by column then divides items by the summation.
     */
    columnWiseNormalize(){
        for (let i = 0; i < this.row; i++) {
            let sum = 0.0
            for (let j = 0; j < this.col; j++) {
                sum += this.values[i][j]
            }
            for (let j = 0; j < this.col; j++) {
                this.values[i][j] /= sum
            }
        }
    }

    /**
     * The multiplyWithConstant method takes a constant as an input and multiplies each item of values {@link Array}
     * with given constant.
     *
     * @param constant value to multiply items of values {@link Array}.
     */
    multiplyWithConstant(constant: number){
        for (let i = 0; i < this.row; i++) {
            for (let j = 0; j < this.col; j++) {
                this.values[i][j] *= constant
            }
        }
    }

    /**
     * The divideByConstant method takes a constant as an input and divides each item of values {@link Array}
     * with given constant.
     *
     * @param constant value to divide items of values {@link Array}.
     */
    divideByConstant(constant: number){
        for (let i = 0; i < this.row; i++) {
            for (let j = 0; j < this.col; j++) {
                this.values[i][j] /= constant
            }
        }
    }

    /**
     * The add method takes a {@link Matrix} as an input and accumulates values {@link Array} with the
     * corresponding items of given Matrix.
     *
     * @param m Matrix type input.
     * @param v Vector type input.
     */
    add(m: Matrix | number, v: any = undefined){
        if (m instanceof Matrix){
            for (let i = 0; i < this.row; i++) {
                for (let j = 0; j < this.col; j++) {
                    this.values[i][j] += m.values[i][j];
                }
            }
        } else {
            if (v instanceof Vector){
                for (let i = 0; i < this.col; i++) {
                    this.values[m][i] += v.getValue(i)
                }
            }
        }
    }

    /**
     * The subtract method takes a {@link Matrix} as an input and subtracts from values {@link Array} the
     * corresponding items of given Matrix.
     *
     * @param m Matrix type input.
     */
    subtract(m: Matrix){
        for (let i = 0; i < this.row; i++) {
            for (let j = 0; j < this.col; j++) {
                this.values[i][j] -= m.values[i][j];
            }
        }
    }

    /**
     * The multiplyWithVectorFromLeft method takes a Vector as an input and creates a result {@link Array}.
     * Then, multiplies values of input Vector starting from the left side with the values {@link Array},
     * accumulates the multiplication, and assigns to the result {@link Array}.
     *
     * @param v {@link Vector} type input.
     * @return Vector that holds the result.
     */
    multiplyWithVectorFromLeft(v: Vector): Vector{
        const result: Array<number> = []
        for (let i = 0; i < this.col; i++) {
            result.push(0.0)
            for (let j = 0; j < this.row; j++) {
                result[i] += v.getValue(j) * this.values[j][i]
            }
        }
        return new Vector(result)
    }

    /**
     * The multiplyWithVectorFromRight method takes a Vector as an input and creates a result {@link Array}.
     * Then, multiplies values of input Vector starting from the right side with the values {@link Array},
     * accumulates the multiplication, and assigns to the result {@link Array}.
     *
     * @param v {@link Vector} type input.
     * @return Vector that holds the result.
     */
    multiplyWithVectorFromRight(v: Vector): Vector{
        const result: Array<number> = []
        for (let i = 0; i < this.row; i++) {
            result.push(0.0)
            for (let j = 0; j < this.col; j++) {
                result[i] += v.getValue(j) * this.values[i][j];
            }
        }
        return new Vector(result);
    }

    /**
     * The columnSum method takes a column number as an input and accumulates items at given column number of values
     * {@link Array}.
     *
     * @param columnNo Column number input.
     * @return summation of given column of values {@link Array}.
     */
    columnSum(columnNo: number){
        let sum = 0
        for (let i = 0; i < this.row; i++) {
            sum += this.values[i][columnNo]
        }
        return sum
    }

    /**
     * The sumOfRows method creates a mew result {@link Vector} and adds the result of columnDum method's corresponding
     * index to the newly created result {@link Vector}.
     *
     * @return Vector that holds column sum.
     */
    sumOfRows(): Vector{
        let result: Vector = new Vector(0, 0.0);
        for (let i = 0; i < this.col; i++) {
            result.add(this.columnSum(i))
        }
        return result
    }

    /**
     * The rowSum method takes a row number as an input and accumulates items at given row number of values
     * {@link Array}.
     *
     * @param rowNo Row number input.
     * @return summation of given row of values {@link Array}.
     */
    rowSum(rowNo: number): number{
        let sum = 0
        for (let i = 0; i < this.col; i++) {
            sum += this.values[rowNo][i]
        }
        return sum
    }

    /**
     * The multiply method takes a {@link Matrix} as an input. First it creates a result {@link Matrix} and puts the
     * accumulated multiplication of values {@link Array} and given {@link Matrix} into result
     * {@link Matrix}.
     *
     * @param m Matrix type input.
     * @return result {@link Matrix}.
     */
    multiply(m: Matrix): Matrix{
        const result: Matrix = new Matrix(this.row, m.col)
        for (let i = 0; i < this.row; i++) {
            for (let j = 0; j < m.col; j++) {
                let sum = 0.0
                for (let k = 0; k < this.col; k++) {
                    sum += this.values[i][k] * m.values[k][j]
                }
                result.values[i][j] = sum
            }
        }
        return result
    }

    /**
     * The elementProduct method takes a {@link Matrix} as an input and performs element wise multiplication. Puts result
     * to the newly created Matrix.
     *
     * @param m Matrix type input.
     * @return result {@link Matrix}.
     */
    elementProduct(m: Matrix | Vector): Matrix{
        if (m instanceof Matrix){
            const result : Matrix = new Matrix(this.row, m.col)
            for (let i = 0; i < this.row; i++) {
                for (let j = 0; j < this.col; j++) {
                    result.values[i][j] = this.values[i][j] * m.values[i][j]
                }
            }
            return result
        } else {
            const result = new Matrix(this.row, this.col)
            if (this.row == 1 && this.col == m.size()){
                for (let i = 0; i < this.col; i++) {
                    result.values[0][i] = this.values[0][i] * m.getValue(i)
                }
            } else {
                if (this.col == 1 && this.row == m.size()){
                    for (let i = 0; i < this.row; i++) {
                        result.values[i][0] = this.values[i][0] * m.getValue(i)
                    }
                }
            }
            return result
        }
    }

    /**
     * The sumOfElements method accumulates all the items in values {@link Array} and
     * returns this summation.
     *
     * @return sum of the items of values {@link Array}.
     */
    sumOfElements(): number{
        let sum = 0.0
        for (let i = 0; i < this.row; i++) {
            for (let j = 0; j < this.col; j++) {
                sum += this.values[i][j]
            }
        }
        return sum
    }

    /**
     * The trace method accumulates items of values {@link Array} at the diagonal.
     *
     * @return sum of items at diagonal.
     */
    trace(): number{
        let sum = 0.0
        for (let i = 0; i < this.row; i++) {
            sum += this.values[i][i]
        }
        return sum
    }

    /**
     * The transpose method creates a new {@link Matrix}, then takes the transpose of values {@link Array}
     * and puts transposition to the {@link Matrix}.
     *
     * @return Matrix type output.
     */
    transpose(): Matrix{
        const result: Matrix = new Matrix(this.col, this.row)
        for (let i = 0; i < this.row; i++) {
            for (let j = 0; j < this.col; j++) {
                result.values[j][i] = this.values[i][j]
            }
        }
        return result
    }

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
    partial(rowStart: number, rowEnd: number, colStart: number, colEnd: number): Matrix{
        const result: Matrix = new Matrix(rowEnd - rowStart + 1, colEnd - colStart + 1);
        for (let i = rowStart; i <= rowEnd; i++)
            for (let j = colStart; j <= colEnd; j++)
                result.values[i - rowStart][j - colStart] = this.values[i][j]
        return result
    }

    /**
     * The isSymmetric method compares each item of values {@link Array} at positions (i, j) with (j, i)
     * and returns true if they are equal, false otherwise.
     *
     * @return true if items are equal, false otherwise.
     */
    isSymmetric(): boolean{
        for (let i = 0; i < this.row - 1; i++) {
            for (let j = i + 1; j < this.row; j++) {
                if (this.values[i][j] != this.values[j][i]) {
                    return false
                }
            }
        }
        return true
    }

    /**
     * The overridden clone method creates new Matrix and copies the content of values {@link Array} into new matrix.
     *
     * @return Matrix which is the copy of values {@link Array}.
     */
    clone(): Matrix{
        const copy: Matrix = new Matrix(this.row, this.col);
        for (let i = 0; i < this.row; i++){
            for (let j = 0; j < this.col; j++){
                copy.values[i][j] = this.values[i][j]
            }
        }
        return copy
    }

    /**
     * The determinant method first creates a new {@link Array}, and copies the items of  values
     * {@link Array} into new {@link Array}. Then, calculates the determinant of this
     * new {@link Array}.
     *
     * @return determinant of values {@link Array}.
     */
    determinant(): number{
        let det = 1.0
        const copy: Array<Array<number>> = new Array<Array<number>>()
        for (let i = 0; i < this.row; i++){
            copy.push(new Array<number>())
            for (let j = 0; j < this.col; j++){
                copy[i].push(this.values[i][j])
            }
        }
        for (let i = 0; i < this.row; i++) {
            det *= copy[i][i]
            if (det == 0.0)
                break;
            for (let j = i + 1; j < this.row; j++) {
                let ratio = copy[j][i] / copy[i][i]
                for (let k = i; k < this.col; k++)
                    copy[j][k] = copy[j][k] - copy[i][k] * ratio
            }
        }
        return det
    }

    /**
     * The inverse method finds the inverse of values {@link Array}.
     *
     */
    inverse(){
        let b = new Matrix(this.row)
        let indxc : Array<number> = []
        let indxr : Array<number> = []
        let ipiv : Array<number> = []
        for (let j = 0; j < this.row; j++){
            ipiv.push(0)
        }
        for (let i = 1; i <= this.row; i++) {
            let big = 0.0
            let irow = -1
            let icol = -1
            for (let j = 1; j <= this.row; j++){
                if (ipiv[j - 1] != 1){
                    for (let k = 1; k <= this.row; k++){
                        if (ipiv[k - 1] == 0){
                            if (Math.abs(this.values[j - 1][k - 1]) >= big) {
                                big = Math.abs(this.values[j - 1][k - 1])
                                irow = j
                                icol = k
                            }
                        }
                    }
                }
            }
            ipiv[icol - 1] = ipiv[icol - 1] + 1
            if (irow != icol) {
                for (let l = 1; l <= this.row; l++) {
                    let dum = this.values[irow - 1][l - 1]
                    this.values[irow - 1][l - 1] = this.values[icol - 1][l - 1]
                    this.values[icol - 1][l - 1] = dum
                }
                for (let l = 1; l <= this.row; l++) {
                    let dum = b.values[irow - 1][l - 1]
                    b.values[irow - 1][l - 1] = b.values[icol - 1][l - 1]
                    b.values[icol - 1][l - 1] = dum
                }
            }
            indxr.push(irow)
            indxc.push(icol)
            let pivinv = (1.0) / (this.values[icol - 1][icol - 1])
            this.values[icol - 1][icol - 1] = 1.0
            for (let l = 1; l <= this.row; l++){
                this.values[icol - 1][l - 1] = this.values[icol - 1][l - 1] * pivinv
            }
            for (let l = 1; l <= this.row; l++){
                b.values[icol - 1][l - 1] = b.values[icol - 1][l - 1] * pivinv
            }
            for (let ll = 1; ll <= this.row; ll++){
                if (ll != icol) {
                    let dum = this.values[ll - 1][icol - 1]
                    this.values[ll - 1][icol - 1] = 0.0;
                    for (let l = 1; l <= this.row; l++){
                        this.values[ll - 1][l - 1] = this.values[ll - 1][l - 1] - this.values[icol - 1][l - 1] * dum
                    }
                    for (let l = 1; l <= this.row; l++){
                        b.values[ll - 1][l - 1] = b.values[ll - 1][l - 1] - b.values[icol - 1][l - 1] * dum
                    }
                }
            }
        }
        for (let l = this.row; l >= 1; l--){
            if (indxr[l - 1] != indxc[l - 1]){
                for (let k = 1; k <= this.row; k++) {
                    let dum = this.values[k - 1][indxr[l - 1] - 1]
                    this.values[k - 1][indxr[l - 1] - 1] = this.values[k - 1][indxc[l - 1] - 1];
                    this.values[k - 1][indxc[l - 1] - 1] = dum
                }
            }
        }
    }

    /**
     * The choleskyDecomposition method creates a new {@link Matrix} and puts the Cholesky Decomposition of values Array
     * into this {@link Matrix}.
     *
     * @return Matrix type output.
     */
    choleskyDecomposition(): Matrix{
        const b: Matrix = new Matrix(this.row, this.col)
        for (let i = 0; i < this.row; i++) {
            for (let j = i; j < this.row; j++) {
                let sum = this.values[i][j];
                for (let k = i - 1; k >= 0; k--)
                    sum -= this.values[i][k] * this.values[j][k]
                if (i == j) {
                    b.values[i][i] = Math.sqrt(sum)
                } else
                    b.values[j][i] = sum / b.values[i][i]
            }
        }
        return b
    }

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
    private rotate(s: number, tau: number, i: number, j: number, k: number, l: number){
        let g = this.values[i][j]
        let h = this.values[k][l]
        this.values[i][j] = g - s * (h + g * tau)
        this.values[k][l] = h + s * (g - h * tau)
    }

    /**
     * The characteristics method finds and returns a sorted {@link Array} of {@link Eigenvector}s.
     *
     * @return a sorted {@link Array} of {@link Eigenvector}s.
     */
    characteristics(): Array<Eigenvector>{
        let matrix1 = this.clone()
        let v = new Matrix(this.row, this.row)
        let d: Array<number> = [];
        let b: Array<number> = [];
        let z: Array<number> = [];
        let EPS = 0.000000000000000001
        for (let ip = 0; ip < this.row; ip++) {
            for (let iq = 0; iq < this.row; iq++) {
                v.values[ip][iq] = 0.0
            }
            v.values[ip][ip] = 1.0
        }
        for (let ip = 0; ip < this.row; ip++) {
            b.push(matrix1.values[ip][ip])
            d.push(matrix1.values[ip][ip])
            z.push(0.0)
        }
        for (let i = 1; i <= 50; i++) {
            let sm = 0.0;
            for (let ip = 0; ip < this.row - 1; ip++)
            {
                for (let iq = ip + 1; iq < this.row; iq++){
                    sm += Math.abs(matrix1.values[ip][iq])
                }
            }
            if (sm == 0.0) {
                break;
            }
            let threshold
            if (i < 4) {
                threshold = 0.2 * sm / Math.pow(this.row, 2)
            } else {
                threshold = 0.0
            }
            for (let ip = 0; ip < this.row - 1; ip++) {
                for (let iq = ip + 1; iq < this.row; iq++) {
                    let g = 100.0 * Math.abs(matrix1.values[ip][iq])
                    if (i > 4 && g <= EPS * Math.abs(d[ip]) && g <= EPS * Math.abs(d[iq])) {
                        matrix1.values[ip][iq] = 0.0
                    } else {
                        if (Math.abs(matrix1.values[ip][iq]) > threshold) {
                            let h = d[iq] - d[ip]
                            let t
                            if (g <= EPS * Math.abs(h)) {
                                t = matrix1.values[ip][iq] / h
                            } else {
                                let theta = 0.5 * h / matrix1.values[ip][iq]
                                t = 1.0 / (Math.abs(theta) + Math.sqrt(1.0 + Math.pow(theta, 2)));
                                if (theta < 0.0) {
                                    t = -t
                                }
                            }
                            let c = 1.0 / Math.sqrt(1 + Math.pow(t, 2))
                            let s = t * c
                            let tau = s / (1.0 + c)
                            h = t * matrix1.values[ip][iq]
                            z[ip] -= h
                            z[iq] += h
                            d[ip] -= h
                            d[iq] += h
                            matrix1.values[ip][iq] = 0.0
                            for (let j = 0; j < ip; j++) {
                                matrix1.rotate(s, tau, j, ip, j, iq)
                            }
                            for (let j = ip + 1; j < iq; j++) {
                                matrix1.rotate(s, tau, ip, j, j, iq)
                            }
                            for (let j = iq + 1; j < this.row; j++) {
                                matrix1.rotate(s, tau, ip, j, iq, j)
                            }
                            for (let j = 0; j < this.row; j++) {
                                v.rotate(s, tau, j, ip, j, iq)
                            }
                        }
                    }
                }
            }
            for (let ip = 0; ip < this.row; ip++) {
                b[ip] = b[ip] + z[ip]
                d[ip] = b[ip]
                z[ip] = 0.0
            }
        }
        const result: Array<Eigenvector> = [];
        for (let i = 0; i < this.row; i++) {
            if (d[i] > 0) {
                result.push(new Eigenvector(d[i], <number[]>v.getColumnVector(i)))
            }
        }
        result.sort((a, b) => (a.getEigenValue() < b.getEigenValue()) ? -1
            : ((a.getEigenValue() > b.getEigenValue()) ? 1 : 0))
        return result
    }
}