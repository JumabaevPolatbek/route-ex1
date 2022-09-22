import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { useEffect } from 'react';
function App() {
    const a=document.links;
    useEffect(()=>{
        window.addEventListener('click',(e)=>{
            for(let i in a){
                a[i].classList.remove('active');
                if(e.target===a[i]){
                    a[i].classList.add('active');
                }
            }
        })
    },[])
    return (
        <div className='container'>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
            </ul>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </div>
    )
}


export default App;