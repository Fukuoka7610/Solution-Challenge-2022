import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Home/Home'
import Map from './Map/Map'
import Search from './Search/Search'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/map' element={<Map/>}/> */}
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
