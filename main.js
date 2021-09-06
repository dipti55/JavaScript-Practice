const user = {
    firstName: "Harry",
    lastName: "Potter",
    age: 22,

    // Include Arrays inside of Object
    hobbies: ['Music', 'Getting in trouble', 'Wandering'],
    role: 'Student',
    isCool: true,

    // Include Objects withing Object
    address: {
        street: '5th Avenue',
        city: 'London',
        Country: 'United Kingdom'
    }
}
// console.log(user);

// console.log(`Hi, my name is ${user.firstName} ${user.lastName}. I am ${user.age} years old. I am a ${user.role}. My hobbies are ${user.hobbies[0]}, ${user.hobbies[1]}. I live in ${user.address.city}`);

// Arrray of an Object

const employees = [
    {
        emp_id: 1001,
        degignation: 'SDE',
        company: 'Wipro',
        yearsOfExp: 3,
        Skills: ['c++', 'java'],
        location: {
            officeLocation: 'Mumbai',
            pin: 123456
        }
    },
    {
        emp_id: 1023,
        degignation: 'Tester',
        company: 'Facebook',
        yearsOfExp: 4,
        Skills: ['Mocha','JUnit'],
        location: {
            officeLocation: 'Hydrabad',
            pin: 125656

        }
    },
    {
        emp_id: 1053,
        degignation: 'SME',
        company: 'Apple',
        yearsOfExp: 6,
        Skills: ['JS', 'React', 'Angular'],
        location: {
            officeLocation: 'Banglore',
            pin: 127856
        }
    },
    {
        emp_id: 1065,
        degignation: 'Content Designer',
        company: 'Netflix',
        yearsOfExp: 2,
        Skills: ['wordpress', 'Photoshop'],
        location: {
            officeLocation: 'Delhi',
            pin: 145456
        }
    }
]

// console.log(employees);

// Acceing the ArrayOfObject 
// 1. I want the emp_id of each employee

console.log(`${employees[0].emp_id} ${employees[1].emp_id} ${employees[2].emp_id} ${employees[3].emp_id}`);

// 2. One skill from each employee
console.log(`${employees[0].Skills[0]}, ${employees[1].Skills[0]}, ${employees[2].Skills[0]}, ${employees[3].Skills[0]}`);

// 3. Office location of all employees
console.log(`${employees[0].location.officeLocation}, ${employees[1].location.officeLocation}, ${employees[2].location.officeLocation}, ${employees[3].location.officeLocation}`);