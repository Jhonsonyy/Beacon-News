import Link from 'next/link'
import {React, useState, useEffect} from 'react'
import { motion } from 'framer-motion'

const Allarticles = ({ArticlesObj}) => {
  const [Techarticles, setTecharticles] = useState([])
  useEffect(()=>{
    setTecharticles(ArticlesObj);
  },[ArticlesObj])

  return (
    <div className='overflow-x-hidden'><section className="text-gray-600 body-font">
    <div className="container px-5 py-20 pt-10 mx-auto">
      <div className="flex flex-wrap justify-center">
        {Techarticles ? Techarticles.map((element)=> (
        <motion.div className="p-4 md:w-[30.0%]" key={element.slug}
        initial = {{y: -100, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.8, ease: "easeOut"}}
        >
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img className="lg:h-48 md:h-36 w-full object-cover object-top" src={element.image} alt="blog"/>
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{element.category}</h2>
              <h1 className="title-font text-lg font-medium text-white mb-3">{element.title}</h1>
              <p className="leading-relaxed mb-3">{element.description.substr(0, 100)}</p>
              <div className="flex items-center flex-wrap ">
                <Link href={`blogpost/${element.slug}`}>
                <button className="text-yellow-500 inline-flex items-center cursor-pointer md:mb-2 lg:mb-0">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                </Link>
                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>1.2K
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>6
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )): <motion.div className='font-bold text-xl text-white m-auto'
      initial={{y: 0, opacity: 0}}
      animate = {{y: 0, opacity: 1}}
      transition={{duration: 1, repeat: Infinity}}
      >Loading...</motion.div>}
      
      </div>
    </div>
  </section>
  </div>
  )
}

export default Allarticles