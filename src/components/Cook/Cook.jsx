import PropTypes from 'prop-types';

const Cook = ({cook}) => {
    const {recipe_name, calories, prepare_time} = cook;
    return (
       <div className='bg-[#150B2B0D]'>
        <div className='lg:flex justify-between p-4 m-6'>
            <h3 className='text-base font-normal text-[#282828B3]'>{recipe_name}</h3>
            <h3 className='text-base font-normal text-[#282828B3]'>{prepare_time} minutes</h3>
            <h3 className='text-base font-normal text-[#282828B3]'>{calories} calories</h3>
            <button className="bg-[#0BE58A] text-sm px-3 py-2 font-semibold rounded-3xl border-none">Preparing</button>
        </div>
       </div>
    );
};

Cook.propTypes = {
    cook: PropTypes.object
}

export default Cook;