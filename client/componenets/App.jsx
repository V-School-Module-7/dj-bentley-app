import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import MixPlayer from './MixPlayer.jsx'
import About from './About.jsx'
import Reviews from './Reviews.jsx';
function App() {


  return (
    <div>
      DJ Bentley V2 
      <MixPlayer />
      <About /> 
      <Reviews />      
    </div>
  )
}

export default App
