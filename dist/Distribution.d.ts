export declare class Distribution {
    private static Z_MAX;
    private static Z_EPSILON;
    private static CHI_EPSILON;
    private static CHI_MAX;
    private static LOG_SQRT_PI;
    private static I_SQRT_PI;
    private static BIGX;
    private static I_PI;
    private static F_EPSILON;
    private static F_MAX;
    /**
     * The ex method takes a double x as an input, if x is less than -BIGX it returns 0, otherwise it returns Euler's number
     * <i>e</i> raised to the power of x.
     *
     * @param x double input.
     * @return 0 if input is less than -BIGX, Euler's number <i>e</i> raised to the power of x otherwise.
     */
    private static ex;
    /**
     * The beta method takes a double {@link Array} x as an input. It loops through x and accumulates
     * the value of gammaLn(x), also it sums up the items of x and returns (accumulated result - gammaLn of this summation).
     *
     * @param x double {@link Array} input.
     * @return gammaLn(sum).
     */
    static beta(x: Array<number>): number;
    /**
     * The gammaLn method takes a double x as an input and returns the logarithmic result of the gamma distribution at point x.
     *
     * @param x double input.
     * @return the logarithmic result of the gamma distribution at point x.
     */
    static gammaLn(x: number): number;
    /**
     * The zNormal method returns the probability of the given input for z normal distribution.
     *
     * @param z double input.
     * @return the probability of the given input.
     */
    static zNormal(z: number): number;
    /**
     * The zInverse method returns the Z-Inverse of given probability value.
     *
     * @param p double probability.
     * @return the Z-Inverse of given probability.
     */
    static zInverse(p: number): number;
    /**
     * The chiSquare method returns the probability of the given input for chi square distribution.
     *
     * @param x       double input.
     * @param freedom integer input for degrees of freedom.
     * @return the probability of the given input.
     */
    static chiSquare(x: number, freedom: number): number;
    /**
     * The chiSquareInverse method returns the Chi Square-Inverse of given probability value with given degree of freedom.
     *
     * @param p       double probability.
     * @param freedom integer input for degrees of freedom.
     * @return the chiSquare-Inverse of given probability.
     */
    static chiSquareInverse(p: number, freedom: number): number;
    /**
     * The fDistribution method returns the probability of the given input for F distribution.
     *
     * @param F        double input.
     * @param freedom1 integer input for degrees of freedom.
     * @param freedom2 integer input for degrees of freedom.
     * @return the probability of the given input.
     */
    static fDistribution(F: number, freedom1: number, freedom2: number): number;
    /**
     * The fDistributionInverse method returns the F-Distribution Inverse of given probability value.
     *
     * @param p        double probability.
     * @param freedom1 integer input for degrees of freedom.
     * @param freedom2 integer input for degrees of freedom.
     * @return the F-Distribution Inverse of given probability.
     */
    static fDistributionInverse(p: number, freedom1: number, freedom2: number): number;
    /**
     * The tDistribution method returns the probability of the given input for t distribution.
     *
     * @param T       double input.
     * @param freedom integer input for degrees of freedom.
     * @return the probability of the given input.
     */
    static tDistribution(T: number, freedom: number): number;
    /**
     * The tDistributionInverse method returns the T-Distribution Inverse of given probability value.
     *
     * @param p       double probability.
     * @param freedom integer input for degrees of freedom.
     * @return the T-Distribution Inverse of given probability.
     */
    static tDistributionInverse(p: number, freedom: number): number;
}
