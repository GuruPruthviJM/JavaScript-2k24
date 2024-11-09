const arr = [1,2,3,4]

let intial_val=0
// 0+1+2+3+4
const sumWithIntial = arr.reduce((sum, val)=>{
    console.log(`acc: ${sum} and curent value: ${val}`);
    return val+sum
}, intial_val /*0*/)                 

console.log(sumWithIntial);


const myTotal = arr.reduce((acc, curr) => (acc+curr),5)
console.log(myTotal);


const shopingCart = [
    {
        itemName: "JS course",
        price: 2999
    },
    {
        itemName: "Java course",
        price: 999
    },
    {
        itemName: "Python course",
        price: 5999
    },
    {
        itemName: "Data Science course",
        price: 12999
    },
]

const totalPrice = shopingCart.reduce((acc, item)=>acc+item.price,0)
console.log(totalPrice);
