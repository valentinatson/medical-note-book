import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aceuil from './Components/Pages/Aceuil/Aceuil';
import Login from './Components/Pages/Login/Login';
import Signup from './Components/Pages/Signup/Signup';
import Menu1 from './Components/Pages/Menu1/Menu1';
import Menu2 from './Components/Pages/Menu2/Menu2';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Aceuil />} />
          <Route path='signup' element={<Signup />} />
          <Route path='login' element={<Login />} />
          <Route path='menu1' element={<Menu1 />} />
          <Route path='menu2' element={<Menu2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;