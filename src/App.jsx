import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Cooking from './components/Cooking/Cooking'
import Header from './components/Header/Header'
import OurRecipes from './components/OurRecipes/OurRecipes'
import Recipes from './components/Recipes/Recipes'

function App() {

  const [cooking, setCooking] = useState([]);
 
  const handleToCooking = recipe => {
    const newCooking = [...cooking, recipe];
    setCooking(newCooking)
  }

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
      <div className='lg:flex max-w-7xl m-auto'>
      <Recipes
      handleToCooking={handleToCooking}
      ></Recipes>
      <Cooking cooking={cooking} ></Cooking>
      </div>
    </>
  )
}

export default App
