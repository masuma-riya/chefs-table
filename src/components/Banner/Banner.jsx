const Banner = () => {
    return (
        <div>
    <div className="hero w-full m-24 lg:w-11/12 lg:m-auto lg:h-[600px] rounded-3xl" style={{ backgroundImage: "url('https://i.ibb.co/bH3zk9X/banner-img.png')"}}>
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="w-4/5">
          <h1 className="mb-5 text-3xl lg:text-5xl text-white font-bold ">Discover an exceptional cooking class tailored for you!</h1>
          <p className="mb-5 ">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer</p>
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