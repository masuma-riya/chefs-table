import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Cooking from './components/Cooking/Cooking'
import Header from './components/Header/Header'
import OurRecipes from './components/OurRecipes/OurRecipes'
import Recipes from './components/Recipes/Recipes'
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import CurrentCooking from './components/CurrentCooking/CurrentCooking'


function App() {

  const [cooking, setCooking] = useState([]);
  const [cooked, setCooked] = useState([]);

  
  //toast
  const [preparing, setPreparing] = useState(false);
  const [prepare, setPrepare] = useState([]);
 
  const handleToCooking = (recipe) => {
  
   if(preparing){
  toast.warning('Recipe already in progress.');
  return;
   }

   if(prepare.includes(recipe)){
    toast.error('Already Exist This Recipe..!');
    return;
   }
  try{
    setPreparing(true);
    const newCooking = [...cooking, recipe];
    setCooking(newCooking);
    setPrepare([...prepare, recipe]);
    
toast.success('This Recipe added Successfully!');
  } catch (error) {
    toast.error('Error preparing recipe, try again');
    console.error('Error preparing recipe:', error);
  } finally{
    setPreparing(false);
  }
  };


  const handlePreparing = (item) =>{
   const cookingFilter = cooking.filter((cook) => cook.id !== item.id);
   setCooking(cookingFilter);
   setCooked([...cooked, item])
   
  }

  return (
    <>
    <ToastContainer />
      <Header></Header>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
      <div className='grid grid-cols-12'>
       <div className='col-span-12 lg:col-span-7'>
       <Recipes
      handleToCooking={handleToCooking}
      ></Recipes>
       </div>
      
      <div className='col-span-12 lg:col-span-5 shadow rounded-3xl border-dashed bg-sky-100 ml-4 mr-4 mt-6 mb-6 lg:mb-0 lg:mt-0'>
      <Cooking handlePreparing={handlePreparing} cooking={cooking}></Cooking>
      <CurrentCooking
      cooked={cooked}
      ></CurrentCooking>
      </div>
    
      </div>
    </>
  )
}

export default App
