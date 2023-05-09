import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { getShipDetails } from "../src/services/sw-api"

const ShipDetails = () => {
  const [ShipDetails, setShipDetails] = useState({})
  const { starshipId } = useParams()

  useEffect(() => {
    const fetchShipDetails = async () => {
      const shipDetails = await getShipDetails(starshipId)
      setShipDetails(shipDetails)
    }
    fetchShipDetails()
  }, [starshipId])

  return (
    <>
      <h1>Starship Details</h1>
      <div className="ship-container">
        <h2>Name: {ShipDetails.name}</h2>
        <h3>Model: {ShipDetails.model}</h3>
        <div>
          <Link to={'/starships'}>Return</Link>
        </div>
      </div>
    </>
  )
}

export default ShipDetails