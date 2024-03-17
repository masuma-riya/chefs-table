import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types'

const Recipes = ({handleToCooking}) => {
    const [recipes, setRecipes] = useState([]);

    useEffect( () => {
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    }, []);

    return (
        <div className="lg:w-3/4">
        <div className="grid grid-cols-2 gap-8">
        {
            recipes.map(recipe => <Recipe
            key={recipe.recipe_id}
            recipe={recipe}
            handleToCooking={handleToCooking}
            ></Recipe>)
        }  
        </div>
        </div>
    );
};

Recipes.propTypes = {
    handleToCooking: PropTypes.func,
}

export default Recipes;