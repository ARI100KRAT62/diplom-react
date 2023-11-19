import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './layouts/header';
import { Footer } from './layouts/footer';
import { Category } from './pages/category';
import { Info } from './pages/info';
import { Contact } from './pages/contact';
import { Home } from './pages/home';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/category/:id' element={<Category/>}/>
            <Route path='/info/:cid' element={<Info/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App;
