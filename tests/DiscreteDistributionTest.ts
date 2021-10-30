import * as assert from "assert";
import {DiscreteDistribution} from "../dist/DiscreteDistribution";

describe('DiscreteDistributionTest', function() {
    describe('DiscreteDistributionTest', function() {
        let smallDistribution = new DiscreteDistribution()
        smallDistribution.addItem("item1")
        smallDistribution.addItem("item2")
        smallDistribution.addItem("item3")
        smallDistribution.addItem("item1")
        smallDistribution.addItem("item2")
        smallDistribution.addItem("item1")
        it('testAddItem1', function() {
            assert.strictEqual(3, smallDistribution.getCount("item1"))
            assert.strictEqual(2, smallDistribution.getCount("item2"))
            assert.strictEqual(1, smallDistribution.getCount("item3"))
        });
        it('testAddItem2', function() {
            let discreteDistribution = new DiscreteDistribution()
            for (let i = 0; i < 1000; i++){
                discreteDistribution.addItem("" + Math.floor(Math.random() * 1000))
            }
            let count = 0
            for (let i = 0; i < 1000; i++){
                if (discreteDistribution.containsItem("" + i)){
                    count += discreteDistribution.getCount("" + i)
                }
            }
            assert.strictEqual(1000, count)
        });
        it('testAddItem3', function() {
            let discreteDistribution = new DiscreteDistribution()
            for (let i = 0; i < 1000; i++){
                discreteDistribution.addItem("" + Math.floor(Math.random() * 1000))
            }
            for (let i = 0; i < 1000000; i++){
                discreteDistribution.addItem("" + Math.floor(Math.random() * 1000000));
            }
            assert.strictEqual(Math.floor(discreteDistribution.size / 1000.0), 632);
        });
        it('testRemoveItem', function() {
            smallDistribution.removeItem("item1")
            smallDistribution.removeItem("item2")
            smallDistribution.removeItem("item3")
            assert.strictEqual(2, smallDistribution.getCount("item1"))
            assert.strictEqual(1, smallDistribution.getCount("item2"))
            smallDistribution.addItem("item1");
            smallDistribution.addItem("item2");
            smallDistribution.addItem("item3");
        });
        it('testAddDistribution1', function() {
            let discreteDistribution = new DiscreteDistribution()
            discreteDistribution.addItem("item4")
            discreteDistribution.addItem("item5")
            discreteDistribution.addItem("item5")
            discreteDistribution.addItem("item2")
            smallDistribution.addDistribution(discreteDistribution);
            assert.strictEqual(3, smallDistribution.getCount("item1"))
            assert.strictEqual(3, smallDistribution.getCount("item2"))
            assert.strictEqual(1, smallDistribution.getCount("item3"))
            assert.strictEqual(1, smallDistribution.getCount("item4"))
            assert.strictEqual(2, smallDistribution.getCount("item5"))
            smallDistribution.removeDistribution(discreteDistribution)
        });
        it('testAddDistribution2', function() {
            let discreteDistribution1 = new DiscreteDistribution()
            for (let i = 0; i < 1000; i++){
                discreteDistribution1.addItem("" + i)
            }
            let discreteDistribution2 = new DiscreteDistribution()
            for (let i = 500; i < 1000; i++){
                discreteDistribution2.addItem("" + (1000 + i))
            }
            discreteDistribution1.addDistribution(discreteDistribution2)
            assert.strictEqual(1500, discreteDistribution1.size)
        });
        it('testRemoveDistribution', function() {
            let discreteDistribution = new DiscreteDistribution()
            discreteDistribution.addItem("item1")
            discreteDistribution.addItem("item1")
            discreteDistribution.addItem("item2")
            smallDistribution.removeDistribution(discreteDistribution)
            assert.strictEqual(1, smallDistribution.getCount("item1"))
            assert.strictEqual(1, smallDistribution.getCount("item2"))
            assert.strictEqual(1, smallDistribution.getCount("item3"))
            smallDistribution.addDistribution(discreteDistribution)
        });
        it('testGetSum1', function() {
            assert.strictEqual(6, smallDistribution.getSum());
        });
        it('testGetSum2', function() {
            let discreteDistribution = new DiscreteDistribution()
            for (let i = 0; i < 1000; i++){
                discreteDistribution.addItem("" + Math.floor(Math.random() * 1000))
            }
            assert.strictEqual(1000, discreteDistribution.getSum())
        });
        it('testGetIndex', function() {
            assert.strictEqual(0, smallDistribution.getIndex("item1"))
            assert.strictEqual(1, smallDistribution.getIndex("item2"))
            assert.strictEqual(2, smallDistribution.getIndex("item3"))
        });
        it('testContainsItem', function() {
            assert.ok(smallDistribution.containsItem("item1"))
            assert.ok(!smallDistribution.containsItem("item4"))
        });
        it('testGetItem', function() {
            assert.strictEqual("item1", smallDistribution.getItem(0))
            assert.strictEqual("item2", smallDistribution.getItem(1))
            assert.strictEqual("item3", smallDistribution.getItem(2))
        });
        it('testGetValue', function() {
            assert.strictEqual(3, smallDistribution.getValue(0))
            assert.strictEqual(2, smallDistribution.getValue(1))
            assert.strictEqual(1, smallDistribution.getValue(2))
        });
        it('testGetCount', function() {
            assert.strictEqual(3, smallDistribution.getCount("item1"))
            assert.strictEqual(2, smallDistribution.getCount("item2"))
            assert.strictEqual(1, smallDistribution.getCount("item3"))
        });
        it('testGetMaxItem1', function() {
            assert.strictEqual("item1", smallDistribution.getMaxItem())
        });
        it('testGetMaxItem2', function() {
            let include = new Array<string>()
            include.push("item2")
            include.push("item3")
            assert.strictEqual("item2", smallDistribution.getMaxItem(include))
        });
        it('testGetProbability1', function() {
            let discreteDistribution = new DiscreteDistribution()
            for (let i = 0; i < 1000; i++){
                discreteDistribution.addItem("" + i)
            }
            assert.strictEqual(0.001, discreteDistribution.getProbability("" + Math.floor(Math.random() * 1000)))
        });
        it('testGetProbability2', function() {
            assert.strictEqual(0.5, smallDistribution.getProbability("item1"))
            assert.strictEqual(1 / 3, smallDistribution.getProbability("item2"))
            assert.strictEqual(1 / 6, smallDistribution.getProbability("item3"))
        });
        it('getProbabilityLaplaceSmoothing1', function() {
            let discreteDistribution = new DiscreteDistribution()
            for (let i = 0; i < 1000; i++){
                discreteDistribution.addItem("" + i)
            }
            assert.strictEqual(2 / 2001, discreteDistribution.getProbabilityLaplaceSmoothing("" + Math.floor(Math.random() * 1000)))
            assert.strictEqual(1 / 2001, discreteDistribution.getProbabilityLaplaceSmoothing("item0"))
        });
        it('getProbabilityLaplaceSmoothing2', function() {
            assert.strictEqual(0.4, smallDistribution.getProbabilityLaplaceSmoothing("item1"))
            assert.strictEqual(0.3, smallDistribution.getProbabilityLaplaceSmoothing("item2"))
            assert.strictEqual(0.2, smallDistribution.getProbabilityLaplaceSmoothing("item3"))
            assert.strictEqual(0.1, smallDistribution.getProbabilityLaplaceSmoothing("item4"))
        });
        it('testEntropy', function() {
            assert.strictEqual(14591, Math.floor(10000 * smallDistribution.entropy()))
        });
    });
});
