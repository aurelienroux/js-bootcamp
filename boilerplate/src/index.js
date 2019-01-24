const printTeam = (teamName, coach, ...players) => {
  console.log(`
  Team: ${teamName}
  Coach: ${coach}
  Players: ${players.join(', ')}
  `)
}

printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry')