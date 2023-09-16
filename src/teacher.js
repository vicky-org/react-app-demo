//JS Tut:13 Modules
import { Person } from "./person"

//JS Tut:14 Named and Default exports

// Default -> import ... from '';
// Named -> import { ... } from '';

export function promote() {  
    console.log('promote fun in teacher')
}

export default class Teacher extends Person {
    constructor(name, degree) {
        super(name)
        this.degree = degree
    }

    teach() {
        console.log('teach')
    }
}