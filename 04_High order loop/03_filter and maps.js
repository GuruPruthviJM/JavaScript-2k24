const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter((num)=>
    num>5 // If we use {} to enclose then we need to use return keyword
)

console.log(newNums);

const newNum=[];

myNums.forEach(element => {
    if(element>8)
        newNum.push(element)
});

console.log(newNum);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userBooks = books.filter((bk)=> bk.genre==="History")
console.log(userBooks);

const publishedAfter2000 = books.filter((bk)=>bk.publish>=2000)
console.log(publishedAfter2000);

const publishedAfter2000AndHistry = books.filter((bk)=>(
    bk.publish>=1995 && bk.genre==="History"
))

console.log(publishedAfter2000AndHistry);

const addedNums = myNums.map((num)=>num+10)
console.log(addedNums);

// Using Two or more maps
const myNumber = myNums
                    .map((num)=>num*10)
                    .map((num)=>num+5)
                    .filter((num)=>num>60)
console.log(myNumber);
