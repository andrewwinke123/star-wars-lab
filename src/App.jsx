import { Route, Routes } from 'react-router-dom'
import Ships from './pages/Ships/Ships'
import ShipDetails from '../components/ShipDetails'

import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path='/starships' element={<Ships />} />
      <Route path='/starships/:starshipId' element={<ShipDetails />} />
    </Routes>
    </>
  )
}

export default App
