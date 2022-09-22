// 1. Sukurti 3 inputus vardas, pavarde, amzius ir mygtuka save
// 2. Susikurti objekta, kuriame bus name, lastname ir age
// 2. uzpildzius inputus,spausti save ir sudeti reiksmes i objekta
// ir nustatyti keys name,lastname,age i atitinkamas vertes is inputu
// 3. ir issaugoti i localStorage (nepamirstam JSON stringify)
// 4. Papildomai mygtukai reset, show all saved 

const person = {
    name: 'Johny',
    surname: 'Depp',
    age: 50,
}

console.log(person)
console.log(Object.keys(person))

// const myJSON = JSON.stringify(person)
// localStorage.setItem("test", myJSON)

const myName = document.getElementById('name')
const mySurname = document.getElementById('surname')
const myAge = document.getElementById('age')

document.querySelector('form').addEventListener('submit', myFunction)
function myFunction(event) {
    event.preventDefault()

    for (let key in person) {
        console.log(key, person[key])
    }
}
