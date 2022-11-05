import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Cadastro from './pages/cadastro';
import Contato from './pages/contato';
import Home from './pages/home';
import Hoteis from './pages/hoteis';
import Login from './pages/login';
import Passagens from './pages/passagens';

const AppRoutes = () =>{

    return (
        <Router>
            <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/contato' element={<Contato/>} />
            <Route path='/hoteis' element={<Hoteis/>} />
            <Route path='/passagens' element={<Passagens/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/cadastro' element={<Cadastro/>} />
            </Routes>
         </Router>

    )

}

export default AppRoutes
