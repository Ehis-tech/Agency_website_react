import Blog from '../Components/Blog'
import Expertise from '../Components/Expertise'
import Hero from '../Components/Hero'
import OurClients from '../Components/OurClients'
import ServiceCard from '../Components/ServiceCard' 

function Home() {
  return (
    <div>
      <Hero/>
      <OurClients/>
     <ServiceCard/>
     <Expertise/>
     <Blog/>
    </div>
  )
}

export default Home
