import { Route, Routes } from 'react-router-dom'
import AddComplaint from './pages/AddComplaint'
import ShowComplaint from './pages/ShowComplaint'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<ShowComplaint/>}/>
      <Route path='/add-complaint' element={<AddComplaint/>}/>
    </Routes>
    </>
  )
}

export default App