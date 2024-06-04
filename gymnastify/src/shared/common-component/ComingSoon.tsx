"use client"
import React from 'react'
import Image from 'next/image'
import comingSoon from "../../assets/images/coming_soon.svg";
function ComingSoon() {
  return (
      <section className="coming_soon">
        <div className="container">
          <div className="comingsoon_img">
            <Image src={comingSoon} alt='comingsoon' className='img-fluid'></Image>
          </div>
        </div>
      </section>
  )
}
export default ComingSoon