const name = "Guru Pruthvi J M"
const repoCount = 50

// console.log(name+repoCount+" Value");


console.log(`Hello, My name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('Gur-u')
console.log(gameName.toLowerCase());
console.log(gameName.length);
console.log(gameName.indexOf('G'));
console.log(gameName.split('-'));
console.log(gameName.replaceAll('u', 't'));
console.log(gameName.substring(0, 3));

const anotherString = gameName.slice(-4,3)

console.log(anotherString);
console.log(anotherString.substring(-2, 1));
console.log(gameName.includes('ur'))