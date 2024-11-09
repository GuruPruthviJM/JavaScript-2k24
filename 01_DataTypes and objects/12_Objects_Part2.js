// SingleTon

const tinderUser = new Object()

tinderUser.id = "123abc",
tinderUser.name = "Guru"
tinderUser.isLoggedIn = false
                 

console.log(tinderUser);

// Nested Objects

const user = {
    email: "gurupruthvijm@gmail.com",
    name: {
        firstName: "Guru",
        secoundName: "Pruthvi"
    }
}

console.log(user.name.firstName);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

console.log({obj1, obj2});
console.log({...obj1, ...obj2});
console.log(Object.assign({}, obj1, obj2));
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // It will convert to list format

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "JS in Hindi",
    price: "999",
    courseInstructor: "Guru"
}

// course.courseInstructor
const {courseInstructor: instructor} = course
console.log(instructor);

// API's
// {
//     "name": "Guru",
//     "courseName": "js in hindi",
//     "price": "free"
// }

