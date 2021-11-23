let indexObj = {};
let myArr = [1,2,3,1,2,3,4,5,5,5,5,5,5,'karim','karim','karim','karim','karim','mammad','mammad','mammad','mammad','mammad','mammad','mammad','mammad','mammad'];

let counterFunc = keys => {
    indexObj[keys] = ++indexObj[keys] || 1;
}

myArr.forEach(counterFunc);
console.log(indexObj)
