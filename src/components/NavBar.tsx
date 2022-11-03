import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
    return (
      <nav>
      <div className='flex justify-around items-center'>

        <ul className='flex list-none'>
  
          <li className='mx-1'>
            <Link to='/'>Home</Link>
          </li>
          <li className='mx-1'>
            <Link to='/resource'>Login</Link>
          </li>

        </ul>
      </div>
      </nav>
    )
  }