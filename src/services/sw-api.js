const baseUrl = 'https://swapi.dev/api'

export async function getAllStarShips() {
  const res = await fetch(`${baseUrl}/starships`)
  return res.json()
}

export async function getShipDetails(starshipId) {
  const res = await fetch(`${baseUrl}/starships/${starshipId}`)
  return res.json()
}