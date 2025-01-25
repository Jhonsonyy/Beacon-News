import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image'
import { Button } from '@heroui/react'
import { useEffect, useState } from 'react';

export default function Home({newsFetch, article}) {
  useEffect(()=>{
    newsFetch()
  }, [])
  return (
    <div classNameName={styles.container}>
      <Head>
        <title>Beacon</title>
      </Head>
       <main className="">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 pt-10 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                <b className="hidden lg:inline-block">{article && article[0].title}</b>
              </h1>
              <p className="mb-8 leading-relaxed">{article && article[0].description}</p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Read More</button>

              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img className=" rounded" alt={article && article[0].title} src={article && article[0].image} />
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="lg:w-2/3 mx-auto">
              <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
                <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src={article && article[1].image} />
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">{article && article[1].title}</h2>
                  <p className="leading-relaxed">`{article && article[1].description}</p>
                  <a className="mt-3 text-yellow-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap -mx-2">
                <div className="px-2 w-1/2">
                  <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                    <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src={article && article[2].image} />
                    <div className="text-center relative z-10 w-full">
                      <h2 className="text-xl text-gray-900 font-medium title-font mb-2">{article && article[2].title}</h2>
                      <p className="leading-relaxed">{article && article[2].description}</p>
                      <a className="mt-3 text-yellow-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="px-2 w-1/2">
                  <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                    <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src={article && article[3].image} />
                    <div className="text-center relative z-10 w-full">
                      <h2 className="text-xl text-gray-900 font-medium title-font mb-2">{article && article[3].title}</h2>
                      <p className="leading-relaxed">{article && article[3].description}</p>
                      <a className="mt-3 text-yellow-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-3 text-white">About Me</h1>
            </div>
            <div class="flex justify-center -m-2">
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="profile.jpeg" />
                  <div class="flex-grow">
                    <h2 class="text-white title-font font-medium">Maaz Haider</h2>
                    <p class="text-gray-400">Software Engineer</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </main> 
      
    </div>
  );
}
