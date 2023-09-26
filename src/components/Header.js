import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="h-20 w-100 bg-red-500 shadow-blue-500/50 shadow-md ">
      <div>
        <ul className="flex space-x-4 ">
          <li className="mt-5 ml-20 font-normal hover:font-bold hover:text-blue-400"><Link to={'/'}>Home</Link></li>
          <li className="mt-5 ml-20 font-normal hover:font-bold hover:text-blue-400"><Link to={'/Abook'}>Add Books</Link></li>
          <li className="mt-5 ml-20 font-normal hover:font-bold hover:text-blue-400"><Link to={'/Ubooks'}>Update Books</Link></li>
          <li className="mt-5 ml-20 font-normal hover:font-bold hover:text-blue-400"><Link to='/Dbooks'>Delete Books</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Header