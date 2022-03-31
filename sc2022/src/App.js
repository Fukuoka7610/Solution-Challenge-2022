import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Form from './Pages/Test/Form'
import Home from './Pages/Home/Home'
import Map from './Pages/Map/Map'
import Recruit from './Pages/Recruit/Recruit'
import Search from './Pages/Search/Search'
import Test from './Pages/Test/Test'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recruit' element={<Test/>}/>
        <Route path='/map' element={<Map/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
