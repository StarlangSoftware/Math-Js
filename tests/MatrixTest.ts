import * as assert from "assert";
import {Vector} from "../dist/Vector";
import {Matrix} from "../dist/Matrix";
import {Random} from "nlptoolkit-util/dist/Random";

function nearlyEqual(value1: number, value2: number, difference: number) {
    assert.ok(Math.abs(value1 - value2) < difference)
}

describe('MatrixTest', function() {
    describe('MatrixTest', function() {
        let small = new Matrix(3, 3)
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                small.setValue(i, j, 1.0)
            }
        }
        let v = new Vector(3, 1.0)
        let large = new Matrix(1000, 1000)
        for (let i = 0; i < 1000; i++){
            for (let j = 0; j < 1000; j++){
                large.setValue(i, j, 1.0)
            }
        }
        let medium = new Matrix(100, 100)
        for (let i = 0; i < 100; i++){
            for (let j = 0; j < 100; j++){
                medium.setValue(i, j, 1.0)
            }
        }
        let V = new Vector(1000, 1.0)
        let vr = new Vector(100, 1.0)
        let random = new Matrix(100, 100, 1, 10, new Random(0))
        let originalSum = random.sumOfElements()
        let identity = new Matrix(100)
        it('testColumnWiseNormalize', function() {
            small.columnWiseNormalize();
            assert.strictEqual(3, small.sumOfElements())
            large.columnWiseNormalize()
            nearlyEqual(1000, large.sumOfElements(), 0.001);
            identity.columnWiseNormalize()
            assert.strictEqual(100, identity.sumOfElements())
        });
        it('testMultiplyWithConstant', function() {
            small.multiplyWithConstant(4)
            assert.strictEqual(36, small.sumOfElements())
            large.multiplyWithConstant(1.001)
            nearlyEqual(1001000, large.sumOfElements(), 0.001)
            random.multiplyWithConstant(3.6)
            nearlyEqual(originalSum * 3.6, random.sumOfElements(), 0.0001)
        });
        it('testDivideByConstant', function() {
            small.divideByConstant(4)
            assert.strictEqual(2.25, small.sumOfElements())
            large.divideByConstant(10)
            nearlyEqual(100000, large.sumOfElements(), 0.001)
            random.divideByConstant(3.6)
            nearlyEqual(originalSum / 3.6, random.sumOfElements(), 0.0001)
        });
        it('testAdd', function() {
            random.add(identity)
            nearlyEqual(originalSum + 100, random.sumOfElements(), 0.0001)
        });
        it('testAddVector', function() {
            large.add(4, V)
            assert.strictEqual(1001000, large.sumOfElements())
        });
        it('testSubtract', function() {
            random.subtract(identity)
            nearlyEqual(originalSum - 100, random.sumOfElements(), 0.0001)
        });
        it('testMultiplyWithVectorFromLeft', function() {
            let result = small.multiplyWithVectorFromLeft(v)
            assert.strictEqual(9, result.sumOfElements())
            result = large.multiplyWithVectorFromLeft(V)
            assert.strictEqual(1000000, result.sumOfElements())
            result = random.multiplyWithVectorFromLeft(vr);
            nearlyEqual(originalSum, result.sumOfElements(), 0.0001)
        });
        it('testMultiplyWithVectorFromRight', function() {
            let result = small.multiplyWithVectorFromRight(v)
            assert.strictEqual(9, result.sumOfElements())
            result = large.multiplyWithVectorFromRight(V)
            assert.strictEqual(1000000, result.sumOfElements())
            result = random.multiplyWithVectorFromRight(vr)
            nearlyEqual(originalSum, result.sumOfElements(), 0.0001)
        });
        it('testColumnSum', function() {
            assert.strictEqual(3, small.columnSum(Math.floor(Math.random() * 3)))
            assert.strictEqual(1000, large.columnSum( Math.floor(Math.random() * 1000)))
            assert.strictEqual(1, identity.columnSum(Math.floor(Math.random() * 100)))
        });
        it('testSumOfRows', function() {
            assert.strictEqual(9, small.sumOfRows().sumOfElements())
            assert.strictEqual(1000000, large.sumOfRows().sumOfElements())
            assert.strictEqual(100, identity.sumOfRows().sumOfElements())
            nearlyEqual(originalSum, random.sumOfRows().sumOfElements(), 0.001)
        });
        it('testRowSum', function() {
            assert.strictEqual(3, small.rowSum(Math.floor(Math.random() * 3)))
            assert.strictEqual(1000, large.rowSum( Math.floor(Math.random() * 1000)))
            assert.strictEqual(1, identity.rowSum(Math.floor(Math.random() * 100)))
        });
        it('testMultiply', function() {
            let result = small.multiply(small)
            assert.strictEqual(27, result.sumOfElements())
            result = random.multiply(identity)
            assert.strictEqual(originalSum, result.sumOfElements())
            result = identity.multiply(random)
            assert.strictEqual(originalSum, result.sumOfElements())
        });
        it('testElementProduct', function() {
            let result = small.elementProduct(small)
            assert.strictEqual(9, result.sumOfElements())
            result = large.elementProduct(large)
            assert.strictEqual(1000000, result.sumOfElements())
            result = random.elementProduct(identity)
            assert.strictEqual(result.trace(), result.sumOfElements())
        });
        it('testSumOfElements', function() {
            assert.strictEqual(9, small.sumOfElements())
            assert.strictEqual(1000000, large.sumOfElements())
            assert.strictEqual(100, identity.sumOfElements())
            assert.strictEqual(originalSum, random.sumOfElements())
        });
        it('testTrace', function() {
            assert.strictEqual(3, small.trace())
            assert.strictEqual(1000, large.trace())
            assert.strictEqual(100, identity.trace())
        });
        it('testTranspose', function() {
            assert.strictEqual(9, small.transpose().sumOfElements())
            assert.strictEqual(1000000, large.transpose().sumOfElements())
            assert.strictEqual(100, identity.transpose().sumOfElements())
            nearlyEqual(originalSum, random.transpose().sumOfElements(), 0.001)
        });
        it('testIsSymmetric', function() {
            assert.ok(small.isSymmetric())
            assert.ok(large.isSymmetric())
            assert.ok(identity.isSymmetric())
            assert.ok(!random.isSymmetric())
        });
        it('testDeterminant', function() {
            assert.strictEqual(0, small.determinant())
            assert.strictEqual(0, large.determinant())
            assert.strictEqual(1, identity.determinant())
        });
        it('testInverse', function() {
            identity.inverse()
            assert.strictEqual(100, identity.sumOfElements())
            random.inverse()
            random.inverse()
            nearlyEqual(originalSum, random.sumOfElements(), 0.00001)
        });
        it('testCharacteristics', function() {
            let vectors = small.characteristics()
            assert.strictEqual(2, vectors.length)
            vectors = identity.characteristics()
            assert.strictEqual(100, vectors.length)
            vectors = medium.characteristics()
            assert.strictEqual(46, vectors.length)
        });
    });
});
