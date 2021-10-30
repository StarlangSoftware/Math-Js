import {Vector} from "./Vector";

export class Eigenvector extends Vector{

    private readonly eigenValue: number

    /**
     * A constructor of {@link Eigenvector} which takes a double eigenValue and an {@link Array} values as inputs.
     * It calls its super class {@link Vector} with values {@link Array} and initializes eigenValue variable with its
     * eigenValue input.
     *
     * @param eigenValue double input.
     * @param values     {@link ArrayList} input.
     */
    constructor(eigenValue: number, values: Array<number>) {
        super(values);
        this.eigenValue = eigenValue
    }

    /**
     * The eigenValue method which returns the eigenValue variable.
     *
     * @return eigenValue variable.
     */
    getEigenValue(): number{
        return this.eigenValue
    }
}