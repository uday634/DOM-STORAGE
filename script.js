//local storage
localStorage.setItem('name', 'bob')
console.log(localStorage.getItem('name'))
localStorage.removeItem('name')

//session Storage
sessionStorage.setItem('name', 'uday')
console.log(sessionStorage.getItem('name'))
sessionStorage.removeItem('name')

document.cookie ='name=Kyle; expires=' + new Date(9999,3,1).toUTCString()