import '../styles/global.css'
import FooterNavs from '../components/footernav'
import Navbar from '@/components/navbar';
import { useEffect, useState } from 'react';
import {HeroUIProvider} from "@heroui/react";
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
        

function MyApp({Component, pageProps}){
    const [article, setarticle] = useState()
  const newsFetch = async () => {
    const news = await fetch(`/api/hello`)
    const newObj = await news.json();
    setarticle(newObj)
  }


    return(
        <>
<Navbar />
<Component {...pageProps} newsFetch={newsFetch} article={article}/>
<FooterNavs />
        
</>
    )
}

export default MyApp
