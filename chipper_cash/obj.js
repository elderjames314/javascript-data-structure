const user = {
    name: "James",
    age: 34
}
age = 78;
const admin = {
    name2: "james",
    ...user,
    fullname() {
        return "My fullname is: "+ this.name2
    },
    doubleAge: () => age * 2,
    myUser: {
        first: "firstname",
        second: "secondNAme"
    }
}

// for(key in user) {
//     console.log(key, user[key])
// }

const copy1 = Object.assign({}, admin);
const copy2 = JSON.parse(JSON.stringify(admin))
const copy3 = {...admin}

console.log(copy1)
console.log(copy2)
console.log(copy3)