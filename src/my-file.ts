let numbers : number[] = [1,2,3,4,5,6,7,8,9];
let doubledNumbers: number[] = numbers.map(n => n * 2);
console.log(doubledNumbers);

let strings : string[] = ['number','string','null','anotherLongWord','one','two','fifteen'];
console.log(strings.filter(n => n.length > 5));

console.log(numbers.reduce((n1, n2)=> n1 + n2));
console.log(numbers.some(n => n > 10));

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