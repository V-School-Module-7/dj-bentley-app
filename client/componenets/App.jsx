import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import MixPlayer from './MixPlayer.jsx'
import About from './About.jsx'
import Home from './Home.jsx';
import Reviews from './Reviews.jsx';
import Gallery from './Gallery.jsx';
import Booking from './Booking.jsx';
// import './navbar.css';
import'./style.css'

function App() {


  return (
    <div>
        <div className='navbar'>

          <nav className='nav-links'>
          <img src ="images/NavBarLogo.png" className='logo'/>
          <div className = "navItems">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">Bio</Link>
          <Link to="/mixplayer" className="nav-link">DJ Mixes</Link>
          <Link to="/booking" className="nav-link">Bookings</Link>
          <Link to="/reviews" className="nav-link">Awards & Reviews</Link>
          <Link to="/gallery" className = "nav-link">Gallery</Link>
          </div>
          </nav>
        </div>
   
     <Home/>
     <About/>
     <Booking/>
     <Reviews/>
     <MixPlayer/>
   <Routes>
   {/* <Route path="/" element={<Home/>}/> 
       <Route path="/about" element={<About />} />
       <Route path="/mixplayer" element={<MixPlayer/>} />
       <Route path="/booking" element={<Booking/>}/> 
       <Route path="/reviews" element={<Reviews/>}/> */}
       <Route path="/gallery" element={<Gallery/>}/> 

   </Routes>
</div>
  )
}

export default App
