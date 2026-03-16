Video Lectures
============

[<img src=https://github.com/StarlangSoftware/Math/blob/master/video.jpg width="50%">](https://youtu.be/GhcoaVi0SMs)

For Developers
============
You can also see [Java](https://github.com/starlangsoftware/Math), [Python](https://github.com/starlangsoftware/Math-Py), [Php](https://github.com/starlangsoftware/Math-Php),
[Cython](https://github.com/starlangsoftware/Math-Cy), [Swift](https://github.com/starlangsoftware/Math-Swift), 
[C++](https://github.com/starlangsoftware/Math-CPP), [C](https://github.com/starlangsoftware/Math-C), or [C#](https://github.com/starlangsoftware/Math-CS) repository.

## Requirements

* [Node.js 14 or higher](#Node.js)
* [Git](#git)

### Node.js 

To check if you have a compatible version of Node.js installed, use the following command:

    node -v
    
You can find the latest version of Node.js [here](https://nodejs.org/en/download/).

### Git

Install the [latest version of Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

## Npm Install

	npm install nlptoolkit-math
	
## Download Code

In order to work on code, create a fork from GitHub page. 
Use Git for cloning the code to your local or below line for Ubuntu:

	git clone <your-fork-git-link>

A directory called util will be created. Or you can use below link for exploring the code:

	git clone https://github.com/starlangsoftware/math-js.git

## Open project with Webstorm IDE

Steps for opening the cloned project:

* Start IDE
* Select **File | Open** from main menu
* Choose `Math-Js` file
* Select open as project option
* Couple of seconds, dependencies will be downloaded. 

Detailed Description
============

+ [Vector](#vector)
+ [Matrix](#matrix)
+ [Distribution](#distribution)

## Vector

Bir vektör yaratmak için:

	Vector(valuesOrSize: any = undefined, initial: any = undefined, index: any = undefined)

Vektörler eklemek için

	addVector(v: Vector)

Çıkarmak için

	subtract(v: Vector)
	difference(v: Vector): Vector

İç çarpım için

	dotProduct(v: Vector): number
	dotProductWithSelf(): number

Bir vektörle cosinüs benzerliğini hesaplamak için

	cosineSimilarity(Vector v): number

Bir vektörle eleman eleman çarpmak için

	elementProduct(v: Vector): Vector

## Matrix

3'e 4'lük bir matris yaratmak için

	a = Matrix(3, 4)

Elemanları rasgele değerler alan bir matris yaratmak için

	Matrix(row: any, col: any = undefined, minValue: any = undefined, maxValue: any = undefined)

Örneğin, 

	a = Matrix(3, 4, 1, 5)
 
3'e 4'lük elemanları 1 ve 5 arasında değerler alan bir matris yaratır.

Matrisin i. satır, j. sütun elemanını getirmek için 

	getValue(rowNo: number, colNo: number): number

Örneğin,

	a.getValue(3, 4)

3. satır, 4. sütundaki değeri getirir.

Matrisin i. satır, j. sütunundaki elemanı değiştirmek için

	setValue(rowNo: number, colNo: number, value: number)

Örneğin,

	a.setValue(3, 4, 5)

3. satır, 4.sütundaki elemanın değerini 5 yapar.

Matrisleri toplamak için

	add(m: Matrix | number, v: any = undefined)

Çıkarmak için 

	subtract(m: Matrix)

Çarpmak için 

	multiply(m: Matrix): Matrix

Elaman eleman matrisleri çarpmak için

	elementProduct(m: Matrix | Vector): Matrix

Matrisin transpozunu almak için

	transpose(): Matrix

Matrisin simetrik olup olmadığı belirlemek için

	isSymmetric(): boolean

Determinantını almak için

	determinant(): number

Tersini almak için

	inverse()

Matrisin eigenvektör ve eigendeğerlerini bulmak için

	characteristics(): Array<Eigenvector>

Bu metodla bulunan eigenvektörler eigendeğerlerine göre büyükten küçüğe doğru 
sıralı olarak döndürülür.

## Distribution

Verilen bir değerin normal dağılımdaki olasılığını döndürmek için

	zNormal(z: number): number

Verilen bir olasılığın normal dağılımdaki değerini döndürmek için

	zInverse(p: number): number

Verilen bir değerin chi kare dağılımdaki olasılığını döndürmek için

	chiSquare(x: number, freedom: number): number

Verilen bir olasılığın chi kare dağılımdaki değerini döndürmek için

	chiSquareInverse(p: number, freedom: number)

Verilen bir değerin F dağılımdaki olasılığını döndürmek için

	fDistribution(F: number, freedom1: number, freedom2: number): number

Verilen bir olasılığın F dağılımdaki değerini döndürmek için

	fDistributionInverse(p: number, freedom1: number, freedom2: number): number

Verilen bir değerin t dağılımdaki olasılığını döndürmek için

	tDistribution(T: number, freedom: number): number

Verilen bir olasılığın t dağılımdaki değerini döndürmek için

	tDistributionInverse(p: number, freedom: number): number

For Contibutors
============

### package.json file

1. main and types are important when this package will be imported.
```
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
```
2. Dependencies should be maximum (not only direct but also indirect references should also be given), everything directly in the code should be given here.
```
  "dependencies": {
    "nlptoolkit-corpus": "^1.0.12",
    "nlptoolkit-dictionary": "^1.0.14",
    "nlptoolkit-morphologicalanalysis": "^1.0.19",
    "nlptoolkit-xmlparser": "^1.0.7"
  }
```

### tsconfig.json file

1. Compiler flags currently includes nodeNext for importing.
```
  "compilerOptions": {
    "outDir": "dist",
    "module": "nodeNext",
    "sourceMap": true,
    "noImplicitAny": true,
    "removeComments": false,
    "declaration": true,
  },
```
2. tests, node_modules and dist should be excluded.
```
  "exclude": [
    "tests",
    "node_modules",
    "dist"
  ]
```

### index.ts file

1. Should include all ts classes.
```
export * from "./CategoryType"
export * from "./InterlingualDependencyType"
export * from "./InterlingualRelation"
export * from "./Literal"
```

### Data files
1. Add data files to the project folder. Subprojects should include all data files of the parent projects.

### Javascript files

1. Classes should be defined as exported.
```
export class JCN extends ICSimilarity{
```
2. Do not forget to comment each function.
```
    /**
     * Computes JCN wordnet similarity metric between two synsets.
     * @param synSet1 First synset
     * @param synSet2 Second synset
     * @return JCN wordnet similarity metric between two synsets
     */
    computeSimilarity(synSet1: SynSet, synSet2: SynSet): number {
```
3. Function names should follow caml case.
```
    setSynSetId(synSetId: string){
```
4. Write getter and setter methods.
```
    getRelation(index: number): Relation{
    setName(name: string){
```
5. Use standard javascript test style.
```
describe('SimilarityPathTest', function() {
    describe('SimilarityPathTest', function() {
        it('testComputeSimilarity', function() {
            let turkish = new WordNet();
            let similarityPath = new SimilarityPath(turkish);
            assert.strictEqual(32.0, similarityPath.computeSimilarity(turkish.getSynSetWithId("TUR10-0656390"), turkish.getSynSetWithId("TUR10-0600460")));
            assert.strictEqual(13.0, similarityPath.computeSimilarity(turkish.getSynSetWithId("TUR10-0412120"), turkish.getSynSetWithId("TUR10-0755370")));
            assert.strictEqual(13.0, similarityPath.computeSimilarity(turkish.getSynSetWithId("TUR10-0195110"), turkish.getSynSetWithId("TUR10-0822980")));
        });
    });
});
```
6. Enumerated types should be declared with enum.
```
export enum CategoryType {
    MATHEMATICS, SPORT, MUSIC, SLANG, BOTANIC,
    PLURAL, MARINE, HISTORY, THEOLOGY, ZOOLOGY,
    METAPHOR, PSYCHOLOGY, ASTRONOMY, GEOGRAPHY, GRAMMAR,
    MILITARY, PHYSICS, PHILOSOPHY, MEDICAL, THEATER,
    ECONOMY, LAW, ANATOMY, GEOMETRY, BUSINESS,
    PEDAGOGY, TECHNOLOGY, LOGIC, LITERATURE, CINEMA,
    TELEVISION, ARCHITECTURE, TECHNICAL, SOCIOLOGY, BIOLOGY,
    CHEMISTRY, GEOLOGY, INFORMATICS, PHYSIOLOGY, METEOROLOGY,
    MINERALOGY
}
```
7. If there are multiple constructors for a class, define them as constructor1, constructor2, ..., then from the original constructor call these methods.
```
    constructor1(symbol: any){
    constructor2(symbol: any, multipleFile: MultipleFile) {
    constructor(symbol: any, multipleFile: MultipleFile = undefined) {
        if (multipleFile == undefined){
            this.constructor1(symbol);
        } else {
            this.constructor2(symbol, multipleFile);
        }
    }
```
8. Importing should be done via import method with referencing the node-modules.
```
import {Corpus} from "nlptoolkit-corpus/dist/Corpus";
import {Sentence} from "nlptoolkit-corpus/dist/Sentence";
```
9. Use xmlparser package for parsing xml files.
```
	var doc = new XmlDocument("test.xml")
	doc.parse()
	let root = doc.getFirstChild()
	let firstChild = root.getFirstChild()
```
