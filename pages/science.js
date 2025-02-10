import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Science = ({ ArticlesObj }) => {
  const [sciencearticles, setsciencearticles] = useState([]);

  useEffect(() => {

    const articlesArr = ArticlesObj.filter(element => element.category === "Science");
    setsciencearticles(articlesArr);
  }, [ArticlesObj]);

  return (
    <div className='overflow-x-hidden'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 pt-10 mx-auto">
          <div className="flex flex-wrap justify-center">
            {sciencearticles.map((element) => (
              <motion.div className="p-4 md:w-[30.0%]" key={element.slug}
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img className="lg:h-48 md:h-36 w-full object-cover object-top" src={element.image} alt="blog" />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{element.category}</h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">{element.title}</h1>
                    <p className="leading-relaxed mb-3">{element.description.slice(0, 100)}</p>
                    <div className="flex items-center flex-wrap">
                      <Link href={`blogpost/${element.slug}`}>
                        <button className="text-yellow-500 inline-flex items-center cursor-pointer md:mb-2 lg:mb-0">
                          Learn More
                          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </button>
                      </Link>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Science;
