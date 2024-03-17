import Cook from "../Cook/Cook";

/* eslint-disable react/prop-types */
const Cooking = ({cooking, handlePreparing}) => {
    return (
        <div>
            <h2 className="mt-6 text-center border-b-2 font-semibold text-2xl mr-14 ml-14 pb-4">Want to cook: {cooking.length}</h2>
            <div className="flex justify-around mt-4 text-[#878787] font-bold text-base">
            <h1>Name</h1>
            <h1>Time</h1>
            <h1>Calories</h1>
            </div>
            {
                cooking.map((cook, index) => <Cook index={index} isButton handlePreparing={handlePreparing} key={cook.id} cook={cook} ></Cook>)
            }
        </div>
    );
};

export default Cooking;