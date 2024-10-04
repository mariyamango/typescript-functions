let a : number[] = [1,2,3,4,5,6,7,8,9];
let aDoubled: number[] = a.map(n => n * 2);
console.log(aDoubled);

let b : string[] = ['hfkjshjh','fdf','ijwhkjw','kjhlhljq','hh','jjk'];
console.log(b.filter(n => n.length > 5));

console.log(a.reduce((n1,n2)=> n1 + n2));

console.log(a.some(n => n > 10));