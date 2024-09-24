import { BrowserRouter as Route, Routes } from 'react-router-dom'

import Error from './pages/Error'
import About from './pages/About'
import Accueil from './pages/Accueil'
import RentalPage from './pages/RentalPage'

function App() {

  return (

    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Accueil />} />
      <Route path="/About" element={<About />} />
      <Route path="/Logement/:id" element={<RentalPage />} />
    </Routes>

  )
}

export default App
