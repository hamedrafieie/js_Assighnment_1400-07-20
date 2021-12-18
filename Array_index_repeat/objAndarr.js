function myFunc (myArr){
    let theObj = {
        min : myArr[0],
        max : myArr[0],
    }
    for (let i = 0 ; i < myArr.length ; i++){
        if (myArr[i] < theObj.min) {
            theObj.min = myArr[i]
        }
        if (myArr[i] > theObj.max){
            theObj.max = myArr[i]
        }
    }
    return theObj;
}
let myArr = [5,4,6,8,9,8,7,2,3]
console.log(myFunc(myArr))

