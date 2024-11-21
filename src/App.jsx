import Header from "./Components/Header/header";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Inicio from "./Pages/Inicio/Inicio";
import Doados from "./Pages/Doados/Doados";
import QueroDoar from "./Pages/QueroDoar/QueroDoar";
import './Components/Reset/global.scss';


export default function App() {
  return (
  <>
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/doados' element={<Doados/>} />
        <Route path='/queroDoar' element={<QueroDoar/>} />
    </Routes>
    </BrowserRouter>
  </>
  )
}