import {React, useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
const slug = () => {
  const [article, setArticle] = useState()
    let Router = useRouter()
   const {slug} = Router.query;
   const getArticle = async()=> {
    const news = await fetch(`http://localhost:3000/api/hello?slug=${slug}`)
    const data = await news.json();
    setArticle(data);
   }
   useEffect(()=> {
    if(slug){
      getArticle()
    }
   }, [slug])

  return (
    <div className='text-white'>
      {article ? <section className="text-gray-600 body-font">
    <div className="container px-5 py-15 mx-auto flex flex-col">
      <div className="lg:w-4/6 mx-auto">
        <div className="rounded-lg h-61 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src={`../${article && article.image}`} />
        </div>
        <div className="flex flex-col sm:flex-col mt-10">
          <h1 className="leading-relaxed flex flex-col justify-between text-3xl font-bold text-white pb-5">{article && article.title}</h1>
            <div className=" mb-4 text-white" dangerouslySetInnerHTML={{ __html: article && article.content }}></div>
        </div>
      </div>
    </div>
  </section> : <motion.div className='font-bold text-xl'
      initial={{y: 0, opacity: 0}}
      animate = {{y: 0, opacity: 1}}
      transition={{duration: 1, repeat: Infinity}}
      >Loading...</motion.div>}
      </div>
  )
}

export default slug