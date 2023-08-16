import React from 'react'
import { navlinks } from '../pak_post_data/data'
import { Link } from "react-router-dom";
import logo from '../assets/logo1.jpg'

// bg-[color:var(--primary-color)]
// bg-[color:var(--secondary-color)]

const Navbar = () => {
  return (
    <div className='py-2 pl-5 '>
      <div className='flex flex-row space-x-2 items-center justify-between'>
        <div className='flex flex-row items-center space-x-2'>
          <img src={logo} alt="" className='w-[60px] h-[30px] cursor-pointer' />
          <h1 className='text-[25px] font-bold italic text-[color:var(--primary-color)]'>PAKISTAN POST</h1>
        </div>
        <div className=' '>
          <ul className=' bg-[color:var(--primary-color)] ml-2 rounded-l-full  flex flex-row h-full'>
            <li className='px-8 py-2 space-x-5 border-l  hover:transform hover:-skew-x-12 -skew-x-12 h-full text-white font-bold hover:bg-[color:var(--secondary-color)]  bg-[color:var(--primary-color)]'>
              <Link to={"#"}>Home</Link>
            </li>
            <li className='px-8 py-2 space-x-5 text-white  hover:transform hover:-skew-x-12  font-bold hover:bg-[color:var(--secondary-color)]  bg-[color:var(--primary-color)]'>
              <Link to={"#"}>Services</Link>
            </li>
            <li className='px-8 py-2 space-x-5 text-white hover:transform hover:-skew-x-12  font-bold hover:bg-[color:var(--secondary-color)] bg-[color:var(--primary-color)]'>
              <Link to={"#"}>Stamps</Link>
            </li>

            <li className='px-8 py-2 space-x-5 text-white  hover:transform hover:-skew-x-12  font-bold hover:bg-[color:var(--secondary-color)] bg-[color:var(--primary-color)]'>
              <Link to={"#"}>News</Link>
            </li>
            <li className='px-8 py-2 space-x-5 text-white hover:transform hover:-skew-x-12  font-bold hover:bg-[color:var(--secondary-color)] bg-[color:var(--primary-color)]'>
              <Link to={"#"}>Tender</Link>
            </li>
            <li className='px-8 py-2 space-x-5 text-white  hover:transform hover:-skew-x-12  font-bold hover:bg-[color:var(--secondary-color)] bg-[color:var(--primary-color)]'>
              <Link to={"#"}>About Us</Link>
            </li>
            <li className='px-8 py-2 space-x-5 text-white hover:transform hover:-skew-x-12 font-bold hover:bg-[color:var(--secondary-color)] bg-[color:var(--primary-color)]'>
              <Link to={"#"}>Contact Us</Link>
            </li>
            <li className='px-8 py-2 space-x-5 text-white  hover:transform  ml-1 font-bold hover:bg-[color:var(--secondary-color)]  bg-[color:var(--primary-color)]'>
              <Link to={"#"}>Quick Tools</Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar


// <div>
//         <ul className='flex flex-row space-x-8'>
//           {navlinks.map((item) => (
//             <li
//               key={item.id}
//               className=" font-semibold "
//             >
//               <Link to={item.url}><h1 className="text-black hover:text-white hover:scale-105 transform transition-all">{item.text}</h1></Link>
//             </li>
//           ))}
//         </ul>
//       </div>
{/* <Link to={"#"}>Services</Link>
              <Link to={"#"}>Stamps</Link>
              <Link to={"#"}>News</Link>
              <Link to={"#"}>Tender</Link>
              <Link to={"#"}>About Us</Link>
              <Link to={"#"}>Contact Us</Link> */}