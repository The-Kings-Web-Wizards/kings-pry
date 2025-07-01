import React from 'react'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Slider from '../components/Slider'
import Cards from '../components/Cards'


function Home() {

  const cardsData=[
    {
      url:'hppt/mdsn/bvsjbknjinks.kksj',
      title: 'Mayi',
      btnText:'Enrollment'
    },
    {
      url:'hppt/mdsn/bvsjbknjinks.kksj',
      title: 'Mayi',
      btnText:'Enrollment'
    },

    {
      url:'hppt/mdsn/bvsjbknjinks.kksj',
      title: 'Mayi',
      btnText:'Enrollment'
    },

    {
      url:'hppt/mdsn/bvsjbknjinks.kksj',
      title: 'Mayi',
      btnText:'Enrollment'
    },
  ]


  return (
    <main className=''>
      <Banner className="mb-3.5"  />
      <section className=' about mt-9 pb-3.5 max-h[550] w-full flex justify-center'>

          <div className=" container  flex flex-col w-full items-center justify-between space-y-2  md:flex-row-reverse ">
             <div className="img-container w-[300px]  h-80  md:w-[50%]">
              <img src="https://res.cloudinary.com/dxrv8lauy/image/upload/v1751275802/Rectangle_32_2_f7lvqe.png " alt="" className="w-full h-full object-fit-cover" />
             </div>
             <div className="about-text text-center flex flex-col h-[200px]  px-[10px] items-center justify-between space-y-3 md:w-[50%]">
                <h2 className='font-bold text-3xl text-[#004D24] mt-3.5'>Lorem ipsum dolor sit.</h2>
                <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis porro facilis tempora maxime molestias qui ad suscipit architecto aspernatur neque!</p>
                <Link to='/about' className="btn bg-[#004d24] text-white w-30  py-2 px-2 rounded-2xl ">Read More</Link>
                
             </div>
          </div>

      </section>

      <section className='h-[400px] flex flex-col justify-center'>
       {/* mobile view */}
       <div className='md:hidden'>
         {<Slider className='border-amber-500 md:hidden'/>}
       </div>
       {/* desktop view */}

        <div className="hidden md:block ">
          <div className="line h-2 bg-[#004d24] w-full"></div>
         {cardsData.map((Cards)=>{
          <Cards url={Cards.url} title={Cards.title} />
         })}
        </div>
        
      </section>


      
    </main>
  )
}

export default Home