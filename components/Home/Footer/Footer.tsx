import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
      <div className='pt-13 pb-13 bg-[#0f0715]'>
          <div>
          <Image src={"/images/r-portfolio.svg"} alt='Rizwan Personal Logo' width={380} height={50} className='mx-auto' />
          </div>

          <div className='flex items-center flex-wrap justify-center space-x-10 font-2xl text-white font-bold '>
              <div><Link href={"/"}>Home</Link></div>
              <div><Link href={"/About"}>About</Link></div>
              <div><Link href={"/Projects"}>Projects</Link></div>
              <div><Link href={"/Skills"}>Skills</Link></div>
              <div><Link href={"/Contact"}>Contact</Link></div>
          </div>
          <p className='text-white text-opacity-60 mt-6 text-center'>© 2024 All Rights Reserved by Rizwan Ahmed Soomro </p>
      
    </div>
  )
}

export default Footer
