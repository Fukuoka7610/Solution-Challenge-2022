import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Pages/Home/Home'
import Map from './Pages/Map/Map'
import Recruit from './Pages/Recruit/Recruit'
import Search from './Pages/Search/Search'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recruit' element={<Recruit/>}/>
        <Route path='/map' element={<Map/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
