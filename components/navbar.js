import {React, useEffect, useState} from 'react'
import { useRef } from 'react'
import { GiHamburgerMenu, GiMaterialsScience } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { GoQuestion } from "react-icons/go";
import { RiContactsBook2Line } from "react-icons/ri";
import Link from 'next/link'




const navbar = ({newsFetch}) => {
  const ref = useRef()
  const refburger = useRef()
  const searchbarRef = useRef();

  // const [onchange, setonchange] = useState()

  useEffect(()=> {
    ref.current.addEventListener("mouseleave", ()=>{
      ref.current.classList.remove('translate-x-0')
        ref.current.classList.add('translate-x-full')
  },[])
  })

  const sidebarcontroler = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (ref.current.classList.contains('translate-x-0')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }



  const changeListner = ()=> {
    const searchbarValue = searchbarRef.current.value;
    newsFetch(searchbarValue)

  }
  // this logic is for the top navigation bar, if you want to show top navbar you can use it
  // const navShow = ()=>{
  //   if(ref.current.classList.contains('flex')){
  //     ref.current.classList.remove('flex');
  //     ref.current.classList.add('hidden')
  //     ref2.current.classList.remove('flex-col')
  //     ref2.current.classList.add('flex-row')
  //   }
  //   else if(ref.current.classList.contains('hidden')){
  //     ref.current.classList.remove('hidden');
  //     ref.current.classList.add('flex')
  //     ref2.current.classList.remove('flex-row')
  //     ref2.current.classList.add('flex-col')
  //   }
  // }
  return (
    // <nav ref={ref2} className={`flex justify-between p-5 bg-rgb(21, 21, 21) h-30 flex-row items-center`}>
    //     <ul className="transition-all duration-500 ease-in-out">
    //       <Image
    //         src="/logo.png"
    //         width={60}
    //         height={60}
    //         alt='Beacon Logo'
    //       />
    //     </ul>
    //     <ul ref={ref} className="hidden md:flex  items-center md:ml-20 my-5 md:my-0">
    //       <li className="ml-4 text-s md:ml-10 list-none text-white md:text-s font-semibold">Home</li>
    //       <li className="ml-4 text-s md:ml-10 list-none text-white md:text-s font-semibold">Politics</li>
    //       <li className="ml-4 text-s md:ml-10 list-none text-white md:text-s font-semibold">Technology</li>
    //       <li className="ml-4 text-s md:ml-10 list-none text-white md:text-s font-semibold">Sports</li>
    //       <IoSearch className=' text-white md:hidden ml-4'/>
    //     </ul>
    //     <ul className=" mr-0 cursor-pointer">
    //       < GiHamburgerMenu onClick={navShow} className=' text-white md:hidden'/>
    //       <IoSearch className=' text-white hidden md:block'/>
    //     </ul>
    //   </nav>
    <>
      <div className="flex justify-end items-center space-x-10 px-5 py-5 mb-10">
      <div
            className='flex max-w-xs w-full border-yellow-500 px-4 py-2 rounded outline outline-transparent border focus-within:border-white focus-within:bg-transparent transition-all'>
            <input onChange={changeListner} ref={searchbarRef}   type='text'cla placeholder='Search something...'
              className='w-full text-sm bg-transparent text-white rounded outline-none pr-2' />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
              className="cursor-pointer fill-yellow-500">
              <path
                d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
              </path>
            </svg>
          </div>
        <GiHamburgerMenu ref={refburger} className='text-yellow-500 cursor-pointer z-20' onClick={sidebarcontroler} />
      </div>
      <nav ref={ref} className="bg-black shadow-lg h-screen fixed top-0 right-0 scrollbar-hide z-10 min-w-[250px] py-6 px-4 font-[sans-serif] overflow-auto transform transition-transform translate-x-full">
        <a><img src="../logo.png" alt="logo" className='w-[120px]' />
        </a>
        <ul className="mt-6">
          <li>
            <Link
            href={'/'}
              className="text-white hover:text-black text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[18px] h-[18px] mr-4"
                viewBox="0 0 512 512">
                <path
                  d="M197.332 170.668h-160C16.746 170.668 0 153.922 0 133.332v-96C0 16.746 16.746 0 37.332 0h160c20.59 0 37.336 16.746 37.336 37.332v96c0 20.59-16.746 37.336-37.336 37.336zM37.332 32A5.336 5.336 0 0 0 32 37.332v96a5.337 5.337 0 0 0 5.332 5.336h160a5.338 5.338 0 0 0 5.336-5.336v-96A5.337 5.337 0 0 0 197.332 32zm160 480h-160C16.746 512 0 495.254 0 474.668v-224c0-20.59 16.746-37.336 37.332-37.336h160c20.59 0 37.336 16.746 37.336 37.336v224c0 20.586-16.746 37.332-37.336 37.332zm-160-266.668A5.337 5.337 0 0 0 32 250.668v224A5.336 5.336 0 0 0 37.332 480h160a5.337 5.337 0 0 0 5.336-5.332v-224a5.338 5.338 0 0 0-5.336-5.336zM474.668 512h-160c-20.59 0-37.336-16.746-37.336-37.332v-96c0-20.59 16.746-37.336 37.336-37.336h160c20.586 0 37.332 16.746 37.332 37.336v96C512 495.254 495.254 512 474.668 512zm-160-138.668a5.338 5.338 0 0 0-5.336 5.336v96a5.337 5.337 0 0 0 5.336 5.332h160a5.336 5.336 0 0 0 5.332-5.332v-96a5.337 5.337 0 0 0-5.332-5.336zm160-74.664h-160c-20.59 0-37.336-16.746-37.336-37.336v-224C277.332 16.746 294.078 0 314.668 0h160C495.254 0 512 16.746 512 37.332v224c0 20.59-16.746 37.336-37.332 37.336zM314.668 32a5.337 5.337 0 0 0-5.336 5.332v224a5.338 5.338 0 0 0 5.336 5.336h160a5.337 5.337 0 0 0 5.332-5.336v-224A5.336 5.336 0 0 0 474.668 32zm0 0"
                  data-original="#000000" />
              </svg>
              <span>Home</span>
            </Link>
          </li>
        </ul>

        <div className="mt-6">
          <h6 className="text-yellow-500 text-sm font-bold px-4">Information</h6>
          <ul className="mt-3">
            <li>
              <Link
              href={'/tech'}
                className="text-white hover:text-black text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all">
                <GrTechnology className="w-[18px] h-[18px] mr-4" />
                <span>Technology</span>
              </Link>
            </li>
            <li>
              <Link
              href={'/science'}
                className="text-white hover:text-black text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all">
                <GiMaterialsScience className="w-[18px] h-[18px] mr-4" />
                <span>Science</span>
              </Link>
            </li>
            <li>
              <a
                className="text-white hover:text-black text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all">
                <GoQuestion className="w-[18px] h-[18px] mr-4" />
                <span>How to</span>
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-black text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[18px] h-[18px] mr-4"
                  viewBox="0 0 512.003 512.003">
                  <path
                    d="M475.244 264.501a15.592 15.592 0 0 1 0-16.998l18.698-28.74c17.032-26.178 5.556-61.348-23.554-72.491l-32.02-12.26a15.596 15.596 0 0 1-9.992-13.754l-1.765-34.24c-1.608-31.184-31.563-52.902-61.667-44.802l-33.109 8.902a15.598 15.598 0 0 1-16.167-5.254l-21.555-26.665c-19.631-24.284-56.625-24.245-76.223 0l-21.556 26.666a15.597 15.597 0 0 1-16.167 5.254l-33.111-8.902c-30.163-8.112-60.063 13.678-61.667 44.802l-1.765 34.24a15.598 15.598 0 0 1-9.992 13.753l-32.018 12.26c-29.171 11.166-40.555 46.365-23.556 72.492l18.699 28.739a15.596 15.596 0 0 1 0 16.998L18.061 293.24c-17.034 26.181-5.554 61.352 23.554 72.492l32.02 12.26a15.598 15.598 0 0 1 9.992 13.754l1.765 34.24c1.608 31.19 31.568 52.899 61.667 44.802l33.109-8.902a15.602 15.602 0 0 1 16.168 5.254l21.555 26.664c19.635 24.291 56.628 24.241 76.223 0l21.555-26.664a15.607 15.607 0 0 1 16.167-5.254l33.111 8.902c30.155 8.115 60.062-13.674 61.667-44.802l1.765-34.24a15.598 15.598 0 0 1 9.992-13.753l32.018-12.26c29.169-11.166 40.554-46.364 23.557-72.493l-18.702-28.739zm-16.806 70.02-32.02 12.26c-18.089 6.926-30.421 23.9-31.418 43.243l-1.765 34.24c-.511 9.921-10.036 16.821-19.612 14.249l-33.111-8.902c-18.705-5.032-38.661 1.455-50.836 16.518l-21.553 26.664c-6.245 7.725-18.009 7.709-24.242 0l-21.553-26.664c-9.438-11.676-23.55-18.198-38.132-18.198-4.229 0-8.499.548-12.706 1.68l-33.111 8.902c-9.596 2.576-19.1-4.348-19.612-14.249l-1.765-34.24c-.997-19.343-13.33-36.318-31.418-43.243l-32.02-12.261c-9.277-3.552-12.896-14.744-7.49-23.053l18.698-28.739c10.563-16.236 10.563-37.218 0-53.452l-18.698-28.739c-5.418-8.326-1.768-19.509 7.491-23.054l32.02-12.26c18.089-6.926 30.421-23.9 31.418-43.243l1.765-34.24c.511-9.921 10.036-16.821 19.612-14.249l33.111 8.902c18.705 5.031 38.66-1.455 50.836-16.518l21.555-26.665c6.245-7.724 18.01-7.708 24.241 0l21.555 26.666c12.178 15.063 32.129 21.549 50.836 16.517l33.111-8.902c9.595-2.577 19.1 4.348 19.612 14.249L395 121.98c.997 19.343 13.33 36.318 31.418 43.243l32.021 12.261c9.276 3.55 12.895 14.744 7.49 23.053l-18.697 28.738c-10.565 16.235-10.565 37.217-.001 53.453l18.698 28.738c5.416 8.328 1.768 19.51-7.491 23.055z"
                    data-original="#000000" />
                  <path
                    d="M339.485 170.845c-6.525-6.525-17.106-6.525-23.632 0L159.887 326.811c-6.525 6.525-6.525 17.106.001 23.632 3.263 3.263 7.54 4.895 11.816 4.895s8.554-1.632 11.816-4.895l155.966-155.967c6.526-6.524 6.526-17.105-.001-23.631zm-151.071-4.895c-18.429 0-33.421 14.993-33.421 33.421 0 18.429 14.994 33.421 33.421 33.421 18.429 0 33.421-14.993 33.421-33.421.001-18.428-14.992-33.421-33.421-33.421zm122.545 122.545c-18.429 0-33.421 14.993-33.421 33.421 0 18.429 14.993 33.421 33.421 33.421s33.421-14.993 33.421-33.421c.001-18.428-14.992-33.421-33.421-33.421z"
                    data-original="#000000" />
                </svg>
                <span>Promote</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <h6 className="text-yellow-500 text-sm font-bold px-4">Who we are</h6>
          <ul className="mt-3">
            <li>
              <a
                className="text-white hover:text-black text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[18px] h-[18px] mr-4"
                  viewBox="0 0 512 512">
                  <path
                    d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM111.105 429.297c8.454-72.735 70.989-128.89 144.895-128.89 38.96 0 75.598 15.179 103.156 42.734 23.281 23.285 37.965 53.687 41.742 86.152C361.641 462.172 311.094 482 256 482s-105.637-19.824-144.895-52.703zM256 269.507c-42.871 0-77.754-34.882-77.754-77.753C178.246 148.879 213.13 114 256 114s77.754 34.879 77.754 77.754c0 42.871-34.883 77.754-77.754 77.754zm170.719 134.427a175.9 175.9 0 0 0-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938 28.598-19.394 47.426-52.16 47.426-89.238C363.754 132.34 315.414 84 256 84s-107.754 48.34-107.754 107.754c0 37.098 18.844 69.875 47.465 89.266-21.887 7.976-42.14 20.308-59.566 36.542-25.235 23.5-42.758 53.465-50.883 86.348C50.852 364.242 30 312.512 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 56.523-20.86 108.266-55.281 147.934zm0 0"
                    data-original="#000000" />
                </svg>
                <span>About Us</span>
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-black text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all">
                <RiContactsBook2Line className='w-[18px] h-[18px] mr-4'/>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <h6 className="text-yellow-500 text-sm font-bold px-4">Actions</h6>
          <ul className="mt-3">
            <li>
              <a
                className="text-white hover:text-black text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all">
                
                <span>Profile</span>
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-black text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[18px] h-[18px] mr-4"
                  viewBox="0 0 6.35 6.35">
                  <path
                    d="M3.172.53a.265.266 0 0 0-.262.268v2.127a.265.266 0 0 0 .53 0V.798A.265.266 0 0 0 3.172.53zm1.544.532a.265.266 0 0 0-.026 0 .265.266 0 0 0-.147.47c.459.391.749.973.749 1.626 0 1.18-.944 2.131-2.116 2.131A2.12 2.12 0 0 1 1.06 3.16c0-.65.286-1.228.74-1.62a.265.266 0 1 0-.344-.404A2.667 2.667 0 0 0 .53 3.158a2.66 2.66 0 0 0 2.647 2.663 2.657 2.657 0 0 0 2.645-2.663c0-.812-.363-1.542-.936-2.03a.265.266 0 0 0-.17-.066z"
                    data-original="#000000" />
                </svg>
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default navbar