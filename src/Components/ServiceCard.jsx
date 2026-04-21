import React from 'react'
import Title from './Title'
import { FaBuilding, FaPeopleGroup, FaUser } from 'react-icons/fa6'

function ServiceCard() {

 const services = [
  {
   id:1,
   title: 'Membership Organisations',
   description:'Our membership management software provides full automation of membership renewals, payments and services rendered.',
   image: <FaUser  className='ml-5 text-lg text-brandPrimary absolute mt-5'/>
  },
  {
   id:2,
   title: 'National Associations',
   description:'A unified, nationwide organization connecting members to promote common interests, provide support, and influence policy.',
   image: <FaBuilding  className='ml-5 text-lg text-brandPrimary absolute mt-5'/>
  },
  {
   id:3,
   title: 'Clubs and Groups',
   description:'Organized associations of people with shared interests, fostering community, networking, leadership, and personal development.',
   image: <FaPeopleGroup  className='ml-5 text-lg text-brandPrimary absolute mt-5'/>
  },

 ]


  return (
    <div className='mt-20'>
      <div className='text-center text-2xl md:text-3xl py-8'>
           <Title text1={'We can manage'} text2={'an entire community'} />
           <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-neutralDGrey'>Part of our service includes managing varioous projects.</p>
          </div>

          {/*---cards---*/}
      <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 px-4 py-4 gap-12'>
       {
        services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-brandPrimary transition-all duration-300 flex items-center justify-center h-full mb-6 sm:mb-8 '>
         <div>
           <div className='bg-[#E8F5E9] mb-4 h-15 w-15 mx-auto rounded-tl-3xl rounded-br-3xl'>
            {service.image}</div>
            <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
            <p className='text-sm text-neutralGrey'>{service.description}</p>
         </div>
        </div>)
       }
      </div>
    </div>
  )
}

export default ServiceCard
