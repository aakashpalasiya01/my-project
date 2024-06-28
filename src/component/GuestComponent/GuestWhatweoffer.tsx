import Image from 'next/image'
import React from 'react'
import weoffer from "@/assets/images/we_offer.jpg";
import Link from 'next/link';
import { ROUTES_PATH } from '@/utils/constant';

const GuestWhatweoffer = () => {
    return (
        <div className="container">
            <div className="we_offer_title">
                <div className="sec_title text-center">
                    <h2>What we offer</h2>
                </div>
                <div className="we_offer_img" data-aos="fade-up">
                    <Image src={weoffer} alt="we offer" className="img-fluid" />
                    <div className="we_offer_block">
                        <h4>Unlock Unlimited Learning</h4>
                        <h3>Join Our Thrilling Pre-Recorded Classes!</h3>
                        <p>
                            Unlimited access to all classes. Flexible learning schedule.
                            Regularly updated course material.
                        </p>
                        <div className="get_subnow weoffer_btn">
                            <Link href={ROUTES_PATH.LOGIN}>
                                <button className="btn_animated white_btn btn_blockmd">
                                    Subscribe Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GuestWhatweoffer