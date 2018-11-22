const myAge = 28
const result = myAge > 18 ? 'you can vote' : 'you cannot vote'
console.log(result);


const showPage = () => {
  console.log(`showing page`)
}
const hidePage = () => {
  console.log(`not showing`)
}
myAge > 18 ? showPage() : hidePage()


const team = ["Adrien", "Nathan", "David", "Adrien"]
console.log(team.length <= 4 ? `Team size: ${team.length}` : `Too many people`)