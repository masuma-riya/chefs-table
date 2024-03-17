import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Cooking from './components/Cooking/Cooking'
import Header from './components/Header/Header'
import OurRecipes from './components/OurRecipes/OurRecipes'
import Recipes from './components/Recipes/Recipes'
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {

  const [cooking, setCooking] = useState([]);
  
  //toast
  const [preparing, setPreparing] = useState(false);
  const [prepare, setPrepare] = useState([]);
 
  const handleToCooking = (recipe) => {
  
   if(preparing){
  toast.warning('Recipe already in progress.');
  return;
   }

   if(prepare.includes(recipe)){
    toast.error('This recipe has already been prepared.');
    return;
   }
  try{
    setPreparing(true);
    const newCooking = [...cooking, recipe];
    setCooking(newCooking);
    setPrepare([...prepare, recipe]);
    
toast.success('This Recipe Prepared Successfully!');
  } catch (error) {
    toast.error('Error preparing recipe, try again');
    console.error('Error preparing recipe:', error);
  } finally{
    setPreparing(false);
  }
  };

  return (
    <>
    <ToastContainer />
      <Header></Header>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
      <div className='lg:flex max-w-7xl m-auto'>
      <Recipes
      handleToCooking={handleToCooking}
      ></Recipes>
      <Cooking cooking={cooking}></Cooking>
      </div>
    </>
  )
}

export default App
