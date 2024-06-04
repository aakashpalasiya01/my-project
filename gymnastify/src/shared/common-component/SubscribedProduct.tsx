"use client"
import React from 'react';
import Image from 'next/image';
import subscribedProduct from "../../assets/images/subscribed_product.svg";
import { ROUTES_PATH } from '@/utils/constant';
import Link from 'next/link';
function SubscribedProduct() {
  
  return (
    <section className="coming_soon subscribed_product">
      <div className="container">
        <Link href={ROUTES_PATH.HOME}>
          <div className="comingsoon_img">
            <Image src={subscribedProduct} alt='subscribed product' className='img-fluid'></Image>
          </div>
        </Link>
        <p>This section is only available to subscribed users.</p>
      </div>
    </section>
  )
}
export default SubscribedProduct