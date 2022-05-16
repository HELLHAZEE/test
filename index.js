
const myName = 'Evgeniy'
 
console.log(myName)

 const objectA = {
     a: 10,
     b: true
 }

 const copyOfA = objectA

 copyOfA.c = 'abc'

 
 const objectB = {
    a: 70,
    b: false
}

const copyOfB = objectB

copyOfB.c = 'qwerty'

 console.log(objectA)

 console.log(copyOfA)

 console.log(objectB)

 console.log(copyOfB)

 const a = () => {
     console.log('Hello, dude')
 }

 a()

const myCity = {
    city: 'Moscow',
    info: {
        isPopular: true,
        country: 'Russian'
    }
}

console.log(myCity.info.isPopular)

delete myCity.info['isPopular']

console.log(myCity)

const name = 'Evgeniy'
const postsQty = 22

const userProfile = {
    name,
    postsQty,
    hasSignedAgreement: false
}

console.log(userProfile)

//JSON.parse(); // Из Json в Javascript
//JSON.stringify(); // Из Javascript в JSON
