import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavbarSection from './components/Navbar/NavbarSection'
import HeaderSection from './components/Header/HeaderSection'
import CreatorSection from './components/Creator/CreatorSection'
import FooterSection from './components/Footer/FooterSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HeaderSection/>
      <CreatorSection/>
      <FooterSection/>
    </div>
  )
}

export default App
