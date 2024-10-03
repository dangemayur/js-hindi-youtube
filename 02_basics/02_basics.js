const marve_heros = ["thor","Ironman","spidarman"]
const dc = ["superman","flash","batman"]

// marve_heros.push(dc);
// console.log(marve_heros);

//   const allHeroes = marve_heros.concat(dc);
//   console.log(allHeroes);

const allNewHeroes = [...marve_heros,...dc]
console.log(allNewHeroes)

console.log(Array.isArray("Mayur"))
console.log(Array.from("Mayur"))