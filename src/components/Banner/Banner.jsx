const Banner = () => {
    return (
        <div>
    <div className="hero w-11/12 m-4 lg:w-11/12 lg:m-auto lg:h-[600px] rounded-3xl" style={{ backgroundImage: "url('https://i.ibb.co/bH3zk9X/banner-img.png')"}}>
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="w-4/5">
          <h1 className="mb-5 text-2xl lg:text-5xl text-white font-bold ">Welcome to our website dedicated to all things food & drinks Recipes!</h1>
          <p className="mb-5 lg:text-lg">A recipe is a set of instructions that describes how to prepare or make something, especially a dish of prepared food. <br/>A sub-recipe or subrecipe is a recipe for an ingredient that will be called for in the instructions for the main recipe.</p>
          <div className='grid lg:flex gap-4 lg:gap-10 justify-center'>
          <button className="btn bg-[#0BE58A] text-sm rounded-full px-8 border-none">Explore Now</button>
          <button className="btn bg-transparent text-white text-sm rounded-full px-8 ">Our Feedback</button>
          </div>
        </div>
      </div>
    </div>
    </div>

    );
};

export default Banner;