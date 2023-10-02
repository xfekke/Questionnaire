let cat = 0
let dog = 0
let rabbit = 0
let fish = 0
let answer = 0

for (let i = 0; i < data.length; i++) {
    console.log(data[i].theQuestion)
    answer = parseFloat(prompt("1. Ja / 2. Nej"))
    if (answer == 1) {
       dog += (data[i].dog1)
       cat += (data[i].cat1)
       rabbit += (data[i].rabbit1)
       fish + (data[i].fish1)
    } else if (answer == 2) {
        dog += (data[i].dog2)
        cat += (data[i].cat2)
        rabbit += (data[i].rabbit2)
        fish += (data[i].fish2)

    } else {
        console.log("You did not enter a valid number")
    }
    
    
}

console.log(`The pet that fits you the most`)
console.log(`cat = ${cat}, dog = ${dog}, rabbits = ${rabbit}, fish = ${fish}`);
console.log()

