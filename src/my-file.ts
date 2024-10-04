let a : number[] = [1,2,3,4,5,6,7,8,9];
let aDoubled: number[] = a.map(n => n * 2);
console.log(aDoubled);

let b : string[] = ['number','string','null','anotherLongWord','one','two','fifteen'];
console.log(b.filter(n => n.length > 5));

console.log(a.reduce((n1,n2)=> n1 + n2));

console.log(a.some(n => n > 10));

// Bonus task

const list = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];
console.log(
    list
        .sort((a,b) => b-a)
        .map(n => n * n)
        .slice(4,-2)
        .filter(n => n % 4 !== 0)
        .reduce((n1,n2)=> n1 + n2)
);