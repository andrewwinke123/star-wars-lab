import { getAllStarShips } from '../../services/sw-api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Ships = () => {
  const [ships, setShips] = useState([1])

  function extractIdFromUrl(url) {
    const regex = /\/(d+)\//
    const match = url.match(regex)
    return match ? match[1] : null
  }

  useEffect(() => {
    const fetchShips = async () => {
      const shipData = await getAllStarShips()
      setShips(shipData)
    }
    fetchShips()
  }, [])

  if (!ships.results) return (<h1>Loading...</h1>)

  return (
    <>
    <h1>Star Ships</h1>
    {ships.results.map(ship => {
      const starshipId = extractIdFromUrl(ship.url)
      return (
        <div className="ship-container" key={ship.name}>
          <Link to={`/starships/${starshipId}`}>{ship.name}</Link>
        </div>
        )
  }
    )}
  </>
  )
}

export default Ships