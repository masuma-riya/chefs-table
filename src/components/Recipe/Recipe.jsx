/* eslint-disable react/jsx-key */
import PropTypes from 'prop-types';
import { MdAccessTime } from "react-icons/md";
import { AiOutlineFire } from "react-icons/ai";
const Recipe = ({ recipe, handleToCooking }) => {

    const {recipe_name, recipe_id, recipe_img, description, prepare_time, calories, ingredients} = recipe;

    return (
       <div className='shadow-2xl rounded-2xl border-dashed'>
         <div>
            <img className='w-full object-cover h-[300px] rounded-3xl' src={recipe_img} alt="" />
            <h2 className='text-2xl font-bold text-black py-4 text-center'>{recipe_id}: {recipe_name}</h2>
            <p className='border-b-2 text-[#878787] font-normal text-base mr-6 ml-6 py-4'>{description}</p>
            <div className='space-y-4 mb-3'>
            <p className='font-semibold text-lg text-center mt-4'>Ingredients: {ingredients.length}</p>
            <p className='space-y-2 border-b-2 text-[#878787] text-lg font-normal ml-6 mr-6 pb-4'>
                {
                    ingredients.map(item => <li>{item}</li>)
                }
            </p>
            </div>
            <div className='flex gap-10 justify-center'>
            <div className='flex gap-2 mt-2'>
                <p className='text-xl'><MdAccessTime></MdAccessTime></p>
            <span className='text-base font-semibold text-[#282828CC]'>{prepare_time} minutes</span>
            </div>
            <div className='flex gap-2 mt-2'>
                <p className='text-xl'><AiOutlineFire></AiOutlineFire></p>
            <span className='text-base font-semibold text-[#282828CC]'>{calories} calories</span>
            </div>
            </div>
            <button onClick={() => handleToCooking(recipe)} className="bg-[#0BE58A] text-base px-3 py-2 font-semibold rounded-3xl  border-none mt-6 mb-8 ml-6">Want To Cook</button>
        </div>
       </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleToCooking: PropTypes.func
}

export default Recipe;