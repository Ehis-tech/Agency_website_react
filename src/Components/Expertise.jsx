import { FaBuilding, FaCalendar, FaUsers, FaWallet } from "react-icons/fa6"
import assets from "../assets/assets"


function Expertise() {
  return (
    <div>
     <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>

      <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
           <img src={assets.expertise} alt='' className='w-[220px] sm:w-[280px] md:w-full h-auto' />
        </div>

        <div className='md:w-3/5 mx-auto'>
          <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>At Nextent we have the best programmers to handle your projects.</h2>
          <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>A high-converting agency website acts as a 24/7 digital ambassador, combining clear value propositions, engaging portfolios, and strong social proof to build trust. It focuses on mobile-friendly design, fast load speeds, and intuitive navigation.A high-converting agency website acts as a 24/7 digital ambassador, combining clear value propositions, engaging portfolios, and strong social proof to build trust. It focuses on mobile-friendly design, fast load speeds, and intuitive navigation.</p>
          <button className='px-6 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition cursor-pointer'>Learn More</button>
         </div>

      </div>

       <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 mt-5'>

        <div className='md:w-3/5 mx-auto'>
          <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>Our various subscription plan accordingly</h2>
          <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Agency subscription plans provide ongoing marketing or creative services for a predictable monthly fee rather than project-based billing. They offer clients continuous access to expert teams, fostering long-term partnerships and scalable support for SEO, design, and content.Agency subscription plans provide ongoing marketing or creative services for a predictable monthly fee rather than project-based billing. They offer clients continuous access to expert teams, fostering long-term partnerships and scalable support for SEO, design, and content.</p>
          <button className='px-6 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition cursor-pointer'>Explore</button>
         </div>

          <div className='md:w-1/2'>
             <img src={assets.expertise2} alt='' className='w-[220px] sm:w-[280px] md:w-full h-auto' />
          </div>

      </div>
     </div>

     {/*Company stats */}
     <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
       <div className='md:w-1/2'>
       <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3'>Helping a local <br></br><span className='text-brandPrimary'>business reinvent itself</span></h2>
       <p>We reached here with our hard work and dedication</p>
       </div>

       {/* stats */}
       <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
       <div className='space-y-8'>
            <div className='flex items-center gap-4'>
              <FaUsers className='text-2xl text-brandPrimary'/>
               <div>
                  <h4 className='text-2xl text-neutralDGrey font-semi-bold'>2,468,342</h4>
                  <p>Members</p>
               </div>
            </div>
            <div className='flex items-center gap-4'>
              <FaBuilding className='text-2xl text-brandPrimary'/>
               <div>
                  <h4 className='text-2xl text-neutralDGrey font-semi-bold'>46,342</h4>
                  <p>Clubs</p>
               </div>
            </div>
       </div>

        <div className='space-y-8'>
            <div className='flex items-center gap-4'>
              <FaCalendar className='text-2xl text-brandPrimary'/>
               <div>
                  <h4 className='text-2xl text-neutralDGrey font-semi-bold'>468,342</h4>
                  <p>Event Bookings</p>
               </div>
            </div>
            <div className='flex items-center gap-4'>
              <FaWallet className='text-2xl text-brandPrimary'/>
               <div>
                  <h4 className='text-2xl text-neutralDGrey font-semi-bold'>568,342</h4>
                  <p>Payments</p>
               </div>
            </div>
       </div>




       </div>
      </div>
     </div>
    </div>
  )
}

export default Expertise
