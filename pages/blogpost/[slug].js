import React from 'react'
import { useRouter } from 'next/router'
const slug = () => {
    let Router = useRouter()
   const {slug} = Router.query;
  return (
    <div className='text-white'>{slug}</div>
  )
}

export default slug