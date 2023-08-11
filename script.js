// //local storage
// localStorage.setItem('name', 'bob')
// console.log(localStorage.getItem('name'))
// localStorage.removeItem('name')

// //session Storage
// sessionStorage.setItem('name', 'uday')
// console.log(sessionStorage.getItem('name'))
// sessionStorage.removeItem('name')

// document.cookie ='name=Kyle; expires=' + new Date(9999,3,1).toUTCString()

let myObj = {
    name: 'Domeic',
    age:49
}

localStorage.setItem('myObj',myObj)
let myObj_serialzed = JSON.stringify(myObj);
localStorage.setItem('myObj',myObj_serialzed);
let myObj_derialzed = JSON.parse(localStorage.getItem('myObj'));
console.log(myObj_derialzed)