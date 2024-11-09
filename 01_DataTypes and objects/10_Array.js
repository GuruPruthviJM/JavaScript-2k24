const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr.at(5));

const myHeros = ['shakthiman', 'naagraj']
const myArr2 =  new Array(1, 2, 3, 4)

myArr.push(6)
console.log(myArr);
myArr.pop();
console.log(myArr);
myArr.unshift(9)
console.log(myArr);
myArr.shift()
console.log(myArr);
console.log(myArr.includes(9));

const newArr = myArr.join(' ')
console.log(newArr);

// Slice, Splice

console.log("A ", myArr);
const myNewArr1 = myArr.slice(1, 3)
console.log("B ", myArr);
console.log(myNewArr1);

const myNewArr2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myNewArr2);

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
console.log(marvel_heros);
const answer = marvel_heros.concat(dc_heros)
console.log(answer);

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

const another_Array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_Array.flat(Infinity) // default depth 1
console.log(real_another_array);

console.log(Array.isArray("Guru Pruthvi"));
console.log(Array.isArray(real_another_array));
console.log(Array.from('Guru '));
console.log(Array.from({name: "Hiteh"}));

let s1=100
let s2=200
let s3=300

console.log(Array.of(s1, s2, s3));
