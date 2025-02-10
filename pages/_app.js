import '../styles/global.css';
import FooterNavs from '../components/footernav';
import Navbar from '@/components/navbar';
import { useEffect, useState } from 'react';
import { HeroUIProvider } from "@heroui/react";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import { PrimeReactProvider } from 'primereact/api';

function MyApp({ Component, pageProps }) {
  const [ArticlesObj, setArticlesObj] = useState([]);
  const queryArticles = [];
  const newsFetch = async (searchquery) => {
    try {
      const news = await fetch(`/api/hello`);
      const newObj = await news.json();
      
      if(searchquery){
        newObj.forEach(element => {
          if(element.title.toLowerCase().includes(searchquery)){
            queryArticles.push(element)
          }
        });
        setArticlesObj(queryArticles)
      }
      else{
        setArticlesObj(newObj);
      }

    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    newsFetch();
  }, []);

  return (
    <>
      <Navbar newsFetch={newsFetch} />
      <Component {...pageProps} ArticlesObj={ArticlesObj} />
      <FooterNavs />
    </>
  );
}

export default MyApp;
