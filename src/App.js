
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Card from './components/Card'


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card
        img="https://i.imgur.com/IPzO03F.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}/>
    </div>
  )
}


