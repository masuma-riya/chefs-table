import icon from '../../assets/images/nav icon.png'
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
    return (

        //navigation bar here
      <div className="navbar bg-base-100 lg:w-10/12 lg:mx-auto h-36 flex justify-around">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li>
              <a>Recipes</a>
            </li>
            <li><a>About</a></li>
            <li><a>Search</a></li>
          </ul>
        </div>
        <h1 className="text-lg lg:text-3xl font-bold">Foddie Vibes</h1>
      </div>
      <div className="navbar-start hidden lg:flex mr-28 text-[#150B2BB3] font-normal">
        <ul className="menu menu-horizontal text-base">
          <li><a>Home</a></li>
          <li>
          <a>Recipes</a>
          </li>
          <li><a>About</a></li>
          <li><a>Search</a></li>
        </ul>
      </div>

      <div className='space-x-4'>
      <label className="input hidden lg:flex items-center gap-2 rounded-3xl bg-[#150B2B0D]">
        <p className='text-2xl'><IoSearchOutline></IoSearchOutline></p>
      
  <input type="text" className="grow font-normal text-[#150B2BB3] text-lg" placeholder="Search" />
  </label>
     <img src={icon} alt="" />
      </div>
    </div>

    );
};

export default Header;