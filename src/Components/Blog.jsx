import { FaArrowRight } from "react-icons/fa6"
import assets from "../assets/assets"
import Title from "./Title"


function Blog() {

 const blogs = [
  {
   id: 1,
   title: 'Creating Streamlined Safeguarding Processes with OneRen',
   image: assets.blogimg_1,
  },
  {
   id: 2,
   title: 'What are your safeguarding responsibilities and how can you manage them?',
   image: assets.blogimg_2,
  },
  {
   id: 1,
   title: 'Revamping the Membership Model with Triathon Australia',
   image: assets.blogimg_3,
  },

 ];


  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12'>
      <div className='text-center text-2xl md:text-3xl py-8'>
            <Title text1={'Caring is the'} text2={'new marketing'} />
             <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-neutralDGrey'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.</p>
      </div>


     {/* All blogs */}
     <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
        {
         blogs.map(blog => <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer z-[-999]'>
            <img src={blog.image} alt="" className='hover:scale-95 transition-all duration-300' />
            <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                <h3 className='mb-3 text-neutralGrey font-semibold'>{blog.title}</h3>
                <div className='flex items-center justify-center gap-8'>
              <a href='/' className='flex font-bold items-center text-brandPrimary hover:text-neutral-700'>
                Meet all customers{' '}
                <FaArrowRight className='text-brandPrimary'/>
              </a>
                </div>
            </div>
          </div>)
        }
     </div>
      
    </div>
  )
}

export default Blog
