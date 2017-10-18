const faker = require('faker')

let randomNumber = (number) => Math.floor(Math.random()*number)

let randoAdjective = () =>{
  let nameAdjectiveArray = ['Snarling', 'Demented', 'Demonic', 'Pyschotic', 'Slimy','Sparkling', 'Bloodthirsty','Scabrous','Pustulated','Rotting','Crusty','Undead','Ravenous','Silly', 'Leprous', 'Cranky']
  const index = randomNumber(nameAdjectiveArray.length)
  return nameAdjectiveArray[index]
}




const createMonsters = (number) => {
  const monsterArray = []
  for(let i = 0; i < number; i++){
    let monster = {
      name : `${randoAdjective()} ${faker.name.firstName()}`,
      color : faker.commerce.color(),
      weight : `${(randomNumber(10)+2)} tonnes`,
      height : `${randomNumber(10)}.${randomNumber(10)} metres`,
      skinType : faker.commerce.productMaterial()
    }
    monsterArray.push(monster)
  }
  return monsterArray
}

module.exports = createMonsters
