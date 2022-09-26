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

document.querySelector('form').addEventListener('submit', submitFunction)
function submitFunction(event) {
    event.preventDefault()

    const myName = document.getElementById('name').value
    const mySurname = document.getElementById('surname').value
    const myAge = document.getElementById('age').value
    const object = {myName, mySurname, myAge}
    console.log(object)
    console.log(typeof object)

    myJSON = JSON.stringify(object)
    console.log(myJSON)
    localStorage.setItem('testJSON', myJSON)
}

document.querySelector('form').addEventListener('reset', resetFunction)
function resetFunction(event) {
    event.preventDefault()
    localStorage.removeItem('testJSON')
    console.log('resetttt')
}

document.getElementById('showAll').addEventListener('click', showAllFunction)
function showAllFunction(event) {
    event.preventDefault()
    console.log('show all')
    const info = localStorage.getItem('testJSON')
    const newObject = JSON.parse(info)
    console.log(newObject)
    document.getElementById('output').innerText += newObject.myName + ' ' + newObject.mySurname + ' ' + newObject.myAge
}