const array = [1,2,3,4,5] ;
const nextArrayBad = array;
nextArrayBad[0] = 100;
console.log(array === nextArrayBad)

const nextArrayGood = [...array]; //내부 배열 복사
console.log(array === nextArrayGood); //내부를 모두 체크하는가? 그냥 다른 배열 false
nextArrayGood[0] = 100;
console.log(array === nextArrayGood); //다른배열이기때문에 false
console.log(nextArrayGood) //const arr 라도 내부 변수를 변경하기가 가능하다. 

const object = {
    foo:'bar',
    value : 1
}

const nextObjectBad = object; // 주소 공유
nextObjectBad.value = nextObjectBad.value + 1;
console.log(object === nextObjectBad);
console.log(object , nextObjectBad);

const nextObjectGood = {
    ...object,
    value:object.value +1
}

console.log(object === nextObjectGood);
console.log(object , nextObjectGood);
