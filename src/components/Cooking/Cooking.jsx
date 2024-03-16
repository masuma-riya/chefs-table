import Cook from "../Cook/Cook";

/* eslint-disable react/prop-types */
const Cooking = ({cooking}) => {
    return (
        <div className="lg:w-2/4 shadow-2xl bg-slate-100 rounded-2xl border-dashed ml-10">
            <h2 className="mt-6 text-center border-b-2 font-semibold text-2xl mr-14 ml-14 pb-4">Want to cook: {cooking.length}</h2>
            {
                cooking.map(cook => <Cook key={cook.id} cook={cook} ></Cook>)
            }
        </div>
    );
};

export default Cooking;