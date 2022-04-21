import { useState, useEffect } from 'react'
import categories from './categories'
import Header from './components/Header'
import Portions from './components/Portions'

function App() {
  const [portions, setPortions] = useState([])

  useEffect(() => {
    const getPortions = async () => {
      const portionsFromServer = await fetchPortions()
      setPortions(portionsFromServer)
    }
    getPortions()
  }, [])

  const fetchPortions = async () => {
    const res = await fetch(`http://localhost:5000/api/portions/`)
    const data = await res.json()

    return data
  }

  return (
    <div className="App">
      <Header />
      <Portions categories={categories} portions={portions}/>
    </div>
  );
}

export default App;
