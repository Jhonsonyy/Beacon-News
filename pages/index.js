import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { easeOut, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home({ ArticlesObj }) {
  const [article, setarticle] = useState([])
  useEffect(()=>{
    const articleArr = ArticlesObj.slice(0, 6)
      setarticle(articleArr);
    },[ArticlesObj])
  return (
    <div className={styles.container}>
      <Head>
        <title>Beacon</title>
      </Head>
      <main className="">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 pt-10 md:flex-row flex-col items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                <b className="hidden lg:inline-block">{article?.[3]?.title}</b>
              </h1>
              <p className="mb-8 leading-relaxed">{article?.[3]?.description}</p>
              <div className="flex justify-center">
                <Link href={`blogpost/${article?.[3]?.slug}`}>
                  <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Read More</button>
                </Link>
              </div>
            </motion.div>
            <motion.div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img className=" rounded" alt={article?.[3]?.title} src={article?.[3]?.image}/>
            </motion.div>
          </div>
        </section>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {article && article.map((element) => (
                <motion.div
                  key={element.slug}
                  initial={{ y: -100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="p-4 md:w-1/3"
                >
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img className="lg:h-48 md:h-36 w-full object-cover object-top" src={element.image} alt="blog" />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {element.category}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        {element.title}
                      </h1>
                      <p className="leading-relaxed mb-3">{element.description}</p>
                      <div className="flex items-center flex-wrap">
                        <Link href={`blogpost/${element.slug}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                          Learn More
                          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </Link>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          1.2K
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                          <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                          6
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              <div className="mx-auto">
                <Link
                href={'/allarticles'}
                >
                <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Read More</button>
                </Link>
              <div className="m-auto text-white text-lg mt-10 border-white">
                  <h3>Syed Wajahat</h3>
                </div>
              </div>
            </div>
          </div>
        </section>


      </main>

    </div>
  );
}
