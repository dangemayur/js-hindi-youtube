const Jsuser = {
    name: "Mayur",
    age: 20,
    location: "Pune",
    isLoggedIn: false,
    lastLoginDays: ['Monday','Tuesday']
}

// console.log(Jsuser.age);

Jsuser.greeting = function(){
    console.log("Hello Learnes")
}
 Jsuser.greetingTwo = function(){
    console.log(`Hello Boys, ${this.name}`);
 }
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());