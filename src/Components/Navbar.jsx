import { useEffect, useState } from 'react'
import assets from '../assets/assets'
import { Link } from 'react-router-dom'
import { FaBars, FaXmark } from 'react-icons/fa6'

function Navbar() {

 const [isMenuOpen, setIsMenuOpen] = useState(false)
 const [isSticky, setIsSticky] = useState(false)

 const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
 }

 useEffect(() => {
   const handleScroll = () => {
    if (window.scrollY > 100){
     setIsSticky(true)
    }
    else{
     setIsSticky(false)
    }
   }
   window.addEventListener('scroll', handleScroll)

   return () => {
       window.removeEventListener('scroll', handleScroll)
   }
 })

 const navItems = [
  {link: "Home", path: "/"},
  {link: "Service", path: "service"},
  {link: "About", path: "about"},
  {link: "Product", path: "product"},
  {link: "Testimonial", path: "testimonial"},
  {link: "FAQ", path: "faq"},
 ]


  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
      <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""} `}>
         <div className='flex justify-between items-center text-base gap-8'>
            <a href='' className='text-2xl font-semibold flex items-center space-x-3'>
             <img src={assets.home_logo} alt='' className='w-10 inline-block items-center' /><span className='text-grey900'>NEXCENT</span>
            </a>

            {/* nav items for large devices */}
            <ul className='md:flex space-x-12 hidden'>
             {
              navItems.map(({link, path}) => <Link to={path} spy="true" smooth="true" offset={-100} key={path} className='block text-base text-grey900 hover:text-brandPrimary first:font-medium'>{link}</Link>)
             }
            </ul>

            {/* btn for large devices */}
            <div className='space-x-12 hidden lg:flex items-center'>
             <a href='/' className=' lg:flex items-center text-brandPrimary hover:text-grey900'>Login</a>
             <button className='cursor-pointer bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey'>Sign Up</button>
            </div>

            {/* menu btn for only mobile devices */}
            <div className='md:hidden'>
              <button onClick={toggleMenu} className='text-neutralDGrey focus:outline-none focus:text-gray-500'>
                 {
                  isMenuOpen ? (<FaXmark className='h-6 w-6'/>) : (<FaBars className='h-6 w-6'/>)
                 }
              </button>
            </div>
         </div>

         {/* nav Items for mobile devices */}
         <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary z-[9999] ${ isMenuOpen ? " block fixed top-0 right-0 left-0" : "hidden"}`}>
           {
             navItems.map(({link, path}) => <Link to={path} offset={-100} key={path} className='block text-base text-white hover:text-grey900 first:font-medium'>{link}</Link>)
           }
         </div>
      </nav>
    </header>
  )
}

export default Navbar
