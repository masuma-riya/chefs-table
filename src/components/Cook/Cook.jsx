/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

const Cook = ({cook, handlePreparing, isButton, index}) => {
    const {recipe_name, calories, prepare_time} = cook;
    
    return (
       <div className='bg-slate-100 rounded-3xl shadow'>
        <div className='space-y-4 lg:space-y-0 lg:flex justify-between p-4 m-6'>
            <h3 className='text-2xl font-bold text-[#282828B3] px-2'>{index + 1}:</h3>
            <h3 className='text-base font-bold text-[#282828B3]'> {recipe_name}</h3>
            <h3 className='text-base font-bold text-[#282828B3]'>{prepare_time} minutes</h3>
            <h3 className='text-base font-bold text-[#282828B3]'>{calories} calories</h3>
            
        {
            isButton && <button onClick={() => handlePreparing(cook)} className="bg-[#0BE58A] text-sm px-3 py-2 font-semibold rounded-3xl border-none">Preparing</button>
        }

        </div>
       </div>
    );
};

Cook.propTypes = {
    cook: PropTypes.object,
}

export default Cook;