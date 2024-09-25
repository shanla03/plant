import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './Component/Nav'
import Home from './Pages/Home';
import Hero from './Component/Hero/Hero';
import Footer from './Component/Footer/Footer'
import Addproduct from './Component/Addproduct';
import Viewproduct from './Component/Viewproduct';



function App() {
  return (
    <div>
       <BrowserRouter>
      <Nav/>

       <Routes>
       <Route path='/' element= {<Home/>}/>
       <Route path='/hero' element= {<Hero/>}/>
       <Route path='/addproduct' element= {<Addproduct/>}/>
       <Route path='/viewproduct' element= {<Viewproduct/>}/>
      
       
        

       </Routes>
       <Footer/>
       </BrowserRouter>


    </div>
  );
}



export default App;
