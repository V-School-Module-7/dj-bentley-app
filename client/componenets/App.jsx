import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import MixPlayer from './MixPlayer.jsx'
import About from './About.jsx'
import Reviews from './Reviews.jsx';
import Gallery from './Gallery.jsx';
import GalleryImage from './GalleryImage.jsx';
import Home from './Home.jsx'
import'./style.css'
import BookingForm from './BookingForm.jsx';

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
     <BookingForm/>
     <Reviews/>
     <MixPlayer/>
     <GalleryImage/>
   <Routes>
       <Route path="/gallery" element={<Gallery/>}/>
   </Routes>
</div>
  )
}

export default App
