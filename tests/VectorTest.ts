import * as assert from "assert";
import {Vector} from "../dist/Vector";

function nearlyEqual(value1: number, value2: number, difference: number) {
    assert.ok(Math.abs(value1 - value2) < difference)
}

describe('VectorTest', function() {
    describe('VectorTest', function() {
        let data1 = [2, 3, 4, 5, 6]
        let data2 = [8, 7, 6, 5, 4]
        let smallVector1 = new Vector(data1)
        let smallVector2 = new Vector(data2);
        let largeData1 = []
        for (let i = 1; i <= 1000; i++){
            largeData1.push(i)
        }
        let largeVector1 = new Vector(largeData1)
        let largeData2 = []
        for (let i = 1; i <= 1000; i++){
            largeData2.push(1000 - i + 1)
        }
        let largeVector2 = new Vector(largeData2)
        it('testBiased', function() {
            let biased = smallVector1.biased()
            assert.strictEqual(1, biased.getValue(0));
            assert.strictEqual(smallVector1.size() + 1, biased.size());
        });
        it('testSumOfElementsSmall', function() {
            assert.strictEqual(20, smallVector1.sumOfElements())
            assert.strictEqual(30, smallVector2.sumOfElements())
        });
        it('testSumOfElementsLarge', function() {
            assert.strictEqual(500500, largeVector1.sumOfElements())
            assert.strictEqual(500500, largeVector2.sumOfElements())
        });
        it('testMaxIndex', function() {
            assert.strictEqual(4, smallVector1.maxIndex())
            assert.strictEqual(0, smallVector2.maxIndex())
        });
        it('testSigmoid', function() {
            let smallVector3 = new Vector(data1)
            smallVector3.sigmoid()
            nearlyEqual(0.8807971, smallVector3.getValue(0), 0.000001)
            nearlyEqual(0.9975274, smallVector3.getValue(4), 0.000001)
        });
        it('testSkipVectorSmall', function() {
            let smallVector3 = smallVector1.skipVector(2, 0)
            assert.strictEqual(2, smallVector3.getValue(0))
            assert.strictEqual(6, smallVector3.getValue(2))
            smallVector3 = smallVector1.skipVector(3, 1)
            assert.strictEqual(3, smallVector3.getValue(0))
            assert.strictEqual(6, smallVector3.getValue(1))
        });
        it('testSkipVectorLarge', function() {
            let largeVector3 = largeVector1.skipVector(2, 0)
            assert.strictEqual(250000, largeVector3.sumOfElements())
            largeVector3 = largeVector1.skipVector(5, 3)
            assert.strictEqual(100300, largeVector3.sumOfElements())
        });
        it('testVectorAddSmall', function() {
            smallVector1.addVector(smallVector2)
            assert.strictEqual(50, smallVector1.sumOfElements())
        });
        it('testVectorAddLarge', function() {
            largeVector1.addVector(largeVector2)
            assert.strictEqual(1001000, largeVector1.sumOfElements())
        });
        it('testSubtractSmall', function() {
            smallVector1.subtract(smallVector2)
            assert.strictEqual(-10, smallVector1.sumOfElements())
        });
        it('testSubtractLarge', function() {
            largeVector1.subtract(largeVector2)
            assert.strictEqual(0, largeVector1.sumOfElements())
        });
        it('testDifferenceSmall', function() {
            let smallVector3 = smallVector1.difference(smallVector2)
            assert.strictEqual(-10, smallVector3.sumOfElements())
        });
        it('testDifferenceLarge', function() {
            let largeVector3 = largeVector1.difference(largeVector2)
            assert.strictEqual(0, largeVector3.sumOfElements())
        });
        it('testDotProductWithVectorSmall', function() {
            let dotProduct = smallVector1.dotProduct(smallVector2)
            assert.strictEqual(110, dotProduct)
        });
        it('testDotProductWithVectorLarge', function() {
            let dotProduct = largeVector1.dotProduct(largeVector2)
            assert.strictEqual(167167000, dotProduct)
        });
        it('testDotProductWithItselfSmall', function() {
            let dotProduct = smallVector1.dotProductWithItself()
            assert.strictEqual(90, dotProduct)
        });
        it('testDotProductWithItselfLarge', function() {
            let dotProduct = largeVector1.dotProductWithItself()
            assert.strictEqual(333833500, dotProduct)
        });
        it('testElementProductSmall', function() {
            let smallVector3 = smallVector1.elementProduct(smallVector2)
            assert.strictEqual(110, smallVector3.sumOfElements())
        });
        it('testElementProductLarge', function() {
            let largeVector3 = largeVector1.elementProduct(largeVector2)
            assert.strictEqual(167167000, largeVector3.sumOfElements())
        });
        it('testDivide', function() {
            smallVector1.divide(10.0)
            assert.strictEqual(2, smallVector1.sumOfElements())
        });
        it('testMultiply', function() {
            smallVector1.multiplyWithValue(10.0)
            assert.strictEqual(200, smallVector1.sumOfElements())
        });
        it('testProduct', function() {
            let smallVector3 = smallVector1.product(7.0)
            assert.strictEqual(140, smallVector3.sumOfElements())
        });
        it('testL1NormalizeSmall', function() {
            smallVector1.l1Normalize()
            assert.strictEqual(1.0, smallVector1.sumOfElements())
        });
        it('testL1NormalizeLarge', function() {
            largeVector1.l1Normalize()
            assert.strictEqual(1.0, largeVector1.sumOfElements())
        });
        it('testL2NormSmall', function() {
            let norm = smallVector1.l2Norm()
            assert.strictEqual(norm, Math.sqrt(90))
        });
        it('testL2NormLarge', function() {
            let norm = largeVector1.l2Norm()
            assert.strictEqual(norm, Math.sqrt(333833500))
        });
        it('cosineSimilaritySmall', function() {
            let similarity = smallVector1.cosineSimilarity(smallVector2)
            nearlyEqual(0.8411910, similarity, 0.000001)
        });
        it('cosineSimilarityLarge', function() {
            let similarity = largeVector1.cosineSimilarity(largeVector2)
            nearlyEqual(0.5007497, similarity, 0.000001)
        });
        it('testElementAdd', function() {
            smallVector1.add(7);
            assert.strictEqual(7, smallVector1.getValue(5))
            assert.strictEqual(6, smallVector1.size())
        });
        it('testInsert', function() {
            smallVector1.insert(3, 6)
            assert.strictEqual(6, smallVector1.getValue(3))
            assert.strictEqual(6, smallVector1.size())
        });
        it('testRemove', function() {
            smallVector1.remove(2)
            assert.strictEqual(5, smallVector1.getValue(2))
            assert.strictEqual(4, smallVector1.size())
        });
    });
});
