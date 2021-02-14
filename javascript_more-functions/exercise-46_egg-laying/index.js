// define an object called hen with the following 3 properties
// 1) name set to Helen
// 2) eggCount set to 0
// 3) layAnEgg is a method which increments eggCount by 1 & returns the string EGG
// be sure to use this

const hen = {
  name: 'Helen',
  eggCount: 0,
  layAnEgg() {
    this.eggCount++;
    return 'EGG';
  }
}
