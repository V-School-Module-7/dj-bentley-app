import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
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
          <Link
    activeClass="active"
    className = "nav-link"
    to="home"
    spy={true}
    smooth={true}
    offset={-70}
    duration={600}
>Home</Link>
<Link
    activeClass="active"
    className = "nav-link"
    to="about"
    spy={true}
    smooth={true}
    offset={-70}
    duration={600}
>Bio</Link>
<Link
    activeClass="active"
    className = "nav-link"
    to="bookingForm"
    spy={true}
    smooth={true}
    offset={-70}
    duration={600}
>Bookings</Link>
<Link
    activeClass="active"
    className = "nav-link"
    to="reviews"
    spy={true}
    smooth={true}
    offset={-70}
    duration={600}
>Awards & Reviews</Link>
<Link
    activeClass="active"
    className = "nav-link"
    to="mixPlayer"
    spy={true}
    smooth={true}
    offset={-70}
    duration={600}
>DJ Mixes</Link>
<Link
    activeClass="active"
    className = "nav-link"
    to="galleryImage"
    spy={true}
    smooth={true}
    offset={-70}
    duration={600}
>Gallery</Link>
          </div>
          </nav>
        </div>
   
   <div id = "home">
     <Home/>
   </div>
   <div id = "about">
     <About/>
   </div>
   <h1 className = "bookH1">Book DJ Bentley</h1>
   <div className = "booking">
   <div id = "bookingForm">
     <BookingForm/>
   </div>
   <div className = "details">
    <h2>Booking Details</h2>
    <p>DJ Bentley is dedicated to transforming your events into lasting impressions for you and your guests! He will work closely with you to understand your vision, preferences, and any specific requests to create a personalized experience that exceeds expectations.</p>
   </div>
   </div>
   <div id = "reviews">
     <Reviews/>
   </div>
   <div id = "mixPlayer">
     <MixPlayer/>
   </div>
   <div id = "galleryImage">
     <GalleryImage/>
   </div>

   <Routes>
       <Route path="/gallery" element={<Gallery/>}/>
   </Routes>
</div>
  )
}

export default App
