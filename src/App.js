
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'


export default function App() {

  const cards = data.map(item => {
    return (
      <Card
        item={item}/>
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
        <section className="cards_list">
            {cards}
        </section>
    </div>
)
}


