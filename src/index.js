// var -> function
// let -> block, use it for reassigning
// const -> block, constant
import { Person } from "./person"
import Teacher, { promote } from "./teacher"

//JS Tut:6 Arrow function
const square = number => number * number;
console.log(square(5));

const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 3, isActive: false},
]

const activeJobs1 = jobs.filter(function(job) { return job.isActive; });
const activeJobs2 = jobs.filter(job => { return job.isActive });
const activeJobs = jobs.filter(job => job.isActive);
console.log(activeJobs)

//JS Tut:7 Arrow functions and this keyword
const person = {
    name: "John",
    walk() {
        //var self = this
        setTimeout(() => {
            console.log('this', this)
        }, 1000);
    }
}

person.walk()

//JS Tut:8 Arrays.Map
const colors = ['red', 'green', 'blue']
//const items = colors.map(color => '<li>' + color + '</li>')
const items = colors.map(color => `<li>${color}</li>`) // Template for rendering
console.log(colors)
console.log(items)


//JS Tut:9 Object Destructing
const address = {
    street: '2ndSt',
    city: 'chennai',
    country: 'india'
}

// const street = address.street
// const city = address.city
// const country = address.country

const {street, city, country} = address
console.log(`street: ${street}, city: ${city}, country: ${country}`)
const {street: st} = address
console.log(`street2: ${st}`)


//JS Tut:10 spread operator
const first = [1, 2, 3]
const second = [4, 5, 6]

const combined = first.concat(second);
console.log(combined)
//... spread operator spreads the first array in combined array
const combined2 = [...first, 'a', ...second, 'b']
console.log(combined2)

//clone a array
const clone = [...first]
console.log(first)
console.log(clone)

const firstObj = {
    name: 'Mosh'
}
const secondObj = {
    job: 'Instructor'
}

const combinedObj = {...firstObj, ...secondObj, location: 'chennai'}
console.log(combinedObj)

const cloneObj = {...combinedObj}
console.log('cloned: ', cloneObj)

// //JS Tut:11 class
// class Person {
//     constructor(name) {
//         this.name = name
//     }

//     walk() {
//         console.log('walk')
//     }
// }


const person2 = new Person('vickyy')
console.log('persons: ', person2.name)
person2.walk()

//JS Tut:12 Inheritance
// class Teacher extends Person {
//     constructor(name, degree) {
//         super(name)
//         this.degree = degree
//     }

//     teach() {
//         console.log('teach')
//     }
// }

const teacher = new Teacher('vicky-teacher', 'BTech')
console.log('teacher: ', teacher.name, teacher.degree)
teacher.teach()

// call as part of JS Tut:14
promote()





